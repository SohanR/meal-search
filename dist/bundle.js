!function(e){var n={};function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(r,s,function(n){return e[n]}.bind(null,s));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){const t=document.getElementById("search"),r=document.getElementById("submit"),s=document.getElementById("random"),i=document.getElementById("meals"),l=document.getElementById("result-heading"),a=document.getElementById("single-meal");function o(e){l.style.display="none",i.style.display="none";const n=[];for(let t=1;t<=20&&e["strIngredient"+t];t++)n.push(`${e["strIngredient"+t]} - ${e["strMeasure"+t]}`);a.innerHTML=`\n    <div class="single-meal">\n      <h1>${e.strMeal}</h1>\n      <img src="${e.strMealThumb}" alt="${e.strMeal}" />\n      <div class="single-meal-info">\n        ${e.strCategory?`<p>${e.strCategory}</p>`:""}\n        ${e.strArea?`<p>${e.strArea}</p>`:""}\n      </div>\n      <div class="main">\n        <p>${e.strInstructions}</p>\n        <h2>Ingredients</h2>\n        <ul>\n          ${n.map(e=>`<li>${e}</li>`).join("")}\n        </ul>\n      </div>\n    </div>\n  `}r.addEventListener("submit",(function(e){e.preventDefault(),a.innerHTML="";const n=t.value;n.trim()?fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+n).then(e=>e.json()).then(e=>{l.innerHTML=`<h2>Search result for '${n}':</h2>`,null===e.meals?l.innerHTML=`<h3> There is no search result for '${n}'. Try something else!</h3>`:(i.innerHTML=e.meals.map(e=>`\n          <div class="meal">\n            <img src="${e.strMealThumb}" alt="${e.strMeal}" />\n            <div class="meal-info" data-mealID="${e.idMeal}">\n              <h3>${e.strMeal}</h3>\n            </div>\n          </div>\n          `).join(""),t.value="")}):alert("Your search is blank, please enter something")})),s.addEventListener("click",(function(){i.innerHTML="",l.innerHTML="",fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(e=>e.json()).then(e=>{o(e.meals[0])})})),i.addEventListener("click",e=>{const n=e.composedPath().find(e=>!!e.classList&&e.classList.contains("meal-info"));if(n){!function(e){fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+e).then(e=>e.json()).then(e=>{o(e.meals[0])})}(n.getAttribute("data-mealid"))}})}]);