import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como a Desertmoon CBD Brasil trata dados pessoais e sensíveis, especialmente informações de saúde de pacientes.',
};

const sections = [
  {
    title: 'Finalidade do tratamento',
    content:
      'Utilizamos dados pessoais para prestar serviços de orientação médica, agendamento de consultas, suporte em processos de importação e envio de materiais educativos. Dados sensíveis de saúde são tratados apenas por profissionais autorizados e conforme consentimento do titular.',
  },
  {
    title: 'Dados coletados',
    content:
      'Coletamos informações de identificação (nome, e-mail, telefone), dados clínicos fornecidos voluntariamente, histórico de consultas e documentos necessários para cumprimento de obrigações regulatórias perante a Anvisa.',
  },
  {
    title: 'Compartilhamento',
    content:
      'Compartilhamos dados somente com profissionais de saúde vinculados à Desertmoon, fornecedores responsáveis pela importação e autoridades regulatórias, quando exigido por lei. Todos os parceiros seguem contratos de confidencialidade e boas práticas de segurança.',
  },
  {
    title: 'Armazenamento e segurança',
    content:
      'Os dados são armazenados em ambientes com criptografia, controle de acesso e monitoramento contínuo. Revisamos nossos procedimentos periodicamente para atender à LGPD e às normas médicas vigentes.',
  },
  {
    title: 'Direitos dos titulares',
    content:
      'Você pode solicitar acesso, correção, anonimização, portabilidade ou exclusão dos seus dados. Basta entrar em contato com nosso DPO pelo e-mail privacidade@desertmoon.com.br.',
  },
  {
    title: 'Retenção',
    content:
      'Mantemos os dados pelo tempo necessário para cumprimento de obrigações legais e garantia de continuidade do cuidado. Após esse período, os registros são anonimizados ou eliminados com segurança.',
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="LGPD"
          title="Política de Privacidade"
          description="Transparência sobre como tratamos dados pessoais e sensíveis em nossa atuação clínica."
        />
        <div className="space-y-8 text-sm text-foreground/80">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-foreground/60">
          Canal do DPO:{' '}
          <a href="mailto:privacidade@desertmoon.com.br" className="text-accent hover:text-foreground">
            privacidade@desertmoon.com.br
          </a>
        </p>
      </Container>
    </section>
  );
}
