class Ninja {
    constructor(name){
        this.name = name;
        this.salud = 30;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`El nombre del ninja es ${this.name}`)
    }
    showStats(){
        console.log(`El ninja se llama ${this.name}, tiene una fuerza de
        ${this.fuerza}, una velocidad de ${this.velocidad} y una salud de
        ${this.salud}`)
    }
    drinkSake(){
        this.salud = this.salud + 10;
    }
}
const ninja1 = new Ninja("Moises");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();