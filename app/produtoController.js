angular.module('app')
        .controller('productsController', function ($scope, $http) {
            var baseUrl = 'http://homestead.test/api/products'
            $scope.app = "Tabela de produtos";

            $scope.produtos = [];

            $scope.query = '';

            $scope.produto = {
                nome: '', descricao: '', valor_compra: '', valor_revenda: '', ativo: '', imagem_url: ''
            };

            $scope.prevPage = '';
            $scope.nextPage = '';

            $scope.getAllProdutos = function (endpoint = null) {
                let url = baseUrl;
                
                if(endpoint != null) {
                    url = endpoint
                }

                $http.get(url)
                    .then(function (response) {
                        $scope.produtos = response.data['data'];
                        $scope.prevPage = response.data['links'].prev;
                        $scope.nextPage = response.data['links'].next;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }

            $scope.goPrevious = function () {
                $scope.getAllProdutos($scope.prevPage);
            }

            $scope.goNext = function () {
                $scope.getAllProdutos($scope.nextPage);
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

            $scope.dispacthProduto = function (produto) {
                if(produto.id !== ''){
                    $scope.editProduto(produto);
                    return;
                }

                $scope.addProdutos(produto);
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
                let id = produto.id;
                $http.put(baseUrl + '/' + id, produto)
                    .then(function (response) {
                        console.log(response);
                        $scope.getAllProdutos();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
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

            $scope.limpar = function () {
                delete $scope.produto; 
            }

            $scope.launchProdutoEdit = function (produto) {
                $scope.produtoEdit = produto;
            }

            $scope.getAllProdutos();

        });
