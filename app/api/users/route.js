import Validate from 'next-api-validation'
import { NextResponse } from 'next/server'
import { User, IUser } from 'src/Models'
import { connectToDatabase } from 'src/utils'

connectToDatabase()

export async function GET() {
  try {
    const users = await User.find()
    return NextResponse.json(users.reverse())
  } catch {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const newUser = new User(body)
    const saved = await newUser.save()
    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}

export async function DELETE(req) {
  const query = new URL(req.url).searchParams
  const id = query.get('id')
  try {
    const deletedUser = await User.findByIdAndDelete(id)

    return NextResponse.json(deletedUser)
  } catch {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
