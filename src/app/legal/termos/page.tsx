import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Condições para utilização do site Desertmoon CBD Brasil e responsabilidades sobre o conteúdo educativo disponibilizado.',
};

const sections = [
  {
    title: 'Natureza do serviço',
    content:
      'Este site tem finalidade exclusivamente educativa e de suporte ao paciente. Não realizamos comércio de produtos derivados de cannabis no território brasileiro.',
  },
  {
    title: 'Responsabilidade médica',
    content:
      'As informações apresentadas não substituem consulta médica presencial ou telemedicina. Prescrições são emitidas apenas após avaliação individualizada por profissionais habilitados.',
  },
  {
    title: 'Uso de informações',
    content:
      'Os materiais disponibilizados podem ser utilizados para fins pessoais e educativos, vedada a reprodução comercial sem autorização prévia da Desertmoon.',
  },
  {
    title: 'Atualizações',
    content:
      'Podemos atualizar estes termos periodicamente para refletir mudanças regulatórias ou operacionais. Manteremos a data de revisão visível aos usuários.',
  },
  {
    title: 'Contato',
    content:
      'Para dúvidas sobre estes termos ou solicitações relacionadas, contate nosso DPO pelo e-mail privacidade@desertmoon.com.br.',
  },
];

export default function TermsPage() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="LGPD"
          title="Termos de Uso"
          description="Condições e responsabilidades ao utilizar o conteúdo informativo da Desertmoon CBD Brasil."
        />
        <div className="space-y-8 text-sm text-foreground/80">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-foreground/60">Última atualização: agosto de 2024.</p>
      </Container>
    </section>
  );
}
