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
  // console.log(res);
  console.log(res[0].recipe.ninja.items);
  var resultEl = document.getElementById("search-results");
  resultEl.innerHTML = " ";
  res.forEach((x) => {
    resultEl.innerHTML += `
<div class="card col-sm-12 col-md-6 col-lg-4">
<h3>${x.recipe.label}</h3>
<img class="card-img-top" alt="${x.recipe.label}" src="${x.recipe.image}"/>
<div class="card-body">
<a class="btn btn-outline-info choiceBtn" href="${x.recipe.url}">View Recipe</a>
${
  // JSON.stringify(x.recipe.ninja.items)
  // x.recipe.ninja.items.forEach((y) => JSON.stringify(y))
  // JSON.stringify(x.recipe.ninja.items[0].name)
  x.recipe.ninja.items
    .map(
      (y) => `
  <p>${y.name}</p>
  <ul>
  ${Object.entries(y)
    .map(
      (z) => `<li>${z[0]}:${z[1]}</li>` //maneuvering through an object
    )
    .join("")}
  </ul>
  
  `
    )
    .join("")
  // for(let i = 0; i<x.recipe.ninja.items.length; i++){

  // }
}
</div>
</div>
`;
  });
}

// get calorie information based on the name of the recipe
async function getCalorieNinja(query) {
  //query corresponds to the 'label' argument passed on line 102
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };
  // pasta%20alla%20gricia
  let data = "fetching data";
  await fetch(
    `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${query}`,
    options
  )
    .then((response) => response.json())
    .then((response) => (data = response))
    // try to call nutrition data as a variable to be assigned
    .catch((err) => console.error(err));
  return data;
}

async function getEdamamRecipesList() {
  console.log("get recipe");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      "X-RapidAPI-Key": "af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac",
    },
  };

  async function handleCalorieNinja(label) {
    let result = await getCalorieNinja(label);
    return result;
  }

  fetch(
    "https://edamam-recipe-search.p.rapidapi.com/search?q=" +
      userChoice.join("%2C%20"),
    options
  )
    .then((response) => response.json())
    .then(async (response) => {
      var recipes = response.hits;
      recipes = await Promise.all(
        recipes.map(async (item) => {
          // var recipeLabel = [...item];
          // console.log();
          var tempItem = item;
          var label = tempItem.recipe.label;
          tempItem.recipe.ninja = await getCalorieNinja(label);
          return tempItem;
        })
      );
      // console.log(recipes);
      setResultsList(recipes);
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
