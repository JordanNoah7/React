const greet = function(name){
   return `Hola, ${name}`;
}

const greet2 = (name) => {
   return `Hola, ${name}`;
}

const greet3 = (name) => `Hola, ${name}`;

const greet4 = () => `Hola mundo`;

console.log(greet('Jordan'));
console.log(greet2('John'));
console.log(greet3('Angie'));
console.log(greet4());

const getUser = () => ({uid: 'ABC', username: 'user1',});
const user = getUser();
console.log(user);

//Homework
const getActiveUser = (name) => ({uid:'ABC567', username: name});
const activeUser = getActiveUser('Jordan');
console.log(activeUser)