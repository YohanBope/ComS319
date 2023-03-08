function drawTriangle(size) {
   
   for(let i = 1; i <= size; i++){
      let string = "";
      for(let j = 1; j <= i; j++){
         string += "*";
      }
      console.log(string);
   }// Your solution goes here
}
drawTriangle(4);