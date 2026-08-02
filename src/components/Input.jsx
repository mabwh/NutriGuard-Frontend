export default function Input({
  label,
  type = "text",
  id,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-primary">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`
          w-full
          rounded-md
          border
          border-border
          bg-surface
          px-4
          py-3
          text-text-primary
          placeholder:text-text-secondary
          outline-none
          transition
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
          ${error ? "border-error" : ""}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
