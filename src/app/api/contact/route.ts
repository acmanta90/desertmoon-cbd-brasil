import { NextRequest, NextResponse } from 'next/server';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ message: 'Payload inválido.' }, { status: 400 });
  }

  const { name, email, message, token } = body as {
    name?: string;
    email?: string;
    message?: string;
    token?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Nome, e-mail e mensagem são obrigatórios.' }, { status: 400 });
  }

  const isHuman = await verifyRecaptcha(token);
  if (!isHuman) {
    return NextResponse.json({ message: 'Falha na verificação do reCAPTCHA.' }, { status: 400 });
  }

  const subject = `Novo contato pelo site - ${name}`;
  const text = `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`;

  const result = await sendEmail({ to: process.env.SUPPORT_EMAIL ?? email, subject, text });

  if (!result.success) {
    return NextResponse.json({ message: 'Erro ao enviar a mensagem.' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Mensagem enviada com sucesso.', mocked: result.mocked ?? false });
}
