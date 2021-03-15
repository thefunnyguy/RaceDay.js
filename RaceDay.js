let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age =18;

if(early && age > 18){
 raceNumber += 1000;  
}

if(early && age > 18){
 console.log(`race will start at 9:30, your race number is: ${raceNumber}.`); 
}
else if(!early && age > 18){
  console.log(`race will start at 11:00, your race number is: ${raceNumber}.`)
}
else if(age < 18){
  console.log(`race will start at 12:30, your race number is: ${raceNumber}.`)
}
else{
console.log('imagne being 18 L L L');
}
