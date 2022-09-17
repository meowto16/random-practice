import { FormItem, Input as VKInput } from '@vkontakte/vkui'
import { useFormContext } from 'react-hook-form'

export const Input = ({
                        FormItemProps ,
                        InputProps,
                        name,
                        label,
                        placeholder,
                      }) => {
  const { register } = useFormContext()

  const { onBlur, onChange, name: registerName, ref }  = register(name);

  return (
    <FormItem {...FormItemProps} top={label}>
      <VKInput
        {...InputProps}
        name={registerName}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        getRef={ref}
      />
    </FormItem>
  )
}
