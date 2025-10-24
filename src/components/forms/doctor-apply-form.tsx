'use client';

import { useState } from 'react';
import { Button } from '@/components/button';

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

async function getRecaptchaToken() {
  if (!siteKey || typeof window === 'undefined' || !window.grecaptcha) {
    return undefined;
  }

  await new Promise<void>((resolve) => {
    window.grecaptcha?.ready(() => resolve());
  });

  try {
    return await window.grecaptcha.execute(siteKey, { action: 'doctor_apply' });
  } catch (error) {
    console.error('Erro ao executar reCAPTCHA', error);
    return undefined;
  }
}

export function DoctorApplyForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus('loading');
    setMessage('');

    try {
      const token = await getRecaptchaToken();
      const response = await fetch('/api/doctor-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          crm: formData.get('crm'),
          message: formData.get('message'),
          token,
        }),
      });

      if (!response.ok) {
        throw new Error('Não foi possível registrar sua solicitação.');
      }

      setStatus('success');
      setMessage('Recebemos seu interesse. Nossa equipe entrará em contato em breve.');
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Ocorreu um erro. Tente novamente ou fale com nossa equipe.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="name">
          Nome completo
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          placeholder="Nome e sobrenome"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="email">
          E-mail profissional
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          placeholder="voce@clinica.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="crm">
          CRM / Conselho profissional
        </label>
        <input
          id="crm"
          name="crm"
          required
          className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          placeholder="CRM 0000"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          placeholder="Conte-nos sobre sua atuação e interesse"
        />
      </div>
      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando…' : 'Enviar interesse'}
      </Button>
      {message ? (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{message}</p>
      ) : null}
    </form>
  );
}
