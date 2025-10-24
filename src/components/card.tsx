import { ReactNode } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function Card({ children, className, as: Component = 'div' }: CardProps) {
  return (
    <Component className={clsx('section-shadow bg-white/5 p-8 backdrop-blur-sm', className)}>
      {children}
    </Component>
  );
}
