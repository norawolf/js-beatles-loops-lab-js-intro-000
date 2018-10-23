function theBeatlesPlay(musicians, instruments) {
  var array = [];

//for ([initialization]; [condition]; [iteration]) {
//  [loopBody]; }

  for (let i = 0; i <= 3; i ++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}

function johnLennonFacts() {
  var array = [];
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

let i = 0;
  while (i >= 0 && i <=3){
    array.push(`${facts[i]}!!!`);
    i++;
  }

return array;

}
