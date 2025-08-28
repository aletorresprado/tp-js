// 1
/* let edad = +prompt("Ingrese sus edad");

if (edad < 18) {
    document.write("Eres menor de edad, no puedes conducir");    
}else if (edad >= 18 && edad < 80 ) {
    document.write("Eres mayor de edad, puedes conducir");
}else if (edad >= 80) {
    document.write("Eres abuelito, deberías pensar en dejar de conducir");
}
 */
// 2
/* let nota = +prompt("Ingresa la nota");

if (isNaN(nota) || nota < 1 || nota > 10){
    document.write("La nota es inválida")
}else if (nota <= 2){
    document.write("Muy deficiente")
}else if (nota <= 4){
    document.write("Insuficiente")
}else if (nota <= 6){
    document.write("Suficiente")
}else if (nota <= 7){
    document.write("Bien")
}else if (nota <= 9){
    document.write("Notable")
}else if (nota = 10){
    document.write("Excelente")
} */
// 3 
/* let cadenas = [];
let bucle = true;

while (bucle){
    let texto = prompt("Ingrese un texto");

    if(texto === null){
        bucle = false;
    }else if (texto.trim !== ""){
        cadenas.push(texto.trim());
    }

}
if (cadenas.length > 0) {
    const resultado = cadenas.join("-");
    alert("Cadenas concatenadas:\n" + resultado);
    console.log("Resultado:", resultado);
} else {
    alert("No se ingresaron cadenas de texto.");
}
 */
// 4
/* let cadenas = [];
let bucle = true;

while (bucle){
    let numeros = prompt("Ingrese un numero");

    if(numeros === null) {
        bucle = false;
    }else {
        let numero = Number(numeros);
        if (!isNaN(numero)){
            cadenas.push(numero);
        }else{
        alert("Ingresa un número válido.");
    }
    }
}
if (cadenas.length > 0) {
    const resultado = cadenas.reduce((total, num) => total + num, 0);
    alert("Suma de numeross:\n" + resultado);
    console.log("Resultado:", resultado);
    console.log(cadenas);

} else {
    alert("No se ingresaron numeros.");
}
 */
// 5  RESUELTO EN CLASE DNI
//6
/*    let valor = prompt("Ingrese un numero hasta 50")

   let numero = parseInt(valor);

   if (isNaN(numero) || numero < 1 || numero > 50) {
        console.log("Ingrese un numero Valido")
   } else {
        for (let i = numero; i >= 1; i--) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        console.log(linea);
        }
    }
 */
//7
/*    let valor = prompt("Ingrese un numero hasta 50")

   let numero = parseInt(valor);

   if (isNaN(numero) || numero < 1 || numero > 50) {
        console.log("Ingrese un numero Valido")
   } else {
        for (let i = numero; i >= 1; i--) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        console.log(linea);
        }
    }

 */
//8
/*    let valor = prompt("Ingrese un numero hasta 50")

   let numero = parseInt(valor);

   if (isNaN(numero) || numero < 1 || numero > 50) {
        console.log("Ingrese un numero Valido")
   } else {
        for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
        }
    }

 */
//9
/* for (let i = 0; i <= 500; i++){
    console.log(i)
    if(i % 4 ===0 & i % 9 ===0){
        console.log(`${i}, es multiplo de 4 y 9`)
    }else if(i % 4 ===0){
        console.log(`${i}, es multiplo de 4`)
    }else if(i % 9 ===0){
        console.log(`${i}, es multiplo de 9`)
    }else if(i % 5 === 0){
        console.log(`----------------`)
}
} */
//10
/* let filas = parseInt(prompt("Ingrese el número de filas:"));
let columnas = parseInt(prompt("Ingrese el número de columnas:"));

// Validar entradas
if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
    console.log("Por favor, ingrese números válidos mayores a 0");
} else {
    const totalCeldas = filas * columnas;
    let numero = totalCeldas; // Empezar desde el número más alto
   
    console.log(`Tabla de ${filas}×${columnas} (números del ${totalCeldas} al 1):`);
    console.log("=" .repeat(columnas * 4));
   
    // Generar tabla
    for (let i = 0; i < filas; i++) {
        let fila = "";
        for (let j = 0; j < columnas; j++) {
            // Formatear número para que ocupe el mismo espacio
            fila += numero.toString().padStart(4, ' ') + " ";
            numero--;
        }
        console.log(fila);
    }
} */
//11
/* let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
   

    if (isNaN(edad) || edad < 0) {
        alert("Edad inválida. Intente nuevamente.");
        i--;
        continue;
    }
   
    nombres.push(nombre);
    edades.push(edad);
}

let edadMaxima = Math.max(...edades);


let mayores = [];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] === edadMaxima) {
        mayores.push(nombres[i]);
    }
}

if (mayores.length === 1) {
    console.log(`La persona mayor es: ${mayores[0]} con ${edadMaxima} años`);
    alert(`La persona mayor es: ${mayores[0]} con ${edadMaxima} años`);
} else {
    console.log(`Las personas mayores son: ${mayores.join(", ")} con ${edadMaxima} años`);
    alert(`Hay empate: ${mayores.join(" y ")} tienen ${edadMaxima} años`);
}

console.log("Datos ingresados:");
for (let i = 0; i < 3; i++) {
    console.log(`${nombres[i]}: ${edades[i]} años`);
} */
//12
/* let numeroAlet;
do{
    numeroAlet = Math.floor(Math.random() * 99 ) +1;
    console.log (`El numero es: ${numeroAlet}`);
   
}while (numeroAlet <= 0) */

//13
/* let texto = prompt("Ingrese un texto")
TEXTO = texto.toLocaleUpperCase();
document.write(`${TEXTO}`);
 */
//14
/* let texto = "Hola como estas";

let resultado = "";


for (let i = 0; i < texto.length; i++) {
     resultado += texto[i];
    if (i < texto.length - 1) {
        resultado += "-";
    }
}

console.log(resultado); */

// 15
/* let texto = "Alejandro";
let contadorVocales = (texto.match(/[aeiouáéíóúü]/gi) || []).length;

console.log(`${contadorVocales} vocales`);

//16
let texto = "hola que tal";
let textoReves = texto.split('').reverse().join('');

console.log(textoReves);

//17
let texto = "Hola";

let posicion = texto.search(/[aeiouáéíóúü]/i);

if (posicion !== -1) {
    console.log(`La primera vocal '${texto[posicion]}' está en la posición: ${posicion}`);
} else {
    console.log("No se encontraron vocales en el texto");
} */
