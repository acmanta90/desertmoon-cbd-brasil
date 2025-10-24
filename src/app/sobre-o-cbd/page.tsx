import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/card';

export const metadata: Metadata = {
  title: 'Sobre o CBD',
  description:
    'Informações educativas sobre o canabidiol no contexto brasileiro, regulamentação e orientações de uso responsável.',
};

const topics = [
  {
    title: 'O que é o canabidiol?',
    description:
      'O canabidiol (CBD) é um fitocanabinoide não psicoativo derivado da Cannabis sativa. Ele é estudado por suas possíveis aplicações terapêuticas em diversas áreas da medicina.',
  },
  {
    title: 'Regulamentação brasileira',
    description:
      'A Anvisa autoriza a importação de produtos com CBD mediante prescrição médica e aprovação prévia. O processo exige relatórios clínicos atualizados, termo de consentimento e comprovante de acompanhamento médico.',
  },
  {
    title: 'Qualidade e COAs',
    description:
      'A Desertmoon trabalha apenas com fornecedores que apresentam certificados de análise (COA), controle de contaminantes e rastreabilidade dos lotes.',
  },
  {
    title: 'Uso responsável',
    description:
      'Toda prescrição deve considerar histórico clínico, interações medicamentosas e monitoramento contínuo. O CBD não substitui tratamentos convencionais sem orientação médica.',
  },
];

export default function AboutCBDPage() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Educação"
          title="Sobre o CBD"
          description="Entenda fundamentos, regulamentação e premissas clínicas para o uso responsável do canabidiol."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <Card key={topic.title} className="bg-white/5">
              <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
              <p className="mt-3 text-foreground/80">{topic.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
