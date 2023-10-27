




   // JavaScript code with a function to increment the counter
  
   var counterValue = 0;
   var counterElement = document.getElementById("counter");
   function incrementCounter() {
    
       counterValue++;
       counterElement.textContent = counterValue;
   }

   function decrementCounter() {
    
    counterValue--;
    counterElement.textContent = counterValue;
}



function resetCounter() {
    
    counterValue = 0;
    counterElement.textContent = counterValue;
}