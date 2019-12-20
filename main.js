"use strict"


//============ VARIABLES ===============//
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

//adding for search function
var coffeeSelection = document.querySelector('#myInput');

//========= ADD COFFEE =========//
var createCoffee = document.querySelector('#submit');
createCoffee.addEventListener('click', function () {
    var addCoffeeRoast = document.getElementById("add-coffee");
    var newCoffeeName = document.getElementById('newInput');

    if (newCoffeeName !== ""){
        newCoffee(addCoffeeRoast.value, newCoffeeName.value);
        updateCoffees();
    }
});





//======= Rendering Coffees ======//
function renderCoffee(coffee) {
    var html = '<div class="coffee m-4">';
    html += '<h2 class="coffee-name">' + coffee.name + '</h2>';
    html += '<p class="coffee-roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }

    return html;
}



//========= FILTER COFFEES ROAST AND SEARCHBOX INPUT ==========//
var updateCoffees = function() {
    // e.updateDefault
    var selectedRoast = roastSelection.value;
    var selectedCoffee = coffeeSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast) || selectedRoast === "All") {
            if (coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())){
            filteredCoffees.push(coffee);
                }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
};


//======== Create NEW COFFEE ========//
var newCoffee = function (type, name) {
    var newCoffeeObj = {id: coffees.length + 1, name: name, roast: type};
    console.log(newCoffeeObj);
    coffees.push(newCoffeeObj);
    console.log(coffees);
};


//================= COFFESS TABLE ================//
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light Tan', roast: 'Nitty Gritty'},
    {id: 2, name: 'Encarnación', roast: 'Nitty Gritty'},
    {id: 3, name: 'Cinnamon', roast: 'Nitty Gritty'},
    {id: 4, name: 'Chancho', roast: 'Take It Easy'},
    {id: 5, name: 'Nipple Twist!', roast: 'Take It Easy'},
    {id: 7, name: 'Macho Nacho', roast: 'Eagle Powers'},
    {id: 8, name: 'Eagle Egg', roast: 'Eagle Powers'},
    {id: 9, name: 'Esqueleto Espresso', roast: 'Eagle Powers'},
    {id: 10, name: 'Ramses Francés', roast: 'Eagle Powers'},
    {id: 11, name: 'NACHOOO!', roast: 'Eagle Powers'},
    {id: 12, name: "Crasssy Lady!", roast: 'Eagle Powers'},
    {id: 13, name: 'Anaconda Squeeze!', roast: 'Eagle Powers'},
];



tbody.innerHTML = renderCoffees(coffees);


//============== COFFEE EVENT LISTENERS ==================//
//original select submit

//==== ADDED EVENT LISTENERS ====//
roastSelection.addEventListener('change', updateCoffees);
coffeeSelection.addEventListener("keyup", function() {
    updateCoffees(coffeeSelection.value);
});
