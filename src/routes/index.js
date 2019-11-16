import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from '~/pages/Chat';
import Login from '~/pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Chat/:username" exact component={Chat} />
    </Switch>
  );
}
