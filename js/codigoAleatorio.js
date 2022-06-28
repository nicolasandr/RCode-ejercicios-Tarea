/*
Crear una funcion que genere codigos aleatorios unicos, estos codigos pueden ser numericos
 o alfanumercios, por ej. probar crear 30 numero y cada vez que crearmos un numero este debe 
 ser unico no se puede repetir con uno generado anteriormente.
*/

let numRandom = [];
let repeticiones = 0;
/*almaceno mis 30 numeros random*/
for (let posicionNumRandom = 0; posicionNumRandom < 30; posicionNumRandom++) {
  numRandom[posicionNumRandom] = Math.round( Math.random() * (40 - 1) + parseInt(1));
}

/*comparo cada numero random con el resto de numeros en el arreglo.*/
for (let recorridoArreglo1 = 0; recorridoArreglo1 < 30; recorridoArreglo1++) {
    
  for (let recorridoArreglo2 = 0; recorridoArreglo2 < 30; recorridoArreglo2++) {
    /*si se encuentran 2 numeros iguales en el arreglo, se vuelve a asignar un numero random a esa posicion*/
    if (numRandom[recorridoArreglo1] == numRandom[recorridoArreglo2]) {
       repeticiones++;
      /*puede tolerar hasta una repeticion porque se compara a si mismo cuando recorridoArreglo1 == recorridoArreglo1*/
      if (repeticiones == 2) {
        numRandom[recorridoArreglo1] = Math.round(Math.random() * (40 - 1) + parseInt(1));
        /*se reinicia la comparacion para chequear nuevamente que no se encuentren numeros aleatorios  iguales en ninguna posicion*/
        recorridoArreglo1 = 0;
        repeticiones=0;
      }
    }
  }
  repeticiones=0;
}
for (let posicionNumRandom = 0; posicionNumRandom < 30; posicionNumRandom++) {
  document.write(`numero${posicionNumRandom + 1}:${numRandom[posicionNumRandom]}<br>`);
}
