// USE THE FOLLOWING COMMAND TO GENERATE SKELETON OF COMPONENTS
// npx generate-react-cli component Users

import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import About from './components/About/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Layout>
        <Switch>
          <Route path="/about">
            <About  init = "aboutprop"/>
          </Route>
          <Route path="/users">
            <Users  init = "userprop"/>
          </Route>
          <Route path="/">
            <Home init = "homeprop" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
