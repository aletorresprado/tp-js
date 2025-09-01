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