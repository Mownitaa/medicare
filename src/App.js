
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment';
import Facilities from './components/Facilities/Facilities';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/facilities">
            <Facilities></Facilities>
          </Route>
          <Route exact path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route exact path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
