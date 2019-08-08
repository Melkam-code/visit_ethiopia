import React, { Component } from 'react';
import Form from '../containers/Form';
import Danakil from '../assets/image/Danakil.jpg';
import bluenile from '../assets/image/bluenile.jpg';
import semen from '../assets/image/semen.jpg';
import lali from '../assets/image/lali.jpg';
import travel from '../assets/image/travel.jpg';
import timk from '../assets/image/timk.jpg';
import './Ethiopia.css';


class Ethiopia extends Component {
    state = {
        register: false
    }
    
    clickHandler = (e) => {
        this.setState({
            register: !this.state.register
        });
    }

    render () {
        if (this.state.register) {
            return (
               <Form />
            );
        }
        return (
            <div>
                <h4 className="center">WELCOME TO TOUR-ETHIOPIA</h4>
                <p>TourEthiopia is a reputable  tour service provider based in Addis Ababa, Ethiopia. Equipped with knowledgeable & experienced team members, it is a socially responsible and environmentally friendly travel company. Since our establishment in 2012 we have been striving to provide the maximum quality service to our clients and expand our destinations. Starting from 2016, FKLM Ethiopia has started tours to Kenya, Tanzania, Zanzibar, Seychelles, Somaliland and Djibouti. Our strength lays in our full knowledge of our working environment and the corresponding tourist resources. We update our knowledge constantly so that we can design customized holidays for our clients and offer them the best experience possible.

Our tours in Ethiopia tours will enable you visit, Historical route like Bahir Dar, Gondar, Lalibela, etc. The historical Ethiopia tours route of Ethiopia can be combined with one of the best destinations in Tigray region, Geratltha and Danakil Depression in Afar region with a great possibility of visiting Ertale Active Volcano and Sulphur Lakes. Of Course, you can also trek on the Semien Mountains, Wollo mountain chains, etc.

</p>
                <h5>WHY TRAVEL WITH US?</h5>
                <p>You will not only be traveling in Ethiopia with us, but you will also experience the deep & varied lifestyles of the Ethiopian people with our friendly and well trained staff. We are also highly rated on Trip Advisor, 
                  the World's most trusted and largest travel site for reviews and recommendations.</p>
                <br />
                <button className="button" onClick={this.clickHandler}>Register Me</button>
                <br />
                
           <hr />
     <div class="container">
<div class="card card-cascade wider reverse">
  <div class="view view-cascade overlay">
    <img class="card-img-top" src={timk} alt="Card image cap" />
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>
  <div class="card-body card-body-cascade text-center">
    <h4 class="card-title"><strong>Ethiopia</strong></h4>
 
    <h6 class="font-weight-bold indigo-text py-2"></h6>

    <p class="card-text">
    Ethiopia, the land of origin, is a country full of cultural, historical and natural sites with a warm and welcoming people. For many reasons Ethiopia has been nominated by Lonely Planet and Rough Guide as “The Top Must Visit Country for 2014”, chosen as “The Best Destination in Africa for 2015’’ by European Trade and Tourism Council (ETTC) and so on. The vibrant Ethiopia has to offer the perfect holiday packages: historical, cultural and natural sites with many options like Trekking, Safari, Horse Riding, Bird Watching, Photographing & many more …
    </p>
    <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>

    <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>

    <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>

  </div>

</div>
</div>
  <hr />



                <ul class="list-unstyled">
  <li class="media">
    <img class="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg" alt="Generic placeholder image" />
    <div class="media-body">
      <h5 class="mt-0 mb-1 font-weight-bold">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
      congue felis in faucibus.
    </div>
  </li>
  <li class="media my-4">
    <img class="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg" alt="Generic placeholder image" />
    <div class="media-body">
      <h5 class="mt-0 mb-1 font-weight-bold">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
      congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img class="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg" alt="Generic placeholder image" />
    <div class="media-body">
      <h5 class="mt-0 mb-1 font-weight-bold">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
      congue felis in faucibus.
    </div>
  </li>
</ul>
               
                
            
          </div>
        );
    }

    }

export default Ethiopia;