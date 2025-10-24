'use client'
import { useState } from 'react'
export default function Pacientes(){
  const [open,setOpen]=useState(false)
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Área do Paciente</h1>
      <p className="mt-2 text-dm-subtext max-w-3xl">Cadastro, documentos, consulta e prescrição — em breve no Portal Seguro.</p>
      <button onClick={()=>setOpen(true)} className="btn btn-outline mt-6">Criar cadastro (em breve)</button>
      {open && <p className="mt-4 text-dm-subtext">Portal em desenvolvimento. Você será avisado quando estiver disponível.</p>}
    </main>
  )
}
