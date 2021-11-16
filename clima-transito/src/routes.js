import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from '../src/containers/Home/Home';
import FindByBus from '../src/containers/Page/FindByBus';
import FindByStation from '../src/containers/Page/FindByStation';
import FindByAddress from '../src/containers/Page/FindByAddress';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/encontre-por-linha" component={FindByBus} />
        <Route path="/encontre-por-endereco" component={FindByStation} />
        <Route path="/encontre-por-ponto" component={FindByAddress} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
