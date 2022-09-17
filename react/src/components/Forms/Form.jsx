import { FormLayout } from '@vkontakte/vkui'
import { FormProvider, useForm } from 'react-hook-form'

export const Form = ({ children, onSubmit }) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <FormLayout onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </FormLayout>
    </FormProvider>
  )
}
