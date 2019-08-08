import React, { Component } from 'react';
import Popup from '../components/Popup';
import axios from '../axios-instance';
import './Form.css';

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        popupKey: false
    }
    handleDatabase = (event) => {
      const visitorInfo = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phoneNumber: this.state.phoneNumber
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
        console.log(firstName);
        this.setState({
          firstName, lastName, phoneNumber
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
                       handleDatabase={this.handleDatabase} />
      }
        return (
    <div className="Form">
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          First Name:
          <input className="Input" type="text" value={this.state.firstName} onChange={(event) => this.setState({firstName: event.target.value})} />
        </label>
        </div><br />
        <div>
        <label>
          Last Name:
          <input className="Input" type="text" value={this.state.lastName} onChange={(event) => this.setState({lastName: event.target.value})} />
        </label>
        </div><br />
        <div>
        <label>
          Phone Number:
          <input className="Input" type="number" value={this.state.phoneNumber} onChange={(event) => this.setState({phoneNumber: event.target.value})} />
        </label>
        </div><br /><br />
        <div>
        <label>
        <input className="Submit" type="submit" value="Submit" />
        </label>
        </div>
      </form>
      </div>
        );
    }
}



export default Form;