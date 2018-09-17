
function columnClicked(columnName) {
	//get the column clicked.
	var column = document.getElementByClassName("grid-item")
	//get the element from the DOM
	document.getElementById(columnName)

	//change the grit item's image to the image supplied 
}

function generateTable(){
	var gridContainer = document.querySelector(".grid-container");

	for (var i = 1; i <= 42; i++) {
		var gridItem = document.createElement('div');
		gridItem.setAttribute('class', 'grid-item');
		gridItem.setAttribute('id', i);
		gridContainer.appendChild(gridItem);
	}
}