import React from "react";
import Textarea from "../components/Textarea";
import { IoMdAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { authStore } from "../store/auth";
import Message from '../components/Message'

export default function AiChat() {

  const user = authStore((state) => state.user);

  return (
    <>
      <main className="h-full relative overflow-hidden flex flex-col">
        Header Content 

        {/* <div className=" relative z-10 px-md md:px-xl pt-xl pb-lg flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-border/50 ">
          <div>
            <h1 className="headline-lg text-text-primary mb-xs">
              AI Assistant
            </h1>
            <p className="text-text-secondary body-lg max-w-128">
              Ask anything about nutrition, meals, or healthy eating. I'm here
              to support your journey.
            </p>
          </div>
          <div className="flex items-center gap-base">
            <span className="flex h-2 w-2 rounded-full bg-success"></span>
            <span className="label-md text-text-secondary">
              AI Assistant is online
            </span>
          </div>
        </div> */}

        {/* Chat Container  */}
        <div
          className=" relative z-10 px-md md:px-xl py-lg space-y-xl"
          id="chat-viewport"
        >
          {/* System Message / Intro  */}
          <div className="flex justify-center">
            <div className="bg-primary/10 px-lg py-sm rounded-full caption  text-text-secondary border border-border/30">
              chatDatePlaceholder
            </div>
          </div>

          {/* AI Message */}
          <Message owner="ai" timestamp="10:00 AM">
            Hello {user.name}! It's great to see you again. Ask anything about nutrition, meals, or healthy eating. I'm here to support your journey.
          </Message>

          {/* User Message */}
          <Message owner="user" timestamp="10:02 AM">
            I'm feeling a bit tired actually! I had a long workout but
            didn't have a chance to eat much after. Any quick high-protein
            snack ideas?
          </Message>

          {/* Rich/Formatted AI Message */}
          <Message owner="ai" timestamp="10:05 AM">
            <p className="mb-md">
              I'm sorry to hear you're feeling tired, but that was a great
              effort on the workout! Let's get your energy back up. Here are
              three quick high-protein options:
            </p>
            <ul className="space-y-sm mb-md">
              <li className="flex gap-sm">
                <span className="font-bold">1.</span>
                <span>Greek Yogurt with a handful of almonds...</span>
              </li>
              {/* ...other items */}
            </ul>
          </Message>

          {/* Typing Indicator (Simulated) */}
          <div id="typing-indicator">
            <Message owner="ai">
              <div className="flex gap-xs items-center py-2">
                <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </Message>
          </div>
        </div>

        {/* Chat Controls & Input  */}
        <div className="relative z-20 px-xl pb-xl pt-lg  border-t border-border/50">
          {/* Input Area  */}
          <div className="max-w-4xl mx-auto flex items-end gap-md">
            <div className="flex-1 relative">
              <Textarea
                id="userMsg"
                className="rounded-2xl pr-xxl resize-none body-lg shadow-sm p-lg"
                placeholder="Ask anything..."
                rows={1}
              ></Textarea>
              <div className="absolute right-md bottom-2.5 flex items-center">
                <button id="sendBtn"
                  onClick={}
                  className="p-xs text-text-secondary hover:text-primary transition-colors">
                  <IoMdAttach size={22} />
                </button>
              </div>
            </div>
            <button
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
