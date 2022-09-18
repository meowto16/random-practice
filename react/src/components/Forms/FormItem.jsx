import React from 'react'

import { useFormContext } from 'react-hook-form'
import { FormItem as VKFormItem } from '@vkontakte/vkui'

export const FormItem = ({ children, name, label, ...props }) => {
  const { register, formState, getFieldState } = useFormContext()

  const { onBlur, onChange, name: registerName, ref }  = register(name);

  const field = getFieldState(name, formState)

  return (
    <VKFormItem
      {...props}
      top={label || props?.top}
      bottom={field.error ? field.error.message : props?.bottom}
      status={Boolean(field.error) ? 'error' : 'default'}>
      {React.cloneElement(children, {
        'aria-label': label,
        onBlur,
        onChange,
        name: registerName,
        getRef: ref,
      })}
    </VKFormItem>
  )
}