import { NextResponse } from 'next/server'
import { Reciepe, IReciepe } from 'src/Models'
import { connectToDatabase } from 'src/utils'

connectToDatabase()

export async function GET() {
  try {
    const reciepes = await Reciepe.find()
    return NextResponse.json(reciepes.reverse())
  } catch {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const newReciepe = new Reciepe(body)
    const saved = await newReciepe.save()
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
    const deletedReciepe = await Reciepe.findByIdAndDelete(id)

    return NextResponse.json(deletedReciepe)
  } catch {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
