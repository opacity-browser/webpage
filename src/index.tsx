import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/Layout'
import './locales/i18n'

const container = document.getElementById('wrap')
const root = ReactDOM.createRoot(container as HTMLElement)

const App = () => {  
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </>
  )
}

root.render(
  <App />
)