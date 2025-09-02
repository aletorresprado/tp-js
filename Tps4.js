//1 

let auto = {
    color: "Blanco",
    marca: "Fiat",
    modelo: "Idea",
    encendido: false,
    
    encender: function(){
    if (!this.encendido){
        this.encendido = true;
        console.log(`El ${auto.marca} ${auto.modelo} ${auto.color} esta encendido`);
        alert(`El ${auto.marca} ${auto.modelo} ${auto.color} esta encendido`);

    }else {
        console.log(`El ${auto.marca} ${auto.modelo} ${auto.color} ya esta encendido`);
        alert(`El ${auto.marca} ${auto.modelo} ${auto.color} ya esta encendido`);
    }
    },

    apagar: function(){
    if (!this.encendido ){
        this.encendido = false;
        console.log(`El ${auto.marca} ${auto.modelo} ${auto.color} esta apagado`);
        alert(`El ${auto.marca} ${auto.modelo} ${auto.color} esta apagado`);
    }else {
        console.log(`El ${auto.marca} ${auto.modelo} ${auto.color} esta apagado`);
        alert(`El ${auto.marca} ${auto.modelo} ${auto.color} esta apagado`);
    }
    }
};

let consulta = prompt(`El auto esta encendido? si o no?`);
if (consulta.toLocaleLowerCase() === "si"){
    auto.encender();
}else if
    (consulta.toLocaleLowerCase() === "no"){
        auto.apagar();
    }else {
    console.log("Responde correctamente por si o por no")
    alert("Responde correctamente por si o por no")

}

//2

let cuenta = {
    titular: "Alex",
    saldo: 0,
    
    ingresar: function() {
    let ingreso = parseInt(prompt("Ingrese el monto a acreditar:"));
    
    if (isNaN(ingreso) || ingreso <= 0) {
        alert("Monto inválido. Debe ser un número positivo.");
        return;
    }
    
    this.saldo += ingreso;
    this.informar(`Se acreditaron $${ingreso}`);
    
    console.log(`Se acreditaron $${ingreso}`);
    console.log(`El nuevo saldo de ${cuenta.titular} es de: $${cuenta.saldo}`);
    alert(`Se acreditaron $${ingreso}\n El nuevo saldo de ${cuenta.titular} es de: $${cuenta.saldo}`);
    },

    extraer: function(){
    let egreso = parseInt(prompt("Ingrese el monto a extraer:"));  
    
    if (isNaN(egreso) || egreso <= 0) {
        alert("Monto inválido. Debe ser un número positivo.");
        return;

    }if (egreso > this.saldo){
        alert("Saldo insuficiente.");
        return;
    }
    
    this.saldo -= egreso;
    this.informar(`Se extrajeron $${egreso}`);

    console.log(`Se extrayeron $${egreso}`);
    console.log(`El nuevo saldo de ${cuenta.titular} es de: $${cuenta.saldo}`);
    alert(`Se extrayeron $${egreso}\n El nuevo saldo de ${cuenta.titular} es de: $${cuenta.saldo}`);
    },
    
    informar: function(mensaje = "Estado actual de la cuenta") {
        console.log(`${mensaje}\nTitular: ${this.titular}\nSaldo: $${this.saldo}`);
        alert(`${mensaje}\nTitular: ${this.titular}\nSaldo: $${this.saldo}`);
    }
};


// Menú con bucle este cambio lo sumo por ia ya que perdia la memoria 
/// lo voy a estudiar para implementar

let opcion;
do {
    opcion = prompt("Bienvenido, ¿qué deseas hacer? (Ingresar, Extraer, Informar, Salir)").toLowerCase();
    
    if (opcion === "ingresar") {
        cuenta.ingresar();
    } else if (opcion === "extraer") {
        cuenta.extraer();
    } else if (opcion === "informar") {
        cuenta.informar();
    } else if (opcion !== "salir") {
        alert("Elige una opción correcta (Ingresar, Extraer, Informar o Salir).");
    }

} while (opcion !== "salir");

alert("Gracias por usar el sistema");

//3
class rectangulo{
    constructor(alto, ancho){
        this._alto = alto;
        this._ancho = ancho;
    }
perimetro(){
   return 2 * this._alto + this._ancho
}
area(){
    return this._alto * this._ancho
}
        
}
 
let rectangulo1 = new rectangulo(100,200);
let rectangulo2 = new rectangulo(200,200);
let rectangulo3 = new rectangulo(300,200);

console.log(`El perimetro del Rectangulo 1 es: ${rectangulo1.perimetro()}`);
console.log(`El perimetro del Rectangulo 2 es: ${rectangulo2.perimetro()}`);
console.log(`El perimetro del Rectangulo 3 es: ${rectangulo3.perimetro()}`);
console.log(`\n`);
console.log(`El area del Rectangulo 1 es: ${rectangulo1.area()}`);
console.log(`El area del Rectangulo 2 es: ${rectangulo2.area()}`);
console.log(`El area del Rectangulo 3 es: ${rectangulo3.area()}`);

//4 
class producto {
    constructor (codigo, nombre, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }
   imprimir(){`${codigo} - ${nombre} - $${precio}`}
}

let objeto1 = new producto('001','Tijera de podar', '45000');
let objeto2 = new producto('002','Rastrillo', '15000');
let objeto3 = new producto('003','Alambre San Martin', '4500');

const productos = [objeto1, objeto2, objeto3];

console.log("--- Usando bucle for ---");
for (let i = 0; i < productos.length; i++) {
console.log(`Código: ${productos[i]._codigo} | Nombre: ${productos[i]._nombre} | Precio: $${productos[i]._precio}`);
document.write(`Código: ${productos[i]._codigo} | Nombre: ${productos[i]._nombre} | Precio: $${productos[i]._precio} </br>`);
}

//5

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this._nombre = nombre;
        this._edad = parseInt(edad);
        this._dni = dni;
        this._sexo = sexo;
        this._peso = parseFloat(peso);
        this._altura = parseFloat(altura);
        this._nacimiento = parseInt(nacimiento);
    }

generacion(){
    if (isNaN(this._nacimiento)){
        return "Ingresa un fecha valida"
    }else if (this._nacimiento >= 1930 && this._nacimiento <= 1948){
        return "Silent Generation - Rasgo: Irreverencia 😐"
    }else if (this._nacimiento >= 1949 && this._nacimiento <= 1968){
        return "Baby Boom - Ambición 😃"
    }else if (this._nacimiento >= 1969 && this._nacimiento <= 1980){
        return "Generación X - Obseción por el éxito 😎"
    }else if (this._nacimiento >= 1981 && this._nacimiento <= 1993){
        return "Generación Y - Frustración 😖"
    }else if (this._nacimiento >= 1994 && this._nacimiento <= 2010){
        return "Generación Z = Cristalito - Irreverencia 🥵"
}
}
esMayorDeEdad(){
    if (isNaN(this._edad)){
        return "Ingresa una edad válida"
    }else if (this._edad >= 18) {
        return "eres mayor de edad"
    }else {
        return "eres menor de edad"
    }  
}
sexo(){
    if (this._sexo === "M") {
        return "Sexo Masculino"
    }else if (this._sexo === "F") {
        return "Sexo Femenino"
    }
}
dni(){
    return this._dni;
}
mostrarDatos(){
    let datos =
    `${this._nombre}, tienes ${this._edad} años, ${this.esMayorDeEdad()}.
    DNI: ${this.dni()},
    ${this.sexo()},
    Peso: ${this._peso} kg,
    Altura: ${this._altura} mts,
    Año de nacimiento: ${this._nacimiento},
    ${this.generacion()}`;

    document.write(datos.replace(/\n/g, "<br>"));
    console.log(datos);
}
}

let nombre = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("Ingresa tu edad"));
let dni = parseInt(prompt("Ingresa tu DNI"));
let sexo = prompt("Selecciona tu sexo, (F) Femenino y (M) para masculino").toUpperCase();
while (sexo !== "F" && sexo !== "M") {
    alert("Debes ingresar F o M correctamente.");
    sexo = prompt("Selecciona tu sexo, (F) Femenino y (M) Masculino").toUpperCase();
}
let peso =parseFloat(prompt("Ingresa tu peso"));
let altura =parseFloat(prompt("Ingresa tu altura"));
let nacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));

let persona1 = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento)

persona1.mostrarDatos();