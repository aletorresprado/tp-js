1//
/* let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

document.write("<div>");
document.write("<h1>Lista de Meses</h1>");
document.write("<ul>");
for (let i = 0; i < meses.length; i++) {
    document.write("<li>" + meses[i] + "</li>");
}
document.write("</ul></div>"); */

2//
ciudades = ["Nueva York", "Estados Unidos", "Tokio", "España", "Barcelona", "Japón", "Londres", "Reino Unido", "Egipto","Paris"];

while (true){
    let ciudad = prompt("Ingrese una ciudad");

    if(ciudad === null){
    break;
    }
    if(ciudad.trim() ===""){
    continue;    
    }
ciudades.push(ciudad)
}

alert(`Las ciudades son:\n${ciudades.join('\n')}`);
alert(`Ciudad en primera posición es: ${ciudades[0]}\n`); 
alert(`Ciudad en Tercera posición es: ${ciudades[2]}\n`);
alert(`Ciudad en Ultima posición es: ${ciudades[ciudades.length - 1]}`);

console.log(ciudades);

//3 Ejercicio dados resuelto en clases

//4 
function parImpar(numero) {
            if (numero % 2 === 0) {
                return "PAR";
            } else {
                return "IMPAR";
            }
        }

const numero = parseInt(prompt("Ingrese un número entero:"));

if (isNaN(numero)){
    alert(`Ingresa un numero valido`)
}else{
    const resultado = parImpar(numero);
    alert(`El numero ${numero} es ${resultado}`)
    console.log(`El numero ${numero} es ${resultado}`)
}

//5
function cadenaTexto(){

const texto = prompt("Ingrese un texto"); 

if (texto === ""){
    alert("Ingrese Texto"); 
}else if (texto === texto.toUpperCase()){
    alert(`${texto} tiene MAYUSCULAS`);
}else if (texto === texto.toLowerCase()){
    alert(`${texto} minúsculas`);
}else {
    alert(`${texto} minúsculas y MAYUSCULAS`)
}

}
cadenaTexto();

//6
const ladoA = parseInt(prompt("Ingrese el primer lado del triangulo"));
const ladoB = parseInt(prompt("Ingrese el segundo lado del triangulo"));

function square(a , b){
    return 2 * (a + b);
}

const perimetro = square(ladoA, ladoB)

alert(`El perimetro del triangulo es: ${perimetro}`);
console.log(`El perimetro del triangulo es: ${perimetro}`);


//7
const numero = parseInt(prompt("Ingrese un numero"))

function multiplicar(numero) {
    const resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(numero * i);
    }
    return resultados;
}
const tabla = multiplicar(numero);
console.log(tabla); 
alert(`El ${numero} multiplicado hasta 10 da como resultado: ${tabla}`);

