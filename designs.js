// Select color input
// Select size input
// Create a Reset Button
// When size is submitted by the user, call makeGrid()

// Create a variable to represent the input Element
const gridColorElement =  document.getElementById('colorPicker');


// Create a listener for the gridColorElement and store the color selected in a variable named gridColor
// Pass the gridColor argument to the designCanvasColor function.

/* gridColorElement.addEventListener('input', function(){
  let gridColor = document.getElementById("colorPicker").value;
  designCanvasColor(gridColor);
})*/

gridColorElement.addEventListener('input', makeGridColor);

function makeGridColor(){  
  document.getElementById('idDesignCanvas').style.color = event.target.value;
  console.log(event.target.value);
}

  

function designCanvasColor(gridColor){
document.getElementById('idDesignCanvas').style.color = gridColor;
  console.log(gridColor);
}

function makeGrid() {

// Your code goes here!

}