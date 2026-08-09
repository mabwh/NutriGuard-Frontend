export default function Select({
  label,
  id,
  error,
  className = "",
  options = [],
  children,
  placeholder,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-primary">
          {label}
        </label>
      )}

      <select
        id={id}
        className={`
          w-full
          rounded-md
          border
          border-border
          bg-surface
          px-4
          py-3
          text-text-primary
          outline-none
          transition
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
          ${error ? "border-error" : ""}
          ${className}
        `}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((data, index) => {
          return (
            <option
              key={index}
              value={data.value}
              selected={data.selected}
              disabled={data.disabled}
              className={
                !data.disabled
                  ? "bg-surface text-text-primary"
                  : "bg-surface text-text-secondary"
              }
            >
              {data.name}
            </option>
          );
        })}
        {children}
      </select>

      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
