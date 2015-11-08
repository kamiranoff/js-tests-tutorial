describe('Some Feature', function() {
  describe('#someFunction',function(){

    /**
     *
     * Also available
     * toBeFalsy();
     * not.toBeTruthy();
     * toBe(true);
     * etc....
     */

    it("should return true when called",function(){
      expect(someFunction()).toBeTruthy();
    });

    it("return an array of names",function(){
      expect(anotherFunction()).toContain("Psylocke");
      expect(anotherFunction()).not.toContain("Magneto");
    });

  });

  describe('User', function() {
    it('should ensure that the user is 21 or older', function() {
      expect(User.getAge()).toBeGreaterThan(20);
    });
  });
});