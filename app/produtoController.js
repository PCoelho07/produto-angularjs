angular.module('app')
        .controller('productsController', function ($scope) {
            $scope.app = "Tabela de produtos";
            $scope.lastID = 0;

            $scope.produtos = [
                { id: 1, nome: 'Garrafa', descricao: 'Garrafa tupperware' },
                { id: 2, nome: 'Caderno', descricao: 'Caderno da escola' },
                { id: 3, nome: 'Lâmpada', descricao: 'Lâmpada 18w' },
                { id: 4, nome: 'Violão', descricao: 'Violão tagima' },
                { id: 5, nome: 'Cadeira', descricao: 'Cadeira gamer Dt3' },
            ];

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

            $scope.viewProduto = function (produto) {
                // TO DO
            }

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
