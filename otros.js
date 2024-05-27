{ 
    food: "K-CheeseBurger", 
    price: 16.00,
    description: "This turkey burger is cooked with pepperjack cheese to melt your heart!",
    comment: "I see you want to go with our popular choice." 
},
{ 
    food:"Ms-GrilledSalmon",
    price: 24.00,
    description: "Salmon grilled to a light darkerned crisp with ",
    comment: "Taste so good, makes you want to slap your mother",
},
{ 
    food: "Ds-SeafoodPasta",
    price: 20.00,
    description: "Pasta that is cooked with fluffy noodles and has shrimp, crab and small samples of lobster",
    comment: "The rasta pasta that also has a little taste of lobster",
},
]

const Breakfast = [
{ 
    food: "Breakfast platter",
    price: 15.00,
    description: "This platter includes eggs, grits, butter-milk pancakes, and some turkey bacon",
    comment: "The breakfast that is a 'bang for your bucks' ",
},
{ 
    food: "3 Scrambled eggs with chicken sasuage",
    price: 8.00,
    description: "3 eggs with cheese and some sausage to fill up the stomach",
    comment: "The hens are not going to like this hahaha",
},
{
    food: "Shrimp and Grits",
    price: 10.00,
    description: "A classic dish of shrimp and grits with creole seasoning mix",
    comment: "The classic you can not go wrong with",
},
];

const Lunch = [
{
    food: "BBQ Wings",
    price: 10.17,
    description: "BBQ wings with a honey chipotle sauce",
    comment: "The perfect wings to go with a good sports game",

},
{
    food: "Buffalo Chicken Poboy",
    price: 12.99,
    description: "Buffalo chicken that is cooked just right and mixed with the po-boy specialty",
    comment: "Are you afraid of a little spice?",
},
{
    food: "Turkey Nachos with Queso Blanco",
    price: 15.00,
    description: "Turkey grounded up with spices and cheese to add more spice, for a spice party",
    comment: "Nachos that have a kick to them",
},
];


const Sides = [
{
    food: "Seasoned Fries",
    price: 5.00,
    description: "Fries with creole seasoning salt for a new flavor",
    comment: "The fries are seasoned with a special southern spice",
},
{
    food: "Sweet Potato Fries",
    price: 6.00,
    description: "Fries that are healthy but still taste really good",
    comment: "These Fries are tasty and healty, we can add season as well",
},
{
    food: "VMac and Cheese",
    price: 8.00,
    description: "Vegan MAC and CHEESE for the soul",
    comment: "Vegan mac and cheese that will put you to sleep",
},
{
    food: "Cabbage and Greens",
    price: 7.00,
    description: "Cabbages and Greens that are mixed and cooked with southern hospitality- no meat included",
    comment: "The southern special to eat good and feel healthy",
},
];

const Drinks = [
{
    drinks: "Unlimited Flavored Mimosas",
    price: 18.00,
    description: "Several different flavors of a southern traditional mimosa",
    comment: "I hope that you are not driving today",

},
{
    drinks: "Grandma's Lemonade",
    price: 8.00,
    description: "A lemonade that has grandma's signature style all over it",
    comment: "I see we have someone here that loved grandma's lemonade",
},
{
    drinks: "Premium Water",
    price: 2.00,
    description: "Our premium water that comes with the bottle as well",
    comment: "Water that quenches your thirst",
},
];

function dinerFunction() {
alert("Hello!\nWelcome to the Bottega Diner");
openerQuestion();
}

var foodchoice = [];
// var foodchoice = ["entree","side1", "side2", "drink"];

function openerQuestion() {
var answerMenu = prompt("What are you having today?\nBreakfast, Lunch or Dinner");

if(answerMenu === "Breakfast") /** || "Lunch" || "Dinner") **/ {
   console.log(answerMenu);
   alert( `The items on the ${answerMenu} are ${Breakfast[0].food}, ${Breakfast[1].food}, ${Breakfast[2].food}`);
   breakfastFunction()
} else if(answerMenu === "Lunch") {
   console.log(answerMenu);
  alert( `The items on the ${answerMenu} are ${Lunch[0].food}, ${Lunch[1].food}, ${Lunch[2].food}`);
  lunchFunction()
} else if(answerMenu === "Dinner") {
   console.log(answerMenu);
  alert( `The items on the ${answerMenu} are ${Dinner[0].food}, ${Dinner[1].food}, ${Dinner[2].food}`);
  dinnerFunction()
}  else {
    console.log("That is not a response please choose from the available choices")
    openerQuestion()
}

}

function breakfastFunction() {
 var entree = prompt(`What would you like of the Breakfast Menu?`, "");
 
    if(entree === "Breakfast Platter") {
     console.log(entree)
     console.log(`${Breakfast[0].price}, ${Breakfast[0].comment}`)
  } else if(entree === "3 Scrambled Eggs With Chicken Sasuage") {
     console.log(entree)
     console.log(`${Breakfast[1].price}, ${Breakfast[1].comment}`)
  } else if(entree === "Shrimp and Grits") {
     console.log(entree)
     console.log(`${Breakfast[2].price}, ${Breakfast[2].comment}`)
  } else {
     console.log("Please choose from the current list")
    
  }
 foodchoice = entree;

secondQuestion()
}

function lunchFunction() {
var entree = prompt(`What would you like of the Lunch Menu?`, "");
 if(entree === "BBQ Wings") {
    console.log(entree)
    console.log(`${Lunch[0].price}, ${Lunch[0].comment}`)
  } else if(entree === "Buffalo Chicken Poboy") {
     console.log(entree)
     console.log(`${Lunch[1].price}, ${Lunch[1].comment}`)
  } else if(entree === "Turkey Nachos with Queso Blanco") {
     console.log(entree)
     console.log(`${Lunch[2].price}, ${Lunch[2].comment}`)
  }  else {
    console.log("Please choose from the current list")
  }
 foodchoice = entree;

secondQuestion()
}

function dinnerFunction() {
var entree = prompt(`What would you like of the Dinner Menu?`, "");

  if(entree === "K-CheeseBurger") {
     console.log(entree)
     console.log(`${Dinner[0].price}, ${Dinner[0].comment}`)
  } else if(entree === "Ms-GrilledSalmon") {
     console.log(entree)
     console.log(`${Dinner[1].price}, ${Dinner[1].comment}`)
  } else if(entree === "Ds-SeafoodPasta") {
     console.log(entree)
     console.log(`${Dinner[2].price}, ${Dinner[2].comment}`)
  } else {
    console.log("Please choose from the current list")
  }
   
foodchoice = entree;

secondQuestion()
}


function secondQuestion() {
alert(`The items we have for Sides are ${Sides[0].food}, ${Sides[1].food}, ${Sides[2].food}, ${Sides[3].food}`);
var sideChoice1 = prompt("What would you like as your 1st side with that?","");

if(sideChoice1 === "Seasoned Fries") {
   console.log(sideChoice1)
   console.log(`${Sides[0].price}, ${Sides[0].comment}`)
} else if(sideChoice1 === "Sweet Potato Fries") {
   console.log(sideChoice1)
   console.log(`${Sides[1].price}, ${Sides[1].comment}`)
} else if(sideChoice1 === "VMac and cheese") {
   console.log(sideChoice1)
   console.log(`${Sides[2].price}, ${Sides[2].comment}`)
} else if(sideChoice1 === "Cabbage and Greens") {
   console.log(sideChoice1)
   console.log(`${Sides[3].price} = total}`)
   console.log(`${Sides[3].comment}`)
} else {
   console.log("Incorrrect answer, Choose from the sides menu")
  secondQuestion()
  }


foodchoice = sideChoice1;

secondQuestionPart2()
}

function secondQuestionPart2() {
alert(`Here is the sides menu again ${Sides[0].food}, ${Sides[1].food}, ${Sides[2].food}, ${Sides[3].food}`);
var sideChoice2 = prompt("What would you like as your 2nd side with that?","");

 if(sideChoice2 === "Seasoned Fries") {
   console.log(sideChoice2)
   console.log(`${Sides[0].price}, ${Sides[0].comment}`)
} else if(sideChoice2 === "Sweet Potato Fries") {
   console.log(sideChoice2)
   console.log(`${Sides[1].price}, ${Sides[1].comment}`)
} else if(sideChoice2 === "VMac and Cheese") {
   console.log(sideChoice2)
   console.log(`${Sides[2].price}, ${Sides[2].comment}`)
} else if(sideChoice2 === "Cabbage and Greens") {
   console.log(sideChoice2)
   console.log(`${Sides[3].price}, ${Sides[3].comment}`)
} else {
   console.log("Incorrrect answer, Choose from the sides menu")
   secondQuestionPart2()
}

foodchoice = sideChoice2;

thirdQuestion()
}

function thirdQuestion() {
alert(`The items we have for Drinks are ${Drinks[0].drinks}, ${Drinks[1].drinks}, ${Drinks[2].drinks}`);
var drinkChoice = prompt("What would you like to Drink with your order?", "");

if(drinkChoice === "Unlimited Flavored Mimosas") {
   console.log(drinkChoice)
   console.log(`${Drinks[0].price}, ${Drinks[0].comment}`)
} else if(drinkChoice === "Grandma's Lemonade") {
   console.log(drinkChoice)
   console.log(`${Drinks[1].price}, ${Drinks[1].comment}`)
} else if(drinkChoice === "Premium Water") {
   console.log(drinkChoice)
   console.log(`${Drinks[2].price}, ${Drinks[2].comment}`)
} else {
   console.log("Incorrect choice, choose from the drinks menu")
  thirdQuestion()
}

foodchoice = drinkChoice;

lastQuestion()
}

function lastQuestion() {
var orderChoice = confirm("Will this complete your order?", "")

if(orderChoice === "Yes") {
   console.log("I will have your order started now and be back with your total shortly")
} else if(orderChoice === "No") {
   console.log("Well lets start over with your order.")
   openerQuestion()
} 

} 


dinerFunction()


var total = 0;

var foodChoice = [];

foodChoice[entree, entree[].price] += foodChoice[sideChoice1 + sideChoice1[].price] += foodChoice[sideChoice2 + sideChoice2[].price] += foodChoice[drinkChoice + drinkChoice[].price]
function userTotal()

// alerts can have the total inside of it
// I can add the prompt to the for loop with (push.prompt)
//

//var dinnerMenu = [];
//for (var i = 0; i < 3; i++) {
//    dinnerMenu.push(prompt())
//}
//console.log(dinnerMenu);

//var lunchMenu = [];
//for (var i = 0; i < 3; i++) {
//    lunchMenu.push(prompt())
//}
//console.log(lunchMenu);

//var sideMenu = [];
//for (var i = 0; i < 3; i++) {
//    sideMenu.push(prompt())
//}
//console.log(sideMenu);

//var drinkMenu = [];
//for (var i = 0; i < 3; i++) {
//    drinkMenu.push(prompt())
//} 
//console.log(drinkMenu);


// total = 0

// total =