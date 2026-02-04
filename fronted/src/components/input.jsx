export default function Input({ label, ...props }) {
  return (
    <div className="mb-2">
      <label className="block text-sm">{label}</label>
      <input className="border p-2 w-full" {...props} />
    </div>
  );
}
