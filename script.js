let array = [1,2,3,4,5,6,7,8];

        let gettingSingleNumber = array.reduce(function(accum,item){
          return accum + item;

        },0);

console.log(gettingSingleNumber); 










 let person = [
    { name: "Alex", age: 28, city: "Muhosransk" },
    { age: 12, city: "Ebenja" },
    { name: "Fedor", age: 26, city: "Hell" },
    { age: 12, city: "Ebenja" },
    { name: "Anton", age: 12, city: "Tatarstan" },
    { name: "Alex ",age: 12, city: "Stohanov" }
 ]

 let filterOfPerson = person
 .filter(function(item){
     return item.name !== undefined
 } 

 )

 console.log(filterOfPerson)

 let nameOfPerson = filterOfPerson.map(function(item){
     return item.name
 })
  
console.log(nameOfPerson)