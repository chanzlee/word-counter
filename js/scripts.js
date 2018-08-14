  $(document).ready(function() {
    $("#wordOrder").submit(function(event) {
      var sentence = $("#sentence").val();

      var sentence = 'apple apple bee chan chan chan'
      var words = sentence.split(" ");
      var object = {};

// object[word] refers to the specific value related to the word inside the object. Function below will check if there's a presisting value related to the word stored inside the object.

// If there is already a value for the word saved, it will add up the frequency(value) of that word if it encounters the same word during the iteration. If there is no presisting word, it will create a new key-value pair, where the value starts with one.

    words.forEach(function(word) {
      if(object[word]){
      object[word] +=1;
      } else {object[word] = 1;}

      return object;
    });

// So far, it will create such example:
// sentence= apple apple bee chan chan chan
// object= { "apple":2, "bee":1, "chan":3 }
// but we cannot really observe this with alert(object).


// Below functions will sort this object in order of the greatest frequency to the lowest appearances in the sentence. First, it divides the object into array elements, based on the words and according appearances (based on key-value pair).

// alert(Object.keys(object));

    var pairArray = [];
    pairArray = Object.keys(object).map(function (sortedWord) {
      return {
        word: sortedWord,
        appearance: object[sortedWord]
      };
    });

// alert(pairArray[0].word);
    var finalArray = pairArray.sort(function (a,b) {
      return b.appearance - a.appearance;
    });

// Example for now:
// sentence= apple apple bee chan chan chan
// finalarray= [ {word: chan, appearance: 3}, {word: apple, appearance: 2}, {word: bee, appearance: 1} ]

// Finally, we will append each object elements into individual paragraph.

  finalArray.forEach(function (wordAppearancePair) {
    $("div#output").append("<p>" + Object.values(wordAppearancePair) + "</p>");
  });

// or you can use wordAppearancePair.word or wordAppearancePair.appearance to access the object value.

  event.preventDefault();
  });
});
