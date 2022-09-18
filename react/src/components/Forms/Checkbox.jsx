import { useFormContext } from 'react-hook-form'
import { FormItem, Checkbox as VKCheckbox } from '@vkontakte/vkui'

export const Checkbox = ({
  FormItemProps,
  CheckboxProps,
  name,
  label,
  description,
  disabled,
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
      <VKCheckbox
        {...CheckboxProps}
        disabled={disabled}
        description={description}
        onBlur={onBlur}
        onChange={onChange}
        name={registerName}
        getRef={ref}
      />
    </FormItem>
  )
}
