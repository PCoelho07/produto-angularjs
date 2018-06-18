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


angular.module('app').controller('productsController', function ($scope, $http) {
    var baseUrl = 'http://homestead.test/api/products';
    $scope.app = "Tabela de produtos";

    $scope.produtos = [];

    $scope.getAllProdutos = function () {
        $http.get(baseUrl).then(function (response) {
            $scope.produtos = response.data['data'];
        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.getAllProdutos();

    $scope.viewProduto = function (produto) {
        var id = produto.id;

        $http.get(baseUrl + '/' + id).then(function (response) {
            $scope.produto = response.data['data'];
        }).catch(function (err) {
            console.log(err);
        });
    };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2R1dG9Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGh0dHAiLCJiYXNlVXJsIiwiYXBwIiwicHJvZHV0b3MiLCJnZXRBbGxQcm9kdXRvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ2aWV3UHJvZHV0byIsInByb2R1dG8iLCJpZCIsImFkZFByb2R1dG9zIiwiaXNFeGlzdCIsImVkaXRQcm9kdXRvcyIsImxlbmd0aCIsImxhc3RJRCIsInB1c2giLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uQnlJRCIsImRlbGV0ZVByb2R1dG9zIiwic3BsaWNlIiwiaSIsImxpbXBhciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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QixPQUFPSSxRQUFQLENBQWdCZ0IsTUFBcEMsRUFBNENPLElBQTVDLEVBQWlEO0FBQzdDLGdCQUFHM0IsT0FBT0ksUUFBUCxDQUFnQnVCLEVBQWhCLEVBQW1CWCxFQUFuQixJQUF5QkQsUUFBUUMsRUFBcEMsRUFDSSxPQUFPLElBQVA7QUFDUDs7QUFFRCxlQUFPLEtBQVA7QUFDSCxLQVJEOztBQVVBaEIsV0FBT3dCLGVBQVAsR0FBeUIsVUFBVVIsRUFBVixFQUFjO0FBQ25DLGFBQUssSUFBSVcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJM0IsT0FBT0ksUUFBUCxDQUFnQmdCLE1BQXBDLEVBQTRDTyxHQUE1QyxFQUFpRDtBQUM3QyxnQkFBR1gsTUFBTWhCLE9BQU9JLFFBQVAsQ0FBZ0J1QixDQUFoQixFQUFtQlgsRUFBNUIsRUFDSSxPQUFPVyxDQUFQO0FBQ1A7O0FBRUQsZUFBTyxJQUFQO0FBQ0gsS0FQRDs7QUFTQTNCLFdBQU80QixNQUFQLEdBQWdCLFlBQVk7QUFDeEIsZUFBTzVCLE9BQU9lLE9BQWQ7QUFDSCxLQUZEO0FBSUgsQ0ExRlQsRSIsImZpbGUiOiJjb250cm9sbGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3Byb2R1dG9Db250cm9sbGVyLmpzXCIpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdwcm9kdWN0c0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCkge1xuICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSAnaHR0cDovL2hvbWVzdGVhZC50ZXN0L2FwaS9wcm9kdWN0cydcbiAgICAgICAgICAgICRzY29wZS5hcHAgPSBcIlRhYmVsYSBkZSBwcm9kdXRvc1wiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkc2NvcGUucHJvZHV0b3MgPSBbXTtcblxuICAgICAgICAgICAgJHNjb3BlLmdldEFsbFByb2R1dG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRodHRwLmdldChiYXNlVXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdXRvcyA9IHJlc3BvbnNlLmRhdGFbJ2RhdGEnXTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUuZ2V0QWxsUHJvZHV0b3MoKTtcblxuICAgICAgICAgICAgJHNjb3BlLnZpZXdQcm9kdXRvID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBwcm9kdXRvLmlkO1xuXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGJhc2VVcmwgKyAnLycraWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1dG8gPSByZXNwb25zZS5kYXRhWydkYXRhJ107XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpOyBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgJHNjb3BlLmFkZFByb2R1dG9zID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuaXNFeGlzdChwcm9kdXRvKSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdFByb2R1dG9zKHByb2R1dG8pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLnByb2R1dG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxhc3RJRCA9ICRzY29wZS5wcm9kdXRvc1skc2NvcGUucHJvZHV0b3MubGVuZ3RoLTFdLmlkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb2R1dG8uaWQgPSAkc2NvcGUubGFzdElEKzE7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1dG9zLnB1c2gocHJvZHV0byk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmxhc3RJRCA9IHByb2R1dG8uaWQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5wcm9kdXRvO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmVkaXRQcm9kdXRvcyA9IGZ1bmN0aW9uIChwcm9kdXRvKSB7XG4gICAgICAgICAgICAgICAgaWYoISAkc2NvcGUuaXNFeGlzdChwcm9kdXRvKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gJHNjb3BlLmdldFBvc2l0aW9uQnlJRChwcm9kdXRvLmlkKTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucHJvZHV0byA9ICRzY29wZS5wcm9kdXRvc1twb3NpdGlvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzY29wZS5kZWxldGVQcm9kdXRvcyA9IGZ1bmN0aW9uIChwcm9kdXRvKSB7XG4gICAgICAgICAgICAgICAgaWYoISAkc2NvcGUuaXNFeGlzdChwcm9kdXRvKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAkc2NvcGUuZ2V0UG9zaXRpb25CeUlEKHByb2R1dG8uaWQpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5wcm9kdXRvc1twb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1dG9zLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuaXNFeGlzdCA9IGZ1bmN0aW9uIChwcm9kdXRvKSB7XG4gICAgICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUucHJvZHV0b3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJHNjb3BlLnByb2R1dG9zW2ldLmlkID09IHByb2R1dG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5nZXRQb3NpdGlvbkJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRzY29wZS5wcm9kdXRvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZihpZCA9PSAkc2NvcGUucHJvZHV0b3NbaV0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5saW1wYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5wcm9kdXRvOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=