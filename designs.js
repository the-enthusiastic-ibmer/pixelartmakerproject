// Select color input
// Select size input
// Create a Reset Button
// When size is submitted by the user, call makeGrid()

/***** Variables *****/
// Create a variable to represent the input Element
const gridColorElement = document.getElementById('colorPicker');

const formSizePickerElement = document.getElementById('sizePicker');

const tableElement = document.getElementById('pixelCanvas');

const resetButtonElement = document.getElementById('idResetButton');

/***** Functions *****/
function designCanvas(){
  let canvasColor = event.target.value;
    
/* Change the color of the Design Canvas font */  document.getElementById('idDesignCanvas').style.color = canvasColor;

/* Change the font color of the reset button */ 
  resetButtonElement.style.color = canvasColor;
  //console.log("design "+canvasColor);
  colorClick(canvasColor);
}

/***** Create the Grid *****/
function makeGrid(formHeightVal,formWidthVal){  
  //console.log(formHeightVal,formWidthVal);
  //let table = document.getElementById("pixelCanvas");
  
  for (let r=0;r<formHeightVal;r++) {
    let row = tableElement.insertRow(); //tableElement declared at the top 
    for (let c=0;c<formWidthVal;c++) {
      let cell = row.insertCell();
      }
    }
}
function colorClick(canvasColor){
  tableElement.addEventListener("click", (evt)=>{
  evt.target.style.backgroundColor = canvasColor;
  console.log(evt,canvasColor);
  });
}
function deleteTableRows(){
  while(tableElement.hasChildNodes()){
    tableElement.removeChild(tableElement.firstChild);
    let canvasColor = '#000000';
  }
}


/***** Event Listeners *****/

// Create a listener for the grid Height and Width Values
formSizePickerElement.addEventListener('submit', (event)=>{
  event.preventDefault();
  let formHeightVal = formSizePickerElement.querySelector('input[name="height"]').value;
  let formWidthVal = formSizePickerElement.querySelector('input[name="width"]').value;
  makeGrid(formHeightVal,formWidthVal);
})

// Create a listener for the gridColorElement and call the designCanvasText Function
gridColorElement.addEventListener('input', designCanvas);

/* Create a listener for the reset button */
resetButtonElement.addEventListener('click', () => {
  console.log("Here");
  deleteTableRows();
});



/****** Code that I don't wanna delete yet
gridColorElement.addEventListener('input', function(){
  let gridColor = document.getElementById("colorPicker").value;
  designCanvasColor(gridColor);
})
function designCanvasColor(gridColor){
document.getElementById('idDesignCanvas').style.color = gridColor;
  console.log(gridColor);
}
*/

