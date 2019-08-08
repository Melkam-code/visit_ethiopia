import axios from 'axios';

const instance = axios.create({
     baseURL: 'https://visit-ethiopia-ec8b1.firebaseio.com/'
});


export default instance;