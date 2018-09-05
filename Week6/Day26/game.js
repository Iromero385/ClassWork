function Character(name, profession, gender, age, strength, hitPoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function () {
        console.log("name: " + this.name)
        console.log("Profession " +this.profession)
        console.log("Gender " +this.gender)
        console.log("Age: " +this.age)
        console.log("Strenght " +this.strength)
        console.log("HP " +this.hitPoints)
    }
    this.isAlive = function (){
        if(this.hitPoints>=0){
            return true;
        }
        else{
            return false;
        }
    }     
}

function attack(attacker, defender){
    defender.hitPoints -= attacker.strength;
}
function levelUp(player){
    player.age++; 
    player.strength+=5;
    player.hitPoints+=15;
}
 var player1 = new Character("Harry","Wizard","male",15,Math.floor(Math.random()*50+10),500)
 var player2 = new Character("Vincent","Assassin","male",24,Math.floor(Math.random()*50+20),400)
var i = 1
 while(player1.isAlive() && player2.isAlive()){
    
     console.log("Round "+i)
    var coin = Math.floor(Math.random()*2+1)
    switch(coin){
        case 1:
        attack(player1,player2);
        break;
        case 2:
        attack(player2,player1)
        break;
    }
    i++;
    if(!player1.isAlive()){
        console.log("***********___***********")
        console.log(player1.name + " is dead.")
        console.log("**********************")
        player1.printStats();
        player2.printStats();
        console.log("**********************")
        
    }
    if(!player2.isAlive()){
        console.log("***********___***********")
        console.log(player2.name + " is dead.")
        console.log("**********************")
        player2.printStats();
        player1.printStats();
        console.log("**********************")
    }
    

 }