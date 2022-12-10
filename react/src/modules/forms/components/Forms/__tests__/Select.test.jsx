import { act, findByText, fireEvent } from '@testing-library/react'
import * as yup from 'yup'
import selectEvent from 'react-select-event'

import { Select } from '../Select'

import { renderWithReactHookForm } from '../../../../utils.testing'

const eventMock = expect.anything();

describe('Select (Form component)', () => {
  const options = [
    { value: 'russia', label: 'Россия' },
    { value: 'ukraine', label: 'Украина' },
    { value: 'germany', label: 'Германия' },
    { value: 'france', label: 'Франция' },
  ]


  it('renders without errors', () => {
    const { screen } = renderWithReactHookForm(<Select name="country" label="Страна" options={options} />);
    screen.unmount();
  })

  it('same as snapshot', () => {
    const { screen } = renderWithReactHookForm(<Select name="country" label="Страна" options={options} />);
    expect(screen.container.firstChild).toMatchSnapshot();
  })

  it.skip('supports default value', async () => {
    const { screen } = renderWithReactHookForm(
      <Select name="country" label="Страна" />,
      {
        defaultValues: {
          country: 'russia'
        }
      });

    expect( await screen.findByText('Россия')).toBeInTheDocument()
  })

  it.skip('changes form value (react-hook-form context)', async () => {
    const { screen, form, submitHandler } = renderWithReactHookForm(<Select name="country" label="Страна" placeholder="Выберите страну" />)

    // Check empty value
    await act(() => {
      fireEvent.submit(form)
    })
    expect(submitHandler).toHaveBeenCalledWith({ country: undefined }, eventMock)

    // Change value
    const select = screen.getByRole('select')
    await act(() => {
      selectEvent.select(select, 'Франция')
      fireEvent.submit(form)
    })

    // Check changed value
    expect(submitHandler).toHaveBeenCalledWith({ country: 'Франция' }, eventMock)
  })

  it.skip('supports validation', async () => {
    const { screen, form } = renderWithReactHookForm(
      <Select name="country" label="Страна" placeholder="Выберите страну" />,
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