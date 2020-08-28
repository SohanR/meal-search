/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const search = document.getElementById(\"search\");\nconst submit = document.getElementById(\"submit\");\nconst random = document.getElementById(\"random\");\nconst mealsEL = document.getElementById(\"meals\");\nconst resultHeading = document.getElementById(\"result-heading\");\nconst singleMealEl = document.getElementById(\"single-meal\");\n\n//searching meal from API\nfunction searchMeal(e) {\n  e.preventDefault();\n\n  // clear single meal\n  singleMealEl.innerHTML = \"\";\n\n  //geting search term\n  const term = search.value;\n\n  //checking for dempty or not\n  if (term.trim()) {\n    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)\n      .then((res) => res.json())\n      .then((data) => {\n        console.log(data);\n\n        resultHeading.innerHTML = `<h2>Search result for '${term}':</h2>`;\n\n        if (data.meals === null) {\n          resultHeading.innerHTML = `<h3> There is no search result for '${term}'. Try something else!</h3>`;\n        } else {\n          mealsEL.innerHTML = data.meals\n            .map(\n              (meal) => `\n          <div class=\"meal\">\n            <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\" />\n            <div class=\"meal-info\" data-mealID=\"${meal.idMeal}\">\n              <h3>${meal.strMeal}</h3>\n            </div>\n          </div>\n          `\n            )\n            .join(\"\");\n\n          //clearing search field\n          search.value = \"\";\n        }\n      });\n  } else {\n    alert(\"Your search is blank, please enter something\");\n  }\n}\n\n//Event Listeners\nsubmit.addEventListener(\"submit\", searchMeal);\n\nmealsEL.addEventListener(\"click\", (e) => {\n  const mealInfo = e.path.find((item) => {});\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuY29uc3QgcmFuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21cIik7XG5jb25zdCBtZWFsc0VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFsc1wiKTtcbmNvbnN0IHJlc3VsdEhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdC1oZWFkaW5nXCIpO1xuY29uc3Qgc2luZ2xlTWVhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW5nbGUtbWVhbFwiKTtcblxuLy9zZWFyY2hpbmcgbWVhbCBmcm9tIEFQSVxuZnVuY3Rpb24gc2VhcmNoTWVhbChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBjbGVhciBzaW5nbGUgbWVhbFxuICBzaW5nbGVNZWFsRWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvL2dldGluZyBzZWFyY2ggdGVybVxuICBjb25zdCB0ZXJtID0gc2VhcmNoLnZhbHVlO1xuXG4gIC8vY2hlY2tpbmcgZm9yIGRlbXB0eSBvciBub3RcbiAgaWYgKHRlcm0udHJpbSgpKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP3M9JHt0ZXJtfWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgcmVzdWx0SGVhZGluZy5pbm5lckhUTUwgPSBgPGgyPlNlYXJjaCByZXN1bHQgZm9yICcke3Rlcm19Jzo8L2gyPmA7XG5cbiAgICAgICAgaWYgKGRhdGEubWVhbHMgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHRIZWFkaW5nLmlubmVySFRNTCA9IGA8aDM+IFRoZXJlIGlzIG5vIHNlYXJjaCByZXN1bHQgZm9yICcke3Rlcm19Jy4gVHJ5IHNvbWV0aGluZyBlbHNlITwvaDM+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWFsc0VMLmlubmVySFRNTCA9IGRhdGEubWVhbHNcbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgIChtZWFsKSA9PiBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCIke21lYWwuc3RyTWVhbH1cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaW5mb1wiIGRhdGEtbWVhbElEPVwiJHttZWFsLmlkTWVhbH1cIj5cbiAgICAgICAgICAgICAgPGgzPiR7bWVhbC5zdHJNZWFsfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcblxuICAgICAgICAgIC8vY2xlYXJpbmcgc2VhcmNoIGZpZWxkXG4gICAgICAgICAgc2VhcmNoLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJZb3VyIHNlYXJjaCBpcyBibGFuaywgcGxlYXNlIGVudGVyIHNvbWV0aGluZ1wiKTtcbiAgfVxufVxuXG4vL0V2ZW50IExpc3RlbmVyc1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc2VhcmNoTWVhbCk7XG5cbm1lYWxzRUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IG1lYWxJbmZvID0gZS5wYXRoLmZpbmQoKGl0ZW0pID0+IHt9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });