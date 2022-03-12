const prompt = require('prompt-sync')();

do{
	usuario = prompt('digite o nome do usuário ');
	senha = prompt('digite sua senha ');
	if(usuario===senha){
	  console.clear();
	  console.log(`digite usuário diferente de senha`)
	}
}while(senha===usuario)

console.log(`Usuário: ${usuario}`)
console.log(`Senha: *****`)