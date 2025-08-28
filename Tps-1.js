//01
//alert("Bienvenido 👀")
console.log("Bienvenido 👀")

// 02
/* let mensaje ="Hello World"
console.log(mensaje)

//03
let num1 = 3
let num2 = 5
let resultado = num1 + num2
console.log(`La suma de ${num1} más ${num2} es: ${resultado}`) */

//4
/* let nombre = "Ale"
console.log(`Hola ${nombre}, cómo estás?`)

//5

let numero01 = Number (prompt("ingrese un numero"));
let numero02 = Number (prompt("ingrese otro numero"));

let resultado = numero01 + numero02;
document.write(resultado); */

//6
/* let name = prompt("Ingrese su nombre")
document.write(name)

let numero01 = Number (prompt("ingrese un numero"))
let numero02 = Number (prompt("ingrese otro numero"))

if (numero01 > numero02) {
    document.write(`${name}, el ${numero01} es mayor que ${numero02}`)
} else {
    document.write(`${name}, el ${numero01} es menor que ${numero02}`)
} */

//7
/* let numero01 = Number (prompt("ingrese un numero"));
let numero02 = Number (prompt("ingrese otro numero"));
let numero03 = Number (prompt("ingrese otro numero"));

if (numero01 > numero02 && numero01 > numero03){
    document.write(`${numero01} es mayor a ${numero02} y ${numero03}`);
}else if (numero02 > numero01 && numero02 > numero03){
    document.write(`${numero02} es mayor a ${numero01} y ${numero03}`);
}else {document.write(`${numero03} es mayor a ${numero01} y ${numero02}`);} */

//8
/* let numero = parseInt(prompt("Ingresa un número:"));

if (isNaN(numero)) {
    document.write("Error: Debes ingresar un número válido");
} else if (numero % 2 === 0) {
    document.write(`El ${numero} es divisible por 2.`);
} else {
    document.write(`El ${numero} no es divisible por 2.`);
} */

//9
/* let frase = prompt("Escribe una frase:");
let vocales="";

for (let i = 0; i < frase.length; i++) {
  let caracter = frase.charAt(i).toLowerCase();
  if ("aeiou".includes(caracter)) {
    vocales += caracter;
  }
}

  document.write(vocales); */

  // 10
/*   let numero = +prompt("Ingrese un numero");
let divisible ="";

switch (true){

    case (numero % 2 === 0):
        divisible ="se divide en 2"
        break;
    case (numero % 3 === 0):
        divisible ="se divide en 3"
        break;
    case (numero % 5 === 0):
        divisible ="se divide en 5"
        break;  
    case (numero % 7 === 0):
        divisible ="se divide en 7"
        break;        
default:
    divisible = "no es divisible por el requisito"
}
document.write(`El numero ingresado , ${divisible}`) */

//11
/* let numero = +prompt("Ingrese un numero");
let divisible ="";

switch (true){

    case (numero % 2 === 0):
        divisible ="se divide en 2"
        break;
    case (numero % 3 === 0):
        divisible ="se divide en 3"
        break;
    case (numero % 5 === 0):
        divisible ="se divide en 5"
        break;  
    case (numero % 7 === 0):
        divisible ="se divide en 7"
        break;        
default:
    divisible = "no es divisible por el requisito"
}
document.write(`El numero ingresado , ${divisible}`) */


