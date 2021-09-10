// consumo de api do pokemon

const axios = require('axios').default

async function cathPoke(name){
 let dados = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
 .then(e=>{
   console.log(e.data)
 })
}

cathPoke('ditto')




