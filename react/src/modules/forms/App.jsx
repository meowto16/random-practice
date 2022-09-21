import * as yup from 'yup'
import { Panel, PanelHeader, Group, Div, Button } from '@vkontakte/vkui'

import { Checkbox } from './components/Forms/Checkbox'
import { Form } from './components/Forms/Form'
import { Input } from './components/Forms/Input'
import { RadioGroup } from './components/Forms/RadioGroup'
import { Select } from './components/Forms/Select'
import { Textarea } from './components/Forms/Textarea'

const validationSchema = yup.object({
  user: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().integer().positive().max(150).required(),
    sex: yup.string().required().oneOf(['man', 'woman']),
    country: yup.string().required(),
    biography: yup.string().required(),
    religion: yup.boolean().oneOf([true], 'А надо быть верующим...')
  }),
})

export const App = ({ id }) => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Panel id={id}>
      <PanelHeader>Регистрация</PanelHeader>
      <Form onSubmit={onSubmit} validationSchema={validationSchema}>
        <Group>
          <Input label="Имя" name="user.firstname" placeholder="Введите имя"  />
          <Input label="Фамилия" name="user.lastname" placeholder="Введите фамилию" />
          <Input label="Возраст" name="user.age" placeholder="Введите возраст" type="number"  />
          <Select label="Страна" name="user.country" placeholder="Укажите страну" options={[
            { label: 'Россия', value: 'russia' },
            { label: 'Германия', value: 'germany' },
          ]} />
          <Textarea label="Расскажите о себе" name="user.biography" placeholder="Все что угодно" />
          <RadioGroup label="Пол" name="user.sex" mode="horizontal" options={[
            { label: 'Мужской', value: 'man' },
            { label: 'Женский', value: 'woman' }
          ]} />
          <Checkbox name="user.religion" description="Вы верующий?" disabled />
          <Div>
            <Button type="submit" size="m">Отправить</Button>
          </Div>
        </Group>
      </Form>
    </Panel>
  )
}
