import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';

import Main from './components/Main';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cocktail">
          <Main />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
