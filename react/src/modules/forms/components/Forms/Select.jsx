import { Select as VKSelect } from '@vkontakte/vkui'
import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormItem } from './FormItem'

export const Select = ({ FormItemProps, SelectProps, name, label, placeholder, options }) => {
  const form = useFormContext()
  const value = form.watch(name)

  const handleChange = useCallback((event) => {
    form.setValue(name, event.target.value ?? undefined)
  }, [form, name])

  return (
    (
      <FormItem
        {...FormItemProps}
        name={name}
        label={label}
      >
        {({ name, label, onBlur, getRef: ref }) => (
          <VKSelect
            {...SelectProps}
            name={name}
            label={label}
            aria-label={label}
            placeholder={placeholder}
            options={options}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            getRef={ref}
          />
        )}
      </FormItem>
    )
  )
}