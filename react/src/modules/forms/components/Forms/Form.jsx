import { yupResolver } from '@hookform/resolvers/yup'
import { FormLayout } from '@vkontakte/vkui'
import { FormProvider, useForm } from 'react-hook-form'

export const Form = ({ children, onSubmit, validationSchema }) => {
  const form = useForm({
    resolver: yupResolver(validationSchema),
  })

  return (
    <FormProvider {...form}>
      <FormLayout onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </FormLayout>
    </FormProvider>
  )
}
