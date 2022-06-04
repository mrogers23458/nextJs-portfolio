import Page from '../components/global_components/Page'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default App
