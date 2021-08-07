import '@testing-library/jest-dom'
import 'jest-styled-components'
import { setLogger } from 'react-query'

import {server} from '../src/mock/server'

// Enable API mocking before tests.
beforeAll(() => server.listen({
  onUnhandledRequest: 'error'
}))

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

setLogger(
  {
    log:console.log,
    warn:console.warn,
    error: () => null
  }
)
