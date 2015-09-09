describe('getPrimes', function() {

  it("return 2 if number is 2", function() {
    expect(getPrimes(2)).to.eql([2]);
  });

  it (" return an array with 2 and 3 inside it", function() {
    expect(getPrimes(3)).to.eql([2,3]);
  });
  // debugger;

  // it("What", function() {
  //   expect(getPrimes(9)).to.eql([2,3,5,7]);
  // });



});
