import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
const UserForm = lazy(() => import('./UserForm'));
const UserLists = lazy(() => import('./UserLists'));
const UserDetails = lazy(() => import('./UserDetails'));


const App = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={UserLists} />
          <Route path="/user-details/:userId">
            <UserDetails />
          </Route>
          <Route path="/form" component={UserForm} />
        </Switch>
      </Suspense>

    </Router>
  )
};
export default App;
