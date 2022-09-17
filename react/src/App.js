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

const validationSchema = yup.object({
  user: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().integer().positive().max(150).required()
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
