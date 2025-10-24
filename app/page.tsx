import { MessageCircle, ShieldCheck, FileText, Stethoscope, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main>
      <section className="relative">
        <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-dm-subtext">suporte ao paciente</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mt-2">
              CBD medicinal com <span className="underline decoration-dm-accent/40 underline-offset-8">orientação médica</span> no Brasil
            </h1>
            <p className="mt-4 muted max-w-prose">
              Educação, segurança e acompanhamento para pacientes. Sem venda direta no Brasil. A indicação e o acesso dependem de <b>prescrição médica</b>.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={process.env.WHATSAPP_URL ?? '#'} className="btn btn-primary"><MessageCircle className="h-4 w-4" /> Falar com um médico</a>
              <a href="/pacientes" className="btn btn-outline"><ShieldCheck className="h-4 w-4" /> Área do Paciente</a>
            </div>
            <div className="mt-6 text-xs text-dm-subtext">COAs e documentos disponíveis mediante cadastro.</div>
          </div>
          <div className="card aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <div className="mx-auto h-20 w-20 rounded-full bg-white/5 flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-dm-text" />
              </div>
              <p className="mt-4 text-sm muted">Acompanhamento médico, documentação e orientação passo a passo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold">Como funciona no Brasil</h2>
          <p className="mt-2 muted max-w-3xl">Acesso por prescrição médica e importação regularizada por pessoa física.</p>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { t: '1) Cadastro', d: 'Crie sua conta e confirme o consentimento LGPD.' },
              { t: '2) Documentos', d: 'Envie RG/CPF, comprovante de endereço e laudos (se houver).' },
              { t: '3) Consulta', d: 'Agende com um médico parceiro e receba a prescrição.' },
              { t: '4) Orientação', d: 'Receba instruções para importação regularizada e COAs.' }
            ].map((s, i) => (
              <div key={i} className="card p-5">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center font-semibold">{i+1}</div>
                <h3 className="mt-3 font-medium">{s.t}</h3>
                <p className="text-sm muted">{s.d}</p>
              </div>
            ))}
          </div>
          <a href="/como-funciona" className="inline-flex items-center gap-2 underline decoration-dm-accent/40 underline-offset-4 mt-6">Ver detalhes <ChevronRight className="h-4 w-4"/></a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Sobre o CBD (canabidiol)</h2>
            <p className="mt-3 muted">Informações com caráter educativo; não substituem orientação médica. A indicação depende de avaliação individualizada.</p>
            <ul className="mt-4 space-y-2 text-sm muted list-disc pl-5">
              <li>Perfis: isolado, broad e full spectrum.</li>
              <li>Rastreabilidade e certificados de análise (COAs).</li>
              <li>Boas práticas de fabricação e padronização de lotes.</li>
            </ul>
            <a href="/produtos" className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline decoration-dm-accent/40 underline-offset-4">Ver catálogo informativo <ChevronRight className="h-4 w-4" /></a>
          </div>
          <div className="card p-6">
            <h3 className="font-medium flex items-center gap-2"><FileText className="h-4 w-4"/> Aviso importante</h3>
            <p className="mt-2 text-sm muted">A Desertmoon não comercializa produtos no Brasil. O acesso a qualquer produto contendo canabidiol depende de prescrição médica e segue a regulamentação vigente.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
