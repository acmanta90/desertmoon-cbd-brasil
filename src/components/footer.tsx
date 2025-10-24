import Link from 'next/link';
import { Container } from './container';
import { siteConfig } from '@/config/site';

type FooterProps = {
  supportEmail?: string;
};

export function Footer({ supportEmail }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12 text-sm text-foreground/70">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="max-w-3xl leading-relaxed">{siteConfig.footer.legalDisclaimer}</p>
          <p>
            Canal do DPO: <a href={`mailto:${siteConfig.footer.dpoEmail}`}>{siteConfig.footer.dpoEmail}</a>
          </p>
          {supportEmail ? (
            <p>
              Suporte ao paciente:{' '}
              <a className="hover:text-foreground" href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Desertmoon CBD Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href={siteConfig.footer.privacyHref} className="hover:text-foreground">
              Privacidade
            </Link>
            <Link href={siteConfig.footer.termsHref} className="hover:text-foreground">
              Termos
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
