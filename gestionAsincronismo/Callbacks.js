const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.jikan.moe/v4/characters/'

function fechData(url_api, fn) {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', url_api, true)
    xmlhttp.onreadystatechange = function(e) {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                fn(null, JSON.parse(xmlhttp.responseText))
            } else {
                const error = new Error('[error] - ' + url_api)
                return fn(error, null)
            }
        }
    }
    xmlhttp.send()
}
const invocacionSincronica = function(error, dato) {
    
    fechData( API + dato.data[1].mal_id, function(error2, dato2) {
        if (error2)
            return console.log( error2 )
    
        console.log( dato2.data.mal_id + '-' + dato2.data.name )

        fechData( API + dato.data[2].mal_id, function(error3, dato3) {
            if (error3)
                return console.log( error3 )
        
            console.log( dato3.data.mal_id + '-' + dato3.data.name )
    
            fechData( API + dato.data[3].mal_id, function(error4, dato4) {
                if (error4)
                    return console.log( error4 )
            
                console.log( dato4.data.mal_id + '-' + dato4.data.name )
        
            })
            fechData( API + dato.data[4].mal_id, function(error5, dato5) {
                if (error5)
                    return console.log( error5 )
            
                console.log( dato5.data.mal_id + '-' + dato5.data.name )
        
            })
            fechData( API + dato.data[5].mal_id, function(error6, dato6) {
                if (error6)
                    return console.log( error6 )
            
                console.log( dato6.data.mal_id + '-' + dato6.data.name )
        
            })
            fechData( API + dato.data[6].mal_id, function(error7, dato7) {
                if (error7)
                    return console.log( error7 )
            
                console.log( dato7.data.mal_id + '-' + dato7.data.name )
        
            })
            fechData( API + dato.data[7].mal_id, function(error8, dato8) {
                if (error8)
                    return console.log( error8 )
            
                console.log( dato8.data.mal_id + '-' + dato8.data.name )
        
            })
            fechData( API + dato.data[8].mal_id, function(error9, dato9) {
                if (error9)
                    return console.log( error9 )
            
                console.log( dato9.data.mal_id + '-' + dato9.data.name )
        
            })
        })
    })
}

const invocacionAsincrona = function(error, dato) {
    
    for (let i=1; i<=8; i++) {
        fechData(API + dato.data[i].mal_id, function(error2, dato2) {
            if (error2) {
                return console.error( error2 )
            }
            console.log( dato2.data.mal_id + '-' + dato2.data.name )
        })
    }
}

fechData(API, invocacionSincronica)