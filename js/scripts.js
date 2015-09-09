var pigLatin = function(inputString) {

  // debugger;
  var display = stringClean(inputString);
  return display;
};

var stringClean = function(inString) {
  var vowels = "aeiou";
  var consonants = "bcdfghjklmnpqrstvwxyz";
  var tokens = inString.split(" ");
  var tempString;
  var results = [];
  var i;

  for(i=0; i < tokens.length; i++ ) {
    var cleanString = tokens[i].replace(/[\W+]/g, "").toLowerCase();

    if( cleanString.match(/[a-z]+/i) ) {
      if( cleanString.length === 1 )  {
        tempString = cleanString + "ay";
      } else if (vowels.indexOf(cleanString[0]) > -1) {
        tempString = cleanString + "ay";
      } else if ( (cleanString.indexOf('qu')) > 0) {
        var chunks = cleanString.split("qu", 2);
        tempString = chunks[1] + chunks[0] + "quay";
      } else if ( ((consonants.indexOf(cleanString[0] ) > -1) && (consonants.indexOf(cleanString[1]) > -1 )) ||
                  ((cleanString[0] == 'q') && ('u'==cleanString[1]))
                ) {
        var firstTwoChars = cleanString.slice(0,2);
        var restOfWord = cleanString.slice(2);
        tempString = restOfWord + firstTwoChars + "ay";
      } else if (consonants.indexOf(cleanString[0]) > -1 ) {
        var firstChar = cleanString.slice(0,1);
        var restOfWord = cleanString.slice(1);
        tempString = restOfWord + firstChar + "ay";
      }
      results.push(tempString);
    }
  }
  var output = results.join(" ");
  return output;
};

// function splitValue(input, index) {
//     return input.substring(0, index) + "," + input.substring(index);
// }

// $(document).ready(function() {
//
//   $("form#triangle").submit(function(event) {
//
//     var height = parseInt($("input#height").val());
//     var length = parseInt($("input#length").val());
//     var width = parseInt($("input#width").val());
//
//     var result = checkTriangle(height, length, width);
//
//     $(".triangleResult").text(result);
//     $("#result").show();
//
//     event.preventDefault();
//
//   });
// });
