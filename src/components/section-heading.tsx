import { ReactNode } from 'react';
import clsx from 'clsx';

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ title, eyebrow, description, className, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={clsx('space-y-4', align === 'center' && 'text-center', className)}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-accent/80">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-foreground/80">{description}</p> : null}
    </div>
  );
}
