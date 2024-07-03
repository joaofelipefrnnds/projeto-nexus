import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Services';
import Contato from './pages/Contato';

import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () =>{
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route  path="/service" component={Service}/>
        <Route  path="/contato" component={Contato}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routes;