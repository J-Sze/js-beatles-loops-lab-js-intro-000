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
  var cheer = [];
  var i = 0
  do {cheer.push(`I love the Beatles!`);
  } while (i < 15);
  return cheer; 
}