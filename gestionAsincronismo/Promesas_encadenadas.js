const fetchData = require('./utils/fetchData')
const API = 'https://api.jikan.moe/v4/characters/'

function obtenerPersonaje(mal_id) {
    return fetchData(`${API}${mal_id}`)
}
obtenerPersonaje(1)
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(2)
    } )
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(3)
    } )
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(4)
    } )
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(5)
    } )
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(6)
    } )
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(7)
    } )
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(8)
    } )
    .then( (datos) => {
        console.log( datos.data.mal_id + '-' + datos.data.name )
        return obtenerPersonaje(9)
    } )
    .catch( (error) => console.error( error ) )