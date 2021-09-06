import logo from './logo.svg';
import './App.css';
import { BrowserRouter, useHistory as Router, Route, Switch, useHistory, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import Login from './components/Login'
import Signup from './components/Signup';
import Dashboard from './components/DashBoard'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import auth from './utils/auth';

const Authenticate = () => {
  const history = useHistory()
  if (!auth.loggedIn) {
    history.push('/')
  }
}
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

export default function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <div className='min-h-screen flex items-center justify-center '>
            <Switch>
              <Route exact path='/' component={Login} onEnter={Authenticate} />
              <Route exact path='/feed' component={Feed} onEnter={Authenticate} />
              <Route exact path='/signup' component={Signup} onEnter={Authenticate} />
              <Route exact path='/dashboard' component={Dashboard} onEnter={Authenticate} />
            </Switch>
          </div>
        </>
      </Router>
    </ApolloProvider>

  );
}

