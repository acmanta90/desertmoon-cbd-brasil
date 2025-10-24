import { ComponentPropsWithoutRef, ReactElement, ReactNode, cloneElement } from 'react';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariants;
  asChild?: boolean;
  children: ReactNode;
};

const baseStyles =
  'inline-flex items-center justify-center rounded-soft px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const variants: Record<ButtonVariants, string> = {
  primary: 'bg-accent text-background hover:bg-foreground hover:text-background',
  secondary: 'bg-foreground text-background hover:bg-accent hover:text-background',
  ghost: 'bg-transparent text-foreground ring-1 ring-inset ring-foreground/10 hover:ring-accent/60',
};

export function Button({ className, variant = 'primary', asChild, type = 'button', children, ...rest }: ButtonProps) {
  if (asChild) {
    const child = children as ReactElement;
    return cloneElement(child, {
      ...rest,
      className: clsx(baseStyles, variants[variant], child.props.className, className),
    });
  }

  return (
    <button type={type} className={clsx(baseStyles, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
