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

    $scope.produto = {
        nome: '', descricao: '', valor_compra: '', valor_revenda: '', ativo: '', imagem_url: ''
    };

    $scope.getAllProdutos = function () {
        $http.get(baseUrl).then(function (response) {
            $scope.produtos = response.data['data'];
        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.viewProduto = function (produto) {
        var id = produto.id;

        $http.get(baseUrl + '/' + id).then(function (response) {
            $scope.produtoView = response.data['data'];
        }).catch(function (err) {
            console.log(err);
        });
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
        if (!$scope.isExist(produto)) return false;

        var position = $scope.getPositionByID(produto.id);
        $scope.produto = $scope.produtos[position];
    };

    $scope.deleteProduto = function (produto) {
        var id = produto.id;
        $http.delete(baseUrl + '/' + id).then(function (response) {
            $scope.getAllProdutos();
        }).catch(function (err) {
            console.log(err);
        });
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

    $scope.getAllProdutos();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2R1dG9Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGh0dHAiLCJiYXNlVXJsIiwiYXBwIiwicHJvZHV0b3MiLCJwcm9kdXRvIiwibm9tZSIsImRlc2NyaWNhbyIsInZhbG9yX2NvbXByYSIsInZhbG9yX3JldmVuZGEiLCJhdGl2byIsImltYWdlbV91cmwiLCJnZXRBbGxQcm9kdXRvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ2aWV3UHJvZHV0byIsImlkIiwicHJvZHV0b1ZpZXciLCJhZGRQcm9kdXRvcyIsInBvc3QiLCJlZGl0UHJvZHV0byIsImlzRXhpc3QiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uQnlJRCIsImRlbGV0ZVByb2R1dG8iLCJkZWxldGUiLCJpIiwibGVuZ3RoIiwibGltcGFyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFB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QUFnQkEsS0FBSWhDLE9BQU9JLFFBQVAsQ0FBZ0I2QixNQUFwQyxFQUE0Q0QsSUFBNUMsRUFBaUQ7QUFDN0MsZ0JBQUdoQyxPQUFPSSxRQUFQLENBQWdCNEIsRUFBaEIsRUFBbUJWLEVBQW5CLElBQXlCakIsUUFBUWlCLEVBQXBDLEVBQ0ksT0FBTyxJQUFQO0FBQ1A7O0FBRUQsZUFBTyxLQUFQO0FBQ0gsS0FSRDs7QUFVQXRCLFdBQU82QixlQUFQLEdBQXlCLFVBQVVQLEVBQVYsRUFBYztBQUNuQyxhQUFLLElBQUlVLElBQUksQ0FBYixFQUFnQkEsSUFBSWhDLE9BQU9JLFFBQVAsQ0FBZ0I2QixNQUFwQyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDN0MsZ0JBQUdWLE1BQU10QixPQUFPSSxRQUFQLENBQWdCNEIsQ0FBaEIsRUFBbUJWLEVBQTVCLEVBQ0ksT0FBT1UsQ0FBUDtBQUNQOztBQUVELGVBQU8sSUFBUDtBQUNILEtBUEQ7O0FBU0FoQyxXQUFPa0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLGVBQU9sQyxPQUFPSyxPQUFkO0FBQ0gsS0FGRDs7QUFJQUwsV0FBT1ksY0FBUDtBQUVILENBMUZULEUiLCJmaWxlIjoiY29udHJvbGxlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9wcm9kdXRvQ29udHJvbGxlci5qc1wiKTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgICAgICAuY29udHJvbGxlcigncHJvZHVjdHNDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHApIHtcbiAgICAgICAgICAgIHZhciBiYXNlVXJsID0gJ2h0dHA6Ly9ob21lc3RlYWQudGVzdC9hcGkvcHJvZHVjdHMnXG4gICAgICAgICAgICAkc2NvcGUuYXBwID0gXCJUYWJlbGEgZGUgcHJvZHV0b3NcIjtcblxuICAgICAgICAgICAgJHNjb3BlLnByb2R1dG9zID0gW107XG5cbiAgICAgICAgICAgICRzY29wZS5wcm9kdXRvID0ge1xuICAgICAgICAgICAgICAgIG5vbWU6ICcnLCBkZXNjcmljYW86ICcnLCB2YWxvcl9jb21wcmE6ICcnLCB2YWxvcl9yZXZlbmRhOiAnJywgYXRpdm86ICcnLCBpbWFnZW1fdXJsOiAnJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmdldEFsbFByb2R1dG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRodHRwLmdldChiYXNlVXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdXRvcyA9IHJlc3BvbnNlLmRhdGFbJ2RhdGEnXTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUudmlld1Byb2R1dG8gPSBmdW5jdGlvbiAocHJvZHV0bykge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHByb2R1dG8uaWQ7XG5cbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYmFzZVVybCArICcvJytpZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucHJvZHV0b1ZpZXcgPSByZXNwb25zZS5kYXRhWydkYXRhJ107XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpOyBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgJHNjb3BlLmFkZFByb2R1dG9zID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KGJhc2VVcmwsIHByb2R1dG8pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdldEFsbFByb2R1dG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmVkaXRQcm9kdXRvID0gZnVuY3Rpb24gKHByb2R1dG8pIHtcbiAgICAgICAgICAgICAgICBpZighICRzY29wZS5pc0V4aXN0KHByb2R1dG8pKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAkc2NvcGUuZ2V0UG9zaXRpb25CeUlEKHByb2R1dG8uaWQpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wcm9kdXRvID0gJHNjb3BlLnByb2R1dG9zW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJHNjb3BlLmRlbGV0ZVByb2R1dG8gPSBmdW5jdGlvbiAocHJvZHV0bykge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHByb2R1dG8uaWQ7XG4gICAgICAgICAgICAgICAgJGh0dHAuZGVsZXRlKGJhc2VVcmwgKyAnLycgKyBpZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5nZXRBbGxQcm9kdXRvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCggZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmlzRXhpc3QgPSBmdW5jdGlvbiAocHJvZHV0bykge1xuICAgICAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJHNjb3BlLnByb2R1dG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCRzY29wZS5wcm9kdXRvc1tpXS5pZCA9PSBwcm9kdXRvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUuZ2V0UG9zaXRpb25CeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUucHJvZHV0b3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJHNjb3BlLnByb2R1dG9zW2ldLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2NvcGUubGltcGFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSAkc2NvcGUucHJvZHV0bzsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzY29wZS5nZXRBbGxQcm9kdXRvcygpO1xuXG4gICAgICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==