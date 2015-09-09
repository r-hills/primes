describe('pigLatin', function() {

  it("returns single char with 'ay' appended if single char is entered", function() {
		expect(pigLatin("n")).to.equal("nay");
	});

	it("returns multiple chars with 'ay' appended if starts with a vowel", function() {
		expect(pigLatin("it")).to.equal("itay");
	});

	it("returns word with first char at the end followed by 'ay' if starts with a consonant", function(){
		expect(pigLatin("to")).to.equal("otay");
	});

	it("returns word with frist two chars at the end if word starts with two consonants", function(){
		expect(pigLatin("thing")).to.equal("ingthay");
	});

	it("returns input word with first two chars at the end with 'ay' appended if first chars are 'qu'", function() {
		expect(pigLatin("queen")).to.equal("eenquay");
	});

  it ("returns all chars up to 'qu' at the end of the word with 'ay' appended", function() {
		expect(pigLatin("squeal")).to.equal("ealsquay");
	});

	it("returns a bunch of shit when you put a sentence in", function() {
		expect(pigLatin("This is A ~~~ bunch o-f cRAP!!!")).to.equal("isthay isay aay unchbay ofay apcray")
	});

});
