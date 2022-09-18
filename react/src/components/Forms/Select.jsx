import { FormItem, Select as VKSelect } from '@vkontakte/vkui'
import { useFormContext } from 'react-hook-form'

export const Select = ({ FormItemProps, SelectProps, name, label, placeholder, options }) => {
  const { register, formState, getFieldState } = useFormContext()

  const { onBlur, onChange, name: registerName, ref }  = register(name);

  const field = getFieldState(name, formState)

  return (
    <FormItem
      {...FormItemProps}
      top={label || FormItemProps?.top}
      bottom={field.error ? field.error.message : FormItemProps?.bottom}
      status={Boolean(field.error) ? 'error' : 'default'}
    >
      <VKSelect
        {...SelectProps}
        aria-label={label}
        name={registerName}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        getRef={ref}
        options={options}
      />
    </FormItem>
  )
}