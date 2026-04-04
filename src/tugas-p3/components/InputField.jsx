export default function InputField({ label, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${error ? "border-red-400" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">⚠️ {error}</p>}
    </div>
  );
}
