const fetchData = require('./utils/fetchData')
const API = 'https://api.jikan.moe/v4/characters/'

function obtenerPersonaje(mal_id) {
    return fetchData(`${API}${mal_id}`)
}
async function main() {
    for (let i=1; i<=8; i++) {
        await obtenerPersonaje(i)
            .then((dato) => console.log(dato.data.mal_id +'-' + dato.data.name) )
            .catch( (error) => console.error( error ) )
    }
}

main()