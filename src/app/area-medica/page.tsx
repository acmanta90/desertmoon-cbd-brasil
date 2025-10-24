import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/card';
import { DoctorApplyForm } from '@/components/forms/doctor-apply-form';

export const metadata: Metadata = {
  title: 'Área Médica',
  description:
    'Portal para profissionais de saúde com protocolos clínicos, certificados de análise e suporte Desertmoon.',
};

const highlights = [
  'Protocolos baseados em evidências e atualizados trimestralmente.',
  'Acesso a COAs e rastreabilidade de fornecedores internacionais.',
  'Reuniões clínicas para discussão de casos e segunda opinião.',
];

export default function MedicalAreaPage() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Rede Desertmoon"
          title="Área Médica"
          description="Conectamos especialistas comprometidos com o uso responsável e científico do canabidiol no Brasil."
        />
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr]">
          <Card className="bg-white/[0.07]">
            <div className="space-y-6 text-foreground/80">
              <p>
                A Desertmoon oferece uma jornada completa para profissionais que desejam incorporar canabinoides em seus
                protocolos clínicos. Facilitamos o acesso a evidências, padronizamos documentação e garantimos transparência em
                toda a cadeia.
              </p>
              <ul className="space-y-2">
                {highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p>
                Ao preencher o formulário, nossa equipe valida suas informações e agenda uma conversa para apresentação dos
                materiais exclusivos, incluindo dashboards de COA e guias de rastreabilidade.
              </p>
            </div>
          </Card>
          <Card className="bg-white/5">
            <h3 className="text-xl font-semibold text-foreground">Formulário de interesse</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Após o envio, você receberá um e-mail com os próximos passos para acesso à plataforma profissional.
            </p>
            <div className="mt-6">
              <DoctorApplyForm />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
