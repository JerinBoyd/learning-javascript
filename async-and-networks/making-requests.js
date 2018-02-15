const axios = require('axios');


const url = 'https://jsonplaceholder.typicode.com/posts/1clear';


function printResponse(response){
    console.log(response.data);
}

function abandonShip(error){
    console.log(error)
}

axios.get(url)
    .then(printResponse)
    .catch(abandonShip);