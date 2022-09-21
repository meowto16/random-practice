import {
  AppRoot,
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  View,
  ViewWidth
} from '@vkontakte/vkui'
import './modules/forms/config/yup.config'

import { App as FormsApp } from './modules/forms/App'
import { App as JSONPlaceholderApp } from './modules/jsonplaceholder/App'

import './App.css'

function App() {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <View activePanel="json-placeholder">
            <FormsApp id="forms" />
            <JSONPlaceholderApp id="json-placeholder" />
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
