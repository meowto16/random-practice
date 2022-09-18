import { Textarea as VKTextarea } from '@vkontakte/vkui'

import { FormItem } from './FormItem'

export const Textarea = ({
  FormItemProps ,
  TextareaProps,
  name,
  label,
  placeholder,
  type,
}) => {
  return (
    <FormItem
      {...FormItemProps}
      name={name}
      label={label}
    >
      <VKTextarea
        {...TextareaProps}
        type={type}
        placeholder={placeholder}
      />
    </FormItem>
  )
}
