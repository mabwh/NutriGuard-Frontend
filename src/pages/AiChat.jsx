import Textarea from "../components/Textarea";
import { IoMdAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function AiChat() {
  return (
    <>
      <main className="h-full relative overflow-hidden flex flex-col">
        {/* Header Content  */}

        <div className=" relative z-10 px-md md:px-xl pt-xl pb-lg flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-border/50 ">
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
        </div>

        {/* Chat Container  */}
        <div
          className=" relative z-10 px-md md:px-xl py-lg space-y-xl"
          id="chat-viewport"
        >
          {/* System Message / Intro  */}
          <div className="flex justify-center">
            <div className="bg-primary/10 px-lg py-sm rounded-full caption  text-text-secondary border border-border/30">
              Mon 10 Aug 2026
            </div>
          </div>

          {/* AI Message  */}
          <div className="flex items-start gap-md max-w-3xl">
            <div className="h-10 w-10 rounded-full shrink-0">
              <img src="/favi-removebg.png" />
            </div>
            <div className="flex flex-col gap-xs">
              <div className="bg-white p-lg rounded-2xl rounded-tl-none shadow-sm border border-border/50 text-text-primary body-lg relative group">
                Hello Sarah! It's great to see you again. Based on your activity
                yesterday, you might need a bit more protein today to help with
                muscle recovery. How are you feeling this morning?
              </div>
              <span className="caption text-text-secondary px-sm">
                09:02 AM
              </span>
            </div>
          </div>

          {/* User Message  */}
          <div className="flex items-start gap-md max-w-3xl ml-auto flex-row-reverse">
            <div className="h-10 w-10 rounded-full shrink-0 shadow-sm border border-primary/20 overflow-hidden">
              <img className="w-full h-full object-cover" src="/user.jpg" />
            </div>
            <div className="flex flex-col gap-xs items-end">
              <div className="bg-primary text-white p-lg rounded-2xl rounded-tr-none shadow-md body-lg">
                I'm feeling a bit tired actually! I had a long workout but
                didn't have a chance to eat much after. Any quick high-protein
                snack ideas?
              </div>
              <span className="caption text-text-secondary px-sm">
                09:05 AM
              </span>
            </div>
          </div>

          {/* AI Message  */}
          <div className="flex items-start gap-sm md:gap-md max-w-3xl">
            <div className="h-10 w-10 rounded-full shrink-0">
              <img src="/favi-removebg.png" />
            </div>
            <div className="flex flex-col gap-xs">
              <div className="bg-surface p-lg rounded-2xl rounded-tl-none shadow-sm border border-success/10 text-text-primary body-lg">
                <p className="mb-md">
                  I'm sorry to hear you're feeling tired, but that was a great
                  effort on the workout! Let's get your energy back up. Here are
                  three quick high-protein options:
                </p>
                <ul className="space-y-sm mb-md">
                  <li className="flex gap-sm">
                    <span className=" font-bold">1.</span>
                    <span className="">
                      Greek Yogurt with a handful of almonds and a drizzle of
                      honey (~18g protein).
                    </span>
                  </li>
                  <li className="flex gap-sm">
                    <span className=" font-bold">2.</span>
                    <span className="">
                      Two hard-boiled eggs with a pinch of sea salt and pepper
                      (~12g protein).
                    </span>
                  </li>
                  <li className="flex gap-sm">
                    <span className=" font-bold">3.</span>
                    <span className="">
                      A scoop of whey or plant-based protein shaken with water
                      or almond milk (~20-25g protein).
                    </span>
                  </li>
                </ul>
                <p className="">
                  Do any of those sound good, or would you like something more
                  savory?
                </p>
              </div>
              <span className="caption text-text-secondary px-sm">
                09:06 AM
              </span>
            </div>
          </div>

          {/* Typing Indicator (Simulated)  */}
          <div
            className="flex items-center gap-md max-w-3xl  "
            id="typing-indicator"
          >
            <div className="h-10 w-10 rounded-full shrink-0">
              <img src="/favi-removebg.png" />
            </div>
            <div className="bg-surface p-md rounded-2xl rounded-tl-none border border-border flex gap-xs">
              <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        </div>

        {/* Chat Controls & Input  */}
        <div className="relative z-20 px-xl pb-xl pt-lg  border-t border-border/50">
          {/* Input Area  */}
          <div className="max-w-4xl mx-auto flex items-end gap-md">
            <div className="flex-1 relative">
              <Textarea
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
