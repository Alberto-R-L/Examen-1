



google.load("visualization", "1", {packages:["corechart"]});
   

  google.setOnLoadCallback(cargarGrafico);
   function cargarGrafico() {
     
    var data = google.visualization.arrayToDataTable([
      ["Año", "Poblacion", { role: "style" }],
      ["2017", 14252, "color: green; opacity: 0.9"],
      ["2018", 23360, "color: green; opacity: 0.8"],
      ["2019", 40421, "color: green; opacity: 0.7"],
      ["2020", 43500, "color: green; opacity: 0.6"]      
     ]);
/*
    var formatter = new google.visualization.ColorFormat();
    formatter.addRange(0, 50000, 'green', 'green');
    format(data, 1); 
    */

     var opciones = {
        title: "Evolucion de la poblacion de Navacarnero",
        backgroundColor: "skyblue",
        animation:{
        duration: 5000,
        startup: true
       }
     }

    

     new google.visualization.ColumnChart( 
       document.getElementById("grafico")
     ).draw(data, opciones);
   }

