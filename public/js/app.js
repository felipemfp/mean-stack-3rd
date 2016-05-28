// Definição do módulo da agenda, injetando o angular-route para trabalhar com as rotas
angular.module("app.agenda", ['ngRoute']);

// Configurações do módulo da agenda
angular.module("app.agenda").config(function($routeProvider){
	// Configuração do provedor de rotas ($routeProvider)
	$routeProvider
		.when("/", {
			controller: "ContatosCtrl", // Controller da rota
			templateUrl: "views/contatos.html" // View da rota
		})
		.when("/contato/:id", { // ':id' é um parâmetro que será passado pela url e será acessado no controller da rota
			controller: "ContatoCtrl",
			templateUrl: "views/contato.html"
		})
		// Caso tente acessar uma rota que não existe a aplicação irá redirecionar para a rota '/'
		.otherwise("/");
});