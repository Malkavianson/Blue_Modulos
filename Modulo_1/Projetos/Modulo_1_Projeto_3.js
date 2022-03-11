const prompt = require('prompt-sync')();

let personagemPrincipal = 	{};

let horario = ['Alvorada', 'Manhã', 'Tarde', 'Noite', 'hora de dormir'];
let op_id = ['homem', 'mulher'];
let op_os = ['he', 'ho', 'bi'];


let garotas = ['Valeria',   'Sophia', 'Rosa',   'Alice',   'Ludmila', 'Rebecca', 'Monica'];
let garotos = ['Frederico', 'Davi',   'Otavio', 'Marcelo', 'Ricardo', 'Otto',    'Alexandre'];
let garotxs = ['Frederico', 'Sophia', 'Rosa',   'Alice',   'Ludmila', 'Otto',    'Alexandre'];
let personagensSecundarios = [];

//Primeira parte da historia
let h100000 = 'Hoje é dia 01 de Agosto de 2021';
let h100001 = 'As férias de julho acabaram, você acaba de voltar do sítio dos seus avós onde eles fizeram uma grande festa para o seu aniversário!';
let h100002 = 'Você acaba de completar 18 anos, e está terminando o Ensino médio.';
let h100003 = 'Você arruma as coisas para voltar às aulas... Contra sua vontade, como sempre...';
let h100004 = 'Já que você jamais foi o primeiro da turma, mas também nunca ficou para trás!';
let h100005 = 'Este semestre você decidiu que fará diferente, e estes últimos meses serem inesquecíveis';

//História para js
console.log(h100000);
console.log();
prompt('pressione ENTER para continuar');
console.clear();
console.log(h100001);
console.log();
prompt('pressione ENTER para continuar');
console.clear();
console.log(h100002);
console.log();
prompt('pressione ENTER para continuar');
console.clear();
console.log(h100003);
console.log();
prompt('pressione ENTER para continuar');
console.clear();
console.log(h100004);
console.log();
prompt('pressione ENTER para continuar');
console.clear();
console.log(h100005);
console.log();
prompt('pressione ENTER para continuar');
console.clear();

personagemPrincipal.nome = prompt('Primeiro me dia qual seu nome? ');
console.clear();

while(personagemPrincipal.identidadeGenero !=0 && personagemPrincipal.identidadeGenero != 1){
	var ask_ig = prompt('Você é um Rapaz[r] ou uma Moça[m]?');
		if(ask_ig.toLowerCase() == 'r'){
			personagemPrincipal.identidadeGenero = 0;
		}else if(ask_ig.toLowerCase() == 'm'){
			personagemPrincipal.identidadeGenero = 1;
		}else{
		console.clear();
		let ask_ig_e = 'Voce precisa responder [r] ou [s]';
		console.log(ask_ig_e);
	}
}
console.clear();

while(personagemPrincipal.orientacaoSexual != 0 && personagemPrincipal.orientacaoSexual != 1 && personagemPrincipal.orientacaoSexual != 2){
	var ask_os = prompt('E você é Hetero[h], Gay[g] ou Bi[b]?');
	if(ask_os.toLowerCase() == 'h'){
		personagemPrincipal.orientacaoSexual = 0;
	}else if(ask_os.toLowerCase() == 'g'){
		personagemPrincipal.orientacaoSexual = 1;
	}else if(ask_os.toLowerCase() == 'b'){
		personagemPrincipal.orientacaoSexual = 2;
	}else{
		let ask_os_r = 'Voce precisa responder [r] ou [s]';
		console.log(ask_os_r);
	}
}
console.clear();

if(personagemPrincipal.identidadeGenero === 0){
	if(personagemPrincipal.orientacaoSexual === 0){
		personagensSecundarios = garotas
	}else if(personagemPrincipal.orientacaoSexual === 1){
		personagensSecundarios = garotos
	}else{ 
		personagensSecundarios = garotxs 
}
}else{
	if(personagemPrincipal.orientacaoSexual === 0){
		personagensSecundarios = garotos
	}else if(personagemPrincipal.orientacaoSexual === 1){
		personagensSecundarios = garotas
	}else{ 
		personagensSecundarios = garotxs 
	}
}

let normal = {
	portugues: 18,
	matematica: 18,
	historia: 18,
	geografia: 18,
	artes: 18,
	educacaoFisica: 18,
	sorte: 18,
	dinheiro: 0,
	disposicao: 100
}
let inteligente = {
	portugues: 14,
	matematica: 30,
	historia: 14,
	geografia: 30,
	artes: 15,
	educacaoFisica: 5,
	sorte: 18,
	dinheiro: 0,
	disposicao: 100
}
let esportista = {
	portugues: 15,
	matematica: 10,
	historia: 13,
	geografia: 18,
	artes: 15,
	educacaoFisica: 30,
	sorte: 25,
	dinheiro: 0,
	disposicao: 100
}
let artista = {
	portugues: 18,
	matematica: 18,
	historia: 20,
	geografia: 17,
	artes: 35,
	educacaoFisica: 3,
	sorte: 15,
	dinheiro: 0,
	disposicao: 100
}
let faztudo = {
	portugues: 15,
	matematica: 17,
	historia: 14,
	geografia: 10,
	artes: 15,
	educacaoFisica: 25,
	sorte: 30,
	dinheiro: 0,
	disposicao: 100
}

let h100006 = 'Agora nos diga com qual desses tipos você assemelha?';
let ask_tp = "";

while(ask_tp != 'n' && ask_tp != 'i' && ask_tp != 'e' && ask_tp != 'a' && ask_tp != 'f'){
console.log(h100006);
console.log(`Normal[n] Inteligente[i] Esportista[e] Artista[a] Faz-Tudo[f]`);
ask_tp = prompt('Escolha seu tipo: ');
console.clear();
}

if(ask_tp==='n'){
	personagemPrincipal = normal;
}else if(ask_tp==='i'){
	personagemPrincipal = inteligente;
}else if(ask_tp==='e'){
	personagemPrincipal = esportista;
}else if(ask_tp==='a'){
	personagemPrincipal = artista;
}else if(ask_tp==='f'){
	personagemPrincipal = faztudo;
}

if(ask_ig.toLowerCase() == 'r'){
	personagemPrincipal.identidadeGenero = 0;
}else if(ask_ig.toLowerCase() == 'm'){
	personagemPrincipal.identidadeGenero = 1;
}

if(ask_os.toLowerCase() == 'h'){
	personagemPrincipal.orientacaoSexual = 0;
}else if(ask_os.toLowerCase() == 'g'){
	personagemPrincipal.orientacaoSexual = 1;
}else if(ask_os.toLowerCase() == 'b'){
	personagemPrincipal.orientacaoSexual = 2;
}

	// Começa no dia 20 de julho - faltam 5 meses para o fim do ano letivo
// 31
// 31
// 30
// 31
// 30

let ds = ['Domingo','Segunda', 'Terça','Quarta','Quinta','Sexta','Sábado'];
let ma = ['Agosto','Setembro','Outubro','Novembro','Dezembro'];

function tempo(){	
	let hoje = 1;
	let m31 = 1;
	for(let m = 0; m < 5; m++){
		m31++
		console.log(m31);
		for(let s = 0; s < 4; s++){
			// console.log();
			// console.log('inicio da semana');
			for(let d = 0; d < 7; d++){
				// console.log(ds[d]+': dia '+hoje+', ')
				hoje++
				if(m31%2===0){
					if(hoje===32){
						hoje = 1;
						console.log();
						console.log(ma[m]);
					}
				}else{
					if(hoje===31){
						hoje = 1;
						console.log();
						console.log(ma[m]);
					}
				}
			}
		}
	}
}


tempo();