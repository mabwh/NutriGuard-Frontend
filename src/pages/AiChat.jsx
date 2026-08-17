import { useEffect, useRef, useState } from "react";
import Textarea from "../components/Textarea";
import Message from "../components/Message";
import { IoMdAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { sendMessageToAI } from "../api/aiChat";
import { authStore } from "../store/auth";

export default function AiChat() {
  const user = authStore((state) => state.user);

  //for current user message in textarea
  const [message, setMessage] = useState("");
  //for conversation history
  const [messages, setMessages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const chatViewportRef = useRef(null);

  //handlers
  const handleSendMessage = async () => {
    //If the user hasn't actually typed anything meaningful, STOP.
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setIsLoading(true);
      const data = await sendMessageToAI(message, "en");

      console.log("ai response\n", data);

      const aiMessage = {
        sender: "ai",
        text: data.result.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      console.log("my array of history\n", messages);
    } catch (error) {
      console.log(error.response?.data);
      console.log("AI chat error:", error);
    } finally {
      setIsLoading(false);
    }
    //clear the textarea
    setMessage("");
  };

  //use Effects
  useEffect(() => {
    if (chatViewportRef.current) {
      chatViewportRef.current.scrollTo({
        top: chatViewportRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  return (
    <>
      <main className=" flex flex-col min-h-[80vh]">
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
            {messages.length === 0 && (
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

          {messages.map((message, index) => (
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
              className="h-12 w-12 flex items-center justify-center bg-primary text-white rounded-2xl shadow-md hover:bg-primary/90 transition-all active:scale-95 group"
              id="send-button"
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
