SIMULADOR DE CALCULO DE COSTOS

Genero este readme porque no estoy comprendiendo cómo utilizar y/o llamar los objetos y sus valores para la aplicación en funciones.

El proyecto consiste en lo siguiente. Trabajo en una empresa que realiza traslados de vehículos en todo el país. En mi proyecto quiero realizar un simulador para
poder, en base a los parámetros que se vayan seleccionando, cuánto cuesta realizar determinado servicio.

Para ello generé tres prestadores de ciudades distintas y tomé cuatro localidades que serían los puntos de traslado.

La fórmula de cálculo consiste en sumar los kilómetros totales que recorre el prestador desde que sale de su ciudad hasta que vuelve. Esto hace que el recorrido se
componga de tres tramos:

- Ciudad del prestador (base) a ciudad en donde comienza el servicio (origen)
- Ciudad en donde comienza el servicio (origen) a ciudad en donde termina el servicio (destino)
- Ciudad en donde termina el servicio (destino) a ciudad del prestador (base)

Luego a este recorrido total se le debe multiplicar por un valor de kilómetro (que es distinto para cada prestador) y se le suma una tarifa plana.

Para esto generé como OBJETOS todas las combinaciones posibles de tramos a partir de un constructor con la class Distancia. Esta sería la base para extraer el valor de
cada uno de los tres tramos del recorrido total.

Luego generé como OBJETOS los tres prestadores a partir de un constructor con la class Prestadores. Esto contiene la localidad de base y las tarifas de cada uno.

Por último, a partir de lo anterior, generé dos ARRAYS que contienen los OBJETOS creados anteriormente.

La idea es que mediante prompt se solicite:

- Localidad de origen del servicio
- Localidad de destino del servicio
- Prestador que lo realiza

Con estos tres datos por consola me debería mostrar el costo del servicio, pero estoy bloqueado con la manera de vincular la información generada a las funciones.