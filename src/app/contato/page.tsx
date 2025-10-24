import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/card';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a equipe Desertmoon para orientações sobre CBD medicinal, suporte ao paciente e parcerias.',
};

export default function ContactPage() {
  const supportEmail = process.env.SUPPORT_EMAIL ?? 'contato@desertmoon.com.br';
  const whatsappUrl = process.env.WHATSAPP_URL ?? '#';

  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Suporte Desertmoon"
          title="Contato"
          description="Envie suas dúvidas. Retornamos durante o horário comercial (segunda a sexta, 9h às 18h)."
        />
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <Card className="bg-white/[0.07]">
            <h3 className="text-xl font-semibold text-foreground">Formulário</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Suas informações são tratadas de acordo com a LGPD e utilizadas exclusivamente para retorno do contato.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>
          <Card className="bg-white/5">
            <h3 className="text-xl font-semibold text-foreground">Canais diretos</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>
                E-mail:{' '}
                <a href={`mailto:${supportEmail}`} className="text-accent hover:text-foreground">
                  {supportEmail}
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a href={whatsappUrl} className="text-accent hover:text-foreground">
                  Atendimento via mensagens
                </a>
              </li>
              <li>Horário comercial: segunda a sexta, das 9h às 18h (BRT).</li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
