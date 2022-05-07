const express = require('express');
const https = require('https')
const axios = require('axios')
const app = express();
const PORT = 8080;

app.get('/movie/fetch', (req, res) => {
    try{
    let result=[];
    let movies= 'https://api.themoviedb.org/3/search/movie?api_key=7b02a951e8d6e43b5301954a6131550b&query=list'
    axios.get(movies)
    .then((response) => {
      console.log(response.data.results);
      if(response.data.results.length !== 0){
          result=response.data.results;
            res.send({result})
      }
    })
}catch(cat){
    console.log("catch",cat)
}
})

app.listen(PORT,()=>{
    console.log(`Server is started` ,PORT);
});