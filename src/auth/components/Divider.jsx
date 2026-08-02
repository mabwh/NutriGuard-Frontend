export default function Divider({ text = "OR" }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-border"></div>

      <span className="text-sm text-text-secondary">{text}</span>

      <div className="h-px flex-1 bg-border"></div>
    </div>
  );
}
