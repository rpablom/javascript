let respuesta = prompt("Categoría: País. Arriesgue una respuesta");

while(respuesta != "Escocia"){
    alert ("Incorrecto!");
    respuesta = prompt("Este país se encuentra en Europa.");
    while(respuesta != "Escocia"){
        alert ("Incorrecto!");
        respuesta = prompt("Su bandera tiene dos colores");
        while(respuesta != "Escocia"){
            alert("Incorrecto!");
            respuesta = prompt("El país se encuentra dentro del Reino Unido");
            while(respuesta != "Escocia"){
                alert("Incorrecto!");
                respuesta = prompt("En su bandera predomina el azul");
                while(respuesta != "Escocia"){
                    alert("Incorrecto!");
                    respuesta = prompt("Es conocido por el uso de kilts en los hombres");
                    if(respuesta != "Escocia"){
                        alert("Incorrecto! La respuesta era Escocia");
                        break;
                    }break;
                }break;
            }break;
        }break;
    }break;
}alert("Correcto!");