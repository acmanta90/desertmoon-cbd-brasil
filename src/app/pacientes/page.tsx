import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/card';
import { PatientPortalButton } from '@/components/patient-portal-button';

export const metadata: Metadata = {
  title: 'Pacientes',
  description: 'Passo a passo, perguntas frequentes e suporte dedicado aos pacientes Desertmoon.',
};

const steps = [
  {
    title: 'Avaliação clínica',
    description: 'Teleconsulta com médicos certificados para entender seu histórico e necessidades.',
  },
  {
    title: 'Documentação',
    description: 'Coletamos laudos, exames e relatórios para aprovação junto à Anvisa.',
  },
  {
    title: 'Importação assistida',
    description: 'Acompanhamos o pedido, validamos COAs e mantemos você informado sobre prazos.',
  },
  {
    title: 'Acompanhamento contínuo',
    description: 'Consultas de ajuste e suporte multiprofissional durante todo o tratamento.',
  },
];

const faqs = [
  {
    question: 'A Desertmoon vende produtos com CBD?',
    answer:
      'Não. Oferecemos educação, prescrição médica e suporte para importação legal de produtos aprovados.',
  },
  {
    question: 'Quais documentos são necessários?',
    answer:
      'Relatório médico, termo de consentimento, comprovante de residência e documentos pessoais são geralmente solicitados.',
  },
  {
    question: 'Quanto tempo leva o processo?',
    answer:
      'Em média entre 20 e 40 dias, variando conforme análise da Anvisa e logística internacional.',
  },
];

export default function PatientsPage() {
  const supportEmail = process.env.SUPPORT_EMAIL ?? 'contato@desertmoon.com.br';
  const whatsappUrl = process.env.WHATSAPP_URL ?? '#';

  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Apoio ao paciente"
          title="Sua jornada com o CBD"
          description="Estamos ao seu lado do primeiro contato ao acompanhamento contínuo da terapia."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card key={step.title} className="bg-white/5">
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-foreground/80">{step.description}</p>
            </Card>
          ))}
        </div>
        <Card className="bg-white/[0.07]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Pronto para iniciar?</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Clique em “Criar cadastro” para acessar o portal seguro (em breve) ou fale conosco diretamente.
              </p>
            </div>
            <PatientPortalButton />
          </div>
        </Card>
        <Card className="bg-white/5">
          <h3 className="text-xl font-semibold text-foreground">Perguntas frequentes</h3>
          <dl className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-soft bg-white/5 p-6">
                <dt className="text-lg font-semibold text-foreground">{faq.question}</dt>
                <dd className="mt-2 text-sm text-foreground/80">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card className="bg-white/5">
          <h3 className="text-xl font-semibold text-foreground">Canais de suporte</h3>
          <p className="mt-3 text-sm text-foreground/80">
            E-mail: <a href={`mailto:${supportEmail}`} className="text-accent hover:text-foreground">{supportEmail}</a>
          </p>
          <p className="mt-1 text-sm text-foreground/80">
            WhatsApp: <a href={whatsappUrl} className="text-accent hover:text-foreground">Acesse o canal direto</a>
          </p>
        </Card>
      </Container>
    </section>
  );
}
