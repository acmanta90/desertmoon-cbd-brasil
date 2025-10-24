import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Card } from '@/components/card';
import { blogPosts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos educativos sobre CBD, regulamentação brasileira e boas práticas clínicas.',
};

export default function BlogPage() {
  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Conteúdo educativo"
          title="Blog Desertmoon"
          description="Acompanhe análises científicas, atualizações regulatórias e guias para pacientes e profissionais."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="bg-white/5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                </p>
                <h3 className="text-2xl font-semibold text-foreground">
                  <Link href={`/blog/${post.slug}`} className="hover:text-foreground">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-foreground/70">{post.excerpt}</p>
                <p className="text-xs text-foreground/60">Tempo de leitura: {post.readingTime}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
