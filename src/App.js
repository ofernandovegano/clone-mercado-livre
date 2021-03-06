import Routes from './routes';

import { GlobalStyle } from './global.styles'

import Header from './components/header/header.component.jsx';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Header />
    <Routes />
  </div>
)

export default App;
