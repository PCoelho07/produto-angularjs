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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/produtoController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/produtoController.js":
/*!**********************************!*\
  !*** ./app/produtoController.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('app').controller('productsController', function ($scope) {
    $scope.app = "Tabela de produtos";
    $scope.lastID = 0;

    $scope.produtos = [{ id: 1, nome: 'Garrafa', descricao: 'Garrafa tupperware' }, { id: 2, nome: 'Caderno', descricao: 'Caderno da escola' }, { id: 3, nome: 'Lâmpada', descricao: 'Lâmpada 18w' }, { id: 4, nome: 'Violão', descricao: 'Violão tagima' }, { id: 5, nome: 'Cadeira', descricao: 'Cadeira gamer Dt3' }];

    $scope.addProdutos = function (produto) {
        if ($scope.isExist(produto)) {
            $scope.editProdutos(produto);
            return;
        }

        if ($scope.produtos.length > 0) {
            $scope.lastID = $scope.produtos[$scope.produtos.length - 1].id;
        }

        produto.id = $scope.lastID + 1;
        $scope.produtos.push(produto);
        $scope.lastID = produto.id;
        delete $scope.produto;
    };

    $scope.editProdutos = function (produto) {
        if (!$scope.isExist(produto)) return false;

        var position = $scope.getPositionByID(produto.id);
        $scope.produto = $scope.produtos[position];
    };

    $scope.deleteProdutos = function (produto) {
        if (!$scope.isExist(produto)) return false;

        var position = $scope.getPositionByID(produto.id);

        delete $scope.produtos[position];
        $scope.produtos.splice(position, 1);
        return true;
    };

    $scope.isExist = function (produto) {
        var i = void 0;
        for (var _i = 0; _i < $scope.produtos.length; _i++) {
            if ($scope.produtos[_i].id == produto.id) return true;
        }

        return false;
    };

    $scope.getPositionByID = function (id) {
        for (var i = 0; i < $scope.produtos.length; i++) {
            if (id == $scope.produtos[i].id) return i;
        }

        return null;
    };

    $scope.limpar = function () {
        delete $scope.produto;
    };
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2R1dG9Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiYXBwIiwibGFzdElEIiwicHJvZHV0b3MiLCJpZCIsIm5vbWUiLCJkZXNjcmljYW8iLCJhZGRQcm9kdXRvcyIsInByb2R1dG8iLCJpc0V4aXN0IiwiZWRpdFByb2R1dG9zIiwibGVuZ3RoIiwicHVzaCIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb25CeUlEIiwiZGVsZXRlUHJvZHV0b3MiLCJzcGxpY2UiLCJpIiwibGltcGFyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQ1NDLFVBRFQsQ0FDb0Isb0JBRHBCLEVBQzBDLFVBQVVDLE1B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QUFQO0FBQ0gsS0FQRDs7QUFTQWpCLFdBQU9rQixNQUFQLEdBQWdCLFlBQVk7QUFDeEIsZUFBT2xCLE9BQU9RLE9BQWQ7QUFDSCxLQUZEO0FBSUgsQ0F2RVQsRSIsImZpbGUiOiJjb250cm9sbGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3Byb2R1dG9Db250cm9sbGVyLmpzXCIpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdwcm9kdWN0c0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgICAgICAkc2NvcGUuYXBwID0gXCJUYWJlbGEgZGUgcHJvZHV0b3NcIjtcbiAgICAgICAgICAgICRzY29wZS5sYXN0SUQgPSAwO1xuXG4gICAgICAgICAgICAkc2NvcGUucHJvZHV0b3MgPSBbXG4gICAgICAgICAgICAgICAgeyBpZDogMSwgbm9tZTogJ0dhcnJhZmEnLCBkZXNjcmljYW86ICdHYXJyYWZhIHR1cHBlcndhcmUnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogMiwgbm9tZTogJ0NhZGVybm8nLCBkZXNjcmljYW86ICdDYWRlcm5vIGRhIGVzY29sYScgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAzLCBub21lOiAnTMOibXBhZGEnLCBkZXNjcmljYW86ICdMw6JtcGFkYSAxOHcnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogNCwgbm9tZTogJ1Zpb2zDo28nLCBkZXNjcmljYW86ICdWaW9sw6NvIHRhZ2ltYScgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiA1LCBub21lOiAnQ2FkZWlyYScsIGRlc2NyaWNhbzogJ0NhZGVpcmEgZ2FtZXIgRHQzJyB9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgJHNjb3BlLmFkZFByb2R1dG9zID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuaXNFeGlzdChwcm9kdXRvKSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdFByb2R1dG9zKHByb2R1dG8pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLnByb2R1dG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxhc3RJRCA9ICRzY29wZS5wcm9kdXRvc1skc2NvcGUucHJvZHV0b3MubGVuZ3RoLTFdLmlkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb2R1dG8uaWQgPSAkc2NvcGUubGFzdElEKzE7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1dG9zLnB1c2gocHJvZHV0byk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmxhc3RJRCA9IHByb2R1dG8uaWQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5wcm9kdXRvO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmVkaXRQcm9kdXRvcyA9IGZ1bmN0aW9uIChwcm9kdXRvKSB7XG4gICAgICAgICAgICAgICAgaWYoISAkc2NvcGUuaXNFeGlzdChwcm9kdXRvKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gJHNjb3BlLmdldFBvc2l0aW9uQnlJRChwcm9kdXRvLmlkKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucHJvZHV0byA9ICRzY29wZS5wcm9kdXRvc1twb3NpdGlvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzY29wZS5kZWxldGVQcm9kdXRvcyA9IGZ1bmN0aW9uIChwcm9kdXRvKSB7XG4gICAgICAgICAgICAgICAgaWYoISAkc2NvcGUuaXNFeGlzdChwcm9kdXRvKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAkc2NvcGUuZ2V0UG9zaXRpb25CeUlEKHByb2R1dG8uaWQpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5wcm9kdXRvc1twb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1dG9zLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuaXNFeGlzdCA9IGZ1bmN0aW9uIChwcm9kdXRvKSB7XG4gICAgICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUucHJvZHV0b3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJHNjb3BlLnByb2R1dG9zW2ldLmlkID09IHByb2R1dG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5nZXRQb3NpdGlvbkJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRzY29wZS5wcm9kdXRvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZihpZCA9PSAkc2NvcGUucHJvZHV0b3NbaV0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5saW1wYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5wcm9kdXRvOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=