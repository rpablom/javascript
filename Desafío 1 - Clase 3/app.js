/*let carta = prompt(`Elija una opción de la A a la D para pedir carta o la letra X para detener el juego`);
let A = 3
let B = 1
let C = 4
let D = 2
let X = 

switch (carta) {
    case "A":
        console.log("3")
        alert(`Usted suma 3 unidades`);
        break;
    case "B":
        console.log("1")
        alert(`Usted suma 1 unidad`);
        break;
    case "C":
        console.log("4")
        alert(`Usted suma 4 unidades`);
        break;
    case "D":
        console.log("2")
        alert(`Usted suma 2 unidades`);
        break;
    case "X":
        console.log("Detuviste la partida")
        alert('Detuvo la partida');
        break;
    default:
        console.log("Seleccionar valor de A a D");
        break;
}

let carta = 0;

do {
    console.log(`Usted acumula ${carta} * 3`);
    carta ++;
} while(carta <= 21);*/

/*let carta = Number(prompt("Ingrese un valor de 1 a 10 o X para interrumpir"));

for (let opcion = 1; opcion <= 21; opcion++) {
    let acumulado = carta * opcion;
    alert(`${acumulado} puntos acumulados`);
    }*/

    /*let moneda = prompt(`Seleccione el tipo de moneda
    DOL. Dolar
    EUR. Euro
    LIB. Libra
    X. Cancelar
    `);

    let valor = Number(prompt("Ingrese el valor a convertir"));

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }{
        if(moneda = "EUR"){
            let resultado = moneda * Number(139);
            alert(`${valor} "$ equivale a " ${resultado} " Euros"`);
        }
    }while(resultado < 200);


let respuesta = prompt("Categoría: País. Arriesgue una respuesta");

while(respuesta != "Escocia"){
    respuesta = prompt("Incorrecto. Este país se encuentra en Europa");
        respuesta = prompt("Incorrecto. Su bandera tiene dos colores");
    }
}alert("Correcto!");

/*do{
    if(respuesta != "Escocia"){
        prompt("Incorrecto. Este país se encuentra en Europa");
        if(respuesta != "Escocia"){
            prompt("Incorrecto. Este país tiene una bandera de dos colores");
            if(respuesta != "Escocia"){
                prompt("Incorrecto. El país se encuentra dentro del Reino Unido");
                if(respuesta != "Escocia"){
                    prompt("Incorrecto. En su bandera predomina el azul");
                    if(respuesta != "Escocia"){
                        prompt("Incorrecto. Es conocido por el uso de kilts en los hombres");
                        if(respuesta != "Escocia"){
                            alert("Mala suerte! La respuesta era Escocia!")
                        }else(respuesta === "Escocia");{
                            alert("Correcto! Sumaste 1 punto.");
                        };
                    }else(respuesta === "Escocia");{
                        alert("Correcto! Sumaste 2 puntos");
                    }
                }else(respuesta === "Escocia");{
                    alert("Correcto! Sumaste 3 puntos!");
                }
            }else(respuesta === "Escocia");{
                alert("Correcto! Sumaste 4 puntos!");
            }
        }else(respuesta === "Escocia");{
            alert("Correcto! Sumaste 5 puntos!");
        }
    }else(respuesta === "Escocia");{
        alert("Correcto! Sumaste 6 puntos!");
    }
}while(respuesta === "X");*/

const dinero = prompt ("Ingrese un valor");
const totalAPagar = 500;

if (dinero >= totalAPagar) {
  console.log("Podemos pagar");
} else {
  console.log("Fondos insuficientes");
}