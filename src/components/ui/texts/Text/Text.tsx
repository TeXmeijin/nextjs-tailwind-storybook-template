import type {ComponentProps, FC, ReactNode} from 'react';
import clsx from "clsx";

type Props = {
  size?: 'xs'|'sm'|'md'|'lg'|'xl'
  bold?: boolean
  as?: 'span'|'h1'|'h2'|'h3'|'h4'|'p'
  children: ReactNode
  className?: string
}

export const Text: FC<Props> = ({as, bold, size, children,  ...nest}) => {
  const ComponentName = as ?? 'span'
  const sizeMap = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
  }
  return (
    <ComponentName className={clsx(
      "tracking-wider",
      bold && 'font-bold',
      size && sizeMap[size]
    )} {...nest}>{children}</ComponentName>
  )
}
