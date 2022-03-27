/***** Variables *****/
/* Create a variable to represent the 'colorPicker' input element */
const gridColorElement = document.getElementById('colorPicker');

/* Create a variable to represent the grid size elements */
const formSizePickerElement = document.getElementById('sizePicker');

/* Create a variable to represent the table element */
const tableElements = document.getElementById('pixelCanvas');

/* Create a variable to represent the reset button element */
const resetButtonElement = document.getElementById('idResetButton');

/***** Functions *****/
/* Change the Canvas Color based upon the user's selection */
function designCanvas(){
  let canvasColor = event.target.value;
    
/* Change the color of the Design Canvas font when the user makes a selection */  document.getElementById('idDesignCanvas').style.color = canvasColor;

/* Change the font color of the reset button when the user makes a selection */ 
  resetButtonElement.style.color = canvasColor;
  //console.log("design "+canvasColor); Uncomment to check the code
  colorClick(canvasColor);
}

/* Create the Grid */
function makeGrid(formHeightVal,formWidthVal){  
  //console.log(formHeightVal,formWidthVal); Uncomment to check the code
  for (let r=0;r<formHeightVal;r++) {
    let row = tableElements.insertRow(); //tableElement declared at the top 
    for (let c=0;c<formWidthVal;c++) {
      let cell = row.insertCell();
      }
    }
}
/* Add color to the grid cells */
function colorClick(canvasColor){
  tableElements.addEventListener("click", (evt)=>{
  evt.target.style.backgroundColor = canvasColor;
  console.log(evt.target,canvasColor); //Uncomment to check the code;
  });
}
/* Delete the table */
function deleteTableRows(){
  while(tableElements.hasChildNodes()){
    tableElements.removeChild(tableElements.firstChild);
    let canvasColor = '#000000';
  }
}
/***** Event Listeners *****/

/* Create a listener to retrive the grid dimensions */
formSizePickerElement.addEventListener('submit', (event)=>{
  event.preventDefault(); // Don't refresh the page
  let formHeightVal = formSizePickerElement.querySelector('input[name="height"]').value;
  let formWidthVal = formSizePickerElement.querySelector('input[name="width"]').value;
  makeGrid(formHeightVal,formWidthVal);
});
// Create a listener for the gridColorElement and call the designCanvasText Function
gridColorElement.addEventListener('input', designCanvas);

/* Create a listener for the reset button */
resetButtonElement.addEventListener('click', () => {
  //console.log("Reset Button!");
  deleteTableRows();
});
