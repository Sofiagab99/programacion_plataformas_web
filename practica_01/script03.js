var arrayImagenes = ["01.jpg" , "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"]

var imagenActual = 0;


document.getElementById("anterior").addEventListener("click", cambiarImagen);
document.getElementById("siguiente").addEventListener("click", cambiarImagen);


function cambiarImagen() {
    var boton = this.id;
   
    if(boton == 'anterior') {
        imagenActual --;
        if(imagenActual < 0) {
            imagenActual = arrayImagenes.length -1; 
        } 
    } else {
        imagenActual ++;
        if(imagenActual == arrayImagenes.length) {
            imagenActual = 0;
        } 
    }
    var imagenAMostrar = arrayImagenes [imagenActual];
    document.getElementById('imagen').src = 'Galeria_03/' + imagenAMostrar;
}