const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEL = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const singleMealEl = document.getElementById("single-meal");

//searching meal from API
function searchMeal(e) {
  e.preventDefault();

  // clear single meal
  singleMealEl.innerHTML = "";

  //geting search term
  const term = search.value;

  //checking for dempty or not
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        resultHeading.innerHTML = `<h2>Search result for '${term}':</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<h3> There is no search result for '${term}'. Try something else!</h3>`;
        } else {
          mealsEL.innerHTML = data.meals
            .map(
              (meal) => `
          <div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="meal-info" data-mealID="${meal.idMeal}">
              <h3>${meal.strMeal}</h3>
            </div>
          </div>
          `
            )
            .join("");

          //clearing search field
          search.value = "";
        }
      });
  } else {
    alert("Your search is blank, please enter something");
  }
}

//Event Listeners
submit.addEventListener("submit", searchMeal);