var getPrimes = function(numberInput) {

  var outputArray = [];
  //debugger;
  if(numberInput > 1) {
    var targetNumber = parseInt(numberInput);
    var increment = 0;
    var multiple = 2;
    var index = 2;
    var i;

    // debugger;
    if (targetNumber === 2) { outputArray.push(targetNumber); return outputArray; }
    if (targetNumber < 5) { outputArray.push(2,targetNumber); return outputArray; }
    if (targetNumber < 7) { outputArray.push(2,3,targetNumber); return outputArray; }

    outputArray = Array.apply(null, {length: targetNumber+1}).map(Number.call, Number).splice(2);

    // add loop here for multiples
    var j;
    for( j = 2; j < targetNumber; j = outputArray[increment]) {
      for(i=j; i < targetNumber; i+=j) {
        outputArray.splice(index,1);
        index+=1;
      }
      increment+=1;
      index=j+2;
    }
  }
  return outputArray;

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
