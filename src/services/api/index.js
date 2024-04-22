import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

function logInRoute(body){

    const { email, password } = body;

    axios.post(`${API_URL}/login`, {
        username: email,
        password: password,
        role: 'User'
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}

export { logInRoute };