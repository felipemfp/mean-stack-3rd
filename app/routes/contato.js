module.exports = function(app) {

	var Controller = app.controllers.contato;

	app.get('/api/contatos',Controller.getContato);
	app.post('/api/contato', Controller.saveContato);
	app.delete('/api/contato/:id', Controller.deleteContato);
	app.put('/api/contato/:id', Controller.updateContato);
}
