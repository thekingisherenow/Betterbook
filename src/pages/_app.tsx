import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../core/store'
import '../core/styles/root.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../modules/layout'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider enableSystem={true}  attribute="class">
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
    </ThemeProvider>
  )
}

export default App
