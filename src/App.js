import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Ethiopia from './containers/Ethiopia';
import Tour from './components/Tour With Us';
import Contact from './components/Contact ';
import Register from './containers/Register';
import Attraction from './components/Attraction';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
      <Route path='/' exact component={Ethiopia} />
      <Route path='/register' exact component={Register} />
      <Route path='/tour' component={Tour} />
      <Route path='/attraction' component={Attraction} />
      <Route path='/contact' component={Contact} />

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
