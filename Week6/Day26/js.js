var animal = {
    raining:true,
    noise:"",
    makeNoise:function(){
      console.log(this.noise)
    }
  }
class NewAnimal {
    constructor(raining, noise) {
        this.raining = raining;
        this.noise = noise;
    }
}

var cat = new NewAnimal(false, "Meow!");
var dog = new NewAnimal(true,"Whoof!")

console.log(cat);
console.log(dog);
var name
if(undefined){
    console.log("it is true")
}
else{
    console.log("it is false")
}