import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    // Aqui você poderia integrar SendGrid/SES.
    console.log('CONTACT_FORM', { name, email, message })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Erro no servidor' }, { status: 500 })
  }
}
