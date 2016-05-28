angular.module("app.agenda").controller("ContatoCtrl", function($scope, $routeParams, apiService) {
    $scope.id = $routeParams.id;

    listar();

    function listar() {
        apiService.listarContatos().then(function(response) {
            $scope.contatos = response.data;
        });
    }


    $scope.selecionarContato = function(id) {
        apiService.selecionarContato(id).then(function(fetchedData) {
            $scope.contato = fetchedData;
        });
    };

    $scope.selecionarContato($scope.id);
});
