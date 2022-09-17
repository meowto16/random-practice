import { FormItem, Input as VKInput } from '@vkontakte/vkui'
import { useFormContext } from 'react-hook-form'

export const Input = ({
  FormItemProps ,
  InputProps,
  name,
  label,
  placeholder,
  type,
}) => {
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
      <VKInput
        {...InputProps}
        aria-label={label}
        type={type}
        name={registerName}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        getRef={ref}
      />
    </FormItem>
  )
}
