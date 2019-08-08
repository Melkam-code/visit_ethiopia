import React from 'react';
import managers from '../assets/image/managers.jpg';
import stuff from '../assets/image/stuff.jpg';

const Tour = (props) => {
    

    return (
        <div>
        <div class="row">
    <div class="col-sm">
<div class="card testimonial-card">
  <div class="card-up indigo lighten-1"></div>
  <div class="avatar mx-auto white">
    <img src={managers} class="rounded-circle" alt="Managers of TourEthiopia" />
  </div>
  <div class="card-body">
    <h4 class="card-title">Founders TourEthiopia</h4>
    <hr />
    <p><i class="fas fa-quote-left"></i>"TourEthiopia provides the same outstanding, personalized service to our clients as before. Semien Mountains, majestic mountains, is the source of inspiration for delivering the best possible experience for touring Ethiopia that is possible."</p>
  </div>
</div>
</div>

<div class="col-sm">
<div class="card testimonial-card">
  <div class="card-up indigo lighten-1"></div>
  <div class="avatar mx-auto white">
    <img src={stuff} class="rounded-circle" alt="Manager of TourEthiopia" />
  </div>
  <div class="card-body">
    <h4 class="card-title">TourEthiopia Team</h4>
    <hr />
    <p><i class="fas fa-quote-left"></i>"Ethiopia is like nowhere else on the planet, a beautiful country blessed with a peerless history, fabulous wildlife and some of Africa's most soulful peoples. Come travel with us to see the beauty, the tradition, the majesty of Ethiopia."</p>
  </div>
</div>
</div>
</div>
        </div>
    );
}


export default Tour;