import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { blogPosts } from '@/data/posts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return { title: 'Artigo não encontrado' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={new Date(post.publishedAt).toLocaleDateString('pt-BR')}
          title={post.title}
          description={post.excerpt}
        />
        <article className="space-y-6 text-lg leading-relaxed text-foreground/80">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </Container>
    </section>
  );
}
