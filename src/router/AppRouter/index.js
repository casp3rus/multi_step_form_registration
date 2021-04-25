import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './../../components/Header';
import FirstStep from './../../components/FirstStep';
import SecondStep from './../../components/SecondStep';
import ThirdStep from './../../components/ThirdStep';

const AppRouter = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const resetUser = () => {
    setUser({});
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <FirstStep {...props} user={user} updateUser={updateUser} />
            )}
          />
          <Route
            path='/second'
            render={(props) => (
              <SecondStep {...props} user={user} updateUser={updateUser} />
            )}
          />
          <Route
            path='/third'
            render={(props) => (
              <ThirdStep
                {...props}
                user={user}
                updateUser={updateUser}
                resetUser={resetUser}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
