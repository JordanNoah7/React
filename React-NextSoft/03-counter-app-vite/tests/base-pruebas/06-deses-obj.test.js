import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
   test("usContext debe retornar un objeto", () => {
      const obj = {
         clave: "dyfmeks",
         nombre: "Jordan",
         edad: 24,
      };
      const objTest={
         nombreClave: obj.clave,
         anios: obj.edad,
         latlng: {
            lat: 14.1232,
            lng: -12.3232,
         },
      }
      const user = usContext(obj);
      expect(user).toEqual(objTest);
   });
});
