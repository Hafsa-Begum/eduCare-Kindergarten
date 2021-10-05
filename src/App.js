import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import { createContext, useEffect, useState } from 'react';
import Teacher from './components/Teacher/Teacher';

export const ServiceContext = createContext('services');


function App() {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  return (
    <div className="App">
      <ServiceContext.Provider value={services}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <Route exact path='/teacher'>
              <Teacher></Teacher>
            </Route>
            <Route exact path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
