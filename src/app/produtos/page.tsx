import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/card';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Catálogo informativo com produtos acompanhados, certificados de análise e rastreabilidade.',
};

const products = [
  {
    name: 'Óleo Full Spectrum 30ml',
    concentration: '50 mg/ml de canabinoides totais',
    profile: 'Contém CBD, CBG e traços de THC dentro dos limites legais internacionais.',
    coa: 'COA disponível mediante cadastro e autorização.',
  },
  {
    name: 'Óleo Broad Spectrum 10ml',
    concentration: '25 mg/ml de CBD',
    profile: 'Isento de THC. Indicado para pacientes com restrições ocupacionais específicas.',
    coa: 'COA atualizado a cada lote com testes de pureza e contaminantes.',
  },
  {
    name: 'Cápsulas de CBD 30 unidades',
    concentration: '15 mg por cápsula',
    profile: 'Permite padronização da dose e facilita adesão terapêutica.',
    coa: 'COA validando potência, metais pesados e microbiologia.',
  },
  {
    name: 'Spray sublingual',
    concentration: '10 mg por dose',
    profile: 'Aplicação prática para ajustes finos de dosagem com absorção rápida.',
    coa: 'COA com rastreabilidade completa e QR code para acesso.',
  },
];

export default function ProductsPage() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Catálogo informativo"
          title="Produtos acompanhados"
          description="Sem comercialização direta. Listamos referências internacionais para apoiar a decisão terapêutica."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Card key={product.name} className="bg-white/5">
              <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
              <dl className="mt-4 space-y-2 text-sm text-foreground/80">
                <div>
                  <dt className="font-medium text-foreground">Concentração</dt>
                  <dd>{product.concentration}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Perfil fitoquímico</dt>
                  <dd>{product.profile}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Certificado</dt>
                  <dd>{product.coa}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
