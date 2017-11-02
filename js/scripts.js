// Business Logic.


function checkDivisibility(number, collection) {
  'use strict';
  if (number % 3 === 0) {
    if (number % 5 === 0) {
      collection.push("ping pong");
    } else {
      collection.push("ping");
    }
  } else if (number % 5 === 0) {
    collection.push("pong");
  } else {
    collection.push(number);
  }

  return collection;
}

function pingPong(number) {
  'use strict';
  var i, resultArray = [];

  if (number > 0) { // Positive numbers
    for (i = 1; i <= number; i++) {
      resultArray = checkDivisibility(i, resultArray);
    }
  } else if (number < 0) { // Negative numbers
    for (i = -1; i >= number; i--) {
      resultArray = checkDivisibility(i, resultArray);
    }
  } else {
    resultArray.push(0);
  }

  return resultArray;
}
var count = 0; 
function placeNumber(number) {
  'use strict';
  var bodyWidth = $(".page-wrapper").width(),
    bodyHeight = $(".page-wrapper").height(),
    // Subtract 100px from width and height so it stays within the page
    randPosX = Math.floor((Math.random() * (bodyWidth - 100))),
    randPosY = Math.floor((Math.random() * (bodyHeight - 100))),
    // We need to identify each number item with a unique ID
    newDiv = '<div class="random-item" id="number-' + count + '" >' + number + '</div>',
    randColor = "#" + Math.floor(Math.random() * 16777215).toString(16),
    randFontSize = (Math.random() * 10).toFixed(2).toString() + "rem",
    styles = {
      'left': randPosX,
      'top': randPosY,
      'color': randColor,
      'font-size': randFontSize
    };

  $("#main").append(newDiv);

  $("#number-" + count).css(styles);
  count++;
}

$(document).ready(function () {
  'use strict';
  $("form#ping-pong").submit(function (event) {
    event.preventDefault();
    $("ul#result").empty();
    var inputNumber = parseInt($("input#number").val()),
      numbers = pingPong(inputNumber);

    // To prevent all the numbers showing up at once, we show them in a step by step fashion
    function showNumbers(index, time) {
      if (index < numbers.length) {
        setTimeout(function () {
          placeNumber(numbers[index]);
          // $("ul#result").append("<li>" + numbers[index] + "</li>");
          showNumbers(++index, time / index);
        }, time);
      }
    }
    showNumbers(0, 1000);
  });

  $("button#clear").click(function () {
    $(".random-item").remove();
  });
});
