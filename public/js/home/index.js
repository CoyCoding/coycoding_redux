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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/home/ProjectsSection/MoreProjectsBtn.js":
/*!**************************************************************!*\
  !*** ./resources/js/home/ProjectsSection/MoreProjectsBtn.js ***!
  \**************************************************************/
/*! exports provided: initMoreProjectsBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMoreProjectsBtn", function() { return initMoreProjectsBtn; });
var initMoreProjectsBtn = function initMoreProjectsBtn(projectSection) {
  $('.more-btn p').on('click', function () {
    projectSection.addProject();
  });
};

/***/ }),

/***/ "./resources/js/home/ProjectsSection/ProjectsSection.js":
/*!**************************************************************!*\
  !*** ./resources/js/home/ProjectsSection/ProjectsSection.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectSection; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProjectSection = /*#__PURE__*/function () {
  function ProjectSection(projects, currIndex) {
    _classCallCheck(this, ProjectSection);

    this.projects = projects.reverse();
    this.currIndex = currIndex;

    if (currIndex < this.projects.length) {
      $('.more-btn').removeClass('hidden');
    }
  }

  _createClass(ProjectSection, [{
    key: "addProject",
    value: function addProject() {
      var projectsToAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var i = 0; i < projectsToAdd; i++) {
        if (this.currIndex++ < this.projects.length) {
          $('.projects-grid .project.hidden').first().removeClass('hidden').addClass('animate-in');
        }
      } // hide button once projects all loaded.


      if (this.currIndex >= this.projects.length) {
        $('.more-btn').addClass('hidden');
      }
    }
  }]);

  return ProjectSection;
}();



/***/ }),

/***/ "./resources/js/home/SkillSection/SkillBtn.js":
/*!****************************************************!*\
  !*** ./resources/js/home/SkillSection/SkillBtn.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.slide-btn').on('click', function () {
  $('.skill-slide-1').toggleClass('slide-closed');
  $('.skill-slide-2').toggleClass('slide-open');
  $('.next').toggleClass('slide-open');
});

/***/ }),

/***/ "./resources/js/home/animations/logo.js":
/*!**********************************************!*\
  !*** ./resources/js/home/animations/logo.js ***!
  \**********************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
var startingDegArr = [200, 180, 160, 140, 120, 100, 80];
var index = 0;
var numOfCircles = $('.circle').length;
var spinInterval;
var Logo = {
  initLogoSpin: function initLogoSpin() {
    spinInterval = setInterval(spin, 1);
  }
};

function spin() {
  for (index; index < numOfCircles; index++) {
    switch (index) {
      case 0:
        circle1(index, 2);
        break;

      case 1:
        circle1(index, 2);
        break;

      case 2:
        circle1(index, 2);
        break;

      case 3:
        circle1(index, 2);
        break;

      case 4:
        circle1(index, 2);
        break;

      case 5:
        circle1(index, 2);
        break;

      case 6:
        circle1(index, 2);
        break;
    }
  }

  index = 0;
}

function circle1(index) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var reverse = arguments.length > 2 ? arguments[2] : undefined;

  if (Math.abs(startingDegArr[index] / 360) === 3) {
    if (index === 6) {
      clearInterval(spinInterval);
    }
  } else {
    $('.circle').eq(index).css({
      transform: 'rotate(' + startingDegArr[index] + 'deg)'
    }).addClass('fade-in');

    if (reverse) {
      startingDegArr[index] = startingDegArr[index] - num;
    } else {
      startingDegArr[index] = startingDegArr[index] + num;
    }
  }
}

/***/ }),

/***/ "./resources/js/home/index.js":
/*!************************************!*\
  !*** ./resources/js/home/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/logo */ "./resources/js/home/animations/logo.js");
/* harmony import */ var _SkillSection_SkillBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SkillSection/SkillBtn */ "./resources/js/home/SkillSection/SkillBtn.js");
/* harmony import */ var _SkillSection_SkillBtn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SkillSection_SkillBtn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsSection_MoreProjectsBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsSection/MoreProjectsBtn */ "./resources/js/home/ProjectsSection/MoreProjectsBtn.js");
/* harmony import */ var _ProjectsSection_ProjectsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsSection/ProjectsSection */ "./resources/js/home/ProjectsSection/ProjectsSection.js");




$(document).ready(function () {
  _animations_logo__WEBPACK_IMPORTED_MODULE_0__["Logo"].initLogoSpin(); // projects = [] from laravel
  // renderedProjectsCount = int from Laravel

  Object(_ProjectsSection_MoreProjectsBtn__WEBPACK_IMPORTED_MODULE_2__["initMoreProjectsBtn"])(new _ProjectsSection_ProjectsSection__WEBPACK_IMPORTED_MODULE_3__["default"](projects, renderedProjectsCount));
});

/***/ }),

/***/ 1:
/*!******************************************!*\
  !*** multi ./resources/js/home/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Atom\projects\coycoding_laravel\resources\js\home\index.js */"./resources/js/home/index.js");


/***/ })

/******/ });