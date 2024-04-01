const people = {
   name: 'Tony',
   surname: 'Stark',
   age: 45,
   address: {
      city: 'New York',
      zip: 4565689,
      lat: 14.32,
      lng: 34.65,
   }
};

const people2 = {...people};
people2.name = 'Peter';

console.log(people);
console.log(people2);