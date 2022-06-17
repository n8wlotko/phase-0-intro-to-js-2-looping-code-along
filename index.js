// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(name, event){
    let cards = []
    for ( let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return cards 
}
function countDown(firstNum){
    while (firstNum > 0) {
        console.log( firstNum );
        firstNum -= 1;
    }
    console.log( firstNum);
}