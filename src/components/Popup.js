import React from 'react';


const Popup = (props) => {
    console.log(props.name);
    

    return (
        <div class="container">

<div class="card text-center">
<div class="card-header">
  <h4>Thank you {props.name} {props.last}!</h4>
</div>
<div class="card-body">
  <h5 class="card-title">You Have Chosen {props.select} Tour Plan</h5>
  <p class="card-text">Perfect, Exciting Choice! We will make sure that this will be one of the best moments in your life.</p>
  <button class="btn btn-primary" onClick={props.handleDatabase}>Click Here If You Are Done</button>
  <br />
  <button><a href='/' class="btn btn-primary">Back</a></button>

</div>
<div class="card-footer text-muted">
</div>
</div>

</div>
    );
}


export default Popup;