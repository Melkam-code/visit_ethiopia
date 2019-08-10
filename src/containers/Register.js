import React, { Component } from 'react';
import Popup from '../components/Popup';
import axios from '../axios-instance';
import './Register.css';

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        visitors: '',
        days: '',
        select: '',
        opinion: '',
        popupKey: false
    }
    handleDatabase = (event) => {
      const visitorInfo = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phoneNumber: this.state.phoneNumber,
          email: this.state.email,
          visitors: this.state.visitors,
          days: this.state.days,
          select: this.state.select,
          opinion: this.state.opinion
      }
      axios.post('/visitorInfo.json', visitorInfo)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target[0].value;
        const lastName = event.target[1].value;
        const phoneNumber = event.target[2].value;
        const email = event.target[3].value;
        const visitors = event.target[4].value;
        const days = event.target[5].value;
        const select = event.target[6].value;
        const opinion = event.target[7].value;
        console.log(firstName);
        this.setState({
          firstName, lastName, phoneNumber, email, visitors, days, select, opinion
        });
        this.setState({
          popupKey: !this.state.popupKey
        })
      }

    render () {
      if (this.state.popupKey) {
         return <Popup name={this.state.firstName} 
                       last={this.state.lastName}
                       phone={this.state.phoneNumber} 
                       select={this.state.select}
                       handleDatabase={this.handleDatabase} />
      }
        return (
    <div className="Form">
    <form onSubmit={this.handleSubmit}>

    <div class="row">
      <div class="col">
          <input class="form-control" placeholder="First name" type="text" value={this.state.firstName} onChange={(event) => this.setState({firstName: event.target.value})} />
      </div>
      <div class="col">
      <input class="form-control" placeholder="Last name" type="text" value={this.state.lastName} onChange={(event) => this.setState({lastName: event.target.value})} />
      </div>
    </div> 
     
    <div class="row">
      <div class="col">
          <input class="form-control" type="number" placeholder="Phone Number" value={this.state.phoneNumber} onChange={(event) => this.setState({phoneNumber: event.target.value})} />
        </div>
      <div class="col">
      <input class="form-control" type="email" placeholder="Email Address" 
             value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
      </div>
    </div>
    
    <div class="row">
      <div class="col">
         <input class="form-control" type="number" placeholder="Number of Visitors" value={this.state.visitors} onChange={(event) => this.setState({visitors: event.target.value})} />
      </div>
      <div class="col">
         <input class="form-control" type="number" placeholder="Visiting Day Number" value={this.state.days} onChange={(event) => this.setState({days: event.target.value})} />
      </div>
    </div>


    <div class="form-group">
    <label style={{ color: '#808080', fontSize: '17px'}}>Choose Tour Plan You Prefer..</label>
    <select class="custom-select custom-select-lg mb-3">
      <option selected>Discover the Historic Routes</option>
      <option value="Discover the Historic Routes">Discover the Historic Routes</option>
      <option value="Discover Tribal Ethiopia">Discover Tribal Ethiopia</option>
      <option value="Discover National Parks of Ethiopia">Discover National Parks of Ethiopia</option>
    </select>
    </div>
   
    <div class="input-group">
     <div class="input-group-prepend">
     <span class="input-group-text" style={{ color: '#808080', fontSize: '17px'}}>Other Preferences</span>
     </div>
     <textarea class="form-control" aria-label="With textarea"
               value={this.state.opinion} onChange={(event) => this.setState({opinion: event.target.value})} ></textarea>
    </div>

        <div>
        <input className="Submit" type="submit" value="Submit" />
        </div>
     
     </form>
     </div>
      

        );
    }
}



export default Register;