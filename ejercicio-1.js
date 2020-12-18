



function ejercicio1 () {
var funcion = prompt("Escriba aqui la funcion que desea comprobar");
var parentesis = 0;
var alContrario = false;

for(i = 0 ; i < funcion.length ; i++){

    if(funcion.charAt(i) == "("){
        parentesis ++
    } else if(funcion.charAt(i) == ")"){
        parentesis --
    }

    if(parentesis < 0){
        alContrario = true
    }


}
console.log(parentesis);
if(parentesis == 0 && alContrario == false){
    document.getElementById("respuesta").innerHTML = "El balanceo de parentesis es correcto"
} else {
    document.getElementById("respuesta").innerHTML = "El balanceo de parentesis no es correcto"
}

}