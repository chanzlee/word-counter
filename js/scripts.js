  $(document).ready(function() {
    $("#wordOrder").submit(function(event) {
      var sentence = $("#1").val();
      var words = sentence.split(" ");

      var object = {};


    words.forEach(function(word){
      if(object[word]){
      object[word] +=1;
    } else {object[word] = 1;}
    });

    Object.keys(object).forEach(function(sortedWord){
      $("#output").append("<p>" + sortedWord + ":" + object[sortedWord] + "</p>")
    });

    // return result;


  $("#output").show();

  event.preventDefault();
  });
  });
