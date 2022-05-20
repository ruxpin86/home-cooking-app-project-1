//on click get button value
//button value then is stored in userChoice
//userChoice

//define global variables
var mealChoice = document.getElementsByClassName("choiceMeal");
var proteinChoice = document.getElementsByClassName("choiceProtein");
var vegChoice = document.getElementsByClassName("choiceVeg");
var fruitChoice = document.getElementsByClassName("choiceFruit");
var starchChoice = document.getElementsByClassName("choiceStarch");
var searchBtn = document.getElementById("get-recipe-btn");
var userChoice = {};

userChoice = [
  {
    mealType: ["breakfast", "lunch", "dinner"],
  },
  {
    protein: ["beef", "poultry", "fish", "pork"],
  },
  {
    vegetable: ["tomatoes", "onions", "lettuce", "carrots"],
  },
  {
    fruit: ["berries", "apples", "bananas", "citrus"],
  },
  {
    starch: ["grains", "pasta", "potatoes", "bread"],
  },
];

console.log(userChoice);

//grab the user choice value from the class of choiceMeal
function getUserChoice() {
  mealChoice.textContent = " ";
}

mealChoice.addEventListener("click", function () {
  //get the value of the mealType to then be put into API call
});

getUserChoice();
console.log(getUserChoice);

// function concatToSearch(event) {
//   //get value from button click, then add onto search string
//   userChoice = event.target.mealType[0];
//   console.log(userChoice);
// }

// userChoice.mealType.value.addEventListener("click", concatToSearch());
// userChoice.protein.value.addEventListener("click", concatToSearch());
// userChoice.vegetable.value.addEventListener("click", concatToSearch());
// userChoice.fruit.value.addEventListener("click", concatToSearch());
// userChoice.starch.value.addEventListener("click", concatToSearch());

function getTastyRecipesList() {
  var options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };

  fetch(
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=&q=",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

function getTastyAutoResults(event) {
  event.preventDefault();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };

  fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

function amountConv() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };

  fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert?ingredientName=flour&targetUnit=grams&sourceUnit=cups&sourceAmount=2.5",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

searchBtn.addEventListener("click", getTastyRecipesList);

//for ingredient types use foreach to loop through
