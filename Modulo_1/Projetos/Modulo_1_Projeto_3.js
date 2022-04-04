//Modulos usados
const prompt = require('prompt-sync')();
const colors = require('colors');
const fs = require('fs');
console.clear();
console.log(`\nPara os Devs: \nPode ser entediante\nMas você pode também simplesmente selecionar o setup inicial e pressionar enter até o fim...\n e só interagir nos pontos obrigatórios\n\nPessoalmente, não gostaria que fizesse isso\nSe um dia se interessar... Dê uma oportunidade!\n\n\nTenha um bom teste! `);prompt(``);console.clear();
console.log(`\nPara os jogadores: \nO jogo não tem perdedor\nNós não 'PERDEMOS' NA VIDA\nNós simplesmente não vivemos algum momento!\ne seguimos um dia após o outro...\nLEMBRE-SE sempre de estar disposto à aproveitar os momentos da vida\nE para isso, é necessário cuidar de sí.\n	Jogue com seu coração.`);prompt(``);console.clear();
console.log(`\nPara os amantes de Light Novel: \nAdoledates fala de nosso dia à dia, você sabe o que quer fazer... \nA pergunta é: Você REALMENTE faria isso?\n Muitas vezes passamos por situações que testam nosso coração, e nos fazem pensar... \nMe orgulho de quem sou?`);prompt(``);console.clear();
console.log(`\nOs amigos que você fará aqui\nte mostrarão que devemos abrir as portas da mente\npara ares renovados refrescarem o nosso coração...\n`);prompt(``);console.clear();
console.log(`	Configure full screen para uma experiência aprimorada `);prompt(``);console.clear();






// (localizações aproximadas devido á alterações)

//		Mapa de Funções
//     linhas      	   item
// {  56 - 90		Variáveis Importantes}
// {  81 - 88		Variaveis das compras}
//
// {  90 - 5067 	Funções}
// {  92 -  130			Pronomes de sujeito}
//	        128			aguardar => setTimeout
//			129
//	 130 -  136			pressEnter
// { 137 -  831 		Historia}
//	 138 - 	339				hist1   	- Introdução e tutorial
//	 340 -  377				histF		- Finalização do game
//	 378 -  419				betterAlone - final solteiro
//	 420 -  831				namorar 	- Seleção de final
//
// { 833 -  			Engine}
//	 				tempo 	- Função controladora da passagem do tempo
//	 				jogo		- new game/load game
//	 				status__ 	- Função construtora dos status do personagem
//	 				scoreTotal- Painel placar dos pontos
//	 				diario	- Função responsável por administrar o dia
//	 				seletor 	- Função condicional dos afazeres diários
// {				Afazeres diários}
//						afazeresDia	- chama função do afazer diário
//						saveGame		- salva o jogo
//	
//						addM			- adiciona métodos no objeto (tentar transformar em classe!)
//					aCidade		- sistema de compra de status do jogo (aperfeiçoar!)
//					especial		- distribuição de acontecimentos da trama
//
//			endGame		- chama finalização do jogo
//
// Sequencia de execução
//
//Cenas dos personagens

//Variaveis importantes
let ng = 's';
let init = [];
let personagemPrincipal = {};
let time = {};
let dinheiro = 0;
let disposicao = 100;
let op_id = ['homem', 'mulher'];
let op_os = ['he', 'ho', 'bi'];

var manhaA = '';
var tardeA = '';
var noiteA = '';

let ds = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let ma = ['Outubro', 'Novembro', 'Dezembro'];

let garotas = ['Nivea', 'Sophia', 'Luiza' /*, 'Alice', 'Ludmila', 'Rebecca', 'Monica'*/];
let garotos = ['Leonardo', 'Davi', 'Lucas' /*, 'Marcelo', 'Ricardo', 'Alexandre', 'Otto'*/];
let garotxs = ['Nivea', 'Sophia', 'Lucas' /*, 'Alice', 'Ludmila', 'Alexandre', 'Otto'*/];

//Lembrar de transformar personagensSecundarios em Objeto(!)
let personagensSecundarios = [];
let personagensSecundariosPts = [0, 0, 0];

// Variaveis das compras
var cx_choco = 0;
var camisa_unicornio = 0;
var livro = 0;
var colar_micanga = 0;
var minasCap = 0;
var pocaoDoAmor = 0;
// Variaveis das compras - end

//Variaveis importantes - end

//Pronomes de sujeito
const oas = (i) => {
	if (garotas.includes(personagensSecundarios[i])) {
		return 'a';
	} else if (garotos.includes(personagensSecundarios[i])) {
		return 'o';
	};
};
const eas = (i) => {
	if (garotas.includes(personagensSecundarios[i])) {
		return 'a';
	} else if (garotos.includes(personagensSecundarios[i])) {
		return 'e';
	};
};
const oap = () => {
	if (personagemPrincipal.identidadeGenero === 1) {
		return 'a';
	} else if (personagemPrincipal.identidadeGenero === 0) {
		return 'o';
	};
};
const eap = () => {
	if (personagemPrincipal.identidadeGenero === 1) {
		return 'a';
	} else if (personagemPrincipal.identidadeGenero === 1) {
		return 'e';
	};
};
const lulu = (lulu) => {
	if (lulu != 'Luiza') {
		return 'Luiza'
	} else {
		return 'Lucas'
	}
};

// const aguarde = async (i,s) => { setTimeout( () => { i() }, s*1000 )};
const pressEnter = () => {
	console.log();
	prompt(`pressione ENTER para continuar`);
	console.clear();
	console.log();
};

// História
function hist1() {
	//Definir time
	time = {
		hoje: 17,
		m: 0,
		s: 0,
		d: 0
	};
	//Seleção de sexo do personagem
	while (personagemPrincipal.identidadeGenero != 0 && personagemPrincipal.identidadeGenero != 1) {
		console.log();
		var ask_ig = prompt('		Você deseja ser um Rapaz[r] ou uma Moça[m]? ');
		if (ask_ig.toLowerCase() == 'r') {
			personagemPrincipal.identidadeGenero = 0;
		} else if (ask_ig.toLowerCase() == 'm') {
			personagemPrincipal.identidadeGenero = 1;
		} else {
			console.clear();
			console.log();
			console.log('Voce precisa responder [r] ou [s]');
		}
	}
	while (personagemPrincipal.orientacaoSexual != 0 && personagemPrincipal.orientacaoSexual != 1 && personagemPrincipal.orientacaoSexual != 2) {
		console.log();
		var ask_os = prompt(`		 Hetero[h], Gay[g] ou Bissexual[b]? `);
		if (ask_os.toLowerCase() == 'h') {
			personagemPrincipal.orientacaoSexual = 0;
		} else if (ask_os.toLowerCase() == 'g') {
			personagemPrincipal.orientacaoSexual = 1;
		} else if (ask_os.toLowerCase() == 'b') {
			personagemPrincipal.orientacaoSexual = 2;
		} else {
			console.log();
			console.log('Voce precisa responder [h] ou [g] ou [b]');
		}
	}
	let h100006 = `\n	Agora nos diga com qual desses tipos você deseja ser?`;
	let ask_tp = "";
	while (ask_tp != 'n' && ask_tp != 'i' && ask_tp != 'e' && ask_tp != 'a' && ask_tp != 'f') {
		console.log(h100006);
		console.log();
		console.log(`	Normal[n] Inteligente[i] Esportista[e] Artista[a] Faz-Tudo[f]`);
		console.log();
		ask_tp = prompt('Escolha seu tipo: ').toLowerCase();
		console.clear();
	};
	console.clear();
	//Primeira parte da historia
	prompt('pressione ENTER para iniciar')
	console.clear();
	let h100000 = `Hoje é dia 17 de Outubro de 2021`;
	let h100001 = `As férias de julho acabaram e eu voltei do sítio dos seus avós\n Onde eles fizeram uma grande festa para meu aniversário!`;
	let h100002 = `Meus pais me ajudaram a alugar um Kitnet próximo ao centro da cidade\n Para assim eu gastar menos com condução\nE também me dar minha liberdade...\nAcabo de completar 18 anos, e estou terminando o Ensino médio.`;
	let h100003 = `Tenho tanta coisa para fazer nessa kitnet\nE amanhã voltam as aulas...\nVou começar a arrumar as coisas para a escola... \n Contra minha vontade, como sempre...\n\nMas agora tenho "responsabilidades de adulto" kkkk`;
	let h100004 = `Já que jamais fui ${oap()} primeir${oap()} da turma...\n mas também nunca fiquei para trás!`;
	let h100005 = `Este semestre decidí fazer diferente\nvou encontrar uma forma de fazer estes últimos meses inesquecíveis\nAproveitar o máximo que puder!!!`;

	//História para js
	console.log();
	console.log(h100000);
	pressEnter();
	do {
		console.clear();
		console.log();
		personagemPrincipal.nome = prompt('O meu nome é ');
		console.clear();
	} while (personagemPrincipal.nome === "");
	console.log();
	console.log(h100001);
	pressEnter();
	console.log(h100002);
	pressEnter();
	console.log(h100003);
	pressEnter();
	console.log(h100004);
	pressEnter();
	console.log(h100005);
	pressEnter();

	if (personagemPrincipal.identidadeGenero === 0) {
		if (personagemPrincipal.orientacaoSexual === 0) {
			personagensSecundarios = garotas;
		} else if (personagemPrincipal.orientacaoSexual === 1) {
			personagensSecundarios = garotos;
		} else {
			personagensSecundarios = garotxs;
		};
	} else {
		if (personagemPrincipal.orientacaoSexual === 0) {
			personagensSecundarios = garotos;
		} else if (personagemPrincipal.orientacaoSexual === 1) {
			personagensSecundarios = garotas;
		} else {
			personagensSecundarios = garotxs;
		};
	};
	let normal = {
		nome: personagemPrincipal.nome,
		identidadeGenero: ask_ig.toLowerCase(),
		orientacaoSexual: ask_os.toLowerCase(),
		beleza: 18,
		conhecimento: 18,
		popularidade: 18,
		artes: 18,
		atributosFisicos: 18,
		sorte: 18,
	};
	let inteligente = {
		nome: personagemPrincipal.nome,
		identidadeGenero: ask_ig.toLowerCase(),
		orientacaoSexual: ask_os.toLowerCase(),
		beleza: 14,
		conhecimento: 30,
		popularidade: 14,
		artes: 15,
		atributosFisicos: 5,
		sorte: 18,
	};
	let esportista = {
		nome: personagemPrincipal.nome,
		identidadeGenero: ask_ig.toLowerCase(),
		orientacaoSexual: ask_os.toLowerCase(),
		beleza: 15,
		conhecimento: 10,
		popularidade: 13,
		artes: 15,
		atributosFisicos: 30,
		sorte: 25,
	};
	let artista = {
		nome: personagemPrincipal.nome,
		identidadeGenero: ask_ig.toLowerCase(),
		orientacaoSexual: ask_os.toLowerCase(),
		beleza: 18,
		conhecimento: 18,
		popularidade: 20,
		artes: 35,
		atributosFisicos: 3,
		sorte: 15,
	};
	let faztudo = {
		nome: personagemPrincipal.nome,
		identidadeGenero: ask_ig.toLowerCase(),
		orientacaoSexual: ask_os.toLowerCase(),
		beleza: 15,
		conhecimento: 17,
		popularidade: 14,
		artes: 15,
		atributosFisicos: 25,
		sorte: 30,
	};

	if (ask_tp === 'n') {
		personagemPrincipal = normal;
	} else if (ask_tp === 'i') {
		personagemPrincipal = inteligente;
	} else if (ask_tp === 'e') {
		personagemPrincipal = esportista;
	} else if (ask_tp === 'a') {
		personagemPrincipal = artista;
	} else if (ask_tp === 'f') {
		personagemPrincipal = faztudo;
	}

	if (ask_ig.toLowerCase() == 'r') {
		personagemPrincipal.identidadeGenero = 0;
	} else if (ask_ig.toLowerCase() == 'm') {
		personagemPrincipal.identidadeGenero = 1;
	}

	if (ask_os.toLowerCase() == 'h') {
		personagemPrincipal.orientacaoSexual = 0;
	} else if (ask_os.toLowerCase() == 'g') {
		personagemPrincipal.orientacaoSexual = 1;
	} else if (ask_os.toLowerCase() == 'b') {
		personagemPrincipal.orientacaoSexual = 2;
	}
	console.clear();
	console.log(`\nAgora vamos entender como acompanhar o dia:`.blue);
	pressEnter();
	console.log(`Estes são os atributos:`.brightBlue);
	let dis = new status_('DISPOSIÇÃO              ', disposicao)
		let blz = new status_('Beleza                  ', personagemPrincipal.beleza);
	let cnh = new status_('Conhecimento            ', personagemPrincipal.conhecimento);
	let pop = new status_('Popularidade            ', personagemPrincipal.popularidade);
	let art = new status_('Gosto por Artes         ', personagemPrincipal.artes);
	let atf = new status_('Atributos Físicos       ', personagemPrincipal.atributosFisicos);
	let din = new status_('Dinheiro                ', 'R$ ' + dinheiro + ',00')
		console.table([dis, blz, cnh, pop, art, atf, din]);
	console.log(`\nSe a DISPOSIÇÃO cair para 5, ficarei exaust${oap()} e descansarei durante o dia inteiro.`);
	console.log(`
	\nTodos os dias tenho que decidir o que vou fazer...
	\n Caso eu vá fazer as mesmas coisas de ontem, basta dar um enter\n
	\n  e todas as noites eu tenho a opção de salvar meu progresso!
	Basta escrever " save " no seletor de atividades da noite.
		`)
	addM();
	pressEnter();
	let personagensSecundariosPts = [0, 0, 0];
	return [personagemPrincipal, time, personagensSecundarios, personagensSecundariosPts, dinheiro, disposicao];
}

function histF() {
	pressEnter();
	let hf001 = `Fim do ano letivo`;
	let hf002 = `Agora é hora de decidir o meu futuro`;
	let hf003 = `As aulas terminaram e vou começar preparar para entrar na faculdade`
		let hf004 = `Mas antes, preciso decidir se quero continuar solteiro\n ou se vou começar um romance....`;
	console.log(hf001);
	pressEnter();
	console.log(hf002);
	pressEnter();
	console.log(hf003);
	pressEnter();
	console.log(hf004);
	pressEnter();
	let hf005 = '';
	do {
		console.clear();
		console.log();
		hf005 = prompt('pressione [N] para escolher um NAMORO ou [S] para continuar SOLTEIRO ').toLowerCase();
		console.log();
	} while (hf005 != 's' && hf005 != 'n');
	console.clear();
	if (hf005.toLowerCase() === 'n') {
		let namor = "";
		do {
			console.clear();
			console.log(`Acho que vou namorar...`);
			console.log(personagensSecundarios);
			namor = prompt('escolha: ').toLowerCase();
			namor = namor[0].toUpperCase() + namor.substr(1);
		} while ((personagensSecundarios.includes(namor)) === false)
		console.clear();
		namorar(namor);
	} else {
		betterAlone();
	}
}

function betterAlone() {
	console.clear();
	console.log();
	pressEnter();
	console.log(`
	Talvez me envolver com alguém nesse momento seja um peso...\n
	Estar solteiro não é um sinal de infelicidade,\n
	é sinal de LIBERDADE e AUTONOMIA para fazer o que quiser em minha própria companhia.
			`);
	pressEnter();
	console.log(`
	Acho que para mim, relacionamentos são como pesca esportiva...\n
	Eu jogo a vara na água, pega o peixe que quero\n
	e no fim, devolvo para o mar!\n
			`);
	pressEnter();
	console.log(`
	Eu sei que sou jovem e tenho um longo caminho pela frente,\n
	e nesse caminho vários vinhos irão aparecer\n
	e eu desejo provar cada um deles...
			`);
	pressEnter();
	console.log(`
	Hoje, tenho aspirações e vontades que\n
	talvez...\n
			`);
	pressEnter();
	console.log(`
	Ter alguém ao meu lado pode se tornar um inconveniente\n
	Já que descobrir o mundo é o que eu desejo...\n
	E também,\n
			`);
	pressEnter();
	console.log(`
	Estar solteiro não significa necessáriamente estar disponível.\n
	As vezes é necessário colocar uma placa de "NÃO PERTURBE" no coração.\n
	\n
	Agora foco é no futuro, e agarrar todas as oportunidades que surgirem...
			`);
	pressEnter();
}

function namorar(namor) {
	if (namor === personagensSecundarios[0] && personagensSecundariosPts[0] === 4) {
		personagemPrincipal.p0++;
		personagensSecundariosPts[0]++
		console.log();
		pressEnter();
		console.log(`
\nO jeito Agressivo e imperativo de ${personagensSecundarios[0]} me fascinam, e decido me declarar.\n
Envio uma mensagem para el${eas(0)} e peço para me encontrar no Shopping Cidade\n
Quando ${personagensSecundarios[0]} chega, vamos ao Burguer King e procuramos uma mesa vaga\n
		`);
		pressEnter();
		console.log(`
		${personagemPrincipal.nome}\n
	Eu nem sei como eu falo isso sabe\n
	Eu sei que somos amigos à muitos anos, e que nossa amizade é valiosa...\n
		`);
		pressEnter();
		console.log(`
	Mas eu só consigo ser feliz quando estou ao seu lado...
		`);
		pressEnter();
		console.log(`
Após falar sobre meu amor, ${personagensSecundarios[0]} me encara de uma forma estranha...\n
Pelo olhar de ${personagensSecundarios[0]} estou com medo de receber um SOCO\n
Mas parece que na verdade el${eas(1)} está em lágrimas...\n\n
		`);
		pressEnter();
		console.log(`
Com muita alegria, ${personagensSecundarios[0]} grita: \n
	\n
		${personagensSecundarios[0]}
	"SIIIIIIIIIIIIIIIIIIIIIIM, AAAAAAAAAAA QUE ÓÓÓÓÓÓDIOOOOOOOO, \n
	VOCÊ É TÃO DEVAGAR VEY! DESDE OS 6 ANOS EU ESPERO POR ESSE MOMENTO! <3 <3 <3"
		`);
		pressEnter();
		console.log(`
Decidimos contar aos amigos sobre a nossa decisão\n
	\n
		`);
		pressEnter();
		console.log(`
E a reação deles é basicamente um únissono\n
		"aaaaawwwnnnnnnn <3 <3".\n
	\n
Parece que todos já sabiam sobre os sentimentos de ${personagensSecundarios[0]} mas ninguém me falou.
		`);
		pressEnter();
		console.log(`
O nosso namoro resume em assistir animes e filmes de terror\n
todos os dias na casa de ${personagensSecundarios[0]}\n 
Meio que nos tornamos um lindo casal de comercial de margarina.\n
Brincadeiras à parte...\n
		`);
		pressEnter();
		console.log(`
Ensinei ${personagensSecundarios[0]} a ser um pouco mais doce\n
${personagensSecundarios[0]} me ensinou como quebrar a cara de alguém! kkkkkkkk \n
\n
	Nós nos completamos...\n
		E nós sabemos disso...
		`);
	} else if (namor === personagensSecundarios[1] && personagensSecundariosPts[1] === 4) {
		personagensSecundariosPts[1]++
		console.log();
		pressEnter();
		console.log(`
Do outro lado da rua da portaria da escola, conversando com meus amigos,\n 
Observo ${personagensSecundarios[1]} sentad${oas(1)} embaixo da árvore.\n
${personagensSecundarios[1]} é meig${oas(1)}, ${personagensSecundarios[1]} é doce, ${personagensSecundarios[1]} é carinhos${oas(1)}...\n
Sempre ví isso, mas nunca percebi o quanto isso me faz bem!\n
			`)
		pressEnter();
		console.log(`
Eu decido ir até el${eas(1)}.\n
El${eas(1)} também estava me observando, com aquele seu jeito tímido e despistado de sempre... \n
		`);
		pressEnter();
		console.log(`
Mas abre um lindo sorriso quando vê que vou em sua direção.\n
Me aproximo de ${personagensSecundarios[1]}, envolvo ${oas(1)} em meus braços, e sussurro em seu ouvido\n
		`);
		pressEnter();
		console.log(`
		${personagemPrincipal.nome}\n
	Amig${oas(1)}, posso te perguntar uma coisa?\n\n
	Sinto a pele de ${personagensSecundarios[1]} arrepiar e vejo seu rosto enrubescer\n
		`);
		pressEnter();
		console.log(`
		${personagensSecundarios[1]}
	Claro meu anjo, pode me dizer o que quiser sempre que quiser...\n\n
		`);
		pressEnter();
		console.log(`
		${personagemPrincipal.nome}
	${personagensSecundarios[1]} você deseja unir nossas almas pela ETERNIDADE?
			`);
		pressEnter();
		let testf1 = (personagemPrincipal.beleza >= 50 && personagemPrincipal.conhecimento >= 50 && personagemPrincipal.popularidade >= 50 && personagemPrincipal.artes >= 50 && personagemPrincipal.atributosFisicos >= 50);
		if (testf1) {
			personagemPrincipal.p1++;
			console.log();
			console.log(`
${personagensSecundarios[1]} rompe em lágrimas, abraça e me traz junto ao corpo
\n de uma maneira que sinto nossos espíritos se tocarem\n
				`);
			pressEnter();
			console.log(`
Aquela reação me deixa perplex${oas(1)} e consigo sentir meus olhos marejados.\n
		`);
			pressEnter();
			console.log(`
Sinto que agora somos definitivamente um só.\n
				`);
			pressEnter();
			console.log(`
Resolvemos comemorar visitando a Gruta de Maquiné
\n 120KM ao norte da cidade\n 
				`);
			pressEnter();
			console.log(`
Passamos o dia coletando pedrinhas e talhando um par de alianças
\n além de um par de colares e alguns filtros dos sonhos.\n
		`);
			pressEnter();
			console.log(`
À meia-noite, sob a luz da lua...\n
				`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}\n
\n	Eu te amo... e desde que te conheci esperei por esse momento...
		`);
			pressEnter();
			console.log(`
\nMinhas energias se recarregam, agarro-n${oas(1)} num abraço e colocamos as alianças
\nE então nos deitamos para observar as estrelas...
		`);
			pressEnter();
			console.log(`
\nDeitad${oap()}, viro de lado e vejo o perfil de ${personagensSecundarios[1]} sob a luz do luar...
\nToco seus lábios com a ponta de meus dedos e acaricio levemente sua boca...
		`);
			pressEnter();
			console.log(`
\n el${eas(1)} sorri enquanto passo o dedo pela silhueta de seus lábios
\n me aproximo e lhe dou um beijo...	  
		`);
			pressEnter();
			console.log(`
\n		Estivemos sempre procurando um ao outro
\n			E não viamos que estávamos ali
		`);
			pressEnter();
			console.log(`
\n			 Mas o destino somente se encarregou de nos unir...
				`);
			pressEnter();
		} else {
			console.log();
			console.log(`
${personagensSecundarios[1]} me olha estupefat${oas(1)} e se afasta com um pulo\n
		`);
			pressEnter();
			console.log(`
		${personagensSecundarios[1]}
	Você está lélé da cuca ${personagemPrincipal.nome}??????????\n
Me sinto um pouco envergonh${oap(1)} e ${personagensSecundarios[1]} percebe...\n
		`);
			pressEnter();
			console.log(`
\n
${personagensSecundarios[1]} carinhosamente olha para mim, me abraça e diz\n
		${personagensSecundarios[1]}
	${personagemPrincipal.nome}, eu também te amo... Mas como um amig${oap()}!\n
			`);
			pressEnter();
			console.log(`
Nós então nos abraçamos e decidemos manter a amizade para toda a vida.\n
Pessoalmente, estou chatead${oap()}... Mas algo dentro de mim já esperava essa resposta...\n
		`);
			pressEnter();
			console.log(`
\n
Eu tenho outras coisas em mente e ter alguém ao lado pode ser inconveniente\n
Já que descobrir o mundo é o que desejo...\n
		`);
			pressEnter();
			console.log(`
E também...\n
			`);
			pressEnter();
			console.log(`
	Estar solteiro não significa necessáriamente estar disponível.\n
		`);
			pressEnter();
			console.log(`
	As vezes é necessário colocar uma placa de "NÃO PERTURBE" no coração.\n
	\n
	Agora é foco no futuro, e aproveitar todas as oportunidades que surgirem...
			`);
		}
	} else if (namor === personagensSecundarios[2] && personagensSecundariosPts[2] === 4) {
		personagensSecundariosPts[2]++
		pressEnter();
		console.log(`
\nAntes do primeiro horário começar, vou até o 2ºB procurar por ${personagensSecundarios[2]}
\nEstou tão ansios${oap()} para falar com el${eas(2)} que a mão chega à suar!
		`)
		pressEnter();
		console.log(`
\n		[garoto do 2ºB]
\n	Iiih... ${oas(2)} ${personagensSecundarios[2]} até veio...
\n	 mas quando entrou na sala o telefone del${eas(2)} tocou e el${eas(2)} saiu...
		`)
		pressEnter();
		console.log(`
\n	Se você correr talvez ainda ${oas(2)} alcance...
		`)
		pressEnter();
		console.log(`
\nMais que depressa vou à procura de ${personagensSecundarios[2]}
\nEl${eas(2)} parece estar esperando o ônibus no ponto do princípio da rua da escola
\nEntão vou correndo até lá!
		`)
		pressEnter();
		console.log(`
\n		${personagemPrincipal.nome}
\n	Hey... ${personagensSecundarios[2]}! __digo arfando__ Eu quero falar com você!
		`)
		pressEnter();
		console.log(`
\n		${personagensSecundarios[2]}
\n	Oiiiii ${personagemPrincipal.nome}-senpai! Eu também tenho uma notícia para te dar!
		`)
		pressEnter();
		console.log(`
\n	Eu fui aprovad${oas(2)} para o intercâmbio
\n e eles marcaram a minha entrevista final para hoje de manhã!
\n	Vou passar em casa correndo e depois vou para o centro!
		`)
		pressEnter();
		console.log(`
\nEu tinha me esquecido desse detalhe '-'
\n${personagensSecundarios[2]} vai para o Japão! Como eu pude ignorar esse detalhezinho??????
		`)
		pressEnter();
		console.log(`
\n		${personagemPrincipal.nome}
\n	Eu tenho uma coisa para te dizer...
\nMas antes de responder, entenda que eu preciso que pense em você primeiro...
		`)
		pressEnter();
		console.log(`
\n		${personagensSecundarios[2]}
\n	Ué Senpai... Pode dizer o que quiser! O que você precisa?
		`)
		pressEnter();
		console.log(`
\nAbraço ${personagensSecundarios[2]} com bastante força e el${eas(2)} o retribui
		`)
		pressEnter();
		console.log(`
\n		${personagemPrincipal.nome}
\n	${personagensSecundarios[2]}... Eu queria saber se você gostaria de namorar comigo... (O.O´)
		`)
		pressEnter();
		console.log(`
\nNos entreolhamos, meu coração dispara e sinto meu corpo tremer de ansiedade...
\nNão sei que resposta esperar de ${personagensSecundarios[2]}
		`);
		pressEnter();
		let testf1 = (personagemPrincipal.artes >= 100);
		if (testf1) {
			personagemPrincipal.p2++;
			console.log();
			console.log(`
\n${personagensSecundarios[2]} me olha com ternura, acaricia meus cabelos e diz olhando em meus olhos
\n		${personagensSecundarios[2]}
\n	Senpai... Eu amaria isso... Mas minha viagem está marcada para semana que vem '-'
\n	Como faremos?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Olha... Eu tenho um dinheiro na minha conta... Não é muito, mas acho que já é um princípio
			`);
			pressEnter();
			console.log(`
\n	Posso tentar olhar com meu pai também, talvez ele me dê alguma coisa
\n	E se você não se importar... Eu posso ir para o intercâmbio com você
			`);
			pressEnter();
			console.log(`
\nOs olhos de ${personagensSecundarios[2]} se enchem de lágrimas e el${eas(2)} me abraça com tanta força
\n que parece que meus pulmões vão sair pela boca
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Você faria isso por mim senpai? Faria mesmo?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Você já me ensinou tanto sobre coisas novas, acho que essa será só mais uma!
\n	Mas você precisa de me ensinar à conversar com esse povo, senão vou passar fome!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Tá bom senpai... Eu te ajudo sim! Te ajudo para sempre!! <3 <3 
			`);
			pressEnter();
			console.log(`
\nNossa viagem dura 12 horas, e assim que desembarcamos em tokyo
\n vamos à procura do flat que a agencia de intercâmbio reservou para nós
			`);
			pressEnter();
			console.log(`
\nFoi de impulso o que fiz? FOI! Mas não me arrependo um segundo sequer...
\nAprendi muito no novo país, e meus dias com ${personagensSecundarios[2]} são cada dia melhores...
			`);
			pressEnter();
			console.log(`
\nEl${eas(2)} me ajuda com o Japonês, e com seus hábitos... Que são bem diferentes do Brasil
\nMas não tivemos nenhuma dificuldade de nos enturmar
			`);
			pressEnter();
			console.log(`
\nAos poucos fui familiarizando com a cultura, e em algumas semanas já conseguia me virar bem!
\nNo fim, entendi que muitas vezes deixamos de conhecer um mundo totalmente novo
\nPois tememos o que vamos encontrar e nos desesperamos por não saber como agir
			`);
			pressEnter();
			console.log(`
\nMas no fim das contas vale a pena se reinventar...
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} e eu estamos muito felizes juntos
\nEl${eas(2)} conseguiu um emprego de camareir${oas(2)} e eu como caixa em uma loja de conveniência
\nA experiência tem sido maravilhosa para mim, e ${personagensSecundarios[2]} está sempre ao meu lado
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Hey... Aishiteru (eu te amo!)
\n	Watashi no soba ni sunde kurete arigatō (Obrigado por viver ao meu lado)
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Aishiteru ${personagensSecundarios[2]}-san (eu te amo ${personagensSecundarios[2]})
\n	Anata o zettai tebanashimasen (nunca vou abandonar você!)
			`);
			pressEnter();
		} else {
			console.log();
			console.log(`
\n${personagensSecundarios[2]} me olha com ternura, acaricia meus cabelos e diz olhando em meus olhos
			`)
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Sinto muito senpai, foi maravilhoso te conhecer... Mas eu não posso aceitar seu pedido ('°.°)
			`)
			pressEnter();
			console.log(`
\n	Somos apenas amigos, e estou me preparando para mudar para o Japão na próxima semana...
\n	Gosto muito de você, de verdade... Mas não dessa forma! Espero que entenda de coração <3 
			`)
			pressEnter();
			console.log(`
\nNós nos abraçamos e decidemos manter a amizade para toda a vida.\n
\nPessoalmente, estou chatead${oap()}... Mas algo dentro de mim já esperava essa resposta...\n
			`);
			pressEnter();
			console.log(`
\nEu tenho outras coisas em mente e ter alguém ao lado pode ser inconveniente
\nJá que descobrir o mundo é o que desejo...\n
			`);
			pressEnter();
			console.log(`
\nE também...\n
			`);
			pressEnter();
			console.log(`
\nEstar solteiro não significa necessáriamente estar disponível.\n
			`);
			pressEnter();
			console.log(`
\nAs vezes é necessário colocar uma placa de "NÃO PERTURBE" no coração.
\nAgora é foco no futuro, e aproveitar todas as oportunidades que surgirem...
			`);
		}
	} else {
		console.log(`
\nProcuro ${namor} em todos os cantos da escola
\nna quadra, nas salas, na cantina... 
\nna quarta aula um rapaz do segundo ano 
\nme informa que ${namor} já não vem à aula à uns dias
		 
\ninfelizmente compreendo a situação
\nmas de toda forma...
		`),
		pressEnter();
		betterAlone();
	}
};
//História - end

// Engine
// Quando bater 140pts aparecer um Deus ( ? ) //Implementar!
//Tempo
function tempo() {
	let hoje = time.hoje;
	let m31 = 1;
	looptime: for (let m = time.m; m < ma.length; m++) {
		m31++;
		loopmes: for (let s = time.s; s < 5; s++) {
			for (let d = time.d; d < ds.length; d++) {
				let data = ` Dia ${hoje} de ${ma[m]} de 2021 - ${ds[d]}`.blue;
				diario(data, hoje, m, s, d);
				hoje++;
				if (m === 2 && hoje === 18) {
					break looptime;
				} else if (m31 % 2 === 0) {
					if (hoje === 32) {
						if (d === 6) {
							time.d = 0
						} else {
							time.d = d + 1;
						}
						hoje = 1;
						break loopmes;
					};
				} else {
					if (hoje === 31) {
						if (d === 6) {
							time.d = 0
						} else {
							time.d = d + 1;
						}
						hoje = 1;
						break loopmes;
					};
				};
			};
			time.d = 0;
		};
	};
};
//Tempo - end

function jogo() {
	if (ng === 's') {
		return hist1();
	} else {
		console.log(`Carregando jogo... `);
		// return aguarde(loadGame,2);
		return loadGame();
	}
}

function status_(attr, vlr) {
	this.Status = attr;
	this.Nivel = vlr;
}

function scoreTotal(data) {
	console.clear();
	console.log(`\nHoje é ${data}\n`.blue);
	let dis = new status_('DISPOSIÇÃO              ', disposicao)
		let blz = new status_('Beleza                  ', personagemPrincipal.beleza);
	let cnh = new status_('Conhecimento            ', personagemPrincipal.conhecimento);
	let pop = new status_('Popularidade            ', personagemPrincipal.popularidade);
	let art = new status_('Gosto por Artes         ', personagemPrincipal.artes);
	let atf = new status_('Atributos Físicos       ', personagemPrincipal.atributosFisicos);
	let din = new status_('Dinheiro                ', 'R$ ' + dinheiro + ',00')
		let statsBar = console.table([dis, blz, cnh, pop, art, atf, din]);
}

function diario(data, hoje, m, s, d) {
	console.clear();
	//Alvorada
	if (hoje === 15 && minasCap != 0) {
		console.log(`\n Hoje sai o resultado do MinasCap\n	Vou conferir o resultado pela TV...`.blue)
		pressEnter();
		for (i = 0; i < minasCap; i++) {
			loto = (Math.floor(Math.random() * 300));
			if (loto % 3 === 0 && loto % 4 === 0) {
				console.log('MEU DEUS o prêmio!! No bilhete'.brightYellow, (Math.floor(Math.random() * 300000)));
				console.log(`Valor do prêmio: R$ 5000,00`.yellow)
				dinheiro += 5000;
				break;
			} else {
				console.log('Infelizmente o bilhete', (Math.floor(Math.random() * 300000)), 'não foi sorteado...');
			}
			minasCap = 0
		}
		pressEnter();
		console.log();
	}
	// Dia
	if (disposicao > 5) {
		afazeresDia(data, hoje, m, s, d);
	} else {
		personagemPrincipal.exausto();
	}
	pressEnter()
	// Madrugada
}

function seletor(data, manha, tarde, noite, hoje, m, d) {
	console.clear();
	scoreTotal(data);
	especial(manha, tarde, noite, hoje, m)
	if ('ipe' === manha) {
		console.log(`			Manhã:`);
		personagemPrincipal.irParaAEscola();
	} else if ('v' === manha) {
		console.log(`			Manhã:`);
		personagemPrincipal.aVisual()
	} else if ('d' === manha) {
		console.log(`			Manhã:`);
		personagemPrincipal.aDescansar()
	} else if ('e' === manha) {
		console.log(`			Manhã:`);
		personagemPrincipal.aEstudar();
	} else if ('s' === manha) {
		console.log(`			Manhã:`);
		aCidade()
	} else if ('a' === manha) {
		console.log(`			Manhã:`);
		personagemPrincipal.aArtes()
	} else if ('f' === manha) {
		console.log(`			Manhã:`);
		personagemPrincipal.aExercicios()
	} else {
		console.log(`			Manhã:`);
		personagemPrincipal.aFreela()
	}
	if ('v' === tarde) {
		console.log(`			Tarde:`);
		personagemPrincipal.aVisual()
	} else if ('d' === tarde) {
		console.log(`			Tarde:`);
		personagemPrincipal.aDescansar()
	} else if ('e' === tarde) {
		console.log(`			Tarde:`);
		personagemPrincipal.aEstudar();
	} else if ('s' === tarde) {
		console.log(`			Tarde:`);
		aCidade()
	} else if ('a' === tarde) {
		console.log(`			Tarde:`);
		personagemPrincipal.aArtes()
	} else if ('f' === tarde) {
		console.log(`			Tarde:`);
		personagemPrincipal.aExercicios()
	} else {
		console.log(`			Tarde:`);
		personagemPrincipal.aFreela()
	}
	if ('v' === noite) {
		console.log(`			Noite:`);
		personagemPrincipal.aVisual()
	} else if ('d' === noite) {
		console.log(`			Noite:`);
		personagemPrincipal.aDescansar()
	} else if ('e' === noite) {
		console.log(`			Noite:`);
		personagemPrincipal.aEstudar();
	} else if ('s' === noite) {
		console.log(`			Noite:`);
		aCidade()
	} else if ('a' === noite) {
		console.log(`			Noite:`);
		personagemPrincipal.aArtes()
	} else if ('f' === noite) {
		console.log(`			Noite:`);
		personagemPrincipal.aExercicios()
	} else {
		console.log(`			Noite:`);
		personagemPrincipal.aFreela()
	}
}

//Afazeres diários
function afazeresDia(data, hoje, m, s, d) {
	function atvd() {
		console.log(`Ações diárias:`);
		console.log();
		console.log(`Cuidar do visual[v]`);
		console.log(`Descansar[d]`);
		console.log(`Estudar [e]`);
		console.log(`Sair pela cidade [s]`);
		console.log(`Estudar sobre Artes e Culturas [a]`);
		console.log(`Praticar exercícios Físicos [f]`);
		console.log(`Pegar um Freela [t]`);
		console.log();
		console.log(`MANHÃ		TARDE		NOITE`);
		console.log();
	}
	if (d === 0 || d === 6) {
		do {
			console.clear();
			scoreTotal(data);
			atvd();
			console.log(`Escreva sua atividade ou pressione ENTER para repetir as atitudes de ontem`);
			manha = prompt(`De manhã eu vou `);
			if (manha != '' && manha != 'v' && manha != 'd' && manha != 'e' && manha != 's' && manha != 'a' && manha != 'f' && manha != 't') {
				console.log();
				console.log(`Digite somente a letra dentro dos colchetes\nOu pressione ENTER para repetir a atividade de ontem`);
				pressEnter();
			}
		} while (manha != '' && manha != 'v' && manha != 'd' && manha != 'e' && manha != 's' && manha != 'a' && manha != 'f' && manha != 't');
		if (manha == '') {
			manha = manhaA
		};
		manhaA = manha;
	} else {
		scoreTotal(data);
		prompt(`De manhã eu vou para a escola!`);
		manha = 'ipe'
	}
	do {
		console.clear();
		scoreTotal(data);
		atvd();
		console.log(`Escreva sua atividade ou pressione ENTER para repetir as atitudes de ontem`);
		tarde = prompt(`De tarde eu vou `);
		if (tarde != '' && tarde != 'v' && tarde != 'd' && tarde != 'e' && tarde != 's' && tarde != 'a' && tarde != 'f' && tarde != 't') {
			console.log();
			console.log(`Digite somente a letra dentro dos colchetes\nOu pressione ENTER para repetir a atividade de ontem`);
			pressEnter();
		}
	} while (tarde != '' && tarde != 'v' && tarde != 'd' && tarde != 'e' && tarde != 's' && tarde != 'a' && tarde != 'f' && tarde != 't');
	if (tarde == '') {
		tarde = tardeA
	};
	tardeA = tarde;
	do {
		console.clear();
		scoreTotal(data);
		atvd();
		console.log(`(Para salvar o jogo, escreva [save])`);
		noite = prompt(`De noite eu vou `);
		if (noite === 'save') {
			saveGame(hoje, m, s, d);
		} else if (noite != '' && noite != 'v' && noite != 'd' && noite != 'e' && noite != 's' && noite != 'a' && noite != 'f' && noite != 't') {
			console.log();
			console.log(`Digite somente a letra dentro dos colchetes\nEscreva [save] para salvar o jogo\nOu pressione ENTER para repetir a atividade de ontem`);
			pressEnter();
		}
	} while (noite != '' && noite != 'v' && noite != 'd' && noite != 'e' && noite != 's' && noite != 'a' && noite != 'f' && noite != 't');
	if (noite == '') {
		noite = noiteA
	};
	noiteA = noite;

	seletor(data, manha, tarde, noite, hoje, m, d);
}

function saveGame(hoje, m, s, d) {
	console.clear();
	// console.log(`	Salvando dados de ${personagemPrincipal.nome}... `);
	// aguarde(2);
	const save = {
		pp: personagemPrincipal,
		dn: dinheiro,
		dp: disposicao,
		ps: personagensSecundarios,
		psp: personagensSecundariosPts,
		hj: hoje,
		ms: m,
		sm: s,
		ds: d,
	};
	const saveJSON = JSON.stringify(save);
	fs.writeFileSync('./saveGame.json', saveJSON, erro => {
		if (erro) {
			console.log('Erro ao salvar:', erro);
		} else {
			console.log('	Jogo salvo com sucesso!');
		};
	});
	console.log(`	dados de ${personagemPrincipal.nome} salvos!\n  prossiga para selecionar sua atividade noturna!`)
	pressEnter();
};

function loadGame() {
	try {
		const loaded = fs.readFileSync("./saveGame.json");
		const load = JSON.parse(loaded);
		time = {
			hoje: load.hj,
			m: load.ms,
			s: load.sm,
			d: load.ds,
		};
		personagemPrincipal = load.pp;
		disposicao = load.dp;
		dinheiro = load.dn;
		personagensSecundarios = load.ps;
		personagensSecundariosPts = load.psp;
		addM();
		console.log(`\nPersonagem Carregado: ${personagemPrincipal.nome}\n\n Affairs:\n ${personagensSecundarios}`);
		pressEnter();
		return [personagemPrincipal, time, personagensSecundarios, personagensSecundariosPts, dinheiro, disposicao];
	} catch {
		console.log(`Jogo salvo não encontrado\n certifique-se que o arquivo saveGame.json se encontra na mesma pasta do jogo\n iniciando novo jogo!`);
		pressEnter();
		return jogo();
	}
}

function addM() {
	personagemPrincipal.irParaAEscola = function () {
		console.log(`Você foi para a escola!`)
		this.conhecimento++;
		this.popularidade++;
		this.atributosFisicos++;
		console.log(`Ganhou conhecimento, popularidade e Atributos físicos`);
		disposicao--;
	};

	personagemPrincipal.aVisual = function () {
		console.log(`\nNada melhor que se sentir bel${oap()}\nParei para cuidar do meu visual`);
		this.beleza += 2;
		console.log('Ganhou 2 de beleza')
		disposicao--;
	};

	personagemPrincipal.aEstudar = function () {
		console.log(`\nConhecimento é poder!\nEstudei intensamente`);
		this.conhecimento += 3;
		console.log('Ganhou 3 de conhecimento')
		disposicao -= 2;
	};

	personagemPrincipal.aArtes = function () {
		console.log(`\nA arte liberta a alma e colore os pensamentos\nEstudei artes e culturas`);
		this.artes += 2;
		this.conhecimento++;
		disposicao--;
		console.log(`Ganhou 2 de Artes e culturas\n		e algum conhecimento`)
	};

	personagemPrincipal.aExercicios = function () {
		console.log(`\nMens sana in corpore sano\nCuidar do corpo é essêncial!\nFui à academia me exercitar`);
		this.atributosFisicos += 3;
		this.beleza++;
		this.popularidade++
		disposicao--;
		console.log(`Ganhou 3 de Atributos Físicos\nAumentou sua beleza e popularidade`)
	};

	personagemPrincipal.aFreela = function () {
		console.log(`\nO trabalho dignifica!\nNada como um freela pra encher a carteira`);
		dinheiro += 50;
		this.sorte++;
		disposicao -= 2;
		console.log(`Recebeu R$50,00 pelo seu trabalho`)
	};

	personagemPrincipal.exausto = function () {
		console.log(`\nMe sento muito exaust${oap()} e vou tirar o dia para descansar!`);
		disposicao += 15;
		this.conhecimento -= 3;
		this.artes -= 5;
		this.atributosFisicos -= 3;
		this.popularidade -= 3;
		this.sorte -= 15
	};

	personagemPrincipal.aDescansar = function () {
		if (disposicao < 100) {
			console.log(`\nNinguém é de ferro\nVou descansar um pouco`);
			disposicao += 7;
			personagemPrincipal.sorte += 5;
		}
		if (disposicao > 100) {
			disposicao = 100;
		}
		console.log(`Recuperou 7 de disposição`)
	};
};

function aCidade() {
	console.log(`\nNada melhor que ver um pouco de gente\n\nSaí um pouco pela cidade`);
	personagemPrincipal.popularidade += 3;
	disposicao++;
	do {
		console.log(`\nSerá que farei alguma comprinha hoje?`);
		aShopping = prompt(`[s] ou [n] `).toLowerCase();
		if (aShopping === 's') {
			console.clear();
			do {
				console.log(`\n		Ir ao shopping Cidade [s]\n		Ir à Casa Lotérica[l]\n		Ir à Loja de artigos Místicos[m]\n		VOLTAR[v]`);
				aShoppingC = prompt(`Selecione um destino: `).toLowerCase();
				console.clear();
				if (aShoppingC === 's') {

					console.log(`\nO que deseja comprar no shopping\n?`);

					if (cx_choco === 0) {
						console.log(`Caixa de Chocolate - R$ 15,00 [c]`)
					};
					console.log(`Energético - R$ 18,00 [e]`);
					if (camisa_unicornio === 0) {
						console.log(`Camisa de Unicórnio - R$ 150,00 [u]`)
					};
					console.log(`Livro sobre Artes - R$ 50,00 [a]`);
					if (livro === 0) {
						console.log(`\nLivro de Ficção (romance) - R$ 80,00 [r]`)
					};

					aShoppingCompra = prompt(`\n O que deseja comprar?`).toLowerCase();

					if (aShoppingCompra === 'c') {
						if (dinheiro >= 15) {
							console.clear();
							console.log(`\n Acho que vou comprar uma caixa de chocolates...`);
							cx_choco++;
							disposicao += 15;
							personagemPrincipal.atributosFisicos -= 5;
							dinheiro -= 15;
							pressEnter()
						} else {
							console.log(`Você não tem dinheiro suficiente...`)
							pressEnter();
						}
					} else if (aShoppingCompra === 'e') {
						if (dinheiro >= 18) {
							console.clear();
							console.log(`\nUm Energético é sempre bom para recarregar as energias...`);
							disposicao += 5;
							dinheiro -= 18;
							pressEnter();
						} else {
							console.log(`Você não tem dinheiro suficiente...`)
							pressEnter();
						}
					} else if (aShoppingCompra === 'u') {
						if (dinheiro >= 150) {
							console.clear();
							console.log(`\nAdorei essa camisa de unicórnio, darei para alguém especial`);
							camisa_unicornio++;
							personagemPrincipal.visual += 10;
							dinheiro -= 150;
							pressEnter();
						} else {
							console.log(`Você não tem dinheiro suficiente...`)
							pressEnter();
						}
					} else if (aShoppingCompra === 'a') {
						if (dinheiro >= 50) {
							console.clear();
							console.log(`\nUm material extra de artes nunca faz mal à ninguém!`);
							personagemPrincipal.artes += 5;
							dinheiro -= 50
							pressEnter();
						} else {
							console.log(`Você não tem dinheiro suficiente...`)
							pressEnter();
						}
					} else if (aShoppingCompra === 'r') {
						if (dinheiro >= 80) {
							console.clear();
							console.log(`\nComo é bom me inspirar com um romance bem clichê!`);
							personagemPrincipal.conhecimento++
							livro++;
							dinheiro -= 80
							pressEnter()
						} else {
							console.log(`Você não tem dinheiro suficiente...`);
							pressEnter();
						}
					}
					aShoppingC = 'v';
				} else if (aShoppingC === 'l') {
					do {
						console.log(`	"Deseja comprar um MINAS CAP garot${oap()}?\n		só R$ 5,00\n		Todo dia 15 sai o resultado!"`);
						minasCapC = prompt(`Comprar bilhete de loteria? [s] ou [n]`).toLowerCase();
						if (minasCapC === 's') {
							if (dinheiro >= 5) {
								console.log(`\n Você comprou um bilhete de loteria, aguarde até sair o resultado`);
								minasCap++;
								minasCapC = 'n';
								dinheiro -= 5;
								pressEnter();
							} else {
								console.log(`\nVocê não tem dinheiro suficiente...`);
								pressEnter();
							}
						}
					} while (minasCapC != 'n');
					aShoppingC = 'v';
				} else if (aShoppingC === 'm') {
					do {
						console.log(`\n\n		hey, psiu... Aqui você encontrará artigos misteriosos...`);
						if (colar_micanga === 0) {
							console.log(`Colar de Miçangas - R$ 50,00 [m]`);
						};
						if (pocaoDoAmor === 0) {
							console.log(`Poção do Amor - $200,00 [a]`);
						};
						console.log(`VOLTAR[v]`);
						aShoppingMisterio = prompt(`O que deseja comprar na loja misteriosa? `);
						if (aShoppingMisterio === 'm') {
							if (dinheiro >= 50) {
								console.log(`\nEsse lindo colar de miçangas me interessou, o vendedor disse que ele tem poderes mágicos...`);
								colar_micanga++;
								personagemPrincipal.artes += 5;
								aShoppingMisterio = 'v';
								dinheiro -= 100;
								pressEnter();
							} else {
								console.log(`\nVocê não tem dinheiro suficiente...`);
								pressEnter();
							}
						} else if (aShoppingMisterio === 'a') {
							if (dinheiro >= 200) {
								console.log(`O que será que isso faz?`);
								personagemPrincipal.beleza += 10;
								personagemPrincipal.popularidade += 10;
								pocaoDoAmor++;
								dinheiro -= 200;
								aShoppingMisterio = 'v';
								pressEnter();
							} else {
								console.log(`\nVocê não tem dinheiro suficiente...`)
								pressEnter();
							};
						};
					} while (aShoppingMisterio != 'v');
					aShoppingC = 'v';
				};
				if (aShoppingC === 'v') {
					break;
				};
			} while (aShoppingC != 'v');
		} else {
			console.log(`\n Acho melhor voltar para casa...`);
			break;
		};
	} while (aShopping != 'n');
	pressEnter();
	console.log(`Ganhou 3 de popularidade`);
}

function especial(manha, tarde, noite, hoje, m) {
	/* personagem0(1,1)*/
	if (hoje === 18 && m === 0) {
		pressEnter();
		personagem0(1, 1);
	}
	/* personagem1(1,1)*/
	else if (hoje === 20 && m === 0) {
		pressEnter();
		personagem1(1, 1);
	}
	/* personagem2(1,1)*/
	else if (hoje === 22 && m === 0) {
		pressEnter();
		personagem2(1, 1);
	}
	/* personagem0(1,2)*/
	else if (hoje > 18 && tarde === 's' && m === 0 && personagensSecundariosPts[0] === 1) {
		pressEnter();
		personagem0(1, 2);
	}
	/* personagem1(1,2)*/
	else if (hoje > 20 && noite === 't' && m === 0 && personagensSecundariosPts[1] === 1) {
		pressEnter();
		personagem1(1, 2);
	}
	/* personagem2(1,2)*/
	else if (hoje > 22 && tarde === 'a' && m === 0 && personagensSecundariosPts[2] === 1) {
		pressEnter();
		personagem2(1, 2);
	}
	/* personagem0(2,1)*/
	else if (hoje === 2 && m === 1) {
		pressEnter();
		personagem0(2, 1);
	}
	/* personagem1(2,1) e personagem2(2,1)*/
	else if (hoje === 19 && m === 1) {
		pressEnter();
		console.log(`
	\nHoje o tempo está chuvoso!
	\nE como sempre, me esquecí de trazer a sombrinha...
	\nSó espero que a chuva não aumente no caminho de volta!
				`);
		pressEnter();
		console.log(`
	\nVejo ${personagensSecundarios[2]} vindo em minha direção tod${oas(2)} animad${oas(2)}
	\nCom seu jeito tímido el${eas(2)} me pergunta fechando os olhos e respirando profundamente
				`);
		pressEnter();
		console.log(`
	\n		${personagensSecundarios[2]}
	\n	Ohayou ${personagemPrincipal.nome}-senpai. Parece que você se esqueceu de sua sombrinha, né!?
	\n	...Eu tenho uma pequena sombrinha aqui comigo...
	\n	...que talvez seja suficiente... para te proteger...
				`);
		pressEnter();
		console.log(`
	\n${personagensSecundarios[2]} olha para o chão
	\nComeça a brincar com as mãos entrelaçando os dedos e diz de forma rápida:
	\n	Ie ni kaeritai nodeshou ka ${personagemPrincipal.nome}-senpai?
				`);
		pressEnter();
		console.log(`
	\nO meu olhar quanto à não entender NADA dessa ultima frase ficou nítido
	\n e antes que eu pudesse pedí-l${oas(2)} para repetir (em português de preferência)
	\nSinto alguém me pegando pela cintura e me abraçando
				`);
		pressEnter();
		console.log(`
	\n		${personagensSecundarios[1]}
	\n	Oi amig${oap()}${oap()}${oap()}${oap()}${oap()}${oap()}${oap()}${oap()}
	\n	Você ta sem sombrinha, bora pra casa comigo, a minha é bem grande!
	\n	Te deixo lá perto da sua casa se quiser
				`);
		pressEnter();
		console.log(`
	\nO semblante de ${personagensSecundarios[2]} se fecha em fúria e el${eas(2)} faz um "bico"
				`);
		pressEnter();
		console.log(`
	\n		${personagemPrincipal.nome}
	\n	Ué, não tinha pensado nisso ainda... Eu ia esperar a chuva passar para depois ir para casa
				`);
		pressEnter();
		console.log(`
	\nMe viro para ${personagensSecundarios[2]} e digo:
	\n	Ja te disse que não entendo nada de Japonês, o que você tinha falado mesmo???
				`);
		pressEnter();
		console.log(`
	\n		${personagensSecundarios[2]}
	\n	Eu disse... ${personagemPrincipal.nome}-senpai...
	\n	...sobre você querer que eu te acompanhe até em casa...
			`);
		pressEnter();
		do {
			console.clear();
			console.log(`
	\nO clima se torna mais fechado que o tempo chuvoso
	\nA princípio fico sem jeito...
	\nE eu me vejo dividid${oap()} entre as duas opções.
	\n
				`);
			console.log(`
	\n	Devo ir embora com ${personagensSecundarios[1]} ou ${personagensSecundarios[2]}
				`);
			pergunta = prompt(` ${personagensSecundarios[1]} ou ${personagensSecundarios[2]}: `).toLowerCase();
			if (pergunta != personagensSecundarios[1].toLowerCase() && pergunta != personagensSecundarios[2].toLowerCase()) {
				prompt(`\nVocê precisa digitar [ ${personagensSecundarios[1]} ] ou [ ${personagensSecundarios[2]} ]\n\npressione ENTER para continuar`)
			}
		} while (pergunta != personagensSecundarios[1].toLowerCase() && pergunta != personagensSecundarios[2].toLowerCase());
		console.clear();
		if
		(pergunta === personagensSecundarios[1].toLowerCase()) {
			pressEnter();
			personagem1(2, 1);

		} else {
			pressEnter();
			personagem2(2, 1);
		};
	}
	/* personagem0(2,2)*/
	else if (hoje > 2 && noite === 'd' && m === 2 && personagensSecundariosPts[0] === 3) {
		pressEnter();
		personagem0(2, 2);
	}
	/* personagem1(2,2)*/
	else if (manha === 's' && hoje === 4 && m === 2 && personagensSecundariosPts[1] === 3) {
		pressEnter();
		personagem1(2, 2);
	}
	/* personagem2(2,2)*/
	else if (hoje > 19 && manha === 'f' && m === 1 && personagensSecundariosPts[2] === 3) {
		pressEnter();
		personagem2(2, 2);

	};
};
//Afazeres diários - end


function endGame() {
	console.clear();
	console.log(`\nVocê finalizou o
		\n		A d o l e D a t e s❤️`.brightMagenta.bold);
	console.log(`\n	O Florescer do coração`.brightMagenta.underline);
	let p1 = new status_(personagensSecundarios[0], `${Math.round(personagemPrincipal.p0*7.69)}%`);
	let p2 = new status_(personagensSecundarios[1], `${Math.round(personagemPrincipal.p1*12.5)}%`);
	let p3 = new status_(personagensSecundarios[2], `${Math.round(personagemPrincipal.p2*10)}%`);
	console.table([p1, p2, p3]);
	console.log(`
		\ncriado e produzido por @MalkavianSon
			`.bold)
	pressEnter();
	process.exit();
}
// Engine - end

//Sequencia de execução
do {
	console.clear();
	console.log(`\n\n		A d o l e D a t e s❤️`.brightMagenta.bold);
	console.log(`\n	O Florescer do coração`.brightMagenta.underline);
	ng = prompt(`		Deseja iniciar um novo jogo? [s] ou [n]`).toLowerCase();
} while (ng != 's' && ng != 'n');

init = jogo();
personagemPrincipal = init[0];
time = init[1];
personagensSecundarios = init[2];
personagensSecundariosPts = init[3];
dinheiro = init[4];
disposicao = init[5];

tempo();

histF();

endGame();

//Sequencia de execução - end

// Cenas dos Personagens:
function personagem0(mes, dia) {
	if (mes === 1) {
		if (dia === 1) {
			personagemPrincipal.p0 = 1;
			personagensSecundariosPts[0]++;
			console.clear();
			console.log(`
\nQue dia lindo para ir a escola...
\nFim do ensino médio, as mesmas caras dos ultimos anos
			`);
			pressEnter();
			console.log(`
\n ninguém aguenta mais isso kkkkkkk
\nEstamos no meio de uma pandemia e a escola resolve voltar às aulas presenciais
\nQue tédio...
			`);
			pressEnter();
			console.log(`
\n			**Barulho de alguém tropeçando e cadernos caindo**
\nOlho para trás e vejo ${personagensSecundarios[0]} se recuperando e olhando para mim muito nervos${oas(0)}.
			`);
			pressEnter();
			do {
				console.clear();
				console.log(`
\n		${personagensSecundarios[0]}
\n	_VAI FICAR SÓ ME OLHANDO OU VAI AJUDAR? - El${eas(0)} diz irritadíssim${oas(0)}\n
`);
				console.log(`Ajudar ${personagensSecundarios[0]} a se levantar?\n`);
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n')
			console.clear();
			if (pergunta === 's') {
				personagemPrincipal.p0++
				console.log();
				console.log(`
\nComeço a rir na cara del${eas(0)} mas me prontifico para ajudar ${personagensSecundarios[0]} a se recompor
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Vem... Já te falei para prestar atenção no caminho!\n
			`);
			} else {
				personagemPrincipal.p0++
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ah menin${oas(0)} oh! Você que dê seu jeito ai! Quem manda ser desajeitad${oas(0)} desse jeito?\n
\nPego o fichário del${eas(0)} e começa a folhear
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[0]}
\n	JÁ TE DISSE PARA PARAR DE MEXER NAS MINHAS COISAS ${personagemPrincipal.nome}!!!!!\n
\nVocê dá de ombros e continua folheando o caderno...
				`);
			}
			pressEnter();
			console.log(`
\n		${personagensSecundarios[0]}
\n	Tá animad${oap()} pro resto do ano kkkkkkk? Não aguento mais essa merda!
\n	Vamos entrar pra aula pq como sempre estamos atrasados, o sinal já vai bater!\n
			`);
			pressEnter();
			console.log(`
\nDesde a infância, somos como irmãos!
\nEu ${oas(0)} conheci quando estavamos na pré-escola, desde os 6 anos de idade
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[0]} é magr${oas(0)} e pard${oas(0)}
\ne na infância, el${eas(0)} era uma criança bem esquisitinha...
			`);
			pressEnter();
			console.log(`
\nMas hoje, com seus cabelos cacheados na altura dos ombros, e um rosto simétrico
\nQue inevitavelmente realçam seus olhos castanhos "folha-seca"
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[0]} se tornou muito atraente
\n\nEmbora eu jamais admitiria isso!\n
\nAinda vejo ${personagensSecundarios[0]} como aquela criancinha desengonçada que brincava comigo na infância...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[0]}
\n	Na hora do intervalo, se você não estiver ocupad${oap()}...
\n	Vem comigo na vendinha da rua de cima comprar um lanche?\n
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa... Nem sei se vou conseguir ir com você...
\n	Estou com as atividades do laboratório que tinha que ter feito nas férias todas atrasadas\n
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[0]}
\n	Aff... Vc é tão devagar! Era só fazer o troço vey!
\n	Vou te mandar o meu relatório no whatsapp para você tirar de exemplo
\n	Copia mas não faz igual tá!
			`)
		} else if (dia === 2) {
			personagemPrincipal.p0++
			personagensSecundariosPts[0]++
			console.clear();
			console.log();
			console.log(`
\nPasseando pelo Shopping Cidade
\nresolvo me sentar em uma mesa na praça de alimentação para tomar um sorvete
\nQuando derrepente...
			`);
			pressEnter();
			console.log(`
\n			*** PLAU ***
\nSinto como se o THOR me desse um tapa de duas mãos nos ombros
\nE quando olha para trás, assustad${oap()}, vejo ${personagensSecundarios[0]} com olhar descarado
\ne um sorriso maroto
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[0]}
\n	Ué, ta fazendo o que aqui menin${oap()}? Tem serviço não??? kkkkkkkk\n
\n		${personagemPrincipal.nome}
\n	AH Ó, não é da sua conta não! Vim encontrar uma pessoa!\n
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[0]}
\n	Ah para! Pra cima de mim!!! Todo mundo sabe que vc não pega ninguém!\n
\n		${personagemPrincipal.nome}
\n	Ih! Vê se me erra!
\n	E você? Veio fazer o que?\n
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[0]}
\n	kkkkkkkkkkkkkkkk A verdade doi né?!
\n	Eu vim com a Lily pra assistir Escape Room 2, mas ela é fraca e não aguenta um terrorzinho!
\n	Então vamos assitir Esquadrão Suicida...\n
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Sai dessa vida vey, vai ver outras coisas! Você só assiste terror!
\n	Mó daora Esquadrão Suicida\n
\n		${personagensSecundarios[0]}
\n	O que eu posso fazer? Eu gosto é de emoção!\n
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Mas filme de herói tem emoção também!\n
\n		${personagensSecundarios[0]}
\n	Ah, mas não é meu estilo...\n
			`);
			pressEnter();
			do {
				console.clear();
				console.log(`
\nEntão, ${personagensSecundarios[0]} acena para Lily na fila do Burguer King
\n		${personagensSecundarios[0]}
\n	Ih, Alá a Lily... Tinha me perdido dela quando fui no Super Mercado
\n comprar Refrigerante e Doritos
\n	Hey, Você não quer vir assistir o filme com a gente? Hoje eu pago!\n
			`);
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n');
			console.clear();
			if (pergunta === 's') {
				personagemPrincipal.p0++
				console.clear();
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	O QUE? VOCÊ VAI PAGAR MINHA ENTRADA????????
\n	E você acha que precisa de perguntar????
\n	Deve achar q eu sou doid${oap()} de recusar uma mamata dessa?
\n	É lógico que quero ir!\n
			`);
				pressEnter();
				console.clear();
				console.log();
				console.log(`
\n${personagensSecundarios[0]} sentou ao meu lado durante o filme...
\nFoi um ótimo filme. Nós 3 demos muitas risadas e foi bem divertido!
\nÉ estranho, mas parece que ${personagensSecundarios[0]} está cada dia mais bonit${oas(0)}!\n
			`);
			} else {
				personagemPrincipal.p0++
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ih alá, esse rolê tá mó com cara de date, nem rola ficar de vela kkkkkkkk\n
\n		${personagensSecundarios[0]}
\n	Você que tá pegando viagem, nada a ver isso ai...
\n	Ela é minha amiga, a gente se aproximou por causa de uns animes que a gnt assiste...
\n	Mas ta tudo bem, depois a gente se vê então\n
				`);
				pressEnter();
				console.log(`
\nObservei ${personagensSecundarios[0]} indo até Lily
\nCreio que foi melhor não ter ido à aquela sessão...
\nPode estar acontecendo algo entre ${personagensSecundarios[0]} e Lily e prefiro não atrapalhar
				`);

			}
			pressEnter();
		}
	} else if (mes === 2) {
		if (dia === 1) {
			personagemPrincipal.p0++
			personagensSecundariosPts[0]++
			console.clear();
			console.log();
			pressEnter();
			do {
				console.clear();
				console.log(`
\nDepois da aula de Quimica, vou correndo até a fila da lanchonete.
\nQuem não corre acaba ficando o intervalo inteiro esperando para conseguir comprar alguma coisa...
			`);
				console.log();
				console.log(`
\n		${personagensSecundarios[0]}
\n	HEY ${personagemPrincipal.nome}!!!! Eu fiquei agarrad${oas(0)} na aula de geografia...
\n	Aproveita que você já está correndo na frente de todo mundo mesmo e compra a minha ficha para mim!\n
			`);
				console.log(`
\n Ajudar ${personagensSecundarios[0]} a comprar o lanche?
				`)
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n');
			console.clear();
			if (pergunta === 's') {
				personagemPrincipal.p0++
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Eu não vou comprar nada pra você kkkkk 
\n	Se você quiser, fura fila aqui comigo e compra!\n
			`);
				pressEnter();
				console.log(`
\nAs outras pessoas da fila não gostaram NADA dessa atitude
\n e eu conseguia ouvir murmurinhos das pessoas atras de mim
\nMas não liguei
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[0]} e eu ficamos conversando enquanto aguardávamos nossa vez\n
\n Acabou que naquele dia passamos todo o intervalo juntos jogando conversa fora...
			`);
				pressEnter();
			} else {
				personagemPrincipal.p0++
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Eu não! Você se quiser que entre na fila!!! Se quisesse comprar sua ficha rapido corresse para cá!\n
\nImediatamente ${personagensSecundarios[0]} fecha o semblante e suas palpebras parecem tremer de raiva
\nEu assisto orgulhos${oap()} ${personagensSecundarios[0]} caminhar até o fim daquela fila gigantesca...
				`);
				pressEnter();
				console.log();
				console.log(`
\nSoube que naquele dia ${personagensSecundarios[0]} chega atrasad${oas(0)} na aula de filosofia
\nCom a boca meio suja de catupiry
\nE o professor compara o filósofo Diógenes (Cachorro Louco) à el${eas(0)} quando entra na sala...
				`);
				pressEnter();

			};
		} else if (dia === 2) {
			personagemPrincipal.p0++
			personagensSecundariosPts[0]++
			console.clear();
			console.log();
			console.log(`
\nHoje estou me sentindo mais cansado que o normal, acho que ficarei em casa...
			`);
			pressEnter();
			console.log();
			console.log(`
\n				**din-don**
			`);
			pressEnter();
			console.log();
			console.log(`
\n				**din-don**
\n				**din-don**
			`);
			pressEnter();
			console.log();
			console.log(`
\nNossa, quem deve ser deve estar com pressa...
			`);
			pressEnter();
			do {
				console.clear();
				console.log(` \n
\n		${personagensSecundarios[0]}
\n	${personagemPrincipal.nome.toUpperCase()}, você está em casa????
\n Abre aí, sou eu!\n
			`);
				console.log(`
\n Devo atender ${personagensSecundarios[0]}?
				`)
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n');
			pressEnter();
			if (pergunta === 's') {
				personagemPrincipal.p0++
				console.clear()
				console.log(`
\n		${personagemPrincipal.nome}
\n	JÁ VAAIII
\n	Espera ai ${personagensSecundarios[0]}
\n Só procurando a chave do portão...\n
				`)
				pressEnter();
				console.clear()
				console.log(`
\nEu abro a porta e ${personagensSecundarios[0]} me cumprimenta com um caloroso abraço
\nEu retribuo o abraço, meio cansad${oap()} e sonolent${oap()}
\n${personagensSecundarios[0]} percebe e me pergunta
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[0]}
\n	Tá se sentindo bem?? Você parece bem esgotad${oap()} hoje...\n
\n 		${personagemPrincipal.nome}
\n	Foi uma semana difícil, mas é só cansaso mesmo...\n
				`)
				pressEnter();
				console.clear()
				console.log(`
\n		${personagemPrincipal.nome}
\n	Acabei de fazer um chá, você aceita uma xícara?\n
\n		${personagensSecundarios[0]}
\n	Sim, por favor. De quê é o chá?\n
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Eu gosto de chá verde, mas tem outros se quiser\n
\n		${personagensSecundarios[0]}
\n	Ah, obrigad${oas(0)}, adoro chá verde!\n
				`)
				pressEnter();
				console.clear()
				console.log(`
\nNos sentamos na escadaria da entrada, com nossas xícaras de chá
\nA noite está estrelada e a temperatura amena, algumas nuvens dançam em suas nuances disformes
\n		${personagensSecundarios[0]}
\n	Estava fazendo caminhada aqui na avenida, e aproveitei para passar na sua casa.
\n	Estudamos juntos, mas é tão dificil de te encontrar na escola\n
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, não é nada... Eu sempre estou lá com todo mundo, só vir conversar comigo ue
\n	Somos amigos à tanto tempo... Você não precisa mais de cerimônias\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[0]}
\n	Eu sinto falta de quando éramos mais próximos...
\n	Você voltava da aula comigo lá pelo bairro de cima,
\n	Nós vinhamos brincando e conversando\n
				`)
				pressEnter();
				console.clear()
				console.log(`
\n		${personagensSecundarios[0]}
\n	${personagemPrincipal.nome}... Tem um tempo que eu queria te dizer uma coisa...\n
\n${personagensSecundarios[0]} se aproxima do meu peito e apoia a cabeça
\n		${personagensSecundarios[0]}
\n	Sinto sua falta... da forma que éramos unidos... E como nada nos separava...
\nEl${eas(0)} se deita em meu colo, e aponta para o céu...\n
				`)
				pressEnter();
				console.clear()
				console.log(`
\n		${personagensSecundarios[0]}
\nLembra que nós costumávamos olhar as estrelas?
\nE ficavamos olhando as formas das nuvens...

				`)
				pressEnter();
				console.clear()
				console.log(`
\n				**Som de mensagem recebida**
\n		${personagensSecundarios[0]}
\n	Aff, é o meu pai...
\n	Ele disse que é para eu ir para casa agora!\n
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[0]} leva a xícara para a sala, e volta bem rapidamente
\nEl${eas(0)} se precipita para me dar um beijo no rosto, mas não percebo e viro as costas
\n		${personagensSecundarios[0]}
\n	NOSSA SEM EDUCAÇÃO! Eu ia te dar um beijo no rosto e você virou as costas!!!!
\n	nem quero mais também...\n
			`);
				pressEnter();
				console.log(`
\nCaio na risada, e acompanho-n${oas(0)} até a esquina
\nLá, el${eas(0)} acaba se despedindo de mim e me dando um beijo
				`)
				pressEnter();
				console.clear()
				console.log(`
\nValeu a pena no fim das contas atender a porta
\nMe esqueci de dizer à ${personagensSecundarios[0]} que o sentimento é recíproco
				`)
				pressEnter();
			} else {
				personagemPrincipal.p0++
				console.clear()
				console.log(`
\n				**din-don**
\n				**din-don**
\n	
				`)
				pressEnter();
				console.clear()
				console.log(`
\n				**din-don**
\n				**din-don**
\n	
				`)
				pressEnter();
				console.clear()
				console.log(`
\n		${personagensSecundarios[0]}
\n	Aff...		${personagemPrincipal.nome} não está em casa...
\n	Nem devia ter tentado... El${eap()} deve ter saido com os amigos...
				`)
				pressEnter();
				console.clear()
				console.log(`
\nOlho pela janela e parece que ${personagensSecundarios[0]} ficou bem decepcionad${oas[0]}
\nEl${eas[0]} saiu cabisbaix${oas(0)} e bastante triste
\nMas acredito que foi melhor assim...
\nEstou precisando de um tempo para mim...	
				`)
				pressEnter();
			}
		}
	}
};

function personagem1(mes, dia) {
	if (mes === 1) {
		if (dia === 1) {
			personagemPrincipal.p1 = 1;
			personagensSecundariosPts[1]++
			console.clear();
			console.log(`
\nHoje parece estar acontecendo algum tipo de manifestação aqui na porta da escola
\nUm monte daqueles esotéricos que gostam de cristais, signo e incensos estão reunidos olhando para o céu
\nTalvez hoje finalmente faremos contato com os extra terrestres ou qualquer coisa do tipo kkkkkk...
			`);
			pressEnter();
			console.log(`
\n		(Alguém distante)
\n	${personagensSecundarios[1]}, vc pegou seu cartaz????\n
			`);
			pressEnter();
			console.log(`
\n		**A Pessoa imediatamente ao meu lado responde com um grito**
\n	SIIIIIIIIM! EU PEGUEI O MEU E MAIS 4 EM BRANCO, VOCÊS PRECISAM DE ALGUM AI?\n
\nEu não esperava por aquele grito, logo ao meu lado...
\nEntão nesse instante eu dou um pulo de susto
\nAcabei pisando em falso em um buraco na calçada e indo ao chão
			`)
			pressEnter();
			console.log(`
\nA doce expressão no rosto del${eas(1)} torna-se hipnótica ao olhar para mim...
\nOs seus olhos azuis cristalinos parecem pedir desculpas
\n e sua expressão anseia por querer me auxiliar
			`);
			pressEnter();
			console.log(`
\nO brilho de seus cabelos longos e loiros, reluzem ao sol enquanto estende sua mão
\n para ajudar-me a levantar
			`);
			pressEnter();
			do {
				console.clear();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Oi, meu nome é ${personagensSecundarios[1]}, você está bem?
\n	Me desculpe, parece que te assustei, deixe-me lhe ajudar a levantar...\n
				`);
				console.log(`
\n		Devo aceitar ajuda de ${personagensSecundarios[1]}?
				`);
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n')
			console.clear();
			if (pergunta === 's') {
				personagemPrincipal.p1++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa... Muito Obrigad${oap()}, eu acabei virando o pé quando me assustei kkkkk
\n	 mas acho que estou bem! Não precisa se preocupar...\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Muito pelo contrário, devo me preocupar sim! Foi culpa minha... Fui eu quem te assustou!\n
\n${personagensSecundarios[1]} com um rápido movimento me deita novamente no chão!
\nEl${eas(1)} parece já estar habituado com isso, pela velocidade e facilidade que fez isso
			`);
				pressEnter();
				console.log(`
\nQuando percebi já estava sentad${oap()} no chão, sem o tênis
\nEnquanto ${personagensSecundarios[1]} passava em meu tornozelo
\nalgum tipo de pomada natural que el${eas(1)} tirou da mochila
			`);
				pressEnter();
				console.log(`
\nO aroma de erva-doce, hortelã e arnica pairam no ar
\n e sinto uma leve refrescância na região do meu tornozelo...
\nA pouca dor que sentia, desapareceu completamente
\nE ${personagensSecundarios[1]} começa a massagear meu pé...
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	O que é isso? Você é alguma espécie de brux${oas(1)} que faz poções mágicas?\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Isso se chama Unguento, não é bruxaria kkkkkk
\n	É uma receita da minha avó
\n	Logo logo o inchaço vai diminuir e você estará nov${oap()} em folha..
\n	Isso é o mínimo que posso fazer por você, já que foi minha culpa...
\n	Eu costumo andar com ela na bolsa em dias de manifestações!\n
			`)
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Manifestação? Então vocês não vão para a aula?\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Não, estávamos nos preparando para ir à uma manifestação
\n	 em prol de leis mais duras quanto à emissão de gases do efeito estufa aqui na nossa cidade!
			`);
				pressEnter();
				console.log(`
\n	O sistema de ensino atual nos prepara para lidar com o mercado
\n	 mas não ensina coisas importantes
			`);
				pressEnter();
				console.log(`
\n	 por exemplo, como os nossos hábitos de consumo
\n	 contribuem para a degradação de nosso meio ambiente!
			`);
				pressEnter();
				console.log(`
\n	Eles comentam né...
\n	Mas não mostram para os alunos o quão importante é essa pauta 
\n	 e como todos devemos nos organizar para mudar isso o mais rápido possível!
			`)
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Questões extremamente importantes que jamais são tratados pelas pessoas, como por exemplo...
\n	O Centro de Resiliência de Estocolmo indica 9 áreas de segurança que precisamos respeitar
\n	 para conservar nosso ecossistema!
			`);
				pressEnter();
				console.log(`
\n	Desses 9, 2 já estão em zona de alto risco, como a integridade da nossa biosfera em geral
\n	 e mais 2 estão n zona de risco crescente!
			`);
				pressEnter();
				console.log(`
\n	E como a população continua desinformada, e ainda têm catalisadores de desinformação
\n	 como crenças religiosas que negam a ciência,
\n	 que intensificam a repulsa das pessoas para esses temas
			`);
				pressEnter();
				console.log(`
\n	Nossa causa, que deveria ser um uníssono entre as pessoas do planeta, acaba perdendo força
\n	E as pessoas se recusam a entender que isso é para o bem de TODOS e das próximas gerações também!
			`)
				pressEnter();
				console.log(`
\nPessoalmente mal entendo metade das coisas que el${eas(1)} diz
\nMas me encanto pela paixão que flui nas palavras que el${eas(1)} fala!
\nA forma como el${eas(1)} entende os detalhes, o brilho no olhar ao vislumbrar essa utopia
\nOnde, pelo que eu entendi, as pessoas e a natureza voltarão à ser um...
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa... Muito bonito isso, de verdade!
\n	Me fez repensar muito das minhas atitudes quanto à preservar o planeta!
\n	Me sinto até um pouco envergonhad${oap()} por não ter nenhum conteúdo sobre esse assunto!
\n	Jamais havia parado para pensar sobre isso...\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Ah, mas eu não culpo você! O sistema atrapalha essas informações chegarem nas pessoas
\n	Não é vantagem para as grandes corporações...
\n	Pronto, parece que diminuiu o inchaço, mais uma vez, me perdoe por isso...
			`);
				pressEnter();
				console.log(`
\nAssim que termino de calçar o tênis
\nEl${eas(1)} me estende a mão novamente e me ajuda a levantar
			`);
				pressEnter();
				console.log(`
\nO pequeno impulso que ${personagensSecundarios[1]} fez para eu levantar
\n é um pouco mais forte do que esperávamos
\nE nossos corpos acabam se tocando.
			`);
				pressEnter();
				console.log(`
\nSinto seu perfume inusual,
\nEra algo que parecia algum tipo de flor silvestre
\n ou esses cheiros que sentimos quando vamos em bosques ou parques de flores
\nNão parecia ser um perfume comum como O Boticário ou L'Acqua di Fiori
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Ops... Parece que te puxei mais forte que deveria
\n		${personagemPrincipal.nome}
\n	Ah, sem problemas kkk  __ digo afastando um pouco meu corpo
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Haha O.O' Eu só me esqueci de perguntar seu nome
\nQue indelicadeza a minha, praticamente abracei a pessoa e nem disse meu nome!!!!
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa... Também me esqueci de falar!
\n	Meu nome é ${personagemPrincipal.nome}, e o seu?\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	O meu eu ja tinha falado kkkk mas é ${personagensSecundarios[1]}
\n	Muito prazer em conhecê-l${oap()} ${personagemPrincipal.nome} hihi
\n	Acho que vou até meus amigos ver se tem alguma ação voluntária para fazer hoje
\n	 já que nossa manifestação foi cancelada\n
			`)
				pressEnter();
				console.log(`
\nNOSSA MEU DEUS! EU NÃO ESTOU BEM!!
\nEl${eas(1)} já tinha me falado o nome e eu perguntei de novo!!!
\nNossa eu fiquei fora de órbita
			`)
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\nHAHA __riso meio desesperado__ Me desculpa ter perguntado seu nome duas vezes ${personagensSecundarios[1]}
\nÉ por quê eu sou meio maluc${oap()}
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Já percebi que vc é muito maluc${oap()}
\n	Colocou até a meia do avesso...
\n	kkkkkkkkkkkkkkkkkkkkkkkkkkkkk\n
			`);
				pressEnter();
				console.log(`
\nO tom é de deboche, mas a entonação e a carinha é tão fofa que nem tem como se irritar!
\nRapidamente eu me sento para consertar minha meia
\n e uma amiga de ${personagensSecundarios[1]} aparece com pincéis atômicos e cartolinas que não serão mais usadas
			`)
				pressEnter();
				console.log(`
\nO porteiro começa a mexer no cadeado para fechar o portão de entrada...
\n		${personagemPrincipal.nome}
\n	O portão já vai fechar, você realmente não vai para a aula?\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Eu não tenho nada para aprender nesse lugar!
\n	O mundo precisa que as pessoas entendam que ele está doente, e se eu for para a escola
\n	Quem levará essa mensagem para eles?\n
			`);
				pressEnter();
				console.log(`
\nO raciocínio é muito bom
\n mas eu tenho prova de física e não posso me dar ao luxo de perder esses pontos...
\n		${personagemPrincipal.nome}
\n	Então te vejo depois? Quando podemos nos encontrar novamente?
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Siga o sol que você irá me encontrar...
\nEl${eas(1)} diz isso enquanto é praticamente arrastad${oas(1)} por uma multidão de hippies com seus colares de pedra
\n e anéis de côco... 
			`)
			} else {
				personagemPrincipal.p1++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Não! Muito Obrigad${oap()}!!
\n	Melhor do que ajudar alguém no chão, seria evitar de gritar no ouvido das pessoas.
\n	Ajuda para mim seria o seu silêncio...\n
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Nossa... Mil perdões __El${eas(1)} recolhe sua mão e enfia nos bolsos__
\n	Não foi por mal, foi só que...\n
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Só que nada... Nem precisa de ficar se justificando demais não!\n
\nLevanto e limpo minha calça, ${personagensSecundarios[1]} se afasta lentamente
\nAparentemente muito envengonhad${oas(1)}
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Mais uma vez peço desculpas... Posso ao menos saber seu nome?\n
\n		${personagemPrincipal.nome}
\n	Meu nome é ${personagemPrincipal.nome}\n
			`);
				pressEnter();
				console.log(`
\n 		${personagensSecundarios[1]}
\n	Mais uma vez peço desculpas ${personagemPrincipal.nome}, não quis incomodar você...
\n	 tenha uma boa aula...\n
				`);
				pressEnter();
				console.log(`
\nMas que menin${oas(1)} sem noção...
				`)
			}
			pressEnter();
		} else if (dia === 2) {
			personagemPrincipal.p1++;
			personagensSecundariosPts[1]++
			console.clear();
			console.log(`
\nHoje a noite está ótima para pegar um freela...
\nAlguém postou nos status do whatsapp uma vaga 
\n sobre uma boate do centro da cidade precisaria de gente para ajudar no balcão...
			`);
			pressEnter();
			console.log(`
\nChegando lá, o pessoal da boate foi super simpático e me ensinou a fazer o trabalho.
\nConsistia de entregar as cervejas e preparar os destilados mais simples
\nE os coquetéis eu direcionava para outra pessoa.
			`);
			personagemPrincipal.popularidade++;
			pressEnter();
			console.log(`
\nJá era em torno de 23:00
\nEnquanto abria uma lata de cerveja para servir um cliente
			`);
			pressEnter();
			console.log(`
\n vejo ${personagensSecundarios[1]} descendo as escadarías da entrada e entrando no salão.
			`);
			pressEnter();
			console.log(`
\nEl${eas(1)} está cobert${oas(1)} de pó colorido e tinta neon
\n e vem diretamente para o balcão
			`);
			pressEnter();
			console.log(`
\n			**Alguém que acompanha ${personagensSecundarios[1]}**
\n	Estou morrendo de sede, o que você vai pedir?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Ai, eu quero um Latão bem gelado!...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Ei moç${oap()}, me vê o latão mais gelado que você tiver!
\n__el${eas(1)} diz sem perceber que sou eu___
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	É pra já chefia! Descendo um combustível pra esse opala! 
\n digo em tom de deboche
			`);
			pressEnter();
			console.log(`
\nReconheço que foi um pouco exagerado, mas queria quebrar o clima sem dizer:
\nOi, sou eu! Do pé machucado! Lembra?
			`);
			pressEnter();
			console.log(`
\nQuem acompanhava ${personagensSecundarios[1]} me olhou meio '????'
\nComo se pensasse "Nossa filh${oap()} você se esforça bastante pelo seu trabalho!"
\n e derrepente começo a me sentir sem jeito...
			`);
			pressEnter();
			console.log(`
\nEntão ${personagensSecundarios[1]} olha para mim lentamente enquanto pega a bebida no balcão
\nAs luzes da boate iluminam a tinta de seu rosto em um neon reluzente
\n e o azul de seus olhos realçam com a claridade do bar
\nFazendo o sorriso descontraído de ${personagensSecundarios[1]} 
\ntrazer meu conforto novamente
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Opala é a avó kkkkkkkkkkkkk
\n	Que delícia encontrar você por aqui amig${oap()}${oap()}${oap()}${oap()}${oap()}!
\n	Se eu soubesse que você trabalhava aqui, viria cá todos os dias!
			`);
			pressEnter();
			console.log(`
\na pessoa que acompanha ${personagensSecundarios[1]} parece estar desconfortável
\n		e lhe diz
\n	${personagensSecundarios[1]} eu vou pra pista, zero paciencia pra ficar no bar! Vamos?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Ai, eu estou cansad${oas(1)}...
\n	Pulei muito, preciso de fazer reparação de danos!
\n	Vou ficar aqui um pouco conversando com ${oap()} ${personagemPrincipal.nome}
			`);
			pressEnter();
			console.log(`
\n			**Amig${oap()}**
\n	Ai, mas ${oap()} menin${oap()} está trabalhando! Você vai atrapalhar!
\n	Vamos lá pra pista ficar com o resto do pessoal!
			`);
			pressEnter();
			console.log(`
\nEu já havia notado o dono do bar me olhando
\n e eu já havia deixado de atender umas 2 pessoas durante essa conversa!
			`);
			pressEnter();
			console.log(`
\nEmbora consiga fazer o trabalho e conversar com ${personagensSecundarios[1]}
\nPode ser que o dono do bar não goste muito da ideia...
				`);
			pressEnter();
			console.log(`
\nParte de mim concorda com ${oap()} amig${oap()} de ${personagensSecundarios[1]}
\n mas também...
			`);
			pressEnter();
			console.log(`
\nPor outro lado...
			`);
			pressEnter();
			console.log(`
\n Isso é só um freela... De toda forma ele vai me pagar!
\nTalvez eu só não consiga pegar freelas nesse bar mais.
\nOu até mesmo consiga...
			`);
			pressEnter();
			do {
				console.clear();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Verdade! Não tinha pensado nisso...
\n	Vai atrapalhar seu trabalho ${personagemPrincipal.nome}?
\n\nContinuar conversando com ${personagensSecundarios[1]}?
				`);
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n')
			console.clear();
			if (pergunta === 's') {
				personagemPrincipal.p1++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, que isso?
\n	Isso aqui é um bar gente!
\n	Nós trabalhamos conversando
			`);
				pressEnter();
				console.log(`
\nAproximo de ${personagensSecundarios[1]} e digo:
\n		Qualquer coisa eu falo para ele que estava te ajudando
\n		 com problemas do coração
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[1]} olha para mim e rí
\nE percebo ${oap()} amig${oap()} del${eas(1)} fazer uma cara de "ranço"
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Então tá certo, vou ficar por aqui mesmo!
\n	Estou mort${oas(1)} de cansaço...
\			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[1]} diz enquanto abaixa a cabeça no balcão
\nO grupo chama ${oap()} amig${oap()} de ${personagensSecundarios[1]}
\nE el${eap()} entra na multidão...
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Mas agora sério!
\n	Eu não sabia que você trabalhava aqui!
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	É... Eu pego uns freelas aqui de vez em quando 
\n	Mas me explica essa ideia aí...
\n	Eu não sabia que você era maior de idade
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Ah, eu faço aniversário no inicio do ano
\n	Eu to no terceiro por quê repeti o ano passado
			`);
				pressEnter();
				console.log(`
\n	minha família viajou para a Índia em agosto
\n	e eu acabei perdendo o ano letivo
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, mas que legal! Você foi pra Índia!
\n	lá é outra cultura, outra forma de pensar!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Sim! Meu pai é teólogo e minha mãe é antropóloga
\n	e eles estão escrevendo um artigo sobre o Hinduísmo 
			`);
				pressEnter();
				console.log(`
\n	e como os seus preceitos espirituais refletem
\n	na estrutura social daquele povo
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa, muito legal isso!
			`);
				pressEnter();
				console.log(`
\nNunca parei para pensar nessas coisas
\nÀs vezes parece que ${personagensSecundarios[1]} vive em outro mundo...
			`);
				pressEnter();
				console.log(`
\nAs experiências que el${eas(1)} já passou
\nSua forma exótica de pensar
			`);
				pressEnter();
				console.log(`
\nFicamos conversando toda a noite
\nEm meus intervalos ia para a pista com el${eas(1)}
\nQue no fim das contas não voltou para o grupo que chegou
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[1]} ficou na boate até a hora que fechou
\nDemos muitas risadas e conheci um pouco mais sobre el${eas(1)}
			`);
				pressEnter();
				console.log(`
\nJá era madrugada quando saímos e el${eas(1)} me pergunta:
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Agora você vai para onde? Acho que tenho um after Party para ir
\n	Vamos comigo?
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Bem, estou mort${oap()}... e se vc me der trela
\n	Vamos ficar para sempre no after do after do after
\n	E amanhã tenho que acordar cedo
			`);
				pressEnter();
				console.log(`
\nPelo que conheci de ${personagensSecundarios[1]}, se eu for no ritmo del${eas(1)}
\n Todos os dias eu tenho festa kkkkkkkk
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Eu entendo, sem problemas
\n	Você deve estar cansad${oap()} também!
			`);
				pressEnter();
				console.log(`
\n	Foi uma ótima noite hoje, devemos nos encontrar mais vezes.
			`);
				pressEnter();
				console.log(`
\n	Ah, dia 04/12 de manhã vai acontecer um eclipse Solar
			`.brightMagenta);
				pressEnter();
				console.log(`
\n	Combinei com alguns amigos para assistir lá da praça do Papa
\n	Se quiser ir é só aparecer por lá!
			`);
				pressEnter();
				console.log(`
\n	Acho que agora vou lá para a casa do Pierri
\n	É para os lados da escola, você mora por lá não é mesmo?
\n	Se quiser eu posso te deixar lá de carro
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa, se não for te atrapalhar em nada
\n	Para mim será ótimo
\n	Vou poder descansar mais rápido
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[1]} me deixou bem na porta da minha casa
\nFiquei tentad${oap()} à convidá-l${oas(1)} para entrar e tomar uma xícara de chá
\nMas acho que está muito cedo para isso, acabamos de nos aproximar
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	A noite foi melhor do que eu estava esperando
\n	Muito Obrigad${oas(1)}
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[1]} diz enquanto me observa abrir o portão
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Muito Obrigad${oap()} pela sua companhia, o tempo passou e eu nem percebo
\n	Quando estou com você
			`);
				pressEnter();
				console.log(`
\nVejo o rosto de ${personagensSecundarios[1]} corar e el${eas(1)} abrir um sorriso
\nA Janela se fecha e o carro começa a se movimentar
			`);
				pressEnter();
				console.log(`
\nAcho que foi uma ótima ideia ter pego esse freela hoje!
			`);
			} else {
				personagemPrincipal.p1++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Pois é ${personagensSecundarios[1]}, acho que seu amig${oap()} está certo...
\n	O Dono do bar pode não gostar se eu parar para conversar...
			`);
				pressEnter();
				console.log(`
\n 	E não quero atrapalhar sua noite com seus amigos!
\n	Mas vamos combinar assim... Na escola a gente se fala
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[1]} parece compreender a situação perfeitamente
\n e sorrí para mim pegando sua bebida e se levantando...
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[1]}
\n	Tudo bem então! Mas olha, a noite toda vou comprar com você!
\n	Quero ajudar em sua comissão!
			`);
				pressEnter();
				console.log(`
\nSorrio de volta e começo a atender outro cliente
\n e ${personagensSecundarios[1]} entra na multidão em direção à seus amigos...
				`);
			}
			pressEnter();
		}
	} else if (mes === 2) {
		if (dia === 1) {
			personagemPrincipal.p1++;
			personagensSecundariosPts[1]++
			console.clear();
			console.log(`
		${personagemPrincipal.nome}
\n	Acho que vou embora com ${personagensSecundarios[1]}
\n	Tudo bem para você ${personagensSecundarios[2]}?
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} parece ter ficado um pouco chatead${oas(2)} 
\n com minha decisão
			`);
			pressEnter();
			console.log(`
\nMas el${eas(2)} precisa entender que eu não tinha como ir embora com ambos...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Tudo bem ${personagemPrincipal.nome}, Vou esperar a Michelle...
\n	Acho que ela está sem sombrinha também...
			`);
			pressEnter();
			console.log(`
\nEnquanto ${personagensSecundarios[2]} se despede
\nA expressão de ${personagensSecundarios[1]} se torna radiante 
			`);
			pressEnter();
			console.log(`
\nRapidamente el${eas(1)} vem para o meu lado
\n e me coloca debaixo de sua sombrinha
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Olha, como eu disse... Hoje eu estou sem carro
\n	Mas como sua casa é aqui pertinho, eu posso te acompanhar até lá!
\n	Fica bem pertinho de mim para não se molhar, taokey?
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[1]} diz isto enquanto me puxa pela cintura
\n me protegendo daquela chuva
\nSeu perfume hoje parece diferente do outro dia...
			`);
			pressEnter();
			console.log(`
\nE digo impulsivamente:
\n	Que perfume gostoso! O.O
			`);
			pressEnter();
			console.log(`
\nO rosto de ${personagensSecundarios[1]} fica vermelho NA HORA!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Ai... Obrigad${oas(1)}, eu fiz essa essência com Gerânio, Lima
\n	 e algumas fatias de maçã
			`);
			pressEnter();
			console.log(`
\n	Hoje de manhã eu fiz meus exercícios na praça antes da aula
\n	 então levei essa colônia para passar após o banho no vestiário da escola
			`);
			pressEnter();
			console.log(`
\n	O Gerânio tem propriedades antissépticas e anti-inflamatórias
\n	 que ajudam a musculatura a regenerar
			`);
			pressEnter();
			console.log(`
\n	Fico feliz que você tenha gostado
			`);
			pressEnter();
			console.log(`
\nPercebi que ${personagensSecundarios[1]} é aquele tipo de pessoa
\n que sabe um pouco de tudo.
			`);
			pressEnter();
			console.log(`
\nParece que para se relacionar com el${eas(1)}
\n talvez seja necessário dominar um pouco de todos os temas!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Uau, queria entender assim de perfumes '-'
\n	Eu só uso Velvet Bergamot da Dolce & Gabbana
\nDigo tod${oap()} pompos${oap()}
			`);
			pressEnter();
			console.log(`
\nMas percebo a expressão de ${personagensSecundarios[1]}
\nE não parece das melhores
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Sério que você gasta R$2000,00 em um perfume???
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ah... Eu prefiro deixar a parede sem reboco
\n	Mas não abro mão do meu perfume
\n	Não dá para ficar sem
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[1]} rí de forma sarcástica e diz:
\n	Nossa... Toma cuidado viu, o consumismo é uma doença
\n	Dá para fazer perfumes maravilhosos de forma natural!
			`);
			pressEnter();
			console.log(`
\n	O imperialismo ocidental tira de você o conhecimento sobre isso
\n	E no lugar te ensina economia doméstica
\n	 para te ensinar a lidar com a pobreza
			`);
			pressEnter();
			console.log(`
\nA chuva começa a ficar mais forte, e como estamos descendo a rua 
\nO canal d'água que se formou se torna mais espesso que a sola de meus tenis
			`);
			pressEnter();
			console.log(`
\nVejo uma marquise pouco a frente e aponto dizendo:
\n 	Vamos parar ali um pouco, a chuva está aumentando
			`);
			pressEnter();
			console.log(`
\nImediatamente aceleramos até lá, e el${eas(1)} fecha a sombrinha
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Olha, sobre o que eu disse...
\n	Tá tudo bem, eu não te culpo
\n	Aposto que você não sabia disso kkkkk
\n	Eu tinha um tio que era bastante consumista...
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Entendo, bem diferente de você né?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Diferente do meu pai na realidade
\n	Por isso meu pai deixou todo o dinheiro da empresa para ele 
			`);
			pressEnter();
			console.log(`
\n	Contrário ao meu tio, meu pai preferiu viajar o mundo
\n	e conhecer outras culturas
			`);
			pressEnter();
			console.log(`
\n 	Enquanto meu tio preferiu amar o seu dinheiro
\n 	E só viveu dentro de seu próprio mundo...
\n	Com o tempo a corretora o consumiu, e ele só sabia trabalhar
			`);
			pressEnter();
			console.log(`
\n	Meu pai o alertou bastante sobre os riscos de viver para comprar 
\n	 e comprar para viver
			`);
			pressEnter();
			console.log(`
\n	Mas meu tio só se importava com seu trabalho, e consequentemente 
\n	 com os lucros
			`);
			pressEnter();
			console.log(`
\n	Meio que ele se tornou um Workaholic sabe, e com os anos se tornou depressivo
\n	Ele passou a beber, e desde que me lembro ele ja bebia bastante
			`);
			pressEnter();
			console.log(`
\n	Acabou desenvolvendo uma doença no fígado 
\n	E quando nós descobrimos, ja era tarde...
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Eu sinto muito pelo seu tio...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Tudo bem, eu tinha 12 anos quando aconteceu, e só o via no natal
\n	Que às vezes ele ia na casa da minha avó
			`);
			pressEnter();
			console.log(`
\n	Como eu disse, ele trabalhava muito... Não tinha tempo para família
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Sabe... Minha mãe também viveu um longo período depressiva
			`);
			pressEnter();
			console.log(`
\n	Meu pai percebeu logo, e eles procuraram ajuda profissional
\n	Eles foram ao posto de saúde mesmo, o SUS forneceu todo o auxílio
\n	E encaminhou para os profissionais competentes
			`);
			pressEnter();
			console.log(`
\n	Com alguns anos de tratamento, minha mãe se recuperou
			`);
			pressEnter();
			console.log(`
\n 	Eu também me lembro pouco
\n	Era bem nov${oap()}
			`);
			pressEnter();
			console.log(`
\n 	Mas meus pais contam que sem o tratamento ideial, seria impossível
\n	Que ambos convivessem
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	No Brasil, o tema é muito mal visto
\n 	E ainda existem muitas pessoas que fogem de tratamento para esse tipo de condição
			`);
			pressEnter();
			console.log(`
\n	Pois o censo comum que "só doido faz terapia" ainda é muito forte
\n	Mas parece que com o passar dos anos, esse pensamento está caindo por terra!
			`);
			pressEnter();
			console.log(`
\n	Até mesmo nossa legislação já vem mudando, e reconhece a necessidade de combater 
\n	 a Psicofobia, que no fim das contas não passa de outra forma de preconceito
			`);
			pressEnter();
			console.log(`
\n	Muito bobo no fim das contas
			`);
			pressEnter();
			console.log(`
\n	Depressão, Borderline, Bipolaridade, TDAH, ansiedade e etc são doenças REAIS
\n	Que tiram tantas vidas quanto o Câncer, a AIDS ou a Diabetes!
			`);
			pressEnter();
			console.log(`
\nA chuva diminiu e nem percebemos, quando dei por mim, já havia acabado
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Olha! A chuva já passou, tenho que correr! Tenho que resolver algumas coisas à tarde!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Sim, vamos lá! Nem ví o tempo passar
\n	É muito prazeroso conversar com você!
			`);
			pressEnter();
			console.log(`
\nContinuamos o caminho até a próxima esquina, que era o meio do caminho entre 
\n o Ponto de ônibus que ${personagensSecundarios[1]} vai esperar para ir embora
\n e o quarteirão da minha casa
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Aqui está ótimo para mim, muito obrigad${oap()} pela companhia...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Que nada, foi um prazer para mim... Vou lá para o ponto, o ônibus não deve demorar!
			`);
			pressEnter();
			console.log(`
\n	Ah, não se esqueça que dia 04 de Dezembro  de manhã vamos sair
\n	 para ver o eclipse Solar lá na praça do Papa!
\n${personagensSecundarios[1]} diz isso e começa a correr em direção ao ponto de ônibus
			`);
			pressEnter();
			console.log(`
\n
\nDevo me lembrar que no dia 04/12 vou SAIR de MANHÃ
\nNo fim das contas, foi muito interessante voltar com ${personagensSecundarios[1]}
			`);
			pressEnter();
		} else if (dia === 2) {
			personagemPrincipal.p1++;
			personagensSecundariosPts[1]++
			console.clear();
			console.log(`
\nAcordo super animad${oap()}, hoje vou me encontrar com ${personagensSecundarios[1]}
\nAcho que o eclipse acontece umas 09:00 horas da manha
			`);
			pressEnter();
			console.log(`
\nMas quero chegar lá bem cedinho
\nE encontrar um bom lugar no gramado para estender o pano
			`);
			pressEnter();
			console.log(`
\nA Praça do Papa é um ponto turístico
\nÉ localizada no ponto mais alto da cidade, e dá costas para uma linda vista da Serra
\nÉ também a zona nobre da cidade, então a segurança é muito boa!
			`);
			pressEnter();
			console.log(`
\nTem bastante verde e é um espaço bem grande, A àrea é em torno de 2 quadras
\nE ela sempre está cheia de crianças e famílias em toda parte da cidade durante o dia 
			`);
			pressEnter();
			console.log(`
\nA noite costuma ser o ponto de encontro de alguns casais
\n e de jovens-adultos que vêm em grupo para beber alguma coisa e conversar
			`);
			pressEnter();
			console.log(`
\nComo hoje é sábado, o ônibus para lá estava bem vazio
\n e meu perfume pairava pelo veículo de forma que todos me olhavam quando eu passava
			`);
			pressEnter();
			console.log(`
\nAssim que o ônibus chega à Praça do Papa
\n de longe consigo ver ${personagensSecundarios[1]} em um trailler comprando um lanche
\nEla logo me viu quando desci do veículo e veio até mim com uma amiga
			`);
			pressEnter();
			console.log(`
\nSuas roupas estão um pouco inusuais, e percebo que as roupas de sua amiga também
\nSerá que eu precisava de ter vindo caracterizad${oap()} também?
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[1]} está vestid${oas(1)} com uma bata clara
\n e uma túnica vermelha sobre os ombros.
\nComo se fosse uma roupa de camponês da idade média
			`);
			pressEnter();
			console.log(`
\nSua amiga está com uma roupa semelhante, mas com uma batina ao invés da Bata
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Nossa, que legal! Você veio mesmo <3 <3 
\nDisse el${eas(1)} animadíssim${oas(1)}
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Claro que eu vim, não perderia isso por nada!
			`);
			pressEnter();
			console.log(`
\n__Detalhe... Nunca parei para ver um eclipse '-'__
			`);
			pressEnter();
			console.log(`
\n	Mas acho que vim com a vestimenta inapropriada
\n por quê vocês estão vestid${oas(1)} assim?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Ah não, que isso... Era pra vir com qualquer roupa mesmo
\n	É por quê somos simpatizantes do movimento Pagão Asatru
			`);
			pressEnter();
			console.log(`
\n	Que é como um renascimento da antiga religião politeísta Nórdica
\n	E para nós, os eclipses solares remetem à Ragnarök
			`);
			pressEnter();
			console.log(`
\nLogo pensei nos filmes do Thor 
\nNão entendo nada do assunto além de ele ser irmão do Loki e ter um Martelo
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Vamos lá ficar com o pessoal!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Vamos sim, vou só comprar um energético para mim no foodTruck ali
\nCompro um Energético e logo após vamos para ao encontro do grupo 
			`);
			pressEnter();
			console.log(`
\nA praça ainda estava bem vazia mas já haviam algumas famílias fazendo piquenique
\nCrianças andando de bicicleta e alguns jovens de outras tribos também
			`);
			pressEnter();
			console.log(`
\nEstendo uma toalha na grama e coloco minha mochila em cima
\nE observo ${personagensSecundarios[1]} conversar com seus amigos
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	${personagemPrincipal.nome}, o eclipse deve começar lá para as 09:30
			`);
			pressEnter();
			console.log(`
\n	O pessoal vai fazer a leitura de alguns cantigos mas é só pelo ritual
\n	A gnt já vai começar a beber!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Mas qual a relação do Ragnarök ao eclipse?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Os nórdicos acreditavam que durante o Ragnarök
\n	 grandes batalhas aconteceriam entre os deuses
			`);
			pressEnter();
			console.log(`
\n	 e a destruição do universo seria conduzida por Loki
\n	 pelos filhos de Loki e pelo gigante de fogo chamado Surtur.
			`);
			pressEnter();
			console.log(`
\n	Os eventos do Ragnarök seriam antecedidos pelo fimbulvetr
\n	 que é um longo ciclo de três invernos seguidos em que haveria terríveis geadas
\n	 e no qual a violência e o caos seriam disseminados pelo mundo
			`);
			pressEnter();
			console.log(`
\n	Durante o caos do Ragnarök
\n	 o sol e a lua, que são eternamente perseguidos pelos lobos Skoll e Hati
\n	 seriam alcançados e devorados por outro lobo chamado Managarm.
			`);
			pressEnter();
			console.log(`
\n	Após isso, os filhos de Loki marchariam por sobre Midgard (mundo dos homens)
\n	 e travariam batalha com os deuses.
\n	Daí a ideia do Eclipse
			`);
			pressEnter();
			console.log(`
\nAlguém com um binóculo especial aponta para céu e grita
\n	GEEEENTEEEEE, DEVE COMEÇAR DAQUI A POUCO, JÁ DÁ PARA VER A LUA APONTANDO!
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[1]} olha rapidamente para o céu 
\nE eu fico observando seu olhar animado buscando um feixe de escuridão no sol
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Ai! Não devia ter olhado diretamente para o sol kkkkkkkk sou burr${oas(1)}
\n	Logo logo o dia deve virar noite
			`);
			pressEnter();
			console.log(`
\nO dia virar noite? Eu tinha me esquecido desse detalhe '-'
\nRealmente não me lembro de ter visto um eclipse total do sol
			`);
			pressEnter();
			console.log(`
\nNão percebi como a praça encheu bem rapido depois que cheguei 
\nE ${personagensSecundarios[1]} está sentad${oas(1)} junto comigo
\nEnquanto ouvimos seus amigos entoar um cântico, aparentemente nórdico
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Ouça, a Camila está recitando uma profecia que diz sobre o Fim dos Tempos
			`);
			pressEnter();
			console.log(`
\n		Camila:
\n	Irmãos lutarão♫
	E matarão uns aos outros♪
	Filhos das próprias irmãs♫
	Pecarão juntos♪
	Dias doentes entre os homens,♫
	Em que pecados do sexo aumentarão♪
	Uma era do machado, uma era da espada,♫
	Escudos serão partidos♪
	Uma era do vento, uma era do lobo,♫
	Antes de o mundo cair morto♪
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Não é lindo? <3 <3 
\nDiz ${personagensSecundarios[1]} emocionad${oas(1)}
			`);
			pressEnter();
			console.log(`
\nPessoalmente... É bem um canto fúnebre mesmo!
\nFaz parte da cultura e eu não critico... Só não é meu estilo
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	É Bonito! Triste... Mas bonito
\n		${personagensSecundarios[1]}
\n	É uma canção que sobrevive à mais de 1000 anos
			`);
			pressEnter();
			console.log(`
\n	Mesmo depois da antropofagia que aconteceu na islandia no Sec XIV
\n	E a religião nórdica ter sido marginalizada pela dominação cristã
			`);
			pressEnter();
			console.log(`
\n	Esta ainda é uma cultura que sobrevive
\n	 e nos mostra que somos uma grande mistura de culturas e conhecimentos pelo mundo
			`);
			pressEnter();
			console.log(`
\nEm apenas 3 minutos o sol já está quase todo escondido, e já é possível ver estrelas
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	É incrível não é?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	O que exatamente você diz?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Como a natureza é perfeita... Estamos aqui, admirando um detalhe de um ciclo
\n	De um corpo celeste que admiramos todos os dias 
			`);
			pressEnter();
			console.log(`
\n	E isso nos mostra como somos tão pequenos e frágeis
\n	E nossa existência é tão pequena
			`);
			pressEnter();
			console.log(`
\n	Há mais de 1000 anos outras pessoas admiravam um acontecimento identico à este
\n	E temiam pelas suas vidas
			`);
			pressEnter();
			console.log(`
\n	Pense quantas desculpas sinceras foram pedidas
\n	Quantas lágrimas de arrependimento desceram dos olhos
\n	Quantos abraços foram dados
			`);
			pressEnter();
			console.log(`
\n	Por isso o eclipse é tão importante para mim, me faz perceber como o fim do mundo
\n	Pode acontecer para qualquer um à qualquer momento
			`);
			pressEnter();
			console.log(`
\n	E nós não devemos aguardar o apocalipse 
\n	Para buscarmos o sentido da nossa felicidade
			`);
			pressEnter();
			console.log(`
\n	Ragnarök fala de renovo, do caos destruindo a ordem
\n	E deixando um caminho livre para uma nova ordem
			`);
			pressEnter();
			console.log(`
\n	Nós deviamos aprender com isso
\n	E aproveitar cada segundo, para que no fim... quando chegar a hora apocalipse pessoal
\n	 possamos passar dessa vida para a próxima sem arrependimentos
			`);
			pressEnter();
			console.log(`
\nNesse instante, quando o sol estava completamente coberto pela lua
\n${personagensSecundarios[1]} e eu nos entreolhamos
			`);
			pressEnter();
			console.log(`
\nEram 09:27 da manhã, mas o céu estava completamente estrelado
\nOs olhos de ${personagensSecundarios[1]} estavam fixos nos meus 
\nE nossas mãos se tocam
			`);
			pressEnter();
			console.log(`
\n		__Alguém no grupo dos nórdicos__
\n	${personagensSecundarios[1].toUpperCase()}, VEM AQUI TIRAR UMA FOTO COM A GENTE!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	A GENTE JÁ VAI!
\n	Vamos lá tirar umas fotos com o pessoal e beber alguma coisa
\n	Já que, teoricamente, pelos próximos 3 minutos, está de noite né kkkkk
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, sim... Claro! Vamos lá tirar umas fotos
			`);
			pressEnter();
			console.log(`
\nNos reunimos com o pessoal, tiramos várias fotos
\nA nuance das tonalidades nas nuvens ficaram lindas quando o sol voltou à aparecer
\nUm tom laranja-Boreal tomou conta do ceu e nós registramos todos os detalhes possíveis
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	${personagemPrincipal.nome}, agora nós vamos almoçar na casa do Diogo
\n	E de lá devemos ir pra uma Rave em um sítio até Domingo
\n	Você quer ir com a gente?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, nem posso! Que pena... Até gostaria de ir
\n	Mas eu tenho que fazer algumas coisas hoje ainda
\n	E amanhã vou estar bem ocupado, você me perdoa?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Claro que perdoo, hoje foi maravilhoso! Fiquei muito feliz que você veio!
\n	Te vejo na escola segunda-feira então!
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[1]} e eu nos abraçamos e el${eas(1)} me dá um beijo no rosto!
\nO Dia hoje foi gratificante! Fiquei muito feliz por ter escolhido vir até aqui!
        `);
		};
	};
};

function personagem2(mes, dia) {
	if (mes === 1) {
		if (dia === 1) {
			personagemPrincipal.p2 = 1;
			personagensSecundariosPts[2]++
			console.clear();
			console.log(`
\nCaminhando pela escola vejo várias tribos espalhadas em grupinhos
\nAcho interessante como o pessoal do segundo ano é totalmente diferente do terceiro...
			`);
			pressEnter();
			console.log(`
\nO primeiro ano aqui no colégio é somente à tarde, e o segundo e o terceiro são de manhã
\nEntão, quando nós passamos para o terceiro e a galera do primeiro passou para a manhã
\n a escola se diversificou bastante no quesito "tribos Urbanas"
			`);
			pressEnter();
			console.log(`
\nAntes tinha a galera do HipHop, os Nerds, os Esportistas e o resto...
\nAgora a escola é super dividida entre Otakus, TikTokers, e-girls e e-boys
\n Clubbers, Geeks, Veganos e vários tipos de galeras!
			`);
			pressEnter();
			console.log(`
\nEstou sentad${oap()} na escada que leva para o pátio
\n enquanto surge grupo de alunos do 2º e dentre eles alguém cantando:
			`);
			pressEnter();
			console.log(`
\n		Yoru no tobari ga oritara aizuda♫
\n		Sōtai shite mawaru kanjō-sen♪♪
\n		Zaregoto nado wa haki sute ike to♫
\n		Mada tomenaide mada tomenaide♪♪
			`);
			pressEnter();
			console.log(`
\nNão me movo na escada! Eles que me contornem!!!!
\n e o grupo começa a descer as escadas no sentido do pátio
			`);
			pressEnter();
			console.log(`
\n${oas(2).toUpperCase()} menin${oas(2)} que estava cantando esbarra em minha perna
\n		${personagemPrincipal.nome}
\n	Ow! Presta atenção onde passa! Enxerga não menin${oas(2)}?
\nDigo chei${oap()} de ódio
			`);
			pressEnter();
			console.log(`
\n		???????????
\n	Oni???
			`);
			pressEnter();
			console.log(`
\nMe irrito com aquela situação
\nEl${eas(2)} é daqueles tipos Otakus
			`);
			pressEnter();
			console.log(`
\n que vestem uma camisa de anime por baixo do uniforme
\nE falam coisas que ninguém entende...
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Aaaaaah, para de ser esquisit${oas(2)} menin${oas(2)}
\n	E por gentileza, para de gritar no meu ouvido!
			`);
			pressEnter();
			console.log(`
\nEl${eas(2)} para no degrau por à minha frente e
\n se vira para mim com o dedo em frente à boca fazendo silêncio
			`);
			pressEnter();
			console.log(`
\n		???????????
\n	(*°o°) Hihi ('°,°) Eu tenho que fazer silêncio an?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Cara... Você é extremamente chat${oas(2)}!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Ããããn? Eu não sou chat${oas(2)}! Por quê você pensa isso???
\n	Enfim... Meu nome é ${personagensSecundarios[2]}
\nOcupando o outro lado da passagem, el${eas(2)} senta ao meu lado
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Não entendi o motivo de me tratar mal!?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Não te tratei mal... Só disse que você é chata!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	E isso é tratar mal! __diz enquanto franze a testa
\nAs pessoas começam a passar pelo espaço entre nós, e el${eas(2)} continua
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Você não tem o direito de tratar as pessoas assim, sabia?
\nAlguém descendo as escadas esbarra a perna
\n nos livros que ${personagensSecundarios[2]} leva
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Heey! Baka! Tenha cuidado!!!__Diz brav${oas[2]} com sua voz doce e felpuda
			`);
			pressEnter();
			console.log(`
\nQuando tenta se levantar do degrau, outra pessoa descendo as escadas
\n pisa na bandana da tribo da folha que está amarrada em seu macacão Jeans
			`);
			pressEnter();
			console.log(`
\nE ${personagensSecundarios[2]} cai de volta sentad${oas(2)} no mesmo lugar que estava
\n		${personagensSecundarios[2]}
\n	(╥﹏╥)Aaaaaaah ಥ_ಥ  Onee sama...__Juntando as mãos 
\n	Será que você poderia pegar para mim? （っ＾▿＾）
			`);
			pressEnter();
			console.log(`
\nJá foi um desaforo tirar a minha paz, agora quer que EU pegue esses livros?
\nQuem traz livros para o intervalo????
\n		${personagemPrincipal.nome}
\n	É sério isso??? Ah! Se vira!
			`);
			pressEnter();
			console.log(`
\nNeste momento ${personagensSecundarios[2]} se levanta com prontidão e diz
\n		${personagensSecundarios[2]}
\n	Me virar? (≖_≖ )\n	Me virar?? (｀_っ´)
			`);
			pressEnter();
			console.log(`
\n	Ah, entendi!__Diz isso enquanto se vira lentamente de lado para mim
\n	Assim OneeChan?
			`);
			pressEnter();
			console.log(`
\nMinha raiva explode nesse momento! Acabei de vir de um maldito teste de física
\nEstou cansad${oap()}, e essa criatura vem zoar com minha cara?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Olha aqui, pra inicio... PARA DE ME CHAMAR DE ÔNE TCHAN
\n	SEGUNDO, PARA POR FAVOR DE ME ESTRESSAR!!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Hihi, tudo bem... começamos mal
\n	Antes de tudo, como posso te chamar?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Meu nome é ${personagemPrincipal.nome}! __Digo de forma brava
			`);
			pressEnter();
			do {
				console.clear();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Ok ${personagemPrincipal.nome}-senpai... Será que você poderia pelo menos
\n	Me ajudar a recolher meus mangás?
				`);
				console.log(`
\n		Ajudar ${personagensSecundarios[2]} à recolher os mangás?
				`);
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n')
			console.clear();
			if (pergunta === 's') {
				personagemPrincipal.p2++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Tudo bem, vamos começar novamente...
			`);
				pressEnter();
				console.log(`
\nDesço as escadas e ajudo ${personagensSecundarios[2]} à recolher seus mangás
\nSão alguns volumes de Dr. Stone (pelo que diz na capa)
			`);
				pressEnter();
				console.log(`
\nCom a capa dura e uma película plástica para proteger a edição
\nDepois que recolhemos tudo, ${personagensSecundarios[2]} diz me agradecendo
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Arigatou gozaimasu ${personagemPrincipal.nome}-senpai 
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Olha, primeira coisa é: Pare de me chamar de sem pai
\n	Por quê eu tenho pai sim ta bom!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	hihihihihihi Não estou te chamando de Sem Pai kkkkkk
\n	Estou te chamando de Senpai! É diferente
\n	Eu estou no segundo-ano... E você no terceiro, né?
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Bem... Sim...
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Jaa... Senpai desu ne? :3 
\n	kore kora yoroshiku ne 
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Olha lá você falando difícil de novo!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Hihi, me desculpe... é o hábito
\n	Eu disse: Então significa que você é meu veterano
\n	Muito prazer em conhecê-lo
			`);
				pressEnter();
				console.log(`
\n	Senpai em Japonês remete ao superior na hierarquia escola
\n	Você pode me chamar de Kōhai se quiser ^.^
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Não... Muito obrigado
\n	Posso te chamar de ${personagensSecundarios[2]} mesmo... Mais simples
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} se aproxima de mim lentamente... 
\nAté aquele momento não tinha notado o quanto ${personagensSecundarios[2]} é tão bonit${oas(2)}
			`);
				pressEnter();
				console.log(`
\nEl${eas(2)} começa a passar a ponta dos dedos pelo meu braço e vai subindo e direção ao meu ombro
\n		${personagensSecundarios[2]}
\n	Se você quiser pode me chamar da forma que preferir... 
\n	O importante para mim é você me chamar :3
			`);
				pressEnter();
				console.log(`
\nSinto meu rosto esquentar, ninguém jamais foi tão direto assim comigo!
\n		${personagemPrincipal.nome}
\n	Hey! O que você está querendo dizer com isso?
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	hihihihi Parece q ${oap()} senpai ficou envergonhad${oap()} hihihi
\n	Olha seu rostinho vermelhinho hihihi (─‿‿─)__diz el${eas(2)} com um sorriso provocante
			`);
				pressEnter();
				console.log(`
\n	Vamos fazer assim ${personagemPrincipal.nome}-senpai
\n	Agora eu vou correr para a reunião do grêmio e quem sabe nos encontramos outro dia
			`);
				pressEnter();
				console.log(`
\n	Pode ser?__Diz enquanto vira as costas em direção à sala do grêmio ao lado da Cantina
\nQuem ess${eas(2)} menin${oas(2)} pensa que é para falar assim comigo?
			`);
				pressEnter();
				console.log(`
\nAlgo me diz que esse não é nosso último encontro
			`);
			} else {
				personagemPrincipal.p2++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Você está é rindo do meu cabelo, né? Não é possível!
\n	Primeiro causa toda essa confusão
\n	E agora quer me tirar da minha paz????
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Gomen Gomen ${personagemPrincipal.nome}-senpai
\n	Foi um erro ter pedido sua ajuda!
\n	Você precisa lidar com todo essa raiva reprimida!
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} desce os degraus até o pátio e recolhe seus mangás
\nE em seguida sobe as escadas novamente
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa... Você não vai parar de me incomodar?
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Ok ok, talvez você não tenha percebido, mas sua comunicação foi sim agressiva.
			`);
				pressEnter();
				console.log(`
\n	Recomendo como leitura o livro "Comunicação Não Violenta" para te ajudar a perceber
\n	 e corrigir (se lhe interessar) esses comportamentos indesejados em ambiente social
			`);
				pressEnter();
				console.log(`
\n	Aqui na escola, nós do grêmio, temos um projeto que dá apoio psicológico para alunos
\n	 que querem lidar com comportamentos como estes
\n	 para que o bullying seja erradicado em nosso meio
\nEl${eas(2)} me entrega um papelzinho escrito "Comunicacao Nao-violenta de Marshall Rosenberg"
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	É de coração, acredito que a culpa não é sua! E se você quiser, podemos ajudar a lidar...
			`);
				pressEnter();
				console.log(`
\nMe sinto um pouco envergonhad${oap()} com o contexto, mas não me arrependo!
\nAcredito que estou no meu direito de ficar em paz sem deixar esse povo me perturbar
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Tá certo, vou ver se eu leio! Agora me deixa quiet${oap()} por gentileza????
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Hai! Ta certo! Pelo menos dê uma oportunidade para a leitura, tudo bem?
\n	Nos veremos novamente ${personagemPrincipal.nome}-senpai
				`);
			}
			pressEnter();
		} else if (dia === 2) {
			personagemPrincipal.p2++;
			personagensSecundariosPts[2]++
			console.clear();
			console.log(`
\nEssa tarde resolvi estudar um pouco de artes e culturas...
\nTenho que entregar um projeto integrado que vale nota para história e artes
\nOnde preciso explicar como os meios artísticos de um povo influenciaram sua cultura atual
			`);
			pressEnter();
			console.log(`
\nComo quero fazer algo diferente do resto da turma, e tenho certeza que todos irão buscar
\n nos mesmos sites da internet, resolvi fazer diferente...
			`);
			pressEnter();
			console.log(`
\nVim até a Biblioteca Pública da cidade e vou procurar referências de coisas antigas
\nO prédio-sede da Biblioteca Pública de Belo Horizonte fica localizado na Praça da Liberdade
\nNa região central da cidade
			`);
			pressEnter();
			console.log(`
\nÉ um complexo predial com 3 anexos e tem mais de 500.000 exemplares físicos
\n incluindo obras raras e representativas de autores nacionais e estrangeiros
			`);
			pressEnter();
			console.log(`
\nAlém de grande acervo digitalizado, coleção infantojuvenil
\n jornais e revistas novos e antigos, audiolivros e acervo em braille.
			`);
			pressEnter();
			console.log(`
\nQuando eu era mais nov${oap()} costumava vir aqui com minha mãe
\nA entrada é grátis, mas é necessário fazer uma carteirinha para levar algo para casa
\nE acessar certas àreas do prédio
			`);
			pressEnter();
			console.log(`
\nComo eu não achei a minha antiga carteirinha, terei que fazer minha pesquisa aqui mesmo
\n O que eu precisar de complementar, posso pegar na internet
			`);
			pressEnter();
			console.log(`
\nAntes de ir direto aos livros, resolvo passar em umas das salas de exposição
			`);
			pressEnter();
			console.log(`
\nA biblioteca sempre promove mostras e hoje está exposto um projeto
\n do artísta plástico Mateus Moreira
			`);
			pressEnter();
			console.log(`
\nCom belas pinturas à óleo carregadas de sentimento
\n e traços que remete à uma realidade estremecida
\n que parecem retratar momentos da existência humana em uma tentativa de resistência 
\n ao sentimento de violenta opressão
			`);
			pressEnter();
			console.log(`
\nAs 15 pinturas despertam um sentimento em comum: o de desolação.
\n daí, o nome da exposição
			`);
			pressEnter();
			console.log(`
\nSimplesmente indescritível a sensação que aquela exposição me trouxe
\nApós refletir um pouco sobre aquelas imagens, vou em direção aos livros
\nComeçar as minhas pesquisas...
			`);
			pressEnter();
			console.log(`
\nEnquanto subo as escadas para acessar o segundo piso
\n ouço ruídos de risadas vindo da direção das estantes sobre História e Antropologia 
			`);
			pressEnter();
			console.log(`
\n"Não é comum pessoas em uma biblioteca fazerem tanto barulho"__digo para mim mesmo
\nAo me aproximar um pouco mais da seção o som de conversa se torna mais audível
			`);
			pressEnter();
			console.log(`
\nE identifico que vem justamente das mesas para estudo 
\n que ficam atrás das estantes de Cultura Asiática
			`);
			pressEnter();
			console.log(`
\nAté ontem eu estava dividido entre fazer sobre as culturas Asteca e Chinesa
			`);
			pressEnter();
			console.log(`
\nNo caminho para cá, acabei pesquisando na internet um pouco sobre
\n a forma como os chineses enfrentaram a pandemia e concluí que seria um bom tema
\n pontuar como a cultura daquele povo influienciou esse comportamento
			`);
			pressEnter();
			console.log(`
\nNão vou mudar meu tema por causa de alguns bagunceiros ¬.¬
			`);
			pressEnter();
			console.log(`
\nAo chegar na seção de História da Ásia, ao retirar o primeiro livro da estante
\n consigo ver do outro lado ${personagensSecundarios[2]} sentad${oas(2)} com 
\n um garoto, aparentemente também otaku, e uma menina descaracterizada
			`);
			pressEnter();
			console.log(`
\n mas claramente uma otaku pelo jeito de conversar e gesticular
			`);
			pressEnter();
			console.log(`
\n "Vim para a biblioteca exatamente por pensar que não encontraria ninguém da escola
Por quê el${eas(2)} estaria aqui????
			`);
			pressEnter();
			console.log(`
El${eas(2)} nem tem esse tipo de trabalho escolar ainda!
Vou pegar meus livros e ir para o outro lado do hall..." __Penso sozinho...
			`);
			pressEnter();
			console.log(`
\n		[voz feminina]
\n	Ah cara... deixa disso, vamos embora
\n	A gente vai la pra Liba agora ficar com o pessoal no coreto
			`);
			pressEnter();
			console.log(`
\n		[voz masculina]
\n	É ${personagensSecundarios[2]}... Vamos embora, estuda isso na internet
			`);
			pressEnter();
			console.log(`
\n	A única vantagem que eu vi aqui foi poder ler esses mangás do DBZ
\n	Não tem nada aqui que a gente não consiga na internet
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Pode até ser verdade Tom, mas eu gosto de pesquisar assim
			`);
			pressEnter();
			console.log(`
\n	Todo mundo sempre escreve textos basicamente iguais quando tiram algum conteúdo
\n	 da internet, e meio que a gente fica preso no ctrl+c ctrl+v ao invés de realmente 
\n	 estudar o conteúdo...
			`);
			pressEnter();
			console.log(`
\nOuço uma cadeira se arrastando e passos em direção à estante
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Sério gente, vocês podem ir... Eu não vou ficar chatead${oas(2)} com vocês não!
\n	Eu quero caprichar nesse trabalho do Instituto! Não quero reprovar esse curso
			`);
			pressEnter();
			console.log(`
\n"Nossa... o som da voz se aproximou
tomara que o que el${eas(2)} precise esteja do outro lado"__ pensei...
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} dá de cara comigo do outro lado da estante:
\n		${personagensSecundarios[2]}
\n	Aaaah! Ohayou ${personagemPrincipal.nome}-Senpai
\n	O que você faz por aqui??
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Hey, você está falando muito alto para quem está em uma biblioteca, não acha??
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Nossa... Mas que mania você tem de me mandar ficar calad${oas(2)} hein!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ora, não é minha culpa se você sempre está falando alto!
\n	Mas afinal, por quê você está aqui?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Eu que te pergunto, o que você está fazendo aqui?
\n	Sempre venho à biblioteca e nunca vi você
			`);
			pressEnter();
			console.log(`
\nVerdade, ja tem um tempo que eu não venho à biblioteca\n
\n mas não quero falar que vim fazer um trabalho com livros em pleno 2021.
\n O que el${eas(2)} vai pensar?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Vim ver a exposição do Mateus Moreira__ minto
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Ah, interessante （っ＾▿＾）! Muito legal! Eu vi ela no dia que ela chegou, tenho vindo toda semana
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	É mesmo? E por quê você está vindo toda semana?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Eu faço um curso no instituto de Cultura Oriental ali no bairro Serra
			`);
			pressEnter();
			console.log(`
\n	Estou me preparando para fazer um intercâmbio.
\n	Tenho que entregar um trabalho sobre a lenda da Amaterasu e Tsukuyomi na próxima semana
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	E por quê você não pegou isso da internet?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Ah... na internet tudo é muito igual sabe... E eu meio que não entendo nada.
\n	Tudo que tem lá é a mesma linguagem, a mesma forma de explicar
			`);
			pressEnter();
			console.log(`
\n	Quando venho à biblioteca, eu sinto a energia de estar estudando
\n	 sem notificações... distrações... ou interrup[Alguém chama ao fundo]
			`);
			pressEnter();
			console.log(`
\n		[voz feminina]
\n	Oooow, morreu ai? Tá demorando horrores!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Essa é um ótimo exemplo!
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} me segura pelo braço e puxa na direção dos amigos del${eas(2)}
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Olha quem eu encontrei aqui, ${personagemPrincipal.nome}-senpai ( ͡❛ ⏥ ͡❛)
\n	Olha, esses são Tom-Chan e Hina-Nee-chan
			`);
			pressEnter();
			console.log(`
\n		Hina
\n	Humm, ess${eas(2)} é ${oas(2)} ${personagensSecundarios[2]} que você falou??
\n	 não sabia q era um Hajimete no dēto
			`);
			pressEnter();
			console.log(`
\n		Tom
\n	Agora eu entendi o porquê de ${personagensSecundarios[2]} estar nos falando pra ir pra praça
\n	Huuuummm...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Nada disso! Foi uma coincidência. O monster de vocês estava estragado, só pode!
			`);
			pressEnter();
			console.log(`
\nHina se levanta e vem em minha direção. Ela é magra e pouco mais alta que eu
\nMe olha de cima abaixo e diz de forma sarcástica
			`);
			pressEnter();
			console.log(`
\n		Hina
\n	Ah, então é você quem finalmente ganhou ${oas(2)} imouto?
\n	Se fizer mal à el${eas(2)} eu vou te dar uns tapas!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Eu heim, não sou namorado de ninguém não! Só vim ver a exposição!
			`);
			pressEnter();
			console.log(`
\n		Hina
\n	Ah é... veio ver a exposição? Então o que está fazendo especificamente na seção oriental
\n	 no dia que ${oas(2)} ${personagensSecundarios[2]} veio estudar?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Não te devo explicação nenhuma menina!!!__digo de forma superior
			`);
			pressEnter();
			console.log(`
\n		Tom
\n	Vamos então Hina, mais tarde a gente encontra ${personagensSecundarios[2]} lá no coreto (^.^ )
\nE os dois pegam suas mochilas e colocam nas costas
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Heim, não precisa de ir embora por causa disso não gente!
			`);
			pressEnter();
			console.log(`
\n		Tom
\n	Ah claro ${personagensSecundarios[2]} hihihi entendemos bem
\nE os dois saem rindo
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	É... Eu acho que também já vou embora
			`);
			pressEnter();
			do {
				console.clear();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Hey, senpai... Você acabou de chegar... 
\n	Poderia pelo menos me contar o motivo verdadeiro por ter vindo para cá...
				`);
				console.log(`
\n		Dizer o motivo verdadeiro? 
				`);
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			} while (pergunta != 's' && pergunta != 'n')
			console.clear();
			if (pergunta === 's') {
				personagemPrincipal.p2++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Tudo bem, você me pegou... ¬.¬ 
\n	Eu também vim fazer uma pesquisa para o integrado de História
			`);
				pressEnter();
				console.log(`
\n	E pensei sobre falar da China, por causa de todo esse contexto pandêmico
\n	E quis surfar na onda...
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Você não é daqueles que acha que a China inventou o vírus para dominar o mundo né?
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	NÃÃÃÃO! KKKKKKK Longe disso!
			`);
				pressEnter();
				console.log(`
\n	É mais pelo conceito atual mesmo, é um assunto em pauta e tudo mais
\n	Mas aqui, vamos parar de conversar alto por gentileza? Estamos em uma biblioteca!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	hihihi Vamos sim senpai
\n	Anata no namai hanashi suki
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	O que disse? Já te falei para não falar japonês comigo, que eu não entendo!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	... éér... não foi nada demais
			`);
				pressEnter();
				console.log(`
\n	Só disse que gostaria de estudar historia com vc... (ɔ'°.°)ɔ 
\n	E sobre o que você vai falar da China?
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, eu estive conversando com ${oas(1)} ${personagensSecundarios[1]}, que é do 3º D
			`);
				pressEnter();
				console.log(`
\n	 ${eas(1)} el${eas(1)} me falou um pouco sobre o Confucionismo
\n	 e como isso muda o pensamento deles
\n	E eu dei uma pesquisada sobre isso no caminho para cá
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} dá de ombros e diz:
\n	Ah, a China é legalzinha... Mas não gosto muito do 'conceito' deles
\n	Se você quer falar sobre Artes, História e Religião, pode falar sobre o Japão
			`);
				pressEnter();
				console.log(`
\n	Além de ter o Budismo que é a 5ª maior religião do mundo
\n	 e que inspirou a criação da animação The Midnight Gospel, da Netflix
			`);
				pressEnter();
				console.log(`
\n	Tem também o Xintoísmo que é uma religião com mais de 8000 anos de idade
\n	 com uma riqueza de cultura que você pode usar no seu trabalho!
			`);
				pressEnter();
				console.log(`
\nMe interessei pela temática e começamos a fazer o trabalho juntos
\nEnquanto ${personagensSecundarios[2]} pesquisava sobre os deuses japoneses
\nEu procurava sobre a Arquitetura Japonesa e suas artes em seda
			`);
				pressEnter();
				console.log(`
\nFalei sobre o papel das Gueixas na escala social
\n e até citei um livro de Arthur Golden chamado "Memórias de uma Gueixa"
			`);
				pressEnter();
				console.log(`
\nQue ilustra bem a situação social no período da Segunda Guerra mundial
\nE todos os dramas relacionados à esta profissão na época.
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} me ajudou bastante
\n el${eas(2)} parece entender muito sobre ARTES E CULTURAS! 
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Senpai... você pode falar também sobre a migração do campo para a cidade
\n	 e o êxodo rural para as cidades grandes como Tokyo, por exemplo
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	O assunto é muito bom, mas acho que isso seria mais Geografia que História em si
\n	 embora eu poderia linkar isso ao aumento do consumo dos serviços das casas de chá
\n	 e o impacto na receita das cidades por causa desse turismo sexual no meio artístico!
			`);
				pressEnter();
				console.log(`
\n	Mas acho que vou parar por aqui mesmo! Já tem muito conteúdo no meu trabalho
\n	Você me ajudou bastante ${personagensSecundarios[2]}!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Ah Senpai... Para! Eu não fiz nada... Só te ajudei com o tema
\n	 a pesquisa foi você quem fez!
\nJá era próximo das 16:00 e eu ainda tenho coisas para fazer
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Acho que vou embora, ainda tenho obrigações hoje
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Ah, eu ia te chamar para ficar um pouco na Liba comigo... Se você não se importar
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Olha... Até posso ficar um pouco na praça, mas não posso demorar
\n${personagensSecundarios[2]} explode de alegria e solta um gritinho
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	shhhhhhhhhhh! Ainda estamos na biblioteca ${personagensSecundarios[2]}
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Ai, me desculpa! É por que eu empolguei!
			`);
				pressEnter();
				console.log(`
\nFui para a Praça da Liberdade e ficamos lá até umas 18:00. Conheci alguns amigos de ${personagensSecundarios[2]}
\n eles são bem alternativos e estilosos... Até que os otakus são legais!
			`);
				pressEnter();
				console.log(`
\nA gente bebeu alguns energéticos, e eu comprei uma bebida alcólica para mim
\nOs amigos de ${personagensSecundarios[2]} insistiram bastante para eu comprar para eles... 
\n mas todos eram menores de idade, então me recusei!
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	${personagensSecundarios[2]}, acho que preciso ir agora...
\n	 Já são 19:00 e eu ainda tenho coisas para fazer hoje
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Ah senpai... mas já? aff..... Vou ficar aqui mais um pouco, que pena que você precisa ir!
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} esperou o ônibus junto comigo
\n quando subi no veículo ${personagensSecundarios[2]} grita
			`);
				pressEnter();
				console.log(`
\n	${personagemPrincipal.nome}-senpai não fuja de mim na escola 
\n	 fico muito feliz de quando você vem falar comigo
\n	Jā ne! Watashi wa anata no ga suki ${personagemPrincipal.nome}-senpai
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ala! Lá vem você falando em japonês denovo... O que você disse aí?
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Eeer... nada demais... Só que eu desejo que você chegue bem em casa!
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} tampa o rosto com as mãos e corre em direção ao coreto
\n olha para trás e grita
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Mata ato de ${personagemPrincipal.nome}-senpai ('*-*)
			`);
				pressEnter();
				console.log(`
\nParece que estudar artes na biblioteca hoje foi uma boa opção
\n acho que estou me aproximando de ${personagensSecundarios[2]} aos poucos
			`);
			} else {
				personagemPrincipal.p2++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Eu ja disse o motivo verdadeiro! Vim ver o mostra
\n	Passei por aqui pois estava procurando um bebedouro no caminho para o anexo do teatro!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Ah sim, compreendo... O bebedouro fica mais para frente do hall à esquerda
\n	Logo antes da rampa que leva para o teatro
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Entendi, obrigad${oap()}
			`);
				pressEnter();
				console.log(`
\nAcho melhor voltar em outro momento, que eu possa estudar sem ser interrompido.
\nCompro alguma coisa para comer na praça da Savassi ou mesmo sento na praça
			`);
				pressEnter();
				console.log(`
\nE voltarei mais tarde para estudar, antes que a tarde acabe...
				`);
			}
			pressEnter();
		}
	} else if (mes === 2) {
		if (dia === 1) {
			personagemPrincipal.p2++;
			personagensSecundariosPts[2]++
			console.clear();
			console.log(`
\n		${personagemPrincipal.nome}
\n	${personagensSecundarios[1]}, eu vou embora com ${oas(2)} ${personagensSecundarios[2]}
\n	 El${eas(2)} meio que me chamou primeiro... Mesmo que em japonês kkkk
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[1]}
\n	Tudo bem ${personagemPrincipal.nome}, eu vou esperar o Giovanni
\n	Acho que ele pega ônibus no mesmo ponto que eu
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[1]} não parece ter ficado muito feliz com minha decisão
\nEspero que el${eas(1)} compreenda
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Arigatou gozaimasu ${personagemPrincipal.nome}-senpai <3 <3 
\n	Fico muito agradecid${oas(2)} de você vir comigo
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[1]} vira as costas e vai em direção à um grupo
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Vamos então senpai? Antes que a chuva fique mais forte...
\n	Se você quiser, pode ficar bem pertinho de mim para não se molhar
			`);
			pressEnter();
			console.log(`
\nO argumento del${eas(2)} é válido...
\nA chuva não está forte mas já é suficiente para molhar meu uniforme
			`);
			pressEnter();
			console.log(`
\nE essa blusa branca do colégio fica transparente quando molha
\n ... isso não é legal né kkkk
			`);
			pressEnter();
			console.log(`
\nMe aproximo de ${personagensSecundarios[2]} e nós praticamente nos abraçamos
\nEl${eas(2)} parece um pouco envergonhad${oas(2)} com a situação
\n mas passa seu braço sobre meu ombro
			`);
			pressEnter();
			console.log(`
\nLogo atrás vem um grupo de outros alunos, aparentemente do segundo ano
\n vem em uma velocidade que nos ultrapassa com facilidade
			`);
			pressEnter();
			console.log(`
\nPorém ao passar por nós, ouço alguns burburinhos e risadas
\nE um deles comenta enquanto os outros riem:
\n	Boa noite Lulu
\nE o grupo volta a andar rápido 
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	São seus amigos?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Eles por acaso parecem meus amigos__diz ríspid${oas(2)}
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Não... Não foi isso que eu quis dizer... Eu perguntei se vc conhece eles ¬¬
			`);
			pressEnter();
			console.log(`
\n	Por quê você me tratou assim do nada? Você mesm${oas(2)} é quem me disse
\n	 sobre tratar as pessoas mal sem motivo... (°-°')
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Ai, me desculpa tá?
\n	É por quê esses meninos ai me tiram do sério!
\n	Me perdoa mesmo, de verdade
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Tá! Perdoo se você me contar o por quê você se irritou tanto.
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Ah... Não gosto de falar nisso...
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Poxa... Pode me contar... 
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Olha... eu te conto sim... 
\n	Mas você precisa prometer não tocar mais no assunto senpai...
			`);
			pressEnter();
			console.log(`
\n	Promete?
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Tá bom... Prometo!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Olha, é por quê eu não gosto muito de falar sobre esse assunto...
			`);
			pressEnter();
			console.log(`
\n	Mas ano passado, quando eu tinha acabado de chegar na escola
\n	Esses meninos aí me prenderam no banheiro masculino
			`);
			pressEnter();
			console.log(`
\nA expressão de ${personagensSecundarios[2]} muda junto com a chuva
\nQue se torna mais forte e a água já começa a molhar nossos tenis
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Nossa... a sombrinha não vai aguentar muito
\n	Vamos esperar alí dentro daquela padaria?
			`);
			pressEnter();
			console.log(`
\nCorremos em direção à uma padaria que é 2 ruas da minha casa
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa... Você está tod${oas(2)} molhad${oas(2)}
\n	Deixe-me te ajudar a secar
			`);
			pressEnter();
			console.log(`
\nEl${eas(2)} percebe que sua blusa está começando a ficar transparente
\n e sua expressão muda completamente!
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	NÃO!__grita__Digo... não, pode deixar... Eu tenho um moletom aqui na mochila
\n	 sempre ando com um!
			`);
			pressEnter();
			console.log(`
\nE mais que depressa veste a peça
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Sabe senpai...
			`);
			pressEnter();
			console.log(`
\n	As pessoas se esquecem que algumas palavras tem o poder de afetar as pessoas
\n	Por isso eu te disse sobre tratar as pessoas sempre bem... 
			`);
			pressEnter();
			console.log(`
\n	Todos merecem ser tratados com o mesmo respeito, nada justifica o contrário!
\n	Só por quê uma pessoa é diferente, não significa que ela precise sofrer por isso
			`);
			pressEnter();
			console.log(`
\n	Até por que, cada ser humano é único e é exatamente isso que trás a beleza
\n	Nem os dedos das mãos são iguais... 
			`);
			pressEnter();
			console.log(`
\n	Por quê as pessoas tem tanta dificuldade de compreender o que é diferente?
			`);
			pressEnter();
			console.log(`
\n	Desde que me tornei presidente do Grêmio
\n	 meu objetivo é acabar com o Bullying nessa escola, sabe!
			`);
			pressEnter();
			console.log(`
\n	Eu sofro pelo que sou, meus amigos sofrem pelo que são, e isso é cíclico!
\n	Enquanto não fizermos alguma coisa, isso jamais vai parar...
			`);
			pressEnter();
			console.log(`
\nPercebo os olhos de ${personagensSecundarios[2]} se encherem de lágrimas
\nTrago sua cabeça à meu ombro e lhe abraço...
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Não fique assim, isso é algo que passa... 
\n	Uma hora todos viraremos adultos e tudo isso acabará
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} rompe em lágrimas e exclama:
\n	NÃO! NÃO VAI!!! Todos os dias pessoas morrem por conta do preconceito
\n	De pessoas que se acham no direito de fazer o que bem entenderem
\n	Sem se importar com o sentimento dos outros
			`);
			pressEnter();
			console.log(`
\n	Não respeitam as opiniões, não respeitam as decisões, não respeitam a vida!
\n	São comportamentos como estes, que nascem hoje na adolescencia
			`);
			pressEnter();
			console.log(`
\n	E tornam adultos intolerantes e cheios de suas próprias verdades!
			`);
			pressEnter();
			console.log(`
\n	Este sentimento de que a opinião própria é soberana à vida dos outros
\n	 faz com que o jornal tenha notícias todos os dias Senpai!
			`);
			pressEnter();
			console.log(`
\n	Se não erradicarmos esse pensamento da nossa sociedade, isso jamais vai acabar!
			`);
			pressEnter();
			console.log(`
\nSeguro as mãos de ${personagensSecundarios[2]} e olho dentro de seus olhos:
\nEl${eas(2)} ainda soluça de seu choro e seco suas lágrimas com meus dedos
\n que estão entrelaçados com os seus
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Por isso precisamos de pessoas como você ${personagensSecundarios[2]}
\n	Pessoas com bom coração, que intruem, ensinam e transformam pensamentos
			`);
			pressEnter();
			console.log(`
\n	Até pouco tempo atrás eu também não era empátic${oap()} com certas coisas
\n	Mas você me mostrou que eu não precisava de ser assim...
			`);
			pressEnter();
			console.log(`
\n	Você me mostrou que eu posso mudar, e se eu posso mudar
\n	 qualquer pessoa pode também!
			`);
			pressEnter();
			console.log(`
\nOs olhos de ${personagensSecundarios[2]} brilham e el${eas(2)} abre um largo sorriso
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Eu sabia que você era perfeit${oas(2)} senpai (*o*)__diz me abraçando apertado
\n	Olha... a chuva parece que acabou! Vou te acompanhar até em casa, pode ser?
			`);
			pressEnter();
			console.log(`
\nO tempo ainda estava nublado, mas a chuva parece ter acabado...
\n${personagensSecundarios[2]} parece melhor depois de nossa conversa
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Humpf... ainda bem que você escolheu voltar para casa comigo senpai...
\n	Se não viesse você iria se arrepender!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ih ala! Tod${oas(2)} se achando kkkkkkk
\n	E você ia fazer o quê?
\n	Me chamar de Baka e botar meu nome no death note? kkkkkkkkkkkkkkkkkkkk
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Huuum! ('¬_¬) Baka
			`);
			pressEnter();
			console.log(`
\nChegamos à porta de minha casa com poucos minutos
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Hey Senpai
\n	Anata no koto ga suki desu
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Lá vem você de novo com suas expressões em japonês
\n	O que você disse ai agora??
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	hihihi, nada demais... Só que quero te ver novamente na escola
\n	Fica bem Senpai, tchaaau (*-*´)
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} segue andando o sentido da rua
\nAcho que fiz uma boa escolha em ter voltado com ${personagensSecundarios[2]}
			`);
			pressEnter();
		} else if (dia === 2) {
			console.clear();
			console.log(`
\nEssa manhã resolvi me exercitar um pouco
\nVim até a avenida principal do bairro para fazer uma corrida
\n e dei uma passada na academia pública na praça 
			`);
			pressEnter();
			console.log(`
\nChamamos aqui de academia pública mas são só alguns equipamentos aeróbicos
\n que foram instalados no meio da praça pela prefeitura
			`);
			pressEnter();
			console.log(`
\nMesmo assim é interessante... 
\nTem algumas barras para flexão e outras coisas para se exercitar
			`);
			pressEnter();
			console.log(`
\nAssim que cheguei, percebi ${personagensSecundarios[2]} do outro lado da praça
\n com um grupo de amigos
\nVou fazer algumas abdominais e ir lá cumprimentá-l${oas(2)}
			`);
			pressEnter();
			console.log(`
\n		__voz alta ao fundo 
\n	DEIXA EL${eas(2).toUpperCase()} EM PAZ PODE SER?
\nImediatamente paro o que estou fazendo e olho para a direção da voz
			`);
			pressEnter();
			console.log(`
\nUm grupo de rapazes, aparentemente uns 15 anos
\n parece estar importunando a turma de ${personagensSecundarios[2]}
			`);
			pressEnter();
			console.log(`
\nVou até lá para intervir...
			`);
			pressEnter();
			console.log(`
\nAo me aproximar deles, percebo ${personagensSecundarios[2]} chorando em desespero
\n e parece que el${eas(2)} está tremendo
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	HEY, O QUE ESTÁ ACONTECENDO AQUI?
			`);
			pressEnter();
			console.log(`
\n 		[estranho]
\n	Ih menin${oap()}, tem ninguém te chamando aqui não!
			`);
			pressEnter();
			console.log(`
\nEu não luto absolutamente NADA
\n mas gosto de fazer minhas atividades com uma faixa de boxeador nas mãos
			`);
			pressEnter();
			console.log(`
\nAcho que dá um estilo à mais
\nEntão aproveito o visual e "armo" uma guarda de boxe
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Olha, eu estou falando sério! NÃO ME PROVOCA!
\n	O que está acontecendo aqui?__pergunto para um menino otaku
			`);
			pressEnter();
			console.log(`
\n		[estranho]
\n	Não tá acontecendo absolutamente NADA moç${oap()}, continua seus exercícios pra lá!
\n diz atropelando o amigo de ${personagensSecundarios[2]}
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Olha aqui, vou te falar uma vez só!
\n	Segue o caminho de vocês e deixa esse pessoal aqui em paz
\n	Faz isso e eu não machuco ninguém, pode ser?
			`);
			pressEnter();
			console.log(`
\nAcho que a minha confiança fez algum efeito
\nMuito provavelmente, se essa conversa não colasse, eu iria apanhar bastante
\nJá que eles são 3 e eu estou praticamente sozinh${oap()}
			`);
			pressEnter();
			console.log(`
\n		[estranho]
\n	Aí, a gente não quer confusão com ninguém pode ser?__diz olhando para os outros
\n	Vamo embora galera, depois a gente conversa mais com ${oas(2)} Lulu!
			`);
			pressEnter();
			console.log(`
\nO grupo se afasta e ${personagensSecundarios[2]} me abraça enquanto chora
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Senpai ('*-*) você me salvou!!! Muito obrigad${oas(2)} mesmo!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Vamos ali comprar algo para beber e você tenta se acalmar, pode ser?
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Tá bom!
			`);
			pressEnter();
			console.log(`
\nEnquanto caminhamos até a sorveteria pergunto...
\n		${personagemPrincipal.nome} 
\n	Aqueles não se parecem com os mesmos da escola que te importunaram outro dia
\n	Está acontecendo alguma coisa?
			`);
			pressEnter();
			console.log(`
\n	Pode me falar! Eu prometo que vou fazer o possível para ajudar...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	É sobre aquilo que eu te disse outro dia...
\n	As pessoas implicam com aqueles que são diferentes
			`);
			pressEnter();
			console.log(`
\n\n	Acho que no fundo, quem não entende, tem medo...
\n	E quando as pessoas tem medo de algo, elas atacam!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Poxa, mas você não pode levar isso para a maioria. O mundo está mudando!
\n	Cada dia mais estamos vencendo o preconceito em diversas áreas
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Sim... Concordo... Mas não podemos esquecer que essa minoria que não mudou ainda
\n	Tem um potencial REAL de transformar o dia de alguém em um inferno...
			`);
			pressEnter();
			console.log(`
\n	A maioria das pessoas que possuem armas, por exemplo, não matam... 
\n	Mas a pequena parcela de pessoas que matam, fazem muita diferença!
			`);
			pressEnter();
			console.log(`
\n	Não podemos pensar dessa maneira, tipo:
\n	 'Ah... mas é só uma minoria...' por quê uma minoria consegue fazer um estrago!
			`);
			pressEnter();
			console.log(`
\n	Enquanto todos nós não nos unir-mos...
\n	O preconceito ainda será algo vivo em nossa sociedade!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ah... Mas não é para tanto ${personagensSecundarios[2]}... Essa questão de tribo urbana 
\n	 meio que não existe na fase adulta...
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} olha para mim meio sem entender...
\n		${personagensSecundarios[2]}
\n	O senpai está falando sério mesmo? Achei que já sabia ${personagemPrincipal.nome}-senpai ('O.O)
			`);
			pressEnter();
			console.log(`
\nAgora percebo que realmente não parece ser o fato de ${personagensSecundarios[2]} ser otaku
\n que lhe faz passar por essas situações...
			`);
			pressEnter();
			console.log(`
\nAs pessoas realmente são muito hostís ao falar com el${eas(2)}
\n e não ${oas(2)} vejo andar pela escola no intervalo... 
			`);
			pressEnter();
			console.log(`
\nSempre que passo por el${eas(2)} está com um pequeno grupo ou lendo um mangá sozinh${oas(2)}...
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Mas... Sabia o quê exatamente? Acho que não sei sobre o que você está falando ${personagensSecundarios[2]}
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Ah, eu não sei bem se este é o melhor momento para eu te falar sobre isso senpai
\n	Não quero que mude seu jeito comigo!
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, deixa disso! Eu jamais deixaria de falar com você por qualquer motivo bobo desse...
\n	Eu gosto de você pelo que você é! Eu te conheço bem... Você é minha amiga, oras...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	Não ${personagemPrincipal.nome}-senpai, você não me conhece.
\n	E se não percebeu isso até agora, pelo jeito nem me notou...
\n	Talvez seja por quê tenha se aproximou de mim e me achou uma boa pessoa
\n	 e sem perceber ignorou algo que à todo momento te dei sinais...
			`);
			pressEnter();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Ainda não faz muito sentido para mim o que você está me dizendo ${personagensSecundarios[2]}
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[2]}
\n	É que... Eu nem sempre fui ${personagensSecundarios[2]}
\n	Não é bem isso... é que assim... 
			`);
			pressEnter();
			console.log(`
\n${personagensSecundarios[2]} olha para o chão e toca as pontas de seus dedos
\n	Quando eu nasci, me chamaram de ${lulu(personagensSecundarios[2])}, mas eu jamais fui ${lulu(personagensSecundarios[2])}
\n	Eu sempre fui ${personagensSecundarios[2]}!
			`);
			pressEnter();
			console.log(`
\n	Mas durante muitos anos 
			`);
			pressEnter();
			console.log(`
\n	 só ${lulu(personagensSecundarios[2])} ganhou roupas
\n	 só ${lulu(personagensSecundarios[2])} ganhou brinquedos
\n	 só ${lulu(personagensSecundarios[2])} recebeu amor!
			`);
			pressEnter();
			console.log(`
\n	Eu jamais consegui ser eu mesm${oas(2)}
			`);
			pressEnter();
			console.log(`
\n	Pois ninguém amava ${personagensSecundarios[2]}, só ${lulu(personagensSecundarios[2])}.
			`);
			pressEnter();
			console.log(`
\n	Por muito tempo não me reconheci, me sentia pres${oas(2)} em uma jaula
\n	E tenho que me limitar muito para não perder pessoas importantes para mim...
			`);
			pressEnter();
			console.log(`
\n	Como você por exemplo ('~_~)
			`);
			pressEnter();
			do {
				console.clear();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Eu não queria ter falado isso com você ${personagemPrincipal.nome}-senpai
\n	Agora ${oap()} Senpai vai mudar seu jeito comigo?
				`);
				console.log(`
\n		[s] para afastar de ${personagensSecundarios[2]}\n		[n] para manter a amizade\n
				`);
				pergunta = prompt(`		[s] ou [n]`).toLowerCase();
				if (pergunta != 's' && pergunta != 'n') {
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`);
				};
			} while (pergunta != 's' && pergunta != 'n');
			console.clear();
			if (pergunta === 'n') {
				personagemPrincipal.p2++;
				personagensSecundariosPts[2]++;
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Claro que não vou mudar com você por causa disso kkkkk
			`);
				pressEnter();
				console.log(`
\n	Por quê eu mudaria?
\n	O importante para mim é quem você é... E não um detalhe bobo como esse ${personagensSecundarios[2]}
			`);
				pressEnter();
				console.log(`
\nOs olhos de ${personagensSecundarios[2]} se enchem de alegria e el${eas(2)} me agarra em um abraço
\n		${personagensSecundarios[2]}
\n	${personagemPrincipal.nome}-senpai... Eu sabia que podia confiar em você desde o momento que te vi
			`);
				pressEnter();
				console.log(`
\n	Você ainda precisa aprender a lidar com muitas coisas... É muito radical ainda hihihi (^-^´)
\n	Mas seu coração é enorme e o mundo precisa de pessoas como você!
			`);
				pressEnter();
				console.log(`
\nEntramos na sorveteria e compramos um refrigerante de 2litros para dividir com o pessoal
\nEu preciso tomar alguma coisa doce
\n toda essa situação com aqueles estranhos me desgastou um pouco
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} e eu voltamos para o grupo e el${eas(2)} parece estar radiante
\n		${personagensSecundarios[2]}
\n	Ai gente, vocês viram como ${oas(2)} senpai me defendeu? <3 <3 <3 <3 Tô apaixonadinh${oas(2)} agora (^.^´)
			`);
				pressEnter();
				console.log(`
\nFicamos na praça até a hora do almoço conversando sobre alguns animes e JPop
\nInclusive a Miyuki me recomendou um anime chamado Mahouka Koukou No Rettousei: Raihousha-hen
\nAssistirei quando tiver tempo!
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\nSenpai, acho que tenho que ir embora agora... Tenho um seminário com o pessoal do intercâmbio
\nAcho que vou conseguir minha vaga para a moradia mais cedo do que eu pensava
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Nossa ${personagensSecundarios[2]} que notícia maravilhosa!
\n	Então você não deve se atrasar!
			`);
				pressEnter();
				console.log(`
\nVou com ${personagensSecundarios[2]} até um ponto médio entre nossas casas
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	${personagemPrincipal.nome}-senpai... ('*-*) Muito obrigad${oas(2)} por hoje viu!
\n	Você evoluiu bastante desde que te conheci!
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ah, o que é isso ${personagensSecundarios[2]}... Você é especial para mim! 
\n	Sempre irei te apoiar! Não importa o que aconteça
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} tampa o rosto com as mãos
\n		${personagensSecundarios[2]}
\n	Aaaaaah senpaaaaai, não fala assim!
			`);
				pressEnter();
				console.log(`
\n	Anata to ohanashi ga deki ureshikattadesu
\n	Watashi wa anata no koto ga suki desu
			`);
				pressEnter();
				console.log(`
\nE após essas palavras el${eas(2)} dispara em direção sua casa
\nNão compreendi essas ultimas palavras (como sempre), mas acho que tinham um bom significado
			`);
				pressEnter();
				console.log(`
\nHoje foi uma manhã muito satisfatória... O que será que o futuro me reserva?
			`);
			} else {
				personagemPrincipal.p2++;
				console.log();
				console.log(`
\nMe sinto extremamente incomodado com essa descoberta!
			`);
				pressEnter();
				console.log(`
\nComo não percebi que ${personagensSecundarios[2]} é trans?
\nPessoa trans? Transvestido? Não sei nem como se fala
			`);
				pressEnter();
				console.log(`
\nTalvez o contato com... ela ou ele, seja lá como se expressa, não seja saudável para mim
			`);
				pressEnter();
				console.log(`
\nMesmo que seja a mesma pessoa que eu conheci à dois meses
\n quem eu conheci foi ${personagensSecundarios[2]}, e não ${lulu(personagensSecundarios[2])}
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	E então ${personagemPrincipal.nome}-senpai? Você me aceita da forma que sou? (^.^´)
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Olha ${personagensSecundarios[2]}__falo em um tom mais terno__ Isso não é bem assim... 
\n	 tão fácil de entender...
			`);
				pressEnter();
				console.log(`
\nA expressão de ${personagensSecundarios[2]} começa a mudar... e parece que vai chorar
\n		${personagensSecundarios[2]}
\n	Não é bem assim? O quê não é bem assim? Eu sou menin${oas(2)} e ponto final
			`);
				pressEnter();
				console.log(`
\n	Você não conseguiu aprender nada que eu te ensinei nesses dois meses, não é mesmo???
\n	Não aprendeu a lidar com os preconceitos, e continua sendo uma PORTA como você é!
			`);
				pressEnter();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Não é isso que eu quis dizer, só que eu pensei que você é menin${oas(2)} e você não é...
\n	Me senti traído por isso...
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Traído com o QUÊ?? O QUE MUDOU PARA VOCÊ ${personagemPrincipal.nome.toUpperCase()}??????
			`);
				pressEnter();
				console.log(`
\n	SOU EU ${personagensSecundarios[2].toUpperCase()}
\n	 ${oas(2)} amig${oas(2)} que você fez na escada do pátio da escola!
			`);
				pressEnter();
				console.log(`
\n	Que voltou para casa com você na chuva!
\n	O quê é tão dificil de entender?
			`);
				pressEnter();
				console.log(`
\n	Ou será que você NÃO QUER entender??? Por quê isso sim é algo diferente...
\n	${personagemPrincipal.nome}... A única coisa que você precisa entender é:
			`);
				pressEnter();
				console.log(`
\n	Eu sou menin${oas(2)}, e me relaciono com uma pessoa do sexo OPOSTO que o meu!
			`);
				pressEnter();
				console.log(`
\n	O que eu era antes, quando me chamavam de ${lulu(personagensSecundarios[2])}
\n	 era EU da mesma forma...
			`);
				pressEnter();
				console.log(`
\n  e só não estava vestindo roupas que eu gostava, ganhando brinquedos que eu gostaria de ganhar
\n	sendo tratad${oas(2)} da forma que eu gostaria que me tratassem...
			`);
				pressEnter();
				console.log(`
\n	Eu sofri senpai... e sofri sozinh${oas(2)}
			`);
				pressEnter();
				console.log(`
\n	E só agora, graças aos meus verdadeiros amigos, que me apoiaram e me deram força
\n	Que consegui estar no corpo que me pertence.
			`);
				pressEnter();
				console.log(`
\n${personagensSecundarios[2]} vira as costas para mim e começa a caminhar
			`);
				pressEnter();
				console.log(`
\n		${personagensSecundarios[2]}
\n	Senpai... hayaku ie ni modori tai no
\n	Acho melhor não nos falarmos mais...
			`);
				pressEnter();
				console.log(`
\nEl${eas(2)} volta para seu grupinho de amigos
\nAcredito que não nos veremos novamente
			`);
			};
			pressEnter();
		};
	};
};
// Cenas dos Personagens - end