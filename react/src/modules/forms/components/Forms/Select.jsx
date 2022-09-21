import { Select as VKSelect } from '@vkontakte/vkui'

import { FormItem } from './FormItem'

export const Select = ({ FormItemProps, SelectProps, name, label, placeholder, options }) => (
  <FormItem
    {...FormItemProps}
    name={name}
    label={label}
  >
    <VKSelect
      {...SelectProps}
      aria-label={label}
      placeholder={placeholder}
      options={options}
    />
  </FormItem>
)