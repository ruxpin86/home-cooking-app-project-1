// get user choice on meal of the day: then kick off to
// get user input on level of expertise: then kick off to
// get single user choice on protein
// get multiple user choice on veg on hand
// get multiple user choice on fruits
// get multiple user choice on starch
// addEventListener on "click" of "FindYourRecipe" to call API functions

//define global variables
var mealChoice = document.getElementById("option");
var proteinChoice; //need id
var vegChoice; //need id
var fruitChoice; //need id
var starchChoice; //need id
var searchBtn = document.getElementById("get-recipe-btn");

function getTastyRecipesList() {
  var options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };

  fetch(
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=poultry+onion",
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
