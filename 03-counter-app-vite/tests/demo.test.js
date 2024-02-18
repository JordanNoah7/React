describe('Test in <DemoComponent/>', () => {
   test("This test must not fail", () => {
      // 1. Initialization
      const message1 = 'Hola Mundo';
   
      // 2. Stimulus
      const message2 = message1.trim();
   
      // 3. Observe the behavior... expected
      expect(message1).toBe(message2);
   });
});