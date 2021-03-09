import React, { useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes/public';
import NotFoundPage from './pages/errors/NotFoundPage';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme'



const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <Switch>
          {routes}
          <Route component={NotFoundPage}/>
        </Switch>
    </ThemeProvider>
  );
}

export default App;