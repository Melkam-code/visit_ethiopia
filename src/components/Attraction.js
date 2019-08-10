import React from 'react';
import './Attraction.css';
import danakil from '../assets/image/danakil.jpg';
import bluenile from '../assets/image/bluenile.jpg';
import semen from '../assets/image/semen.jpg';
import newlalibela from '../assets/image/newlalibela.jpg';
import zoo from '../assets/image/zoo.jpeg';
import hamar from '../assets/image/hamar.jpg';
import axumm from '../assets/image/axumm.jpg';
import harar from '../assets/image/harar.jpeg';
import gondor from '../assets/image/gondor.png';


const Attraction = () => {
   return (
     <div className="visit">
      
<div class="card-group">
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={bluenile} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">Blue Nile</h4>
  
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={hamar} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
    
      <h4 class="card-title">Omo Valley</h4>
    
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={danakil} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">Danakil Depression</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
</div>



<div class="card-group">
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={harar} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">Harar</h4>
  
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={newlalibela} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
    
      <h4 class="card-title">Lalibela</h4>
    
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={axumm} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">Axum</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
</div>



<div class="card-group">
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={gondor} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">Gonder</h4>
  
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={semen} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
    
      <h4 class="card-title">Semein Mountains</h4>
    
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
  <div class="card mb-4">
    <div class="view overlay">
      <img class="card-img-top" src={zoo} alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title">National Parks</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>
  </div>
</div>
</div>

   );
}



export default Attraction;