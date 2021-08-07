import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import theme from '../styles/theme'

const testingQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

type DefaultParams = Parameters<typeof render>
type RenderUI = DefaultParams[0]

export default function RenderWithQueryClientProvider(ui: RenderUI) {
  return render(
    <QueryClientProvider client={testingQueryClient}>
      <ThemeProvider theme={theme}>{ui} </ThemeProvider>
    </QueryClientProvider>
  )
}
