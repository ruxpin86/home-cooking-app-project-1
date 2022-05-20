//on click get button value
//button value then is stored in userChoice
//userChoice

//define global variables
var mealChoice = document.getElementsByClassName("choiceMeal");
var proteinChoice = document.getElementsByClassName("choiceProtein");
var vegChoice = document.getElementsByClassName("choiceVeg");
var fruitChoice = document.getElementsByClassName("choiceFruit");
var starchChoice = document.getElementsByClassName("choiceStarch");

var userChoice = [
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

function concatToSearch(event) {
  //get value from button click, then add onto search string
  userChoice = event.target.mealType[0];
  console.log(userChoice);
}

// function myFunction() {
//   document.getElementByClass("dropdown-menu").classList.toggle("show");
// }
// // Close the dropdown if the user clicks outside of it
// window.onclick = function (e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementByClass("dropdown-menu");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };

userChoice.addEventListener("click", concatToSearch());
userChoice.protein.value.addEventListener("click", concatToSearch());
userChoice.vegetable.value.addEventListener("click", concatToSearch());
userChoice.fruit.value.addEventListener("click", concatToSearch());
userChoice.starch.value.addEventListener("click", concatToSearch());

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

function choiceClick(event) {
  mealChoice = event.target.name;
  console.log(mealChoice);
}

// mealChoice[0].addEventListener("click", choiceClick);
// mealChoice[1].addEventListener("click", choiceClick);
// mealChoice[2].addEventListener("click", choiceClick);
// proteinChoice.addEventListener("click");
// vegChoice.addEventListener("click");
// fruitChoice.addEventListener("click");
// starchChoice.addEventListener("click");

searchBtn.addEventListener("click", getTastyRecipesList);

//for ingredient types use foreach to loop through
