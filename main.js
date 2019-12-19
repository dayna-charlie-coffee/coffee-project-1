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
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
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
        if ((coffee.roast === selectedRoast) || selectedRoast === "all") {
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
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];



tbody.innerHTML = renderCoffees(coffees);


//============== COFFEE EVENT LISTENERS ==================//
//original select submit

//==== ADDED EVENT LISTENERS ====//
roastSelection.addEventListener('change', updateCoffees);
coffeeSelection.addEventListener("keyup", function() {
    updateCoffees(coffeeSelection.value);
});
