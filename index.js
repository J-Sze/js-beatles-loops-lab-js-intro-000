// add solution here
function theBeatlesPlay(musician, instrument) {
var people = []; 
  for (var i = 0;  musician.length > i; i++) {
    people.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return people; 
}

function johnLennonFacts(fact) {
  var i = 0
  while( i < fact.length) {
    console.log(`${fact[i]}!!!`);
  }
  return johnLennonFacts(10);
}
