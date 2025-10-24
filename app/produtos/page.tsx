export default function Produtos(){
  const items = [
    { name: 'Tincture Isolado 1000mg', desc: 'CBD isolado em óleo MCT. Frasco 30ml.', coa: '#' },
    { name: 'Tincture Broad 1500mg', desc: 'Perfil amplo sem THC detectável. Frasco 30ml.', coa: '#' },
    { name: 'Tincture Full 2000mg', desc: 'Perfil completo conforme análise do lote. Frasco 30ml.', coa: '#' }
  ]
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Catálogo informativo</h1>
      <p className="mt-2 text-dm-subtext">Sem preço, sem venda. Consulte um médico para indicação e posologia.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p,i)=>(
          <div key={i} className="card p-5">
            <div className="h-36 rounded-xl bg-white/5" />
            <h3 className="mt-4 font-medium">{p.name}</h3>
            <p className="text-sm text-dm-subtext">{p.desc}</p>
            <div className="mt-4 flex gap-4">
              <a href={p.coa} className="text-sm underline decoration-dm-accent/40 underline-offset-4">Ver COA</a>
              <a href={process.env.WHATSAPP_URL ?? '#'} className="text-sm underline decoration-dm-accent/40 underline-offset-4">Perguntar ao médico</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
