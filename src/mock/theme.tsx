import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import theme from '../styles/theme'

type DefaultParams = Parameters<typeof render>
type RenderUI = DefaultParams[0]

export default function RenderWithTheme(ui: RenderUI) {
  return render(<ThemeProvider theme={theme}>{ui} </ThemeProvider>)
}
