function pingPong(number) {
   var result = [];

   for (var i = 1; i <= number; i++) {
     if (i % 3 === 0) {
       if (i % 5 === 0) {
         result.push("ping pong");
       } else {
         result.push("ping");
       }
     } else if (i % 5 === 0) {
       result.push("pong");
     } else {
       result.push(i);
     }
   }

   return result;
