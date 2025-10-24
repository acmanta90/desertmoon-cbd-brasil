import Link from 'next/link';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { SectionHeading } from '@/components/section-heading';

const processSteps = [
  {
    title: 'Cadastro',
    description:
      'Coletamos dados básicos do paciente e histórico clínico para personalizar o atendimento.',
  },
  {
    title: 'Documentos',
    description:
      'Orientamos sobre os documentos necessários para a prescrição e para o processo regulatório junto à Anvisa.',
  },
  {
    title: 'Consulta',
    description:
      'Agendamos telemedicina com especialistas para avaliação completa e emissão da prescrição.',
  },
  {
    title: 'Importação',
    description:
      'Acompanhamos o pedido, certificamos a rastreabilidade e esclarecemos dúvidas durante toda a jornada.',
  },
];

const catalogItems = [
  {
    name: 'Óleo Full Spectrum',
    detail: 'COA disponível mediante cadastro. Lotação com rastreabilidade completa.',
  },
  {
    name: 'Óleo Broad Spectrum',
    detail: 'Ideal para pacientes que necessitam de produtos sem THC, com certificado atualizado.',
  },
  {
    name: 'Cápsulas de CBD',
    detail: 'Controle rigoroso de dosagem e padronização farmacêutica.',
  },
];

const newsletterHighlights = [
  'Atualizações regulatórias e científicas',
  'Protocolos clínicos elaborados por especialistas',
  'Convites para webinars e encontros com a equipe Desertmoon',
];

export default function HomePage() {
  const whatsappUrl = process.env.WHATSAPP_URL ?? '#';
  const patientUrl = '/pacientes';
  const calendlyUrl = process.env.CALENDLY_URL ?? whatsappUrl;

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900/40 to-background py-24">
        <Container className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-accent/80">
              Educação e suporte
            </p>
            <h1 className="font-[family-name:var(--font-serif)] text-4xl font-medium leading-tight text-foreground md:text-5xl">
              CBD medicinal com orientação médica no Brasil.
            </h1>
            <p className="text-lg text-foreground/80">
              Educação, prescrição e suporte para pacientes. Sem venda direta no Brasil. Nossa equipe
              acompanha todo o processo — da primeira consulta à importação.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar com um médico
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href={patientUrl}>Área do Paciente</Link>
              </Button>
            </div>
          </div>
          <Card className="bg-white/[0.08] p-10">
            <h2 className="text-2xl font-semibold text-foreground">Como podemos ajudar</h2>
            <ul className="mt-6 space-y-4 text-foreground/80">
              <li>• Telemedicina especializada e acompanhamento longitudinal.</li>
              <li>• Protocolos baseados em evidências e certificações internacionais.</li>
              <li>• Equipe multidisciplinar integrada ao cuidado do paciente.</li>
            </ul>
            <Button variant="secondary" className="mt-8 w-full" asChild>
              <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Agendar avaliação inicial
              </Link>
            </Button>
          </Card>
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Jornada"
            title="Como funciona"
            description="Quatro etapas transparentes para garantir segurança e previsibilidade na terapia com canabidiol."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.title} className="h-full bg-white/5">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-foreground/80">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="CBD no Brasil"
            title="Sobre o canabidiol"
            description="Conteúdo educativo para esclarecer dúvidas, combater desinformação e orientar pacientes e profissionais de saúde."
          />
          <Card className="bg-white/[0.08]">
            <p className="text-lg leading-relaxed text-foreground/80">
              O canabidiol é um composto estudado há décadas pela comunidade científica internacional. No Brasil, seu uso é
              regulamentado para fins medicinais mediante prescrição especializada e autorização de importação. A Desertmoon
              apoia pacientes com materiais educativos, acompanhamento clínico e protocolos personalizados, sempre respeitando
              as orientações das agências regulatórias e evitando promessas terapêuticas não comprovadas.
            </p>
          </Card>
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Catálogo informativo"
            title="Produtos acompanhados"
            description="Selecionamos produtos internacionais com certificação de análise (COA) e rastreabilidade documentada."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {catalogItems.map((item) => (
              <Card key={item.name} className="bg-white/5">
                <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                <p className="mt-3 text-foreground/80">{item.detail}</p>
                <span className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-accent/80">
                  COA sob demanda
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Rede Desertmoon"
            title="Profissionais de saúde"
            description="Formação continuada, protocolos clínicos e suporte para implementação da terapia com canabinoides."
          />
          <Card className="bg-white/[0.07]">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-foreground/80">
                  Médicos, farmacêuticos e outros profissionais da saúde encontram na Desertmoon uma rede colaborativa. Oferecemos
                  materiais técnicos, estudos recentes, COAs atualizados e consultoria para implementação segura dos protocolos.
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Protocolos clínicos revisados periodicamente.</li>
                  <li>• Certificados de análise e rastreabilidade completa.</li>
                  <li>• Plataforma de segunda opinião em construção.</li>
                </ul>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground" htmlFor="professional-name">
                    Nome
                  </label>
                  <input
                    id="professional-name"
                    type="text"
                    placeholder="Seu nome"
                    className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground" htmlFor="professional-email">
                    E-mail
                  </label>
                  <input
                    id="professional-email"
                    type="email"
                    placeholder="voce@clinica.com"
                    className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground" htmlFor="professional-crm">
                    CRM / Conselho profissional
                  </label>
                  <input
                    id="professional-crm"
                    type="text"
                    placeholder="CRM 0000"
                    className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <Button type="button" className="w-full">
                  Enviar interesse (em breve)
                </Button>
              </form>
            </div>
          </Card>
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Conteúdo atualizado"
            title="Newsletter e Blog"
            description="Inscreva-se para receber atualizações científicas e leia nossos artigos mais recentes."
          />
          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <Card className="bg-white/[0.07]">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                  />
                  <Button type="button">Assinar newsletter</Button>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {newsletterHighlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </form>
            </Card>
            <Card className="bg-white/5">
              <h3 className="text-xl font-semibold text-foreground">Conteúdo em destaque</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                <li>
                  <Link href="/blog/o-que-e-cbd" className="hover:text-foreground">
                    O que é CBD? Entenda os fundamentos do canabidiol
                  </Link>
                </li>
                <li>
                  <Link href="/blog/como-funciona-a-importacao" className="hover:text-foreground">
                    Como funciona a importação de produtos com CBD no Brasil
                  </Link>
                </li>
                <li>
                  <Link href="/blog/pesquisa-cientifica-em-andamento" className="hover:text-foreground">
                    Pesquisa científica e evidências sobre o uso medicinal do CBD
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
