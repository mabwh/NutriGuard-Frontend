export default function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  round = false,
  className = "",
  ...props
}) {
  let buttonStyle = "";

  if (variant === "primary") {
    buttonStyle = "bg-primary text-on-primary ";
  } else if (variant === "secondary") {
    buttonStyle =
      "border border-primary bg-transparent text-primary hover:bg-primary/10";
  } else if (variant === "ghost") {
    buttonStyle = "bg-transparent text-primary hover:bg-surface-muted";
  } else if (variant === "danger") {
    buttonStyle = "bg-error text-white hover:opacity-90";
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={
        (round
        ?
        `w-fit
        rounded-full
        p-2`
        :
        `w-full
        rounded-md
        px-5
        py-3`)
        +
        `
        font-medium
        transition
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${buttonStyle}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
