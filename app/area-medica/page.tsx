'use client'
import { useState } from 'react'

export default function AreaMedica(){
  const [ok, setOk] = useState(false)
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Profissionais de saúde</h1>
      <p className="mt-2 text-dm-subtext max-w-3xl">Protocolos, COAs e suporte científico. Solicite acesso.</p>
      <form className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl" onSubmit={(e)=>{e.preventDefault(); setOk(true)}}>
        <input required placeholder="Nome completo" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
        <input required type="email" placeholder="E-mail" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
        <input placeholder="CRM" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:col-span-2"/>
        <button className="btn btn-primary sm:col-span-2">Solicitar acesso</button>
      </form>
      {ok && <p className="mt-4 text-green-400">Obrigado! Entraremos em contato.</p>}
    </main>
  )
}
