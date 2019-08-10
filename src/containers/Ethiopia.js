import React, { Component } from 'react';
import Register from './Register';
import Contact from '../components/Contact ';
import timk from '../assets/image/timk.jpg';
import parks from '../assets/image/parks.jpg';
import history from '../assets/image/history.jpg';
import omo from '../assets/image/omo.jpg';
import './Ethiopia.css';


class Ethiopia extends Component {
    state = {
        register: false,
        registerForPlan: false
    }
    
    clickHandler = (e) => {
        this.setState({
            register: !this.state.register
        });
    }

    registerPlanHandler = (e) => {
      this.setState({
        registerForPlan: !this.state.registerForPlan
      })
    }

    render () {
        if (this.state.register) {
            return (
               <Register />
            );
        }
        if (this.state.registerForPlan) {
          return (
            <Register />
          )
        }
        return (
            <div>
              <div className="mycontainer">
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
               </div>
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

  <div class="card mycontainer">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>

<div className="mycontainer">
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={history} class="card-img" alt="ethiopian history" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">
      Discover the Historic Routes</h5>
        <p class="card-text">This 14 Nights and 15 Days package tour lets you experience the major Historical sites of the Christian Highlands of North Ethiopia.</p>
        <button type="button" 
                class="btn btn-secondary btn-lg"
                onClick={this.registerPlanHandler} >REGISTER FOR PLAN</button>
      </div>
    </div>
  </div>
  </div>
</div>


  <div className="mycontainer">
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={omo} class="card-img" alt="omo valley" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">
    Discover Tribal Ethiopia</h5>
        <p class="card-text">Fly down to Arba Minch and prepare to get fascinated with various Omo Valley tribes including the Konso tribes, the Mursi tribes in Mago National Park, and the spectacular Hamer tribes in Turmi.</p>
        <button type="button" 
                class="btn btn-secondary btn-lg"
                onClick={this.registerPlanHandler} >REGISTER FOR PLAN</button>
      </div>
    </div>
  </div>
  </div>
  </div>

  <div className="mycontainer">
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={parks} class="card-img" alt="national parks" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">
      National Parks of Ethiopia</h5>
        <p class="card-text">Ethiopia's many national parks enable the visitor to enjoy the country's scenery and its wildlife,  conserved in natural habitats, and offer opportunities for travel adventure unparalleled in Africa.</p>
        <button type="button" 
                class="btn btn-secondary btn-lg"
                onClick={this.registerPlanHandler} >REGISTER FOR PLAN</button>
      </div>
    </div>
  </div>
  </div>
</div>

          </div>
        );
    }

    }

export default Ethiopia;