


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

  if (number > 0) {
    for (i = 1; i <= number; i++) {
      resultArray = checkDivisibility(i, resultArray);
    }
  } else if (number < 0) {
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

   randPosX = Math.floor((Math.random() * (bodyWidth - 100))),
   randPosY = Math.floor((Math.random() * (bodyHeight - 100))),

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
