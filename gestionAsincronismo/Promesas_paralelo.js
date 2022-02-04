const fetchData = require('./utils/fetchData')
const API = 'https://api.jikan.moe/v4/characters/'

const obtenerPersonaje = (mal_id) => {
    return fetchData(`${API}${mal_id}`)
}
let ids = [1, 2, 3, 4, 5, 6, 7, 8]
let promesas = ids.map( mal_id => obtenerPersonaje(mal_id) )
Promise
    .all( promesas )
    .then( dato => {
        for(let i=0; i<dato.length; i++) {
            console.log( dato.data[i].mal_id + '-' + dato.data[i].name )
        }
    } )
    