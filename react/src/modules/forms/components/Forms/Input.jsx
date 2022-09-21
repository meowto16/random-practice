import { Input as VKInput } from '@vkontakte/vkui'

import { FormItem } from './FormItem'

export const Input = ({
  FormItemProps,
  InputProps,
  name,
  label,
  placeholder,
  type,
}) => (
  <FormItem name={name} label={label} {...FormItemProps}>
    <VKInput
      {...InputProps}
      aria-label={label}
      type={type}
      placeholder={placeholder}
    />
  </FormItem>
)
