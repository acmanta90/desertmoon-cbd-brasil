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
    return await window.grecaptcha.execute(siteKey, { action: 'contact' });
  } catch (error) {
    console.error('Erro ao executar reCAPTCHA', error);
    return undefined;
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus('loading');
    setMessage('');

    try {
      const token = await getRecaptchaToken();
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          token,
        }),
      });

      if (!response.ok) {
        throw new Error('Não foi possível enviar sua mensagem.');
      }

      setStatus('success');
      setMessage('Recebemos sua mensagem! Entraremos em contato durante o horário comercial.');
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Não foi possível enviar sua mensagem. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="contact-name">
          Nome completo
        </label>
        <input
          id="contact-name"
          name="name"
          required
          className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="contact-email">
          E-mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          placeholder="voce@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="contact-message">
          Mensagem
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-soft border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          placeholder="Como podemos ajudar?"
        />
      </div>
      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando…' : 'Enviar mensagem'}
      </Button>
      {message ? (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{message}</p>
      ) : null}
    </form>
  );
}
