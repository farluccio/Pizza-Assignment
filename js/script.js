$(function() {

});
// This function is to get and return the pizza size for an update to the total order
function sizeCost() {
	var pizzaSizeArray = document.getElementsByClassName("menuItemPizza");
	//console.log(pizzaSizeArray.length);  //checking array input
	var sizePrice = 0;
	for (var i = 0; i < pizzaSizeArray.length; i++) {
		if (pizzaSizeArray[i].checked) {
			var sizeSelection = pizzaSizeArray[i].value;
			console.log(sizeSelection);  //checking selection
			//document.getElementById("pizzaOrderSize").innerHTML = sizeSelection;
		}
	}

	if (sizeSelection = "Personal Pizza") {
		sizePrice = 6;
	} else if (sizeSelection = "Medium Pizza") {
		sizePrice = 10;
	} else if (sizeSelection = "Large Pizza") {
		sizePrice = 14;
	} else if (sizeSelection = "Extra-Large Pizza") {
		sizePrice = 16;	
	}
	console.log(sizeSelection + sizePrice);
	document.getElementById("pizzaOrderSize").innerHTML = sizeSelection + "     " + sizePrice;
};
//Function is to get and return the pizza crust selection with associated cost to the total order
function crustCost() {
	var pizzaCrustArray = document.getElementsByClassName("menuItemCrust");
	//console.log(pizzaCrustArray.length);  //checking array input
	var crustPrice = 0;
	for (var i = 0; i < pizzaCrustArray.length; i++) {
		if (pizzaCrustArray[i].checked) {
			var crustSelection = pizzaCrustArray[i].value;
			console.log(crustSelection);  //checking selection
			document.getElementById("pizzaOrderCrust").innerHTML = crustSelection;
		}
	}
	if (crustSelection != "Cheese Stuffed Crust") {
		crustPrice = 0;
	} else {
		crustPrice = 3;
	}
	document.getElementById("pizzaOrderCrust").innerHTML = crustSelection + "   " + crustPrice;
};
	
	/*for 
	
	if (pizzaSize = "personalPizza") {
		document.write("Personal Pizza:	" personalPizza);
	};
	else if(pizzaSize = "mediumPizza") {
		document.write("Medium Pizza:	" mediumPizza);
	};
	else if(pizzaSize = "largePizza") {
		document.write("Large Pizza:	" largePizza);
	};
	else {
		document.write("Extra Large Pizza:	" extraLarge);
	};*/


   
