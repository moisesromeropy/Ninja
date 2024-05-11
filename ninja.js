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
        console.log(`Nombre: ${this.name}, fuerza: ${this.fuerza}, velocida: ${this.velocidad}, salud: ${this.salud}`)
    }
    drinkSake(){
        this.salud = this.salud + 10;
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }
}
const superSensei = new Sensei("Moises");
superSensei.speakWisdom();
superSensei.showStats();
// const ninja1 = new Ninja("Moises");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();