module.exports = function(app) {
    var Contato = app.models.Contato;
    var Controller = {};

    Controller.getContato = function(request, response) {
        var id = request.params.id;
        if (id) {
            Contato.findOne({
                _id: id
            }, function(error, contato) {
                if (!error)
                    return response.status(200).send(contato);
                else
                    return response.status(500).send(error);
            });
        } else {
            Contato.find(function(error, contatos) {
                if (!error)
                    return response.status(200).send(contatos);
                else
                    return response.status(500).send(error);
            });
        }
    };

    Controller.saveContato = function(request, response) {

        var contato = request.body;

        Contato.create(contato)
            .then(function(success) {
                response.status(201).send({
                    message: success
                });
            }, function(error) {
                response.status(500).send({
                    message: error
                });
            });


    };

    Controller.deleteContato = function(request, response) {

        var id = request.params.id;

        Contato.remove({
            _id: id
        }, function(error) {
            if (!error)
                return response.status(200).send({
                    message: 'It has been deleted'
                });
            else
                return response.status(500).send(error);
        });

    };


    Controller.updateContato = function(request, response) {

        var contato = {},
            contatoFromBody = request.body,
            id = request.params.id;

        contato.nome = contatoFromBody.nome;
        contato.sobrenome = contatoFromBody.sobrenome;
        contato.idade = contatoFromBody.idade;
        contato.email = contatoFromBody.email;
        contato.telefone = contatoFromBody.telefone;

        Contato.findOneAndUpdate({
                _id: id
            }, contato, {
                upsert: true
            },
            function(error, contato) {
                if (!error)
                    return response.status(200).send({
                        message: 'It has been updated'
                    });
                else
                    return response.status(500).send(error);
            });
    };


    return Controller;
}
