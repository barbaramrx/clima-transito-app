import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from '../src/containers/Home/Home';
import FindByBus from '../src/containers/Page/FindByBus';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/encontre-por-linha" component={FindByBus} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
