'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './button';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';

type HeaderProps = {
  whatsappUrl?: string;
  patientAreaUrl?: string;
};

const iconClasses = 'h-5 w-5 text-foreground';

export function Header({ whatsappUrl, patientAreaUrl }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);
  const close = () => setIsOpen(false);

  return (
    <header className="border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-foreground">
          Desertmoon CBD Brasil
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {siteConfig.navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-foreground/80 hover:text-foreground">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild>
            <Link href={whatsappUrl ?? '#'} target="_blank" rel="noopener noreferrer">
              Falar com um médico
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={patientAreaUrl ?? '/pacientes'}>Área do Paciente</Link>
          </Button>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-soft border border-white/10 text-foreground md:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClasses}>
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClasses}>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      <div className={clsx('md:hidden', isOpen ? 'block' : 'hidden')}>
        <nav className="space-y-2 border-t border-white/10 px-6 pb-6 pt-4 text-sm">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-soft px-4 py-3 text-foreground/80 hover:bg-white/5 hover:text-foreground"
              onClick={close}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={whatsappUrl ?? '#'}
            className="block rounded-soft bg-accent px-4 py-3 text-center text-sm font-semibold text-background"
            onClick={close}
          >
            Falar com um médico
          </Link>
          <Link
            href={patientAreaUrl ?? '/pacientes'}
            className="block rounded-soft border border-white/10 px-4 py-3 text-center text-sm font-semibold text-foreground"
            onClick={close}
          >
            Área do Paciente
          </Link>
        </nav>
      </div>
    </header>
  );
}
