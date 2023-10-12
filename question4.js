function  Animal (name, speed) {
    this.name = name;
    this.speed = speed;
};

Animal.prototype.run = function(speed){
    this.speed+=speed;
}

// Static method for Animal
Animal.compareBySpeed = function (a1, a2) {
    if (a1.speed < a2.speed) {
        return `${a1.name} is slower than ${a2.name}`;
    } else if (a1.speed > a2.speed) {
        return `${a1.name} is faster than ${a2.name}`;
    }
    return `${a1.name} and ${a2.name} have the same speed`;
};


function Rabbit (name, speed){
    Animal.call(this, name,speed);
}
Rabbit.prototype.hide = function(){
    console.log(this.name + " hide" );
}


Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

let rabbit = new Rabbit("Kiki", 2500);
console.log("\n\n\n=======Animal-Rabbit========");
console.log("Kiki Rabbit!");
console.log("Kiki speed is: " + rabbit.speed);
console.log("Increasing Kiki speed by 1000");
rabbit.run(1000);
console.log("New Kiki speed: " + rabbit.speed);
rabbit.hide();


let rabbit2 = new Rabbit("Riri", 9082);
console.log("Riri Rabbit!");
console.log("Riri speed is: " + rabbit2.speed);
console.log("Increasing Riri speed by 2");
rabbit2.run(2);
console.log("New Riri speed: " + rabbit2.speed);
rabbit2.hide();

console.log("\nCompare by speed");
console.log("Comparison result:", Animal.compareBySpeed(rabbit, rabbit2));


