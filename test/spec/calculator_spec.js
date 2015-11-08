(function() {
  'use strict';

  describe('Calculator', function() {

    beforeEach(function() {
      //Reset value of Calculator.current before the tests
      Calculator.current = 0;
    });

    describe("When adding numbers", function() {

      it("should store the current value at all times", function() {
        expect(Calculator.current).toBeDefined();
        expect(Calculator.current).toEqual(0);
      });
      it("should add numbers", function() {
        expect(Calculator.add(5)).toEqual(5);
        expect(Calculator.add(5)).toEqual(10);
        expect(Calculator.add(5)).toEqual(15);
      });

      it("should add any number of numbers", function() {
        expect(Calculator.add(1, 2, 3)).toEqual(6);
        expect(Calculator.add(1, 2, 3, 4)).toEqual(16);
      });

    });

    describe("When subtracting numbers", function() {
      it("should subtract any number of numbers", function() {
        expect(Calculator.subtract(5)).toEqual(-5);
      });
    });

    it("should reset the current value", function() {
      Calculator.current = 20; // Give a set value to avoid false positive as current is set to 0 initialy.
      Calculator.reset();
      expect(Calculator.current).toEqual(0);

      Calculator.add(5);
      Calculator.add(20);
      expect(Calculator.current).toEqual(25);

      Calculator.reset();
      expect(Calculator.current).toEqual(0);

    });



  });

})();
