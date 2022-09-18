import { Checkbox as VKCheckbox } from '@vkontakte/vkui'

import { FormItem } from './FormItem'

export const Checkbox = ({
  FormItemProps,
  CheckboxProps,
  name,
  label,
  description,
  disabled,
}) => (
  <FormItem
    {...FormItemProps}
    name={name}
    label={label}
  >
    <VKCheckbox
      {...CheckboxProps}
      disabled={disabled}
      description={description}
    />
  </FormItem>
)
