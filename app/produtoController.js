angular.module('app')
        .controller('productsController', function ($scope, $http) {
            var baseUrl = 'http://homestead.test/api/products'
            $scope.app = "Tabela de produtos";

            $scope.produtos = [];

            $scope.produto = {
                nome: '', descricao: '', valor_compra: '', valor_revenda: '', ativo: '', imagem_url: ''
            };

            $scope.getAllProdutos = function () {
                $http.get(baseUrl)
                    .then(function (response) {
                        $scope.produtos = response.data['data'];
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }

            $scope.viewProduto = function (produto) {
                let id = produto.id;

                $http.get(baseUrl + '/'+id)
                    .then(function (response) {
                        $scope.produtoView = response.data['data'];
                    })
                    .catch(function (err) {
                        console.log(err); 
                    });
            }


            $scope.addProdutos = function (produto) {
                
                $http.post(baseUrl, produto)
                    .then(function (response) {
                        console.log(response);
                        $scope.getAllProdutos();
                    })
                    .catch(function (err) {
                        console.log(err.data);
                    });
            };

            $scope.editProduto = function (produto) {
                if(! $scope.isExist(produto))
                    return false;

                let position = $scope.getPositionByID(produto.id);
                $scope.produto = $scope.produtos[position];
            }
            
            $scope.deleteProduto = function (produto) {
                let id = produto.id;
                $http.delete(baseUrl + '/' + id)
                        .then(function (response) {
                            $scope.getAllProdutos();
                        })
                        .catch( function (err) {
                            console.log(err)
                        });
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

            $scope.getAllProdutos();

        });
