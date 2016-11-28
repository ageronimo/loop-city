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

var partyActivity = [" drinks soda like there's no tomorrow.", " eats all the food in the fridge.", " tries on everyone's hats.", " leaps into the pool."];
var a;

for (i = 0; i < partyAnimals.length; i++){
  console.log("The " + partyAnimals[i])
  for (a = 0; a < partyActivity.length; a++){
    console.log(partyActivity[a]);
  }
}

