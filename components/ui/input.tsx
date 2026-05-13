import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
        'h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base md:text-sm',
        'bg-white/60 dark:bg-white/5',
        'backdrop-blur-md',
        'border-white/45 dark:border-white/10',
        'shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)]',
        'transition-[color,box-shadow,background,border-color] duration-300',
        'outline-none',
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:bg-white/80 dark:focus-visible:bg-white/10',
        'focus-visible:border-ring/50',
        'focus-visible:shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),0_0_0_3px_rgba(91,127,212,0.12)]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
