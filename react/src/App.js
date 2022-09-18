import {
  AppRoot,
  Button,
  Div,
  Group,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  View,
  ViewWidth
} from '@vkontakte/vkui'
import * as yup from 'yup'
import './config/yup.config'

import './App.css'

import { Form } from './components/Forms/Form'
import { Input } from './components/Forms/Input'
import { RadioGroup } from './components/Forms/RadioGroup'
import { Select } from './components/Forms/Select'
import { Textarea } from './components/Forms/Textarea'

const validationSchema = yup.object({
  user: yup.object({
    // firstname: yup.string().required(),
    // lastname: yup.string().required(),
    // age: yup.number().integer().positive().max(150).required(),
    // country: yup.string().required(),
    // biography: yup.string().required(),
  }),
})

function App() {
  const { viewWidth } = useAdaptivity();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <View activePanel="new-user">
            <Panel id="new-user">
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
                  <Div>
                    <Button type="submit" size="m">Отправить</Button>
                  </Div>
                </Group>
              </Form>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
