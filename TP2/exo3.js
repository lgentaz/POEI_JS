let j = 0;

while (j<10) {
  console.log(`${super2.name}`);
  j++;
}

let k = 0;
do {
  k = k + 1;
  console.log(`${super1.name}`);
} while (k < 10);

for (let i=1; i<=10; i++){
  console.log(`${super2.name} numero ${i}`);
}
