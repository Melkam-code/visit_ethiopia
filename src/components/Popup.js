import React from 'react';


const Popup = (props) => {
    console.log(props.name);
    

    return (
        <div>
            <h4>Thank you for registering {props.name} {props.last} </h4>
            <button onClick={props.handleDatabase}>Click Here If You Are Done</button>
            <h5><a href='/tour'>See more detail about what we do</a></h5>
        </div>
    );
}


export default Popup;