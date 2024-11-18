import { getUsers } from '@/lib/api'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
      <Button asChild className="mt-4">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}