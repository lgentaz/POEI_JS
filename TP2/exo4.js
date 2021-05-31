const notes = [14,7.5,10.5,8,12.5,13];

console.log(notes[2]);

console.log("Notes par iteration :");
for (n of notes){
  console.log(n);
}

console.log("Notes sans iteration :");
notes.forEach(n => console.log(n));

//Calculer et afficher la moyenne des notes stockées dans la variable notes.
console.log("la moyenne est :");
let sum = notes.reduce((acc, curr) => acc + curr);
console.log(sum/notes.length);