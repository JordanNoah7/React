import {getHeroById} from './bases/08-importacion-exportacion'

const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
      const hero = getHeroById(2);
      resolve(hero);
      reject('The hero could not be found.');
   }, 2000)
});

promise.then(() => {
   console.log('Then promise');
}).catch(err => console.warn(err));

const getHeroByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const hero = getHeroById(id);
         if(hero){
            resolve(hero);
         }else{
            reject('The hero could not be found.');
         }
      }, 2000);
   });
};

getHeroByIdAsync(3)
.then(console.log)
.catch(console.warn);