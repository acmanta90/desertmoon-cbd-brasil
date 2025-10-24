import sgMail from '@sendgrid/mail';

type SendEmailParams = {
  to: string;
  subject: string;
  text: string;
};

export async function sendEmail({ to, subject, text }: SendEmailParams) {
  const apiKey = process.env.SENDGRID_KEY;
  const fromEmail = process.env.SUPPORT_EMAIL ?? 'contato@desertmoon.com.br';

  if (!apiKey) {
    console.warn('SENDGRID_KEY não configurada. A mensagem será apenas registrada no console.');
    console.info({ to, subject, text });
    return { success: true, mocked: true } as const;
  }

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      to,
      from: fromEmail,
      subject,
      text,
    });
    return { success: true, mocked: false } as const;
  } catch (error) {
    console.error('Erro ao enviar email via SendGrid', error);
    return { success: false, error } as const;
  }
}
