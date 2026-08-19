import { useEffect, useRef, useState } from "react";
import Textarea from "../components/Textarea";
import Message from "../components/Message";
import ConfirmationModal from "../components/ConfirmationModal";
import { IoMdAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { sendMessageToAI } from "../api/AiChat";
import { authStore } from "../store/auth";
import { chatStore } from "../store/chat";

export default function AiChat() {
  const user = authStore((state) => state.user);

  //for current user message in textarea
  const [message, setMessage] = useState("");
  //for conversation history
  const chat = chatStore((state) => state.messages);
  const addMessage = chatStore((state) => state.addMessage);
  const clearMessages = chatStore((state) => state.clearMessages);
  // NEW CODE:
  // This stores the AI context separately from display-only message history.
  const [conversationContext, setConversationContext] = useState(null);
  // NEW CODE:
  // This keeps the AI-provided meal confirmation data for the confirmation UI.
  const [confirmationData, setConfirmationData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const chatViewportRef = useRef(null);

  //handlers
  const handleSendMessage = async () => {
    //If the user hasn't actually typed anything meaningful, STOP.
    // OLD CODE - kept intentionally for safety.
    // if (!message.trim()) return;

    // NEW CODE:
    // Loading is checked here as well as on the button to prevent duplicate requests.
    if (!message.trim() || isLoading) return;

    const userMessage = {
      sender: "user",
      text: message,
      timestamp: new Date(),
    };

    addMessage(userMessage);

    try {
      setIsLoading(true);
      // OLD CODE - kept intentionally for safety.
      // const data = await sendMessageToAI(message, "en");

      // NEW CODE:
      // Context is returned to the AI unchanged to continue its conversation state.
      const data = await sendMessageToAI(message, "en", conversationContext);

      console.log("ai response\n", data);

      // NEW CODE:
      // Keep the response status and replace context only with the exact AI response value.
      const aiResult = data.result;
      const aiStatus = aiResult.status;
      // OLD CODE - kept intentionally for safety.
      // setConversationContext(aiResult.data.conversationContext);

      // NEW CODE:
      // The returned context remains opaque and is also used to identify the confirmation stage.
      setConversationContext(aiResult.data.conversationContext);
      if (aiResult.data.intent === "meal_selection_confirmation") {
        setConfirmationData(aiResult.data);
      }

      const aiMessage = {
        sender: "ai",
        text: aiResult.message,
        status: aiStatus,
        timestamp: new Date(),
      };

      addMessage(aiMessage);

      console.log("my array of history\n", chat);
    } catch (error) {
      console.log(error.response?.data);
      console.log("AI chat error:\n", error);
    } finally {
      setIsLoading(false);
    }
    //clear the textarea
    setMessage("");
  };

  // NEW CODE:
  // A new chat clears only the UI history and AI conversation state, never authentication.
  const handleNewConversation = () => {
    clearMessages();
    setConversationContext(null);
    setMessage("");
    setConfirmationData(null);
  };

  // NEW CODE:
  // Meal confirmation is sent through the existing AI chat endpoint with the opaque context.
  const handleConfirmSelection = async () => {
    if (isLoading || !confirmationData) return;

    const confirmationMessage = "Confirm";
    const userMessage = {
      sender: "user",
      text: confirmationMessage,
      timestamp: new Date(),
    };

    addMessage(userMessage);

    try {
      setIsLoading(true);
      const data = await sendMessageToAI(
        confirmationMessage,
        "en",
        conversationContext,
      );
      const aiResult = data.result;

      if (aiResult.data?.conversationContext !== undefined) {
        setConversationContext(aiResult.data.conversationContext);
      }

      const aiMessage = {
        sender: "ai",
        text: aiResult.message,
        status: aiResult.status,
        timestamp: new Date(),
      };

      addMessage(aiMessage);
      setConfirmationData(null);
    } catch (error) {
      console.log(error.response?.data);
      console.log("AI confirmation error:\n", error);
    } finally {
      setIsLoading(false);
    }
  };

  //use Effects
  useEffect(() => {
    if (chatViewportRef.current) {
      chatViewportRef.current.scrollTo({
        top: chatViewportRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chat, isLoading]);

  return (
    <>
      <main className=" flex flex-col min-h-[80vh]">
        <ConfirmationModal
          isOpen={confirmationData !== null}
          selections={confirmationData?.selections || []}
          totalNutritionSnapshot={
            confirmationData?.totalNutritionSnapshot || {}
          }
          language="en"
          isLoading={isLoading}
          onConfirm={handleConfirmSelection}
          onCancel={() => setConfirmationData(null)}
        />
        {/* Chat Container  */}
        <div
          ref={chatViewportRef}
          id="chat-viewport"
          className="relative z-10  space-y-xl flex-1"
        >
          {/* Intro  */}
          <div className="flex flex-col items-center justify-center pb-8 text-center">
            <div className="mb-4 rounded-full border border-border/40 bg-primary/10 px-4 py-2 text-sm text-text-secondary">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short",
              })}
            </div>
            {/* dissappers when user start conversation */}
            {chat.length === 0 && (
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-text-primary/80">
                  Hey, {user.name}. Ready when you are
                </h1>
                <p className="mt-2 max-w-3xl text-sm text-text-secondary">
                  Ask me anything about your nutrition, meals, or daily health
                  goals.
                </p>{" "}
              </div>
            )}
          </div>

          {chat.map((message, index) => (
            <Message key={index} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-center gap-md max-w-3xl">
              <div className="h-10 w-10 rounded-full shrink-0">
                <img src="/favi-removebg.png" />
              </div>

              <div className="bg-surface p-md rounded-2xl rounded-tl-none border border-border flex gap-xs">
                <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>
        {/* Chat Controls & Input  */}
        <div className="relative z-20 px-xl pb-xl pt-lg mt-lg  border-t border-border/50">
          {/* Input Area  */}
          <div className="max-w-4xl mx-auto flex items-end gap-md">
            <button
              onClick={handleNewConversation}
              disabled={isLoading}
              className="h-12 px-md flex items-center justify-center border border-border text-text-secondary rounded-2xl hover:text-primary hover:border-primary/50 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
            >
              New Chat
            </button>
            <div className="flex-1 relative">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-2xl pr-xxl resize-none body-lg shadow-sm p-lg"
                placeholder="Ask anything..."
                rows={1}
              ></Textarea>
              <div className="absolute right-md bottom-2.5 flex items-center">
                <button className="p-xs text-text-secondary hover:text-primary transition-colors">
                  <IoMdAttach size={22} />
                </button>
              </div>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="h-12 w-12 flex items-center justify-center bg-primary text-white rounded-2xl shadow-md hover:bg-primary/90 transition-all active:scale-95 group"
              id="send-button"
              type="button"
            >
              <IoSend
                size={22}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
