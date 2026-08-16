import React from "react";

export default function Message({ 
  owner = "ai", 
  timestamp, 
  avatar, 
  children 
}) {
  const isUser = owner === "user";

  // Dynamic Tailwind classes based on the owner
  const wrapperClasses = `flex items-start gap-md max-w-3xl ${
    isUser ? "ml-auto flex-row-reverse" : ""
  }`;

  const avatarWrapperClasses = isUser
    ? "h-10 w-10 rounded-full shrink-0 shadow-sm border border-primary/20 overflow-hidden"
    : "h-10 w-10 rounded-full shrink-0";

  const imgClasses = isUser ? "w-full h-full object-cover" : "";
  const defaultAvatar = isUser ? "/user.jpg" : "/favi-removebg.png";

  const columnClasses = `flex flex-col gap-xs ${
    isUser ? "items-end" : ""
  }`;

  const bubbleClasses = isUser
    ? "bg-primary text-white p-lg rounded-2xl rounded-tr-none shadow-md body-lg"
    : "bg-white p-lg rounded-2xl rounded-tl-none shadow-sm border border-border/50 text-text-primary body-lg relative group";

  return (
    <div className={wrapperClasses}>
      {/* Avatar */}
      <div className={avatarWrapperClasses}>
        <img 
          className={imgClasses} 
          src={avatar || defaultAvatar} 
          alt={`${owner} avatar`} 
        />
      </div>

      {/* Message Content & Timestamp */}
      <div className={columnClasses}>
        <div className={bubbleClasses}>
          {children}
        </div>
        
        {timestamp && (
          <span className="caption text-text-secondary px-sm">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}