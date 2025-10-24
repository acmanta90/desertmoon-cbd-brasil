import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, crm, message } = await req.json()
    if (!name || !email) return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    console.log('DOCTOR_APPLY', { name, email, crm, message })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Erro no servidor' }, { status: 500 })
  }
}
