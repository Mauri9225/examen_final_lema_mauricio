export default function Input({ label, ...props }) {
  return (
    <div className="mb-3">
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        {...props}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
}
