import type {ComponentProps, FC} from 'react';

type Props = ComponentProps<'input'>

export const Input: FC<Props> = (props) => {
  return (
    <input
      {...props}
      className={'py-1 px-2 rounded border border-gray-border w-full block text-base outline-0 shadow-none'}
    />
  )
}
