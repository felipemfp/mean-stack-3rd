angular.module("app.agenda").controller("ContatosCtrl", function($scope, $log, $location, apiService) {
    listar();

    function listar() {
        apiService.listarContatos().then(function(fetchedData) {
            $scope.contatos = fetchedData;
        });
    }

    function apresentarMensagem(sucesso) {
        if (sucesso) {
            $("#modalSucesso").modal('show');
        }
        else {
          $("#modalErro").modal('show');
        }
    }

    $scope.editarContato = function(contato) {
        $scope.contato = angular.copy(contato);
        $scope.editando = true;
    }

    $scope.salvar = function(contato) {
        function editar(contato) {
            apiService.atualizarContato(contato._id, contato, apresentarMensagem);
        }

        if ($scope.editando == true) {
            editar(contato);
            $scope.editando = false;
        } else {
            apiService.adicionarContato(contato, apresentarMensagem);
        }

        $scope.contato = {};

        listar();
    };

    $scope.remover = function(index) {
        apiService.deletarContato($scope.contatos[index]._id, apresentarMensagem);
        listar();
    }

    $scope.visualizar = function(id) {
        $location.path("/contato/" + id);
        listar();
    }
});
