describe('getPrimes', function() {

  it("return 2 if number is 2", function() {
    expect(getPrimes(2)).to.eql([2]);
  });

  it ("return an array with 2 and 3 inside it", function() {
    expect(getPrimes(3)).to.eql([2,3]);
  });
  // debugger;

  it("return all primes minus numbers that are a multiple of 2", function() {
    expect(getPrimes(9)).to.eql([2,3,5,7,9]);
  });

  it("return all primes minus numbers that are a multiple of 2 and 3", function() {
    expect(getPrimes(11)).to.eql([2,3,5,7,11])
  })



});
