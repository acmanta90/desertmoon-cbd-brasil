import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/card';
import { Button } from '@/components/button';

export const metadata: Metadata = {
  title: 'Como funciona',
  description:
    'Conheça o passo a passo para iniciar tratamento com CBD: cadastro, documentação, telemedicina e importação acompanhada.',
};

const steps = [
  {
    title: '1. Cadastro do paciente',
    description:
      'Preencha o formulário inicial com dados de contato, histórico clínico e objetivos terapêuticos. A equipe Desertmoon avalia o perfil e indica o especialista adequado.',
  },
  {
    title: '2. Documentos e laudos',
    description:
      'Orientamos sobre os laudos necessários, relatório médico, termo de consentimento e demais documentos exigidos pela Anvisa.',
  },
  {
    title: '3. Consulta com especialistas',
    description:
      'A teleconsulta permite definir o protocolo terapêutico, ajustar dosagens e emitir a prescrição personalizada.',
  },
  {
    title: '4. Importação monitorada',
    description:
      'Acompanhamos o pedido junto ao fornecedor, analisamos o certificado de análise (COA) e monitoramos a chegada ao paciente.',
  },
];

export default function HowItWorksPage() {
  const whatsappUrl = process.env.WHATSAPP_URL ?? '#';

  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Jornada Desertmoon"
          title="Como funciona"
          description="Processo transparente, seguindo diretrizes regulatórias brasileiras e boas práticas internacionais."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card key={step.title} className="bg-white/5">
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-foreground/80">{step.description}</p>
            </Card>
          ))}
        </div>
        <Card className="bg-white/[0.08]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Pronto para começar?</h3>
              <p className="mt-2 text-foreground/80">
                Entre em contato com nossa equipe médica para avaliar se o CBD é adequado ao seu contexto clínico.
              </p>
            </div>
            <Button asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar com um médico
              </a>
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
