export default function UserProfile({ name, role }) {
  return (
    <div className="border rounded p-3 mb-2">
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}