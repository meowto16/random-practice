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

import './App.css'

import { Form } from './components/Forms/Form'
import { Input } from './components/Forms/Input'

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
              <Form onSubmit={onSubmit}>
                <Group>
                  <Input label="Имя" name="user.firstname" placeholder="Введите имя"  />
                  <Input label="Фамилия" name="user.lastname" placeholder="Введите фамилию"  />
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
