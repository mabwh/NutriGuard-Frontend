export default function Message({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex items-start gap-md max-w-3xl ${
        isUser ? "ml-auto flex-row-reverse" : ""
      }`}
    >
      <div
        className={`h-10 w-10 rounded-full shrink-0 ${
          isUser ? "shadow-sm border border-primary/20 overflow-hidden" : ""
        }`}
      >
        <img
          className={isUser ? "w-full h-full object-cover" : ""}
          src={isUser ? "/user.jpg" : "/favi-removebg.png"}
        />
      </div>

      <div className={`flex flex-col gap-xs ${isUser ? "items-end" : ""}`}>
        <div
          className={`p-lg rounded-2xl body-lg ${
            isUser
              ? "bg-primary text-white rounded-tr-none shadow-md"
              : "bg-surface rounded-tl-none shadow-sm border border-success/10 text-text-primary"
          }`}
        >
          {message.text}
        </div>
        <span className="caption text-text-secondary px-sm">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
