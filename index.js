// add solution here
function theBeatlesPlay(musician, instrument) {
var people = []; 
  for (var i = 0;  musician.length > i; i++) {
    people.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return people; 
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0
  while( i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  cheer = [];
  do {cheer.push(`I love the Beatles!`);
  } while (num > 15);
  return cheer; 
}