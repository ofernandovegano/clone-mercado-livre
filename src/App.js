import Routes from './routes';

import { GlobalStyle } from './global.styles'

import Header from './components/Header/header.component';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Header />
    <Routes />
  </div>
)

export default App;
