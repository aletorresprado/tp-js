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
