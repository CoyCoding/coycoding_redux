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

/***/ "./resources/js/home/ProjectsSection/DOMProjects.js":
/*!**********************************************************!*\
  !*** ./resources/js/home/ProjectsSection/DOMProjects.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOMProjects; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DOMProjects = /*#__PURE__*/function () {
  function DOMProjects(projectArr) {
    _classCallCheck(this, DOMProjects);

    this.projectArr = projectArr;
  }

  _createClass(DOMProjects, [{
    key: "getProject",
    value: function getProject() {
      if (this.projectArr.length) {
        var project = this.projectArr.pop();
        return "<div class=\"project adding\">\n          <div class=\"square\">\n            <div class=\"img-wrapper\">\n              <img src=\"".concat(project.img, "\"/>\n            </div>\n          </div>\n          <div class=\"project-info\">\n              <div class=\"project-details\">\n                <h2>").concat(project.name, "</h2>\n                <div class=\"info\">\n                  <p>\n                    ").concat(this.getProductDescription(project), "\n                  </p>\n                  <div class=\"skills\">\n\t\t\t\t\t\t\t\t\t\t").concat(this.getBulletPointsDOM(project), "\n                  </div>\n\t\t\t\t\t\t\t\t\t").concat(this.getAuthorsNotes(project), "\n                </div>\n                <div class=\"project-btns\">\n                  <a target=\"_blank\" href=\"").concat(project.githubLink, "\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t                    source code\n\t                  </div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"").concat(project.siteLink, "\">\n\t                  <div>\n\t                    demo\n\t                  </div>\n\t\t\t\t\t\t\t\t\t</a>\n                </div>\n              </div>\n          </div>\n        </div>");
      }
    }
  }, {
    key: "getBulletPointsDOM",
    value: function getBulletPointsDOM(project) {
      var test = project.bulletPoints.map(function (skill) {
        return "<div class=\"bullet-point\"><i class=\"fas fa-circle\"></i>".concat(skill, "</div>");
      });
      return test.join('');
    }
  }, {
    key: "getProductDescription",
    value: function getProductDescription(project) {
      return project.description;
    }
  }, {
    key: "getAuthorsNotes",
    value: function getAuthorsNotes(project) {
      return project.authorsNotes ? "<p><b>Authors Notes: </b>".concat(project.authorsNotes, "</p>") : '';
    }
  }, {
    key: "getRemainingProjectsCount",
    value: function getRemainingProjectsCount() {
      return this.projectArr.length;
    }
  }]);

  return DOMProjects;
}();



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
/* harmony import */ var _DOMProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMProjects */ "./resources/js/home/ProjectsSection/DOMProjects.js");
/* harmony import */ var _data_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/Projects */ "./resources/js/home/data/Projects.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ProjectSection = /*#__PURE__*/function () {
  function ProjectSection() {
    _classCallCheck(this, ProjectSection);

    this.projects = new _DOMProjects__WEBPACK_IMPORTED_MODULE_0__["default"](_data_Projects__WEBPACK_IMPORTED_MODULE_1__["Projects"]);
    this.$projectGrid = $('.projects-grid');
  }

  _createClass(ProjectSection, [{
    key: "addProject",
    value: function addProject() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var i = 0; i < num; i++) {
        if (this.projects.getRemainingProjectsCount()) {
          this.$projectGrid.append($.parseHTML(this.projects.getProject()));
          var $projects = $('.project');

          if (!this.projects.getRemainingProjectsCount()) {
            $('.more-btn').addClass('hidden');
          }

          setTimeout(function () {
            $projects.removeClass('adding');
          }, 0);
        }
      }
    }
  }, {
    key: "initBtn",
    value: function initBtn() {
      var self = this;
      $('.more-btn p').on('click', function () {
        self.addProject();
      });
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
  console.log('here');
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
    console.log(numOfCircles);
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
    });

    if (reverse) {
      startingDegArr[index] = startingDegArr[index] - num;
    } else {
      startingDegArr[index] = startingDegArr[index] + num;
    }
  }
}

/***/ }),

/***/ "./resources/js/home/data/Projects.js":
/*!********************************************!*\
  !*** ./resources/js/home/data/Projects.js ***!
  \********************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
var Projects = [{
  name: 'Coy Coding',
  img: 'https://stevensegallery.com/g/504/311',
  description: 'Well... its this site',
  bulletPoints: ['jQuery', 'SASS', 'Webpack', 'Babel'],
  githubLink: 'https://github.com/fluffytoycoy/CoyCoding',
  siteLink: '#'
}, {
  name: 'Fluffy Gaming',
  img: '/images/fluffy_gaming.png',
  description: 'A Simple site done in C# that grabs CSV data from a Google Sheet and displays it in a sortable table.',
  bulletPoints: ['C#', 'Javascript', 'CSS', 'AJAX'],
  githubLink: 'https://github.com/fluffytoycoy/ftc',
  siteLink: 'http://www.fluffygaming.pro/'
}, {
  name: 'Retro Roulette',
  img: '/images/retro_roulette.png',
  description: 'Random game generator built with React, Node.js and Sqllite. Features customizable filters for users and a dashboard with basic crud operations for admins.',
  bulletPoints: ['React', 'SQL', 'Node.js', 'SASS', 'Material UI'],
  githubLink: 'https://github.com/fluffytoycoy/retro-roulette',
  siteLink: 'https://retro-roulette.herokuapp.com/',
  authorsNotes: '/login for the hidden log in page USER: test, PASSWORD: test. This site is hosted on heroku so it may take a second for the server to respond on first load.'
}, {
  name: 'techLabs',
  img: '/images/techLab.png',
  description: 'A Front end site for a digital agency. Done with a team of two through trello one graphic designer and me as the Developer.',
  bulletPoints: ['React', 'Node.js', 'SASS', 'Trello'],
  githubLink: 'https://github.com/fluffytoycoy/techLabs',
  siteLink: 'https://techLabs.coycoding.com/'
}, {
  name: 'Chamberlin HVAC',
  img: ' /images/chamberlin.png',
  description: 'This is a site for Chamberlin HVAC. It was done with react, sass and Node.js on the backend. It uses the google places API for fetching recent reviews and a custom backend API for filtering and displaying products.',
  bulletPoints: ['React', 'Node.js', 'Google Places API', 'SASS'],
  githubLink: 'https://github.com/fluffytoycoy/adonis-react-hvac',
  siteLink: 'https://hvac-react-adonis.herokuapp.com/',
  authorsNotes: 'This site is hosted on heroku so it may take a second for the server to respond on first load.'
}, {
  name: 'Mike Shannon\'s Grill',
  img: '/images/ms-food.png',
  description: 'A rework of the Mike Shannons Bar and Grill site. Features a custom auth system, backend api for editing of menu items, and an animated 3 column layout desigin for the menu and info sections.',
  bulletPoints: ['React', 'MySQL', 'Node.js', 'SASS', 'JWT', 'Material UI'],
  githubLink: 'https://github.com/fluffytoycoy/ms-food',
  siteLink: 'https://ms-food.coycoding.com/',
  authorsNotes: '/login for the hidden log in page USER: admin, PASSWORD: test'
}];

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
/* harmony import */ var _ProjectsSection_ProjectsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsSection/ProjectsSection */ "./resources/js/home/ProjectsSection/ProjectsSection.js");


 // const ScrollTrigger = require('scrolltrigger-classes');
// document.addEventListener('DOMContentLoaded', function() {
// 	var trigger = new ScrollTrigger();
// });

$(document).ready(function () {
  var projectSection = new _ProjectsSection_ProjectsSection__WEBPACK_IMPORTED_MODULE_2__["default"]();
  _animations_logo__WEBPACK_IMPORTED_MODULE_0__["Logo"].initLogoSpin();
  projectSection.initBtn();
  projectSection.addProject(3);
  console.log('worked');
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