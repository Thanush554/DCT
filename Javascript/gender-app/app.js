const axions=require('axios');
const username="pramod";
axions.get(`https://api.genderize.io?name=${username}`)
    .then(function(response){
        const { name,gender } = response.data;
        console.log(`${name} is ${gender}`);
    })
    .catch(function(err){
        console.log(err.message)
    })
