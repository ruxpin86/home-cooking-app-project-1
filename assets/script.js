// get user choice on meal of the day: then kick off to
// get user input on level of expertise: then kick off to
// get single user choice on protein
// get multiple user choice on veg on hand
// get multiple user choice on fruits
// get multiple user choice on starch
// addEventListener on "click" of "FindYourRecipe" to call API functions



//define global variables
var mealChoice = document.getElementById("option")
var chefLevel;
var proteinChoice;
var vegChoice;
var fruitChoice;
var starchChoice;



function getTastyResults(event) {
    event.preventDefault()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            'X-RapidAPI-Key': 'af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac'
        }
    };

    fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

//addEventListener to invoke getTastyResults func

function amountConv() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'af7df4ee99mshd80fd154da3281bp1aeac7jsn5872eaa62dac'
        }
    };

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert?ingredientName=flour&targetUnit=grams&sourceUnit=cups&sourceAmount=2.5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}