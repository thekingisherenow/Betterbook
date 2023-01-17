import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../core/store'
import '../core/styles/root.css'
import { ThemeProvider } from 'next-themes'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider enableSystem={true}  attribute="class">
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
  )
}

export default App
