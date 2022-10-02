import { yupResolver } from '@hookform/resolvers/yup'
import { render } from '@testing-library/react'
import { useForm, FormProvider } from 'react-hook-form';

export function renderWithReactHookForm(
  ui,
  { defaultValues = {}, validationSchema } = {}
) {
  const submitHandler = jest.fn()

  const Wrapper = ({ children }) => {
    const methods = useForm({
      defaultValues,
      ...(validationSchema && { resolver: yupResolver(validationSchema) }),
    });
    return (
      <FormProvider {...methods}>
        <form name="form" onSubmit={methods.handleSubmit(submitHandler)}>
          {children}
          <button type="submit">Отправить</button>
        </form>
      </FormProvider>
    );
  };

  const screen = render(ui, { wrapper: Wrapper })

  return {
    screen,
    form: screen.getByRole('form'),
    submitButton: screen.getByText('Отправить'),
    submitHandler,
  }
}