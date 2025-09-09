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
class Producto{
    constructor(codigo, nombre, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }
    imprimirDatos(){
        return `${this._codigo}, ${this._nombre}, ${this._precio}`
    };
    
}

let producto1 = new Producto("001", "Zapatilla New", 500)
let producto2 = new Producto("001", "Zapatilla Zeus", 700)
let producto3 = new Producto("003", "Zapatilla Pegazus", 400)

let productos = [producto1, producto2, producto3]


productos.forEach(p => console.log(p.imprimirDatos()));

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

//06

class Libro{
    constructor(isbn, titulo, autor, paginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;

    }
    get isbn(){
        return this._isbn;
    }
    get titulo(){
        return this._titulo;
    }
    get autor(){
        return this._autor;
    }
    get paginas(){
        return this._paginas;
    }
    mostrarLibro(){
        return(`${this._isbn}, ${this.titulo}, ${this._autor}, ${this._paginas}`)
    }
    set isbn(nuenoIsbn){
        return this._isbn = nuenoIsbn;
    }
    set titulo(nuevoTitulo){
        return this._titulo = nuevoTitulo;
    }
    set autor(nuevoAutor){
        return this._autor = nuevoAutor;
    }
    set paginas(nuevoPaginas){
        return this._paginas = nuevoPaginas;
    }
}

let libro1 = new Libro(3453345, "Un Mundo Nuevo", "Ale Torres", 333)
let libro2 = new Libro(3456768, "Tomamos cafe y cerramos trato", "Ale Torres", 321)

let libros = [libro1, libro2]
libros.forEach(p => console.log(p.mostrarLibro()));

libro1._isbn = 1000001
libro1._titulo = "La tristeza de la política"
libro1._autor = "El hombre del futuro"
libro1._paginas = 777

console.log(libro1.mostrarLibro())

if (libro1.paginas > libro2.paginas) {
    console.log(`El libro "${libro1.titulo}" tiene más páginas (${libro1.paginas}) que "${libro2.titulo}" (${libro2.paginas}).`);
} else if (libro2.paginas > libro1.paginas) {
    console.log(`El libro "${libro2.titulo}" tiene más páginas (${libro2.paginas}) que "${libro1.titulo}" (${libro1.paginas}).`);
} else {
    console.log(`Ambos libros tienen la misma cantidad de páginas: ${libro1.paginas}.`);
}