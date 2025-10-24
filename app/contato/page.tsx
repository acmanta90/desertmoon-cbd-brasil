'use client'
import { useState } from 'react'
export default function Contato(){
  const [ok,setOk]=useState(false)
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/contact', { method:'POST', body: JSON.stringify({
      name: form.get('name'), email: form.get('email'), message: form.get('message')
    }) })
    setOk(res.ok)
  }
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Fale com a Desertmoon</h1>
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <div className="text-dm-subtext text-sm">
          <p>E-mail: {process.env.SUPPORT_EMAIL ?? 'contato@desertmoon.com.br'}</p>
          <p>WhatsApp: <a className="underline decoration-dm-accent/40" href={process.env.WHATSAPP_URL ?? '#'}>Abrir conversa</a></p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-3">
          <input name="name" required placeholder="Nome" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
          <input name="email" required type="email" placeholder="E-mail" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
          <textarea name="message" required rows={5} placeholder="Mensagem" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
          <button className="btn btn-primary">Enviar</button>
          {ok && <p className="text-green-400 text-sm">Mensagem enviada!</p>}
        </form>
      </div>
    </main>
  )
}
