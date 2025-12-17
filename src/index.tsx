import { createRoot } from 'react-dom/client'
import 'typeface-roboto'

import { App } from './App'
import { randomNumber } from './services/RandomNumber'

const seed = new URLSearchParams(window.location.search).get('seed')
randomNumber.init(seed ?? undefined)

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<App />)
