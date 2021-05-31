/*
Soit une variable supers un tableau de supers représentés sous forme de chaînes de 
caractères.
5.1. Question 1
Afficher un message qui indique si la valeur Batman est présente dans supers ou non. 
5.2. Question 2
Afficher un message qui indique où la valeur Batman est présente dans supers. 
5.3. Question 3
Soit le tableau supers ['batman','robin','joker']. 
Combien de cases doivent être parcoures pour trouver :
• Batman • Joker*/
const supers = ['batman','robin','joker', 'wonderwoman', 'flash gordon', 'superman'];

if (supers.includes('batman')){
  alert(`Batman fait bien parti des supers. Il est en position ${supers.indexOf('batman')}`);
}

let i =0 ;
while(supers[i] != "batman"){
  i++;
  if (supers[i] === "batman"){i++;break;}
}
console.log(`on a parcouru ${i} cases jusqu'à batman`)

i =0 ;
while(supers[i] != "joker"){
  i++;
  if (supers[i] === "joker"){i++;break;}
}
console.log(`on a parcouru ${i} cases jusqu'à batman`)