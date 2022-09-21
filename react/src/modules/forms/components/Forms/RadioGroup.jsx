import { Radio as VKRadio, RadioGroup as VKRadioGroup } from '@vkontakte/vkui'

import { FormItem } from './FormItem'

export const RadioGroup = ({
  FormItemProps,
  RadioGroupProps,
  name,
  label,
  mode,
  options,
}) => (
  <FormItem {...FormItemProps} name={name} label={label}>
    {({ onChange, onBlur, name: registerName, getRef: ref }) => (
      <VKRadioGroup {...RadioGroupProps} mode={mode}>
        {(options || []).map((OptionProps) => (
          <VKRadio
            {...OptionProps}
            key={OptionProps.value}
            name={registerName}
            onChange={onChange}
            onBlur={onBlur}
            getRef={ref}
          >
            {OptionProps.label}
          </VKRadio>
        ))}
      </VKRadioGroup>
    )}
  </FormItem>
)
