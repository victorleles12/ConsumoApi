//consumo api spotify
const axios  = require('axios').default

async function consultarAlbum(id, chave){
  let config = {
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${id}/albums`,
    headers: { 
      'Authorization': `Bearer ${chave}`
    }
  };

  await axios(config)
  .then(e =>{
    let albuns = (e.data.items)
    albuns.map((e)=>{
       console.log(e.name)
    })
  }).catch(error=>{
    console.log(error)
  })
}


consultarAlbum('7JoWcJHDOG58JYTe6d400S', 'BQDDJBKZI4-oCW6wCznV3PqGKbCl5V7qbaY5ScCkefTGlulf1a1HkepKvwMoaKWkk2j3MmS_j26ed_DNJjzMijBLcA9X4T-_jX6DdIkfVN7bFd6j92UGLW4Pw6XnK4Ig8UFhYTkJ7ogI-DokHxhfmY3n_rdfGN2otQEmqoFVdH1CbhQ2ZbnOEufw9mKakMrAREGyHsmCht-d')