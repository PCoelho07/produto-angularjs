angular.module('app')
        .controller('productsController', function ($scope, $http) {
            var baseUrl = 'http://homestead.test/api/products'
            $scope.app = "Tabela de produtos";
            
            $scope.produtos = [];

            $scope.getAllProdutos = function () {
                $http.get(baseUrl)
                    .then(function (response) {
                        $scope.produtos = response.data['data'];
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }

            $scope.getAllProdutos();

            $scope.viewProduto = function (produto) {
                let id = produto.id;

                $http.get(baseUrl + '/'+id)
                    .then(function (response) {
                        $scope.produto = response.data['data'];
                    })
                    .catch(function (err) {
                        console.log(err); 
                    });
            }


            $scope.addProdutos = function (produto) {
                if($scope.isExist(produto)) {
                    $scope.editProdutos(produto);
                    return;
                }

                if($scope.produtos.length > 0) {
                    $scope.lastID = $scope.produtos[$scope.produtos.length-1].id;
                }

                produto.id = $scope.lastID+1;
                $scope.produtos.push(produto);
                $scope.lastID = produto.id;
                delete $scope.produto;
            };

            $scope.editProdutos = function (produto) {
                if(! $scope.isExist(produto))
                    return false;

                let position = $scope.getPositionByID(produto.id);
                $scope.produto = $scope.produtos[position];
            }
            
            $scope.deleteProdutos = function (produto) {
                if(! $scope.isExist(produto))
                    return false; 
                
                let position = $scope.getPositionByID(produto.id);

                delete $scope.produtos[position];
                $scope.produtos.splice(position, 1);
                return true;
            };

            $scope.isExist = function (produto) {
                let i;
                for (let i = 0; i < $scope.produtos.length; i++) {
                    if($scope.produtos[i].id == produto.id)
                        return true;
                }

                return false;
            }

            $scope.getPositionByID = function (id) {
                for (let i = 0; i < $scope.produtos.length; i++) {
                    if(id == $scope.produtos[i].id)
                        return i;
                }
                
                return null;
            }

            $scope.limpar = function () {
                delete $scope.produto; 
            }

        });
