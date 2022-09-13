//CONSTRUCTORES

class Distancia{
    constructor(punto1, punto2, km){
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.km = km;
    }
}

class Prestadores{
    constructor(nombre, base, tarifaKm, tarifaPlana){
        this.nombre = nombre;
        this.base = base;
        this.tarifaKm = tarifaKm;
        this.tarifaPlana = tarifaPlana;
    }
}


//OBJETOS

const sfepna = new Distancia("Santa Fe", "Paraná", 35);
const sferaf = new Distancia("Santa Fe", "Rafaela", 121);
const sferos = new Distancia("Santa Fe", "Rosario", 173);
const pnasfe = new Distancia("Paraná", "Santa Fe", 35);
const pnaraf = new Distancia("Paraná", "Rafaela", 147);
const pnaros = new Distancia("Paraná", "Rosario", 199);
const rafsfe = new Distancia("Rafaela", "Santa Fe", 121);
const rafpna = new Distancia("Rafaela", "Paraná", 147);
const rafros = new Distancia("Rafaela", "Rosario", 265);
const rossfe = new Distancia("Rosario", "Santa Fe", 173);
const rospna = new Distancia("Rosario", "Paraná", 199);
const rosraf = new Distancia("Rosario", "Rafaela", 265);
const sfesfe = new Distancia("Santa Fe", "Santa Fe", 0);
const pnapna = new Distancia("Paraná", "Paraná", 0);
const rafraf = new Distancia("Rafaela", "Rafaela", 0);
const rosros = new Distancia("Rosario", "Rosario", 0);


const prestador1 = new Prestadores("Don Raúl", "Rafaela", 65, 1200);
const prestador2 = new Prestadores("FC Traslados", "Paraná", 70, 1450);
const prestador3 = new Prestadores("Litoral Móvil", "Santa Fe", 72, 1400);

//ARRAYS

const distancias = [sfepna, sferaf, sferos, pnasfe, pnaraf, pnaros, rafsfe, rafpna, rafros, rossfe, rospna, rosraf, sfesfe, pnapna, rafraf, rosros]
const prestadores = [prestador1, prestador2, prestador3];

function costoTotal(tramo1, tramo2, tramo3, tarifaKm, tarifaPlana) {
    return (tramo1 + tramo2 + tramo3) * tarifaKm + tarifaPlana
}