export default function Checkbox({ id, label, className = "", ...props }) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 cursor-pointer ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        className="
          h-4
          w-4
          accent-primary
          cursor-pointer
        "
        {...props}
      />

      <span className="text-sm text-text-primary">{label}</span>
    </label>
  );
}
