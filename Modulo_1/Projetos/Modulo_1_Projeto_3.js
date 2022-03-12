const prompt = require('prompt-sync')();

let personagemPrincipal = {};
let dinheiro = 0;
let disposicao = 100;

let op_id = ['homem', 'mulher'];
let op_os = ['he', 'ho', 'bi'];

let horario = ['Alvorada', 'Manhã', 'Tarde', 'Noite', 'hora de dormir'];

let ds = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let ma = ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//Pronomes de sujeito
function oas(i) {
	if (garotas.includes(personagensSecundarios[i])) {
		return 'a';
	} else if (garotos.includes(personagensSecundarios[i])) {
		return 'o';
	};
};

function eas(i) {
	if (garotas.includes(personagensSecundarios[i])) {
		return 'a';
	} else if (garotos.includes(personagensSecundarios[i])) {
		return 'e';
	};
};
function oap() {
	if (personagemPrincipal.identidadeGenero===1) {
		return 'a';
	} else if (personagemPrincipal.identidadeGenero===0) {
		return 'o';
	};
};

function eap() {
	if (personagemPrincipal.identidadeGenero===1) {
		return 'a';
	} else if (personagemPrincipal.identidadeGenero===1) {
		return 'e';
	};
};
//Pronomes de sujeito - end

let garotas = ['Nivea', 'Sophia', 'Rosa', 'Alice', 'Ludmila', 'Rebecca', 'Monica'];
let garotos = ['Frederico', 'Davi', 'Otavio', 'Marcelo', 'Ricardo', 'Otto', 'Alexandre'];
let garotxs = ['Nivea', 'Sophia', 'Otavio', 'Alice', 'Ludmila', 'Otto', 'Alexandre'];
let personagensSecundarios = [];

function hist1() {	
	//Primeira parte da historia
	let h100000 = `Hoje é dia 01 de Agosto de 2021`;
	let h100001 = `As férias de julho acabaram, você acaba de voltar do sítio dos seus avós onde eles fizeram uma grande festa para o seu aniversário!`;
	let h100002 = `Você acaba de completar 18 anos, e está terminando o Ensino médio.`;
	let h100003 = `Você arruma as coisas para voltar às aulas... Contra sua vontade, como sempre...`;
	let h100004 = `Já que você jamais foi o primeiro da turma, mas também nunca ficou para trás!`;
	let h100005 = `Este semestre você decidiu que fará diferente, e estes últimos meses serem inesquecíveis`;

	//História para js
	console.log();
	console.log(h100000);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(h100001);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(h100002);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(h100003);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(h100004);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(h100005);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();

	do {
		console.log();
		personagemPrincipal.nome = prompt('Primeiro me dia qual seu nome? ');
		console.clear();
	} while (personagemPrincipal.nome === "");
		
	while (personagemPrincipal.identidadeGenero != 0 && personagemPrincipal.identidadeGenero != 1) {
		console.log();
		var ask_ig = prompt('Você é um Rapaz[r] ou uma Moça[m]?');
		if (ask_ig.toLowerCase() == 'r') {
			personagemPrincipal.identidadeGenero = 0;
		} else if (ask_ig.toLowerCase() == 'm') {
			personagemPrincipal.identidadeGenero = 1;
		} else {
			console.clear();
			let ask_ig_e = 'Voce precisa responder [r] ou [s]';
			console.log(ask_ig_e);
		}
	}
	console.clear();
	while (personagemPrincipal.orientacaoSexual != 0 && personagemPrincipal.orientacaoSexual != 1 && personagemPrincipal.orientacaoSexual != 2) {
		console.log();
		var ask_os = prompt('E você é Hetero[h], Gay[g] ou Bi[b]?');
		if (ask_os.toLowerCase() == 'h') {
			personagemPrincipal.orientacaoSexual = 0;
		} else if (ask_os.toLowerCase() == 'g') {
			personagemPrincipal.orientacaoSexual = 1;
		} else if (ask_os.toLowerCase() == 'b') {
			personagemPrincipal.orientacaoSexual = 2;
		} else {
			console.log();
			let ask_os_r = 'Voce precisa responder [r] ou [s]';
			console.log(ask_os_r);
		}
	}
	console.clear();

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
		beleza: 14,
		conhecimento: 30,
		popularidade: 14,
		artes: 15,
		atributosFisicos: 5,
		sorte: 18,
	};
	let esportista = {
		beleza: 15,
		conhecimento: 10,
		popularidade: 13,
		artes: 15,
		atributosFisicos: 30,
		sorte: 25,
	};
	let artista = {
		beleza: 18,
		conhecimento: 18,
		popularidade: 20,
		artes: 35,
		atributosFisicos: 3,
		sorte: 15,
	};
	let faztudo = {
		beleza: 15,
		conhecimento: 17,
		popularidade: 14,
		artes: 15,
		atributosFisicos: 25,
		sorte: 30,
	};

	console.log();
	let h100006 = `Agora nos diga com qual desses tipos você assemelha?`;
	let ask_tp = "";
	while (ask_tp != 'n' && ask_tp != 'i' && ask_tp != 'e' && ask_tp != 'a' && ask_tp != 'f') {
		console.log(h100006);
		console.log();
		console.log(`Normal[n] Inteligente[i] Esportista[e] Artista[a] Faz-Tudo[f]`);
		console.log();
		ask_tp = prompt('Escolha seu tipo: ').toLowerCase();
		console.clear();
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
	return 	personagemPrincipal;

}

function histF() {
	console.clear();
	let hf001 = `Fim do ano letivo`;
	let hf002 = `Agora é hora de decidir o seu futuro`;
	let hf003 = `As aulas terminaram e você começará a se preparar para entrar na faculdade`
		let hf004 = `Mas antes, você precisa se decidir se deseja continuar solteiro, ou se vai namorar alguém.`;
	console.log();
	console.log(hf001);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(hf002);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(hf003);
	console.log();
	prompt('pressione ENTER para continuar');
	console.clear();
	console.log();
	console.log(hf004);
	console.log();
	let hf005 = '';
	do {
		hf005 = prompt('pressione N para escolher um parceiro ou S para continuar solteiro ').toLowerCase();
		console.log();
	} while (hf005 != 's' && hf005 != 'n');
	console.clear();
	if (hf005.toLowerCase() === 'n') {
		let namor = "";
		do {
			console.clear();
			console.log(`Quem você deseja pedir em namoro?`);
			console.log(personagensSecundarios[0], personagensSecundarios[1], personagensSecundarios[2], personagensSecundarios[3], personagensSecundarios[4], personagensSecundarios[5], personagensSecundarios[6]);
			namor = prompt('escolha: ').toLowerCase();
			namor = namor[0].toUpperCase() + namor.substr(1);
		} while ((personagensSecundarios.includes(namor)) === false)
		console.clear();
		console.log(personagemPrincipal.nome);
		console.log();
		console.log(`Você decidiu namorar ${namor}`);
		namorar(namor);
	} else {
		console.clear();
		console.log();
		console.log();
		console.log(`
Você percebe que a vida em casal será um peso...\n
Estar solteiro não é um sinal de infelicidade,\n
é sinal de LIBERDADE e AUTONOMIA para fazer o que quiser em sua própria companhia.
		`);
		console.log();
		console.log(`
Para você, relacionamentos são como pesca esportiva...\n
Você joga a vara na água, pega o peixe que quer\n
e no fim, devolve para o mar!\n
Você sabe que é jovem e tem um longo caminho pela frente,\n
e nesse caminho vários vinhos irão aparecer\n
e você deseja provar de todos.
		`);
		console.log();
		console.log(`
Você tem outras coisas em mente e ter alguém ao lado pode ser inconveniente\n
Já que descobrir o mundo é o que você deseja...\n
E também,\n
Estar solteiro não significa necessáriamente estar disponível.\n
As vezes é necessário colocar uma placa de "NÃO PERTURBE" no coração.\n
\n
Agora foco no futuro, e aproveite todas as oportunidades que surgirem
		`);
		console.log();
	}
}

function namorar(namor) {;
	// Carrancuda e puta da cara 	[0] sem requisito mínimo para namorar [devagar]
	// Fofinha doce e meiga 		[1] todos > 50
	// Heterotop esportista 		[2] Atributos Fisicos > 100
	// Tímida introvertida 			[3] Artes > 100
	// Fofoqueira e barraqueira 	[4] Beleza > 100
	// CDF linda e arrogante		[5] conhecimento > 100
	// Safada gostosa				[6] popularidade > 100


	// ${ao(i)}
	// ${ae(i)}

	if (namor === personagensSecundarios[0]) {
		console.log();
		console.log(`
O jeito Agressivo e imperativo de ${personagensSecundarios[0]} te fascina, e você decide se declarar.\n
Após falar sobre seu amor, ${personagensSecundarios[0]} te encara de uma forma estranha...\n
Pelo olhar de ${personagensSecundarios[0]} você teme receber um SOCO, mas você logo percebe seus olhos enchendo de lágrimas\n
${personagensSecundarios[0]}, em prantos, te diz o quão feliz ficou com esta notícia, e que o sentimento é recíproco!\n
Com muita alegria, ${personagensSecundarios[0]} grita: \n
\n
	"SIIIIIIIIIIIIIIIIIIIIIIM VEELHOOOO, AAAAAAAAAAA QUE ÓÓÓÓÓÓDIOOOOOOOO, \n
	VOCÊ É TÃO DEVAGAR VEY! DESDE OS 6 ANOS EU ESPERO POR ESSE MOMENTO! <3 <3 <3"
	`);
		console.log();
		console.log(`
Vocês decidem contar aos amigos, sobre a decisão de vocês,\n
\n
E a reação deles é basicamente um únissono\n
	"aaaaawwwnnnnnnn <3 <3".\n
\n
Uma vez que todos já sabiam sobre os de ${personagensSecundarios[0]} e somente você não tinha percebido.
	`);
		console.log();
		console.log(`
O namoro de vocês se resume em assistir animes e filmes de terror todos os dias na casa de ${personagensSecundarios[0]}\n 
vocês se tornam um lindo casal de comercial de margarina.\n
voce ensina ${personagensSecundarios[0]} a ser um pouco mais doce e\n
${personagensSecundarios[0]} te ensina como quebrar a cara de alguém!\n
\n
Vocês se completam e vocês sabem disso!
`);
	} else if (namor === personagensSecundarios[1]) {
		console.log(personagemPrincipal.nome);
		console.log();
		console.log(`
Do outro lado da rua da escola, conversando com seus amigos,\n 
Você observa ${personagensSecundarios[1]} sentad${oas(1)} embaixo da árvore.\n
${personagensSecundarios[1]} é meig${oas(1)}, ${personagensSecundarios[1]} é doce, ${personagensSecundarios[1]} é carinhos${oas(1)}...\n
Você sempre viu isso, mas nunca percebeu o quanto isso te fazia bem!\n
\n
Você decide então ir até el${eas(1)}.\n
El${eas(1)} também estava te observando, com aquele jeito tímido e despistado de sempre... \n
Mas abre um lindo sorriso quando vê que você vinha em sua direção.\n
Você se aproxima de ${personagensSecundarios[1]}, envolve el${eas(1)} em seus braços, e cochicha em seu ouvido:\n
	Amig${oas(1)}, posso te perguntar uma coisa?\n
Você sente ${personagensSecundarios[1]} arrepiar e enrubrecer, que te responde:\n
	Claro meu anjo, pode me dizer o que quiser sempre que quiser...\n
E nesse momento, você pergunta à ${personagensSecundarios[1]} se el${eas(1)} deseja namorar com você.
		`);
		let testf1 = (	personagemPrincipal.beleza >= 50 &&	personagemPrincipal.conhecimento >= 50 &&	personagemPrincipal.popularidade >= 50 &&	personagemPrincipal.artes >= 50 &&	personagemPrincipal.atributosFisicos >= 50);
		if(testf1){
			console.log('teste true')
		}else{
			console.log();
			console.log(`
${personagensSecundarios[1]} te olha estupefat${oas(1)} e se afasta com você com um pulo\n
	Você está lélé da cuca ${personagemPrincipal.nome}?????????? - ${personagensSecundarios[1]} te diz -\n
Você se sente um pouco envergonh${oap(1)} e ${personagensSecundarios[1]} percebe isso...\n
\n
${personagensSecundarios[1]} olha para você carinhosamente, te abraça e cochicha:\n
	${personagemPrincipal.nome}, eu também te amo... Mas como um amig${oap()}!\n
		`);
		console.log(`
Vocês se abraçam e decidem manter a amizade para toda a vida.\n
Pessoalmente, você está chateado... Mas algo dentro de você já esperava essa resposta...\n
\n
Você tem outras coisas em mente e ter alguém ao lado pode ser inconveniente\n
Já que descobrir o mundo é o que você deseja...\n
E também,\n
Estar solteiro não significa necessáriamente estar disponível.\n
As vezes é necessário colocar uma placa de "NÃO PERTURBE" no coração.\n
\n
Agora foco no futuro, e aproveite todas as oportunidades que surgirem
		`);
		}
	} else if (namor === personagensSecundarios[2]) {
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);

	} else if (namor === personagensSecundarios[3]) {
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);

	} else if (namor === personagensSecundarios[4]) {
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);

	} else if (namor === personagensSecundarios[5]) {
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);

	} else if (namor === personagensSecundarios[6]) {
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);
		console.log();
		console.log(`

		`);

	};

};

function tempo() {
	let hoje = 1;
	let m31 = 1;
	for (let m = 0; m < ma.length; m++) {
		m31++;
		loopmes: for (let s = 0; s < 5; s++) {
			console.log();
			for (let d = 0; d < ds.length; d++) {
				let data = ` Dia ${hoje} de ${ma[m]} de 2021 - ${ds[d]}`;
					hoje++;
					//	Aqui vao entrar as atividades diárias
					diario(data);
				//
				if (m === 4 && hoje === 18) {
					break loopmes;
				} else if (m31 % 2 === 0) {
					if (hoje === 32) {
						hoje = 1;
						break loopmes;
					};
				} else {
					if (hoje === 31) {
						hoje = 1;
						break loopmes;
					};
				};
			};
		};
	};
};

// Quando bater 140pts vai aparecer um Deus
// Quando bater 100pts vai conquistar a pessoa daquele interesse


function diario(data) {
	console.clear();
	console.log(` Areas de conhecimento:\nBeleza: ${personagemPrincipal.beleza}\nConhecimento: ${personagemPrincipal.conhecimento}\nPopularidade: ${personagemPrincipal.popularidade}\nArtes: ${personagemPrincipal.artes}\nAtributos Físicos: ${personagemPrincipal.atributosFisicos}\nSorte: ${personagemPrincipal.sorte}\n`);
	console.log(` DISPOSIÇÃO: ${disposicao}`);
	console.log();
	console.log(`Hoje é ${data}`);
	console.log();
	if (disposicao > 5) {
		irParaAEscola();
	} else {
		descansar();
	}
	console.log();
	console.log(`Fim do dia`);
	console.log();
	prompt('digite ENTER para continuar');
}

function irParaAEscola() {
	console.log(`Você foi para a escola!`)
	personagemPrincipal.beleza++;
	personagemPrincipal.conhecimento++;
	personagemPrincipal.popularidade++;
	personagemPrincipal.artes++;
	personagemPrincipal.atributosFisicos++;
	disposicao--;
}

function descansar() {
	console.log(`Você se sentiu exausto e resolveu parar para descansar!`);
	if (disposicao < 100) {
		disposicao += 10;
	} else if (disposicao > 100) {
		disposicao = 100;
	}
}

personagemPrincipal = hist1();
console.log(personagemPrincipal.nome)
// tempo();
histF();