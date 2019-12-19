"use strict"

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

    // var i = coffees.length - 1; i >= 0; i--

    return html;
}
//original
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

//original coffee updates with jquery
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

//working original without jquery
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         //     if(coffee.name === searchCoffees()){
//         //         filteredCoffees.splice(coffee)
//         //     }
//         }
//
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

//testing update coffees
var updateCoffees = function(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {

            filteredCoffees.push(coffee);
            //     if(coffee.name === searchCoffees()){
            //         filteredCoffees.splice(coffee)
            //     }
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
};


//for var coffeeSelection
// function coffeeSearch(userInput) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedCoffee = coffeeSelection.value;
//     var filteredCoffees = [];
//
//     //attempt #1
//     // coffees.forEach(function(coffee) {
//     //     if (coffee.name === selectedCoffee) {
//     //         filteredCoffees.push(coffee);
//     //     }
//
//     //attempt #2
//     // for(var i = 0; i < selectedCoffee; i++){
//     //     if (selectedCoffee[i].match(userInput)){
//     //         filteredCoffees.push(selectedCoffee[i]);
//     //     }
//     // }
//
//
//
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

//attempt #3
//
// var coffeeSearch =
//     $(document).ready(function(){
//         $("#myInput").on("keyup", function() {
//             var value = $(this).val().toLowerCase();
//             console.log("value " + value);
//             $("#coffeeDIV *").filter(function() {
//                // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//                 console.log($(this).text());
//
//                 //console.log("here" + $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1));
//             });
//         });
//     });
// console.log(coffeeSearch);

//attempt #4
function searchCoffees(value){
    var filteredCoffees = [];

    for (var i = 0; i < coffees.length; i++){
        if (coffees[i].name.toLowerCase().includes(value.toLowerCase())){
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
};


// if(coffeeSelection == coffeeSearch && updateCoffees == coffees.roast){
//
// }



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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//adding for search function
var coffeeSelection = document.querySelector('#myInput');



// updateCoffees();



tbody.innerHTML = renderCoffees(coffees);

// coffeeSelection.addEventListener('search', coffeeSearch);

//original select submit
submitButton.addEventListener('click', updateCoffees);

// coffeeSelection.addEventListener('change', );
roastSelection.addEventListener('change', updateCoffees);
coffeeSelection.addEventListener("keyup", function() {
    searchCoffees(coffeeSelection.value);
});
