import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desertmoon CBD Brasil — Site Institucional',
  description: 'CBD medicinal com orientação médica no Brasil — conteúdo educativo e suporte ao paciente (sem e-commerce).',
  robots: { index: true, follow: true },
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/50">
          <header className="container h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10" />
              <span className="font-semibold tracking-wide">Desertmoon Brasil</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-dm-subtext">
              <a href="/sobre-o-cbd" className="hover:text-white">Sobre o CBD</a>
              <a href="/como-funciona" className="hover:text-white">Como Funciona</a>
              <a href="/produtos" className="hover:text-white">Produtos</a>
              <a href="/area-medica" className="hover:text-white">Área Médica</a>
              <a href="/contato" className="hover:text-white">Contato</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="/pacientes" className="btn btn-outline">Área do Paciente</a>
              <a href={process.env.WHATSAPP_URL ?? '#'} className="btn btn-primary">Falar com um médico</a>
            </div>
          </header>
        </div>
        {children}
        <footer className="border-t border-white/10 py-10 mt-16">
          <div className="container text-sm">
            <p className="muted">
              Aviso legal: A Desertmoon não comercializa produtos no Brasil. O acesso a produtos contendo canabidiol depende de prescrição
              médica e segue a regulamentação vigente. Este site possui caráter informativo e de suporte ao paciente.
            </p>
            <div className="mt-3 flex gap-6">
              <a className="underline decoration-dm-accent/40" href="/legal/privacidade">Política de Privacidade</a>
              <a className="underline decoration-dm-accent/40" href="/legal/termos">Termos de Uso</a>
            </div>
            <p className="text-xs text-dm-subtext mt-4">© {new Date().getFullYear()} Desertmoon. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
