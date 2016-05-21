var Contatos = [];
var id = 0;

module.exports = function() {
	var Controller = {};

	Controller.getContato = function(request, response) {
		response.status(200).json(Contatos);
	};

	Controller.saveContato = function(request, response) {

		var contato = request.body;
		
		contato.id = id++;
		Contatos.push(contato);

		response.status(201).send({message:'ok'});

	};

	Controller.deleteContato = function(request, response) {

		var id = request.params.id;
		
		Contatos = Contatos.filter(function(contato) { 
			if(contato.id==id) {
				return false
			}
			else {
				return true;
			}
		});

		response.status(200).json({message:'ok'});

	};


	Controller.updateContato = function(request, response) {

		var contatoUpdate = request.body;
		var id = request.params.id;

		Contatos.forEach(function(contato) {
			if(contato.id == id) {
				contato.nome = contatoUpdate.nome;
				contato.sobrenome = contatoUpdate.sobrenome;
				contato.email = contatoUpdate.email
				contato.telefone = contatoUpdate.telefone;
			}
		});

		return response.status(200).json({message:'ok'});
	};


	return Controller;
}

