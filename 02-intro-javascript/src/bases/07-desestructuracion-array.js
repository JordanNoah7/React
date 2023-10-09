const characters = ['John', 'Jordan', 'Angie'];
const [, , p3] = characters;
console.log(p3);

const getArray = () => {
   return ['ABC', 123];
}

const [letters, numbers] = getArray();
console.log(letters, numbers);

//Homework
const useState = (value) => {
   return [value, () => {console.log('Hello world')}];
}

const [nombre, setNombre] = useState('Jordan');
console.log(nombre);
setNombre();