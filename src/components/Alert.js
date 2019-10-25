import React from 'react';


const Alert = (props) => {
    console.log(props.blueNile);
    return (
   <div>
   <div class="alert alert-success" role="alert">
   <h4 class="alert-heading">Well done!</h4>
   <h5>Aww yeah, you successfully added {props.blueNile} to your list of tour plans! You can look up and add more
tour plans..</h5>
   <hr />
   <button type="button" 
        class="btn btn-secondary btn-lg"
        onClick={props.handleMoreTour} >More Tour Plan</button>
   </div>

</div>
    )
}


export default Alert;