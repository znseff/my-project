export default function Button({ text, color }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="px-4 py-2 rounded text-white font-semibold"
    >
      {text}
    </button>
  )
}