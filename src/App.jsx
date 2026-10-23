import Button from './components/Button'
import Card from './components/Card'
import UserProfile from './components/UserProfile'

const users = [
  { id: 1, name: "Anna", role: "Frontend Dev" },
  { id: 2, name: "James", role: "Backend Dev" },
  { id: 3, name: "Lebron", role: "UI Designer" }
];

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Laboratory 4: Your Name</h1>

      <section className="flex gap-2">
        <Button text="Save" color="green" />
        <Button text="Delete" color="red" />
        <Button text="Cancel" color="gray" />
      </section>

      <section className="flex gap-4">
        <Card title="React" description="A library for building user interfaces." />
        <Card title="Vite" description="A fast build tool and dev server." />
        <Card title="Tailwind" description="A utility-first CSS framework." />
      </section>

      <section>
        {users.map((user) => (
          <UserProfile key={user.id} name={user.name} role={user.role} />
        ))}
      </section>
    </div>
  )
}