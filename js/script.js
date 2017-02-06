var runningTotal = 0;
var sizePrice = 0;
var cheesePrice = 0;
var crustPrice = 0;
var meatPrice = 0;
var veggiePrice = 0;
// This function is to print the pizza size and cost Order
function sizeCost() {
	var pizzaSizeArray = document.getElementsByClassName("menuItemPizza");
	//console.log(pizzaSizeArray.length);  //checking array input
	sizePrice = 0;
	for (var i = 0; i < pizzaSizeArray.length; i++) {
		if (pizzaSizeArray[i].checked) {
			var sizeSelection = pizzaSizeArray[i].value;
			//console.log(sizeSelection);  //checking selection
			//document.getElementById("pizzaOrderSize").innerHTML = sizeSelection;
		}
	}

	if (sizeSelection === "Personal Pizza") {
		sizePrice = 6;
	} else if (sizeSelection === "Medium Pizza") {
		sizePrice = 10;
	} else if (sizeSelection === "Large Pizza") {
		sizePrice = 14;
	} else if (sizeSelection === "Extra-Large Pizza") {
		sizePrice = 16;	
	}
	console.log(sizeSelection + " " +sizePrice);
	document.getElementById("pizzaOrderSize").innerHTML = sizeSelection + " " + "$" + sizePrice + "<br>";
};
//Function is to print the pizza crust selection and cost to Order
function crustCost() {
	var pizzaCrustArray = document.getElementsByClassName("menuItemCrust");
	//console.log(pizzaCrustArray.length);  //checking array input
	crustPrice = 0;
	for (var i = 0; i < pizzaCrustArray.length; i++) {
		if (pizzaCrustArray[i].checked) {
			var crustSelection = pizzaCrustArray[i].value;
			console.log(crustSelection);  //checking selection
			//document.getElementById("pizzaOrderCrust").innerHTML = crustSelection;
		}
	}
	if (crustSelection === "Cheese Stuffed Crust") {
		crustPrice = 3;
	} else {
		crustPrice = 0;
	}
	document.getElementById("pizzaOrderCrust").innerHTML = crustSelection + " " + "$" + crustPrice + "<br>";
};
//Function is to print the pizza sauce selection to Order
function sauceSelection() {
	var pizzaSauceArray = document.getElementsByClassName("menuItemSauce");
	//console.log(pizzaSauceArray.length);  //checking array input
	
	for (var i = 0; i < pizzaSauceArray.length; i++) {
		if (pizzaSauceArray[i].checked) {
			var sauceSelection = pizzaSauceArray[i].value;
			console.log(sauceSelection);  //checking selection
			document.getElementById("pizzaOrderSauce").innerHTML = sauceSelection + "<br>";
		}
	}
	
};
//Function to print cheese selection and cost to Order
function cheeseCost() {
	var pizzaCheeseArray = document.getElementsByClassName("menuItemCheese");
	//console.log(pizzaCheeseArray.length);
	cheesePrice = 0;
	for (var i = 0; i < pizzaCheeseArray.length; i++) {
		if (pizzaCheeseArray[i].checked) {
			var cheeseSelection = pizzaCheeseArray[i].value;
			console.log(cheeseSelection);
			//document.getElementById("pizzaOrderCheese").innerHTML = cheeseSelection;
		}
	}
	if (cheeseSelection === "Extra Cheese") {
		cheesePrice = 3;
	} else {
		cheesePrice = 0;
	}
	document.getElementById("pizzaOrderCheese").innerHTML = cheeseSelection + " " + "$" + cheesePrice + "<br>";
	console.log(cheeseSelection + " " + "$" + cheesePrice + "<br>");
};
//Function to print meat selection and cost to Order
function meatCost() {
	var pizzaMeatOptionsArray = document.getElementsByClassName("menuItemMeat");
	//console.log(pizzaMeatOptionsArray.length);
	var pizzaMeatOrderedArray = [];
	for (var i = 0; i < pizzaMeatOptionsArray.length; i++) {
		if (pizzaMeatOptionsArray[i].checked) {
			pizzaMeatOrderedArray.push(pizzaMeatOptionsArray[i]);
			//console.log(pizzaMeatOrderedArray.length);
			//document.getElementById("pizzaOrderMeat").innerHTML = pizzaMeatOrderedArray;
		}
	}
	meatPrice = pizzaMeatOrderedArray.length - 1;
	var displayMeat = "Meat Selection:" + "<br>"
	for (var j = 0; j < pizzaMeatOrderedArray.length; j++) {
		displayMeat = displayMeat + pizzaMeatOrderedArray[j].value + "<br>";
		
	}
	document.getElementById("pizzaOrderMeat").innerHTML = displayMeat + "Total " + "$" + meatPrice;
		
};
//Function to print veggie selection and cost to Order
function veggieCost() {
	var pizzaVeggieOptionsArray = document.getElementsByClassName("menuItemVeggie");
	//console.log(pizzaVeggieOptionsArray.length);
	var pizzaVeggieOrderedArray = [];
	for (var i = 0; i < pizzaVeggieOptionsArray.length; i++) {
		if (pizzaVeggieOptionsArray[i].checked) {
			pizzaVeggieOrderedArray.push(pizzaVeggieOptionsArray[i]);
			//console.log(pizzaVeggieOrderedArray.length);
			//document.getElementById("pizzaOrderVeggie").innerHTML = pizzaVeggieOrderedArray;
		}
	}
	veggiePrice = pizzaVeggieOrderedArray.length - 1;
	var displayVeggie = "Veggie Selection:" + "<br>"
	for (var j = 0; j < pizzaVeggieOrderedArray.length; j++) {
		displayVeggie = displayVeggie + pizzaVeggieOrderedArray[j].value + "<br>";
		//console.log(displayVeggie);
		
		
	}
	document.getElementById("pizzaOrderVeggie").innerHTML = displayVeggie + "Total " + "$" + veggiePrice;
	
};

function billAmount() {
	runningTotal = 0;
	runningTotal = runningTotal + sizePrice + cheesePrice + crustPrice + meatPrice + veggiePrice;
	document.getElementById("runningTotal").innerHTML = "$" + runningTotal;
}

	