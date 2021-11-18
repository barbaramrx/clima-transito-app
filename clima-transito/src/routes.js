import { Route, Switch, HashRouter } from 'react-router-dom';

import FindYourBus from './containers/Page/FindYourBus';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={FindYourBus} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
