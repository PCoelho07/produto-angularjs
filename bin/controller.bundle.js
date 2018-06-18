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

    $scope.query = '';

    $scope.produto = {
        nome: '', descricao: '', valor_compra: '', valor_revenda: '', ativo: '', imagem_url: ''
    };

    $scope.prevPage = '';
    $scope.nextPage = '';

    $scope.getAllProdutos = function () {
        var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var url = baseUrl;

        if (endpoint != null) {
            url = endpoint;
        }

        $http.get(url).then(function (response) {
            $scope.produtos = response.data['data'];
            $scope.prevPage = response.data['links'].prev;
            $scope.nextPage = response.data['links'].next;
        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.goPrevious = function () {
        $scope.getAllProdutos($scope.prevPage);
    };

    $scope.goNext = function () {
        $scope.getAllProdutos($scope.nextPage);
    };

    $scope.viewProduto = function (produto) {
        var id = produto.id;

        $http.get(baseUrl + '/' + id).then(function (response) {
            $scope.produtoView = response.data['data'];
        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.dispacthProduto = function (produto) {
        if (produto.id !== '') {
            $scope.editProduto(produto);
            return;
        }

        $scope.addProdutos(produto);
    };

    $scope.addProdutos = function (produto) {

        $http.post(baseUrl, produto).then(function (response) {
            console.log(response);
            $scope.getAllProdutos();
        }).catch(function (err) {
            console.log(err.data);
        });
    };

    $scope.editProduto = function (produto) {
        var id = produto.id;
        $http.put(baseUrl + '/' + id, produto).then(function (response) {
            console.log(response);
            $scope.getAllProdutos();
        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.deleteProduto = function (produto) {
        var id = produto.id;
        $http.delete(baseUrl + '/' + id).then(function (response) {
            $scope.getAllProdutos();
        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.limpar = function () {
        delete $scope.produto;
    };

    $scope.launchProdutoEdit = function (produto) {
        $scope.produtoEdit = produto;
    };

    $scope.getAllProdutos();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2R1dG9Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGh0dHAiLCJiYXNlVXJsIiwiYXBwIiwicHJvZHV0b3MiLCJxdWVyeSIsInByb2R1dG8iLCJub21lIiwiZGVzY3JpY2FvIiwidmFsb3JfY29tcHJhIiwidmFsb3JfcmV2ZW5kYSIsImF0aXZvIiwiaW1hZ2VtX3VybCIsInByZXZQYWdlIiwibmV4dFBhZ2UiLCJnZXRBbGxQcm9kdXRvcyIsImVuZHBvaW50IiwidXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInByZXYiLCJuZXh0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ29QcmV2aW91cyIsImdvTmV4dCIsInZpZXdQcm9kdXRvIiwiaWQiLCJwcm9kdXRvVmlldyIsImRpc3BhY3RoUHJvZHV0byIsImVkaXRQcm9kdXRvIiwiYWRkUHJvZHV0b3MiLCJwb3N0IiwicHV0IiwiZGVsZXRlUHJvZHV0byIsImRlbGV0ZSIsImxpbXBhciIsImxhdW5jaFByb2R1dG9FZGl0IiwicHJvZHV0b0VkaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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ZSxjQUFQO0FBRUgsQ0E1R1QsRSIsImZpbGUiOiJjb250cm9sbGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3Byb2R1dG9Db250cm9sbGVyLmpzXCIpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdwcm9kdWN0c0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCkge1xuICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSAnaHR0cDovL2hvbWVzdGVhZC50ZXN0L2FwaS9wcm9kdWN0cydcbiAgICAgICAgICAgICRzY29wZS5hcHAgPSBcIlRhYmVsYSBkZSBwcm9kdXRvc1wiO1xuXG4gICAgICAgICAgICAkc2NvcGUucHJvZHV0b3MgPSBbXTtcblxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5ID0gJyc7XG5cbiAgICAgICAgICAgICRzY29wZS5wcm9kdXRvID0ge1xuICAgICAgICAgICAgICAgIG5vbWU6ICcnLCBkZXNjcmljYW86ICcnLCB2YWxvcl9jb21wcmE6ICcnLCB2YWxvcl9yZXZlbmRhOiAnJywgYXRpdm86ICcnLCBpbWFnZW1fdXJsOiAnJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLnByZXZQYWdlID0gJyc7XG4gICAgICAgICAgICAkc2NvcGUubmV4dFBhZ2UgPSAnJztcblxuICAgICAgICAgICAgJHNjb3BlLmdldEFsbFByb2R1dG9zID0gZnVuY3Rpb24gKGVuZHBvaW50ID0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBiYXNlVXJsO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGVuZHBvaW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gZW5kcG9pbnRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdXRvcyA9IHJlc3BvbnNlLmRhdGFbJ2RhdGEnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcmV2UGFnZSA9IHJlc3BvbnNlLmRhdGFbJ2xpbmtzJ10ucHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5uZXh0UGFnZSA9IHJlc3BvbnNlLmRhdGFbJ2xpbmtzJ10ubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUuZ29QcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0QWxsUHJvZHV0b3MoJHNjb3BlLnByZXZQYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmdvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0QWxsUHJvZHV0b3MoJHNjb3BlLm5leHRQYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLnZpZXdQcm9kdXRvID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBwcm9kdXRvLmlkO1xuXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGJhc2VVcmwgKyAnLycraWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1dG9WaWV3ID0gcmVzcG9uc2UuZGF0YVsnZGF0YSddO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTsgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUuZGlzcGFjdGhQcm9kdXRvID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBpZihwcm9kdXRvLmlkICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0UHJvZHV0byhwcm9kdXRvKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzY29wZS5hZGRQcm9kdXRvcyhwcm9kdXRvKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmFkZFByb2R1dG9zID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KGJhc2VVcmwsIHByb2R1dG8pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdldEFsbFByb2R1dG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmVkaXRQcm9kdXRvID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBwcm9kdXRvLmlkO1xuICAgICAgICAgICAgICAgICRodHRwLnB1dChiYXNlVXJsICsgJy8nICsgaWQsIHByb2R1dG8pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdldEFsbFByb2R1dG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmRlbGV0ZVByb2R1dG8gPSBmdW5jdGlvbiAocHJvZHV0bykge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHByb2R1dG8uaWQ7XG4gICAgICAgICAgICAgICAgJGh0dHAuZGVsZXRlKGJhc2VVcmwgKyAnLycgKyBpZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5nZXRBbGxQcm9kdXRvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmxpbXBhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgJHNjb3BlLnByb2R1dG87IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUubGF1bmNoUHJvZHV0b0VkaXQgPSBmdW5jdGlvbiAocHJvZHV0bykge1xuICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdXRvRWRpdCA9IHByb2R1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5nZXRBbGxQcm9kdXRvcygpO1xuXG4gICAgICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==