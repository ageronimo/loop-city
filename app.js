// Loops City


// E1 - Mommy I can count
var count;

// (++) -> inc by 1
// (--) -> dec by 1
// var = var +/- num
console.log("Look Mommy I can count!");
for (count = 1; count <= 100; count++){
   if (count == 1){
    console.log(count + " Mississippi.");
  } else {
  console.log(count + " Mississippis.");    
  }
}


// E2 - Noah's Arc
var animalCount;

for (animalCount = 5; animalCount <10; animalCount++){
  console.log("Animal Population: " + animalCount);
  console.log("There are " + animalCount + " animals in Noah's Arc.");
}


// E3 - Hip Hop Array
var partyAnimals = ["Zebra", "Giraffe", "Lion", "Lemur", "Hippo"];
var i;
var partyActivity = [" drinks soda like there's no tomorrow.", " eats all the food in the fridge.", " tries on everyone's hats.", " leaps into the pool.", " monitors that AUX cord."];

for (i = 0; i < partyAnimals.length; i++){
  console.log("The " + partyAnimals[i] + partyActivity[i]);
}


// E4 Merlin's Battle Weapon
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
  wizard : "Merlin",
  weapon : weaponChest[2],
  power : 30
};

function wizardry(weapon){
  if (weapon == "Sorcerer's Stone"){
    console.log(hero.wizard + " shall slay the dragon with the " + weapon + "!");
  } else {
    weapon = weaponChest[1];
    console.log(hero.wizard + " has unequipped the " + hero.weapon + ". " + weapon + " has been equipped. " + hero.wizard + " is ready for war with the " + weapon + ".")
  }
}

wizardry(hero.weapon);
