let valorPelicula;

let pelicula = prompt(`Seleccione la película que desea mirar o X para cancelar la operación:
    1. Dragon Ball Super: Super Hero
    2. El Brindis
    3. El Joven Ahmed
    4. Perro Samurai
    5. Teléfono Negro`)

    while (pelicula != "x" && pelicula != "X") {
        switch (pelicula) {
            case "1":
                valorPelicula = 800;
                break;
            case "2":
                valorPelicula = 750;
                break;
            case "3":
                valorPelicula = 750;
                break;
            case "4":
                valorPelicula = 800;
                break;
            case "4":
                valorPelicula = 700;
                break;
            case "5":
                valorPelicula = 650;
                break;
            default:
                prompt(`No ingresó una opción válida. Por favor seleccione una película de la lista:
                1. Dragon Ball Super: Super Hero
                2. El Brindis
                3. El Joven Ahmed
                4. Perro Samurai
                5. Teléfono Negro`);
                break;
        }break;
    }alert(`El valor de la película seleccionada es de $${valorPelicula}`);

let tickets = Number(prompt(`Indique la cantidad de tickets que desea`))

function subtotalTickets(tickets, valorPelicula) {
    return tickets * valorPelicula;
}alert(`Usted seleccionó ${tickets} tickets`);
alert(`El importe total por tickets es de $${subtotalTickets(tickets, valorPelicula)}`);
console.log(`Subtotal (tickets): $${subtotalTickets(tickets, valorPelicula)}`);

let valorCombo;

let combo = prompt(`Seleccione el combo que desea agregar o X para cancelar toda la operación
    1. Pop Corn grande + 2 gaseosas
    2. Pop Corn mediano + 2 gaseosas
    3. Pop Corn chico + 1 gaseosa
    4. No deseo agregar ningún combo`)


function subtotalCombo(valorPelicula, tickets, valorCombo) {
    switch (combo) {
        case "1":
            valorCombo = 1200;
            break;
        case "2":
            valorCombo = 1000;
            break;
        case "3":
            valorCombo = 800;
            break;
        case "4":
            valorCombo = 0;
            break;
        default:
            prompt(`No ingresó una opción válida. Por favor seleccione una opción de la lista
            1. Pop Corn grande + 2 gaseosas
            2. Pop Corn mediano + 2 gaseosas
            3. Pop Corn chico + 1 gaseosa
            4. No deseo agregar ningún combo`);
    }return valorPelicula * tickets + valorCombo;
}
alert(`El importe total con el combo agregado es de $${subtotalCombo(valorPelicula, tickets, valorCombo)}`);
console.log(`Importe total: $${subtotalCombo(valorPelicula, tickets, valorCombo)}`);



