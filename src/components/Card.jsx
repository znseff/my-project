export default function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-4 shadow-md max-w-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}