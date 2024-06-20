// Remove the person from the array, if the age is less than 18. [{name:'David',age:25},{name:'Michael',age:17},{name:'John',age:30},{name:'Mary',age: 43}]
const person =[
{
    name: 'David',
    age: 25,
},
{
    name: 'Michael',
    age: 17,
},
{
    name: 'John',
    age: 30,
},
{
    name: 'Mary',
    age: 25,
},
];
let personfil = person.filter(people => people.age >= 18);
personfil.forEach(person => console.log(person));
