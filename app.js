// Loops City


// E1 - Mommy I can count
var count;

// (++) -> inc by 1
// (--) -> dec by 1
// var = var +/- num
console.log("Look Mommy I can count!");
for (count = 0; count <= 100; count++){
  console.log(count + " Mississippis.");
   if (count == 1){
    console.log(count + " Mississippi.")
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
var sentence="";
var partyActivity = [" drinks soda like there's no tomorrow.", " eats all the food in the fridge.", " tries on everyone's hats.", " leaps into the pool."];

for (i = 0; i <= partyAnimals.length; i++){
  console.log("The " + partyAnimals[i] + partyActivity[i]);
}
//^ fix later


// E4 Merlin's Battle Weapon
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
  wizard : "Merlin",
  weapon : weaponChest[1],
  power : 30
};

function wizardry(weapon){
  if (weapon == "Sorcerer's Stone"){
    console.log(hero.wizard + " shall slay the dragon with the " + weapon);
  } else {
    console.log(weapon + " has been equipped. " + hero.wizard + " is ready for war with the " + weapon + ".")
  }
}

wizardry(hero.weapon);
// had trouble invoking bc i put wizardy :b