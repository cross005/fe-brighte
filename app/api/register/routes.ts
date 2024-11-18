import { NextResponse } from 'next/server'

// This is a mock database. In a real application, you'd use a proper database.
const users = []

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, password } = body

  // In a real application, you'd hash the password before storing it
  const newUser = { id: Date.now(), name, email, password }
  users.push(newUser)

  return NextResponse.json({ message: 'Customer registered successfully' }, { status: 201 })
}

export async function GET() {
  // In a real application, you might want to limit the data returned or implement pagination
  return NextResponse.json(users)
}