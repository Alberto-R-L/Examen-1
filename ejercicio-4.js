
function iniciarconhtml(){
    var numFilas = prompt("Cuantas filas quieres?");
    var numColumnas = prompt("Cuantas columnas quieres?");
    var color = prompt("de que color lo quieres?(Dilo en ingles)");
    var DOMObjeto = prompt("en que objeto dom?");

    ejercicio4(numFilas, numColumnas, color, DOMObjeto)
}

function ejercicio4 (numFilas, numColumnas, color, DOMObjeto) {
    var parrafo = DOMObjeto
    document.getElementById(parrafo).innerHTML += "<table style='width:100%'>";
    for(i = 0 ; i < numFilas ; i++){
        document.getElementById(parrafo).innerHTML += "<tr>  ";
        for(j = 0 ; j < numColumnas ; j++){
            document.getElementById(parrafo).innerHTML += "<th> Examen </th>";
            if(j% 2 !== 0){
                document.getElementById(parrafo).innerHTML += "";
            }

        }
        document.getElementById(parrafo).innerHTML += "</tr>"
    }
    document.getElementById(parrafo).innerHTML += "</table>"

    document.getElementById(parrafo)

}