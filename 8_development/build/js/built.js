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

/***/ "../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/css/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/css/index.less ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js */ \"../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/getUrl.js */ \"../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/angular.jpg */ \"./src/img/angular.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"#box {\\n  width: 200px;\\n  height: 200px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100% 100%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/index.less?../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./src/font/iconfont.css":
/*!****************************************************************************************!*\
  !*** ../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./src/font/iconfont.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js */ \"../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/getUrl.js */ \"../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./iconfont.eot?t=1605325244430 */ \"./src/font/iconfont.eot?t=1605325244430\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./iconfont.woff?t=1605325244430 */ \"./src/font/iconfont.woff?t=1605325244430\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./iconfont.ttf?t=1605325244430 */ \"./src/font/iconfont.ttf?t=1605325244430\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./iconfont.svg?t=1605325244430 */ \"./src/font/iconfont.svg?t=1605325244430\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: \"#iconfont\" });\n// Module\nexports.push([module.i, \"@font-face {font-family: \\\"iconfont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* IE9 */\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'), \\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXYAAsAAAAAC2AAAAWKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDTAqJMIdqATYCJAMcCxAABCAFhG0HchvCCcgekqRfhAgoB8ABIQhRBI9rn/OSLFz2qEAgr98WLSkA0NWI0lW4CsOKjdgfvlu9Sevy1BIOK2BaEMdO8NR+Hfhn3P9aO5NQbUI6EcU8wvvszro1SlJPmZbg/9ZaPRGL+u8w6eXEZ4e3g4qFSNKQCMlEO6FBiJFjeO3qhZp8A3g+gWo9C8iRoJ2TUErBNgvE/UKWhFKOFCVEGfqkFtm3iI/Q6NMrwm0AH7S/j/9gF/IkTcYudOLmkg5NftW+aSFi/zHnMwYP88vC7SAy9gKFuI3mXBU1avYiqp/4MROgVbqnX01vWv6P5OnSUqgnmoemScjK9x+vJVoMTQP3em3Hr1opiuBXXRSJX/VujGoAIgPVCEQBqgmIBqgWSNfmuj9msRzEUxD/gEkW4DQqr5A1K3g6JOWVyqS9GgTSHmU6SZNOJ6PKzQMSSLP50U6t6cMdSrQ3uxDH2hnTg1zR7MLOLWw+cQbvc3Jmm2SO00yNU62ivpbQXm92iXcqKsZMmlYJVOLcdSWvK6xzs0wmlA3wcVw0YAKp1DAo2tgg4hzMqTs934fjQiWo53YePXxcsps3Nc/hhKMzXPEuY6XZac40PJxjI1t2gyEezXKR7ZcQ8d7yGdR4FlVTwipOsXlTHEMGP2hb2RXsZ1EhAstXcLJzPt0MOsvdtSGWPZQN4PdxTGo6zZli16GUrxqMFrsjO1BdVrV5I/iKVHcND7gqa1jmToQMzg444w4oDyVlNPLsmQFUOCPeNcgRiK63y2TrfFmZW1AhIHZP4NJjDHKTGjJNfR206xJHMK2kJOpJUZaPwTLG5AoRVKjITsmjdRCLupMTglEZVB/Mh8rQYFAzrJTzVO3hXXsHtRb3P2ri+Xb0N4xdUmGoM6gX60f7J3x5AzBJ189Hy/GPeU+GepTczTGeWKblOYzlnPD+9SG/Zuh24LQZ1Qgo5Be5YM2lIM0rXVgoF2kGL2laTsRJyVKwK6uwMEeXW2of7iUeOkzsIfYqdC+Bk8OH5UAP+cHbj/n6T2Ul9Pwg9jaFNOxzDb/q7iLPmqMjY99y37Go0iPw5oxGkO8qPdwJn0m6XBPg/GTre0qsliKfaT2LXLKSeOqzufHGzh0pGikdxlzLTngFEZet6rVdfvPm46cea0eKihF3IrWFYuCO7ni2i3x86vjmzXQZ2Euf5vKLw4d75QDx6oBlaZ+So8uu0/j8/4/SqkUtvuDvA58fatHvHNzUSU7tOfZ4Y27Y/jMqffk5t6r6qpKwUOln6OHOvELxqaizLCS4OtfsYOQ2/2l+Dk4JS4F9UrJ83h8wDFesHUy/DjcG82qzeOOJm2mB55Pfc34IkieNU/t9OntTlNz7pmIoMVk3Luu1I+pWzgZtQhh/ZoyoA0B+SLihaR8REUzHKh8DjCM4wXVfP7j0YNCRTvP42g8Hyawv0qrTtGT8WSC/2l4itmf398ScVL4+ltqV98iSO6alc0a8KqHyckasYLEn+eFlsZEzDC+zIOmsg6y3lVm4e6ExWIBWbz9UewQfPFiiSlSUKezWLUCYtw+SWZ8gm3eHWbiPobHcW2jNBxGqk8E65mB7FCr6VyGxkIasRijMVhVGTLcyevsjZG2JGHafZjxDw+TLwdbKxl2/RgWNPHaormNrNTUM5FWpMgQJF0NJUqGiShWQskoFNZbWs7bOw96olF0uhzIOMyDCgmggiw8UoqgUjDKzJeP5/SOIZZMQRsiwn8RnkMHELx3YsmITg7lGSqxh69K1moNVU0OqGCDv1lYlA0EkC0m8RgUq8LUEiGIpKUhRpemxJtPlxUWl8rE8nRdBxW7YRYocJZpoo4ve9PVyV7ngbHJJlCq9H+s120LDVa9ckCtpNppSKp+CsBirLzfEZGY2pdqKFQoBAAA=') format('woff2'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('truetype'), \\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('svg'); /* iOS 4.1- */\\n}\\n\\n.iconfont {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.icon-down_huaban1:before {\\n  content: \\\"\\\\e675\\\";\\n}\\n\\n.icon-computer_huaban1:before {\\n  content: \\\"\\\\e676\\\";\\n}\\n\\n.icon-down_huaban11:before {\\n  content: \\\"\\\\e677\\\";\\n}\\n\\n.icon-help_huaban1:before {\\n  content: \\\"\\\\e678\\\";\\n}\\n\\n.icon-manage:before {\\n  content: \\\"\\\\e679\\\";\\n}\\n\\n.icon-work:before {\\n  content: \\\"\\\\e67a\\\";\\n}\\n\\n.icon-account:before {\\n  content: \\\"\\\\e67c\\\";\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/font/iconfont.css?../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js":
/*!************************************************************************!*\
  !*** ../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/getUrl.js":
/*!***************************************************************************!*\
  !*** ../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/getUrl.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/_css-loader@3.4.2@css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/index.less":
/*!****************************!*\
  !*** ./src/css/index.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!../../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./index.less */ \"../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/css/index.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/index.less?");

/***/ }),

/***/ "./src/font/iconfont.css":
/*!*******************************!*\
  !*** ./src/font/iconfont.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./iconfont.css */ \"../node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js!./src/font/iconfont.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/font/iconfont.css?");

/***/ }),

/***/ "./src/font/iconfont.eot?t=1605325244430":
/*!***********************************************!*\
  !*** ./src/font/iconfont.eot?t=1605325244430 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"media/4e45e5310e2e98d6b35f643bd6f8cfb4.eot\");\n\n//# sourceURL=webpack:///./src/font/iconfont.eot?");

/***/ }),

/***/ "./src/font/iconfont.svg?t=1605325244430":
/*!***********************************************!*\
  !*** ./src/font/iconfont.svg?t=1605325244430 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"media/bfe46e14dfdece87af94a7b97a296f9e.svg\");\n\n//# sourceURL=webpack:///./src/font/iconfont.svg?");

/***/ }),

/***/ "./src/font/iconfont.ttf?t=1605325244430":
/*!***********************************************!*\
  !*** ./src/font/iconfont.ttf?t=1605325244430 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"media/8ea77ba63c5513e308b4e1deb752aff7.ttf\");\n\n//# sourceURL=webpack:///./src/font/iconfont.ttf?");

/***/ }),

/***/ "./src/font/iconfont.woff?t=1605325244430":
/*!************************************************!*\
  !*** ./src/font/iconfont.woff?t=1605325244430 ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"media/811b9164429bb46a8ecb5f89de619b34.woff\");\n\n//# sourceURL=webpack:///./src/font/iconfont.woff?");

/***/ }),

/***/ "./src/img/angular.jpg":
/*!*****************************!*\
  !*** ./src/img/angular.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/3b485c844a25e11fa4f513f1495df146.jpg\";\n\n//# sourceURL=webpack:///./src/img/angular.jpg?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _font_iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../font/iconfont.css */ \"./src/font/iconfont.css\");\n/* harmony import */ var _font_iconfont_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_font_iconfont_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.less */ \"./src/css/index.less\");\n/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_less__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction add(a, b) {\r\n    return a + b\r\n}\r\nconsole.log(add(1, 2));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });