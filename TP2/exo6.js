supers.sort();
console.log("ordre alphabétique");
console.log(supers);
supers.sort((a, b) => a.length - b.length);
console.log("ordre de longeur des nom");
console.log(supers);