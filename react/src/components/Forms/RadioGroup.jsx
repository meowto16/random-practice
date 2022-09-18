import { Radio as VKRadio, RadioGroup as VKRadioGroup, FormItem } from '@vkontakte/vkui'
import { useFormContext } from 'react-hook-form'

export const RadioGroup = ({
  FormItemProps,
  RadioGroupProps,
  name,
  label,
  mode,
  options,
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
      <VKRadioGroup {...RadioGroupProps} mode={mode}>
        {(options || []).map((OptionProps) => (
          <VKRadio {...OptionProps} key={OptionProps.value} name={registerName} onChange={onChange} onBlur={onBlur} getRef={ref}>
            {OptionProps.label}
          </VKRadio>
        ))}
      </VKRadioGroup>
    </FormItem>
  )
}
