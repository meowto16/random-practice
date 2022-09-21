import React from 'react'

import { useFormContext } from 'react-hook-form'
import { FormItem as VKFormItem } from '@vkontakte/vkui'

export const FormItem = ({ children, name, label, ...props }) => {
  const { register, formState, getFieldState } = useFormContext()

  const { onBlur, onChange, name: registerName, ref }  = register(name);

  const field = getFieldState(name, formState)

  const childrenProps = {
    'aria-label': label,
    onBlur,
    onChange,
    name: registerName,
    getRef: ref,
    label,
  }

  const RenderComponent = typeof children === 'object' && React.cloneElement(children, childrenProps)
  const RenderCallback = typeof children === 'function' && children.bind(this, childrenProps)

  return (
    <VKFormItem
      {...props}
      top={label || props?.top}
      bottom={field.error ? field.error.message : props?.bottom}
      status={Boolean(field.error) ? 'error' : 'default'}>
      {RenderCallback ? RenderCallback() : RenderComponent}
    </VKFormItem>
  )
}
