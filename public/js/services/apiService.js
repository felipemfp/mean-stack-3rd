angular.module("app.agenda").service("apiService", function($http, $log) {
    var apiHost = '/api';

    var service = {
        listarContatos: listarContatos,
        adicionarContato: adicionarContato,
        selecionarContato: selecionarContato,
        deletarContato: deletarContato,
        atualizarContato: atualizarContato
    };

    return service;

    function listarContatos() {
        return $http.get(apiHost + '/contatos')
            .then(listarContatosCompleted)
            .catch(listarContatosFailed);

        function listarContatosCompleted(response) {
            return response.data;
        }

        function listarContatosFailed(error) {
            $log.error('XHR Failed for listarContatos.\n' + angular.toJson(error.data, true));
        }
    };

    function selecionarContato(id) {
        return $http.get(apiHost + '/contatos/' + id)
            .then(selecionarContatoCompleted)
            .catch(selecionarContatoFailed);

        function selecionarContatoCompleted(response) {
            return response.data;
        }

        function selecionarContatoFailed(error) {
            $log.error('XHR Failed for selecionarContato.\n' + angular.toJson(error.data, true));
        }
    };

    function adicionarContato(contato, callback) {
        return $http.post(apiHost + '/contatos', contato)
            .then(adicionarContatoCompleted)
            .catch(adicionarContatoFailed);

        function adicionarContatoCompleted(response) {
            return callback(true);
        }

        function adicionarContatoFailed(error) {
            $log.error('XHR Failed for adicionarContato.\n' + angular.toJson(error.data, true));
            return callback(false);
        }
    };

    function deletarContato(id, callback) {
        return $http.delete(apiHost + '/contatos/' + id)
            .then(deletarContatoCompleted).catch(deletarContatoFailed);

        function deletarContatoCompleted(response) {
            return callback(true);
        }

        function deletarContatoFailed(error) {
            $log.error('XHR Failed for deletarContato.\n' + angular.toJson(error.data, true));
            return callback(false);
        }
    };

    function atualizarContato(id, contato, callback) {
        return $http.put(apiHost + '/contatos/' + id, contato)
            .then(atualizarContatoCompleted).catch(atualizarContatoFailed);

        function atualizarContatoCompleted(response) {
            return callback(true);
        }

        function atualizarContatoFailed(error) {
            $log.error('XHR Failed for atualizarContato.\n' + angular.toJson(error.data, true));
            return callback(false);
        }
    }
});
