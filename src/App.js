import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Ethiopia from './containers/Ethiopia';
import Tour from './components/Tour With Us';
import Contact from './components/Contact ';
import Attraction from './components/Slide/Attraction';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
      <Route path='/' exact component={Ethiopia} />
      <Route path='/tour' component={Tour} />
      <Route path='/attraction' component={Attraction} />
      <Route path='/contact' component={Contact} />

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
