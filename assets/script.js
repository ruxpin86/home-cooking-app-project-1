//on click get button value
//store the value in a variable
//use a function to convert the value into a string
//concatenate that string into the getTastyRecipesList function inside the fetch call
//once search is executed, grab results and create elements dynamically underneath the search button

//define global variables
var mealChoice = document.getElementsByClassName("choiceMeal");
var proteinChoice = document.getElementsByClassName("choiceProtein");
var vegChoice = document.getElementsByClassName("choiceVeg");
var fruitChoice = document.getElementsByClassName("choiceFruit");
var starchChoice = document.getElementsByClassName("choiceStarch");
var searchBtn = document.getElementById("get-recipe-btn");
var userChoice = {};

userChoice = [
  // "breakfast",
  // "lunch",
  // "dinner",

  // "beef",
  // "poultry",
  // "fish",
  "pork",

  // "tomatoes",
  // "onions",
  // "lettuce",
  // "carrots",

  // "berries",
  // "apples",
  // "bananas",
  // "citrus",

  // "grains",
  // "pasta",
  // "potatoes",
  "bread",
];

console.log(userChoice);

//grab the user choice value from the class of choiceMeal
// function getUserChoice() {
//   mealChoice.textContent = " ";
// }

// mealChoice.addEventListener("click", function () {
//get the value of the mealType to then be put into API call

// getUserChoice();
// console.log(getUserChoice);

// function concatToSearch(event) {
//   //get value from button click, then add onto search string

// dynamically creates a list of results for su
function setResultsList(res) {
  console.log(res);
  var resultEl = document.getElementById("search-results");
  resultEl.innerHTML = " ";
  res.hits.forEach((x) => {
    resultEl.innerHTML += `
<div class="card">
<h3>${x.recipe.label}</h3>
<img src="${x.recipe.image}" />
<a href="${x.recipe.url}">View Recipe</a>
</div>
`;
  });
}

function getEdamamRecipesList() {
  console.log("get recipe");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };

  fetch(
    "https://edamam-recipe-search.p.rapidapi.com/search?q=" +
      userChoice.join("%2C%20"),
    options
  )
    .then((response) => response.json())
    .then((response) => setResultsList(response))
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

function toggleChoice(event) {
  var name = event.target.name;
  if (userChoice.includes(name)) {
    userChoice = userChoice.filter((x) => x != name);
  } else {
    userChoice.push(name);
  }
}

var choiceBtns = document.querySelectorAll(".choiceBtn");
choiceBtns.forEach((btn) => {
  btn.addEventListener("click", toggleChoice);
});

//trigger function to get recipes
searchBtn.addEventListener("click", getEdamamRecipesList);

//for ingredient types use foreach to loop through
