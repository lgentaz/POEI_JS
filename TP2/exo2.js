let super1={'name':"Wonderwoman", 'note':0, 'pop':""}

super1.note = noter();

//créer une fonction noter()
function noter(){
  let n = prompt(`Quelle note donnez-vous à ${super1.name}?`);
  return n;
}

if (super1.note >= 8){ super1.pop = "Très populaire";}
else if (super1.note >= 6){ super1.pop = "Populaire";}
else if (super1.note >= 5){ super1.pop = "Assez populaire";}
else if (super1.note < 5){ super1.pop = "Pas populaire";}

console.log(`${super1.name} est ${super1.pop}.`);

let super2={'name':"Batman", 'note':5, 'pop':""}

switch(super2.note){
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    super2.pop = "Pas populaire";
    break;
  case 5:
    super2.pop = "Assez populaire";
    break;    
  case 6:
  case 7:
    super2.pop = "Populaire";
    break; 
  case 8:
  case 9:
  case 10:
    super2.pop = "Très populaire";
    break; 
}

console.log(`${super2.name} est ${super2.pop}.`);
