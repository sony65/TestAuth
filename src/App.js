import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import ProfilePage from './ProfilePage/ProfilePage';
import { LOGIN_PAGE_URL, PROFILE_PAGE_URL } from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={LOGIN_PAGE_URL}>
            <MainPage />
          </Route>
          <Route path={PROFILE_PAGE_URL}>
            <ProfilePage/>
          </Route>
          <Route path='/'>
            <Redirect to={LOGIN_PAGE_URL} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
