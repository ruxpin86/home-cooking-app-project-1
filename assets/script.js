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
  // "pork",
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
  // "bread",
];

console.log(userChoice);

// dynamically creates a list of results for search results
function setResultsList(res) {
  console.log(res);
  var resultEl = document.getElementById("search-results");
  resultEl.innerHTML = " ";
  res.hits.forEach((x) => {
    resultEl.innerHTML += `
<div class="card col-sm-12 col-md-6 col-lg-4">
<h3>${x.recipe.label}</h3>
<img class="card-img-top" alt="${x.recipe.label}" src="${x.recipe.image}"/>
<div class="card-body">
<a class="btn btn-outline-info choiceBtn" href="${x.recipe.url}">View Recipe</a>
</div>
</div>
`;
  });
}

// get calorie information based on the name of the recipe
function getCalorieNinja(query) {
  //query corresponds to the 'label' argument passed on line 102
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };
  // pasta%20alla%20gricia
  fetch(
    `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${query}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    // try to call nutrition data as a variable to be assigned
    .catch((err) => console.error(err));
}

// items[0].sodium_mg;

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
    .then((response) => {
      var recipes = response.hits;
      recipes = recipes.map((item) => {
        // var recipeLabel = [...item];
        // console.log();
        var tempItem = item;
        var label = tempItem.recipe.label;
        var inputLabel = getCalorieNinja(label);
        console.log(inputLabel);
        return tempItem;
      });
      // console.log(recipes);
      setResultsList(response);
    })
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

//var nutriFacts =
//for (i=0 ;
