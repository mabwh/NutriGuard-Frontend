export default function BackendErrorMessage({ message }) {
  if (!message) return;
  return (
    <div className="flex items-center justify-center gap-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm mb-4">
      <span className="font-medium">{message}</span>
    </div>
  );
}
