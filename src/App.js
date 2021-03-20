import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './global'

import { Provider } from 'react-redux';
import { Store } from './store';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Cadatro'
import Curso from './pages/Curso'
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <GlobalStyle/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/curso/:id" component={Curso}/>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
