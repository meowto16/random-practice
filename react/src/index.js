import { ConfigProvider } from '@vkontakte/vkui'

import '@vkontakte/vkui/dist/vkui.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider appearance="dark" isWebView={false} platform="ios">
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
