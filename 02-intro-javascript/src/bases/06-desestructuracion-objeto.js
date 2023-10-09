//Desestructuracion
//Asignacion desestructurante

const people = {
   nombre: 'Tony',
   age: 45,
   key: 'Iron man',
   range: 'Soldier',
};

const {age, key, nombre} = people;

console.log(nombre);
console.log(age);
console.log(key);

const useContext = ({key, nombre, age, range = 'Capitan'}) => {
   //console.log(nombre, age, range);
   return {
      keyName: key,
      year: age,
      lat_lng: {
         lat: 14.22,
         lng: -12.22,
      },
   }
}

const {keyName, year, lat_lng:{lat, lng}} = useContext(people);
console.log(keyName, year);
console.log(lat, lng);