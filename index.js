var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ['Guitar', 'Bass Guitar', 'Lead guitar', 'Drums'];


function theBeatlesPlay (musicians, instruments){
  for( var j = 0; j < musicians.length; j++){
    var newArray = [];
     newArray.push(`${musicians[0]} plays ${instruments[0]}`);
     newArray.push(`${musicians[1]} plays ${instruments[1]}`);
     newArray.push(`${musicians[2]} plays ${instruments[2]}`);
     newArray.push(`${musicians[3]} plays ${instruments[3]}`);



     }
  
  return newArray; 
}


function johnLennonFacts(facts){
  var exClam = [];
  var i = 0;
  while (i < facts.length) {
  exClam.push(`${facts[i]}!!!`);
  i++;
  
  }
  return exClam;
  
}
  
  
function iLoveTheBeatles(num,n){
  var arr = [];
  var i = 0;
  do {
    arr.push( "I love the Beatles!");
    arr = arr.concat(num)
    i++
     return arr;
  } while (i < 15);
    return num;  
}  


