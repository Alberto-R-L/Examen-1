function iniciarconhtml(){

    var arrayNumeros = [2,3,4,1,3,100,1,1]; 
ejercicio3(arrayNumeros);
}
    


function ejercicio3 (arrayNumeros) {
    var arrayMultiplica = [];
    arrayMultiplica = arrayNumeros;
    var resultado = 1;
    
    //while(arrayMultiplica.lastIndexOf !== 0){}

    for(i = 0 ; i < arrayMultiplica.length ; i++){
        resultado = resultado * arrayMultiplica[i];
        document.getElementById("respuesta").innerHTML = "El resultado es " + resultado;
        
    }
}



