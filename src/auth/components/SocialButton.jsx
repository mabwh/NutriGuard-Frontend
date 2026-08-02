export default function SocialButton({ icon, children, ...props }) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-md
        border
        border-border
        bg-surface
        px-5
        py-3
        font-medium
        text-text-primary
        transition
        hover:bg-surface-muted
      "
      {...props}
    >
      {icon}

      <span>{children}</span>
    </button>
  );
}
