import { act, fireEvent } from '@testing-library/react'
import * as yup from 'yup'

import { Input } from '../Input'

import { renderWithReactHookForm } from '../../../../utils.testing'

const eventMock = expect.anything();

describe('Input (Form component)', () => {
  it('renders without errors', () => {
    const { screen } = renderWithReactHookForm(<Input name="firstname" label="Имя" />);
    screen.unmount();
  })

  it('same as snapshot', () => {
    const { screen } = renderWithReactHookForm(<Input name="firstname" label="Имя" />);
    expect(screen.container.firstChild).toMatchSnapshot();
  })

  it('supports default value', () => {
    const { screen } = renderWithReactHookForm(
      <Input name="firstname" label="Введите имя" />,
      {
        defaultValues: {
          firstname: 'Максим'
        }
    });

    expect(screen.getByDisplayValue('Максим')).toBeInTheDocument()
  })

  it('changes form value (react-hook-form context)', async () => {
    const { screen, form, submitHandler } = renderWithReactHookForm(<Input name="firstname" label="Имя" placeholder="Введите имя" />)

    // Check empty value
    await act(() => {
      fireEvent.submit(form)
    })
    expect(submitHandler).toHaveBeenCalledWith({ firstname: '' }, eventMock)

    // Change value
    const input = screen.getByPlaceholderText('Введите имя')
    await act(() => {
      fireEvent.input(input, { target: { value: 'Максим' } })
      fireEvent.submit(form)
    })

    // Check changed value
    expect(submitHandler).toHaveBeenCalledWith({ firstname: 'Максим' }, eventMock)
  })

  it('supports validation', async () => {
    const { screen, form } = renderWithReactHookForm(
      <Input name="firstname" label="Имя" placeholder="Введите имя" />,
      {
        validationSchema: yup.object({
          firstname: yup.string().required('Это обязательное поле')
        }),
      }
    )

    // Error is not visible before submit form
    expect(screen.queryByText('Это обязательное поле')).not.toBeTruthy()

    // Submit form
    await act(() => void fireEvent.submit(form))

    // Error is now visible after submit form
    expect(screen.queryByText('Это обязательное поле')).toBeTruthy()
  })
})