import Validate from 'next-api-validation'
import { NextResponse } from 'next/server'
import { Account, IAccount } from 'src/Models'
import { connectToDatabase } from 'src/utils'

connectToDatabase()

export async function GET() {
  try {
    const accounts = await Account.find()
    return NextResponse.json(accounts.reverse())
  } catch {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const newAccount = new Account(body)
    const saved = await newAccount.save()
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
    const deletedAccount = await Account.findByIdAndDelete(id)

    return NextResponse.json(deletedAccount)
  } catch {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
