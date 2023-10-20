import {getSaludo} from '../../src/base-pruebas/02-template-string'

describe('Test in 02-template-string', () => {
   test('getSaludo should return "Hola Jordan"', () => {
      const name = 'Jordan';
      const message = getSaludo(name);
      expect(message).toBe(`Hola ${name}`);
   })
})