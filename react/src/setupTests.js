import '@testing-library/jest-dom/extend-expect';
import axios from 'axios'
import hooks from 'perf_hooks'

axios.defaults.adapter = require('axios/lib/adapters/http')
global.performance = hooks.performance;