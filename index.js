const display = document.getElementById("display")

    // function for displaying the value
    function displayValue(input){
        display.value += input
    }
    // function for clearing the display
    function clearValue(){
        display.value = ""
    }
    
    // function for Calculations
    function calculateValue() {
        try {
          const result = eval(display.value);
          display.value = result;
        } catch (error) {
          display.value = "Error";
        }
      }
    
    // function for +/- operator
    function switchValue(){
        const currentValue = parseFloat(display.value);
        display.value = (currentValue * -1).toString();
    }
    
    // function for percentage
    function percentage(){
        const currentvalue = display.value
        const decimal = currentvalue / 100
        display.value = decimal
    }