//Modulo
	const prompt = require('prompt-sync')();

//Variaveis importantes
	let personagemPrincipal = {};
	let dinheiro = 0;
	let disposicao = 100;

	let op_id = ['homem', 'mulher'];
	let op_os = ['he', 'ho', 'bi'];

	let horario = ['Alvorada', 'Manhã', 'Tarde', 'Noite', 'hora de dormir'];
	let manhaA = '';
	let tardeA = '';
	let noiteA = '';

	let ds = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
	let ma = ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

	let garotas = ['Nivea', 'Sophia', 'Rosa', 'Alice', 'Ludmila', 'Rebecca', 'Monica'];
	let garotos = ['Frederico', 'Davi', 'Otavio', 'Marcelo', 'Ricardo', 'Alexandre', 'Otto'];
	let garotxs = ['Nivea', 'Sophia', 'Otavio', 'Alice', 'Ludmila', 'Alexandre', 'Otto'];
	let personagensSecundarios = [];
	let personagensSecundariospts = [0,0,0,0,0,0,0];
//Variaveis importantes - end

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

//PressEnterFunction
	function pressEnter(){ 
		console.log();
		prompt(`pressione ENTER para continuar`); 
		console.clear();
		console.log();
	};
//PressEnterFunction - end

//Inicio da História
	function hist1() {
	//Seleção de sexo do personagem
		while (personagemPrincipal.identidadeGenero != 0 && personagemPrincipal.identidadeGenero != 1) {
			console.log();
			var ask_ig = prompt('Você deseja ser um Rapaz[r] ou uma Moça[m]? ');
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
			var ask_os = prompt(`E você é Hetero[h], Gay[g] ou Bissexual[b]? `);
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
		let h100006 = `\nAgora nos diga com qual desses tipos você deseja ter?`;
		let ask_tp = "";
		while (ask_tp != 'n' && ask_tp != 'i' && ask_tp != 'e' && ask_tp != 'a' && ask_tp != 'f') {
			console.log(h100006);
			console.log();
			console.log(`Normal[n] Inteligente[i] Esportista[e] Artista[a] Faz-Tudo[f]`);
			console.log();
			ask_tp = prompt('Escolha seu tipo: ').toLowerCase();
			console.clear();
		};
		console.clear();
		//Primeira parte da historia
		prompt('pressione ENTER para iniciar')
		let h100000 = `Hoje é dia 01 de Agosto de 2021`;
		let h100001 = `As férias de julho acabaram e eu voltei do sítio dos seus avós onde eles fizeram uma grande festa para meu aniversário!`;
		let h100002 = `Acabo de completar 18 anos, e estou terminando o Ensino médio.`;
		let h100003 = `Vou começar a arruma as coisas para voltar às aulas... \n Contra minha vontade, como sempre...`;
		let h100004 = `Já que você jamais fui ${oap()} primeir${oap()} da turma, mas também nunca fiquei para trás!`;
		let h100005 = `Este semestre decidí fazer diferente\nvou encontrar uma forma de fazer estes últimos meses inesquecíveis`;

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
		console.log(`
	\nAgora vamos entender como acompanhar o dia:
	\nTodos os dias tenho que decidir o que vou fazer no meu dia...
	\n Caso eu vá fazer as mesmas coisas de ontem, basta dar um enter\n
		`)
		pressEnter();
		console.log();
		console.log();
		console.log(` Areas de STATUS:	
		\nBeleza: ${personagemPrincipal.beleza}
		\nConhecimento: ${personagemPrincipal.conhecimento}
		\nPopularidade: ${personagemPrincipal.popularidade}
		\nArtes: ${personagemPrincipal.artes}
		\nAtributos Físicos: ${personagemPrincipal.atributosFisicos}
		\nSorte: ${personagemPrincipal.sorte}\n`);
		console.log(` DISPOSIÇÃO: ${disposicao}`);
		console.log();

		return 	personagemPrincipal;

	}
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
//Inicio da História - end

// Escopo dos personagens
		// [0]
			/*
			sem requisito mínimo
			Cis
			Pard - Castanho acobreado - Na_altura_dos_ombros | cacheados|  - Olhos Castanhos folha	- magro 
			Comportamento - Passivo-Agressivo | Anti-escola/pró-sistema
			Personalidade - Carrancud e put da cara		 	
			Bordão::
				VOCÊ É TÃO DEVAGAR VEY!\n
			Conexões
			*/
		// [1]
			/*
			todos > 50 	
			Cis
			Branc -  Loir - Longos | lisos | alguns_Dreads - Olhos azuis - magr
			Comportamento - Tilelê | Exotéric | Anti-escola/Anti-sistema
			Personalidade - Fofinh doce e meig 				
			Bordão:
				você é ${oap()} maluc${oap()} mais maluc${oap()} de todos os maluc${oap()}s\n
			Conexões
			*/
		// [2] 
			/*
					Time de basquete regional
			Atributos Fisicos > 100
			Cis
			Negr - Pretos -  |crespo | detalhes_em_navalha - Olhos Verdes - Forte
			Comportamento - Topzero | Esportista | Pró-escola/Pró-sistema
			Personalidade - Extrovertid e engraçad
			Bordão:
				
			Conexões
			
			*/
		// [3]
			/*
			Artes > 100
			Cis
			Pard - Castanho escuro -  |cacheado|  - Olhos Castanhos - Atletico
			Comportamento - Tímid Otaku introvertid 		
			Personalidade - 
			Bordão:
				Anatano gasuki desu ${personagemPrincipal.nome} senpai <3
			Conexões
			
			*/
		// [4] 
			/*
			Popularidade > 100
			Trans
			Pard - Preto - Pintado de Azul - Olhos Castanhos Claros - Esbelt
			Comportamento - tiktoker	
			Personalidade - Fofoqueir e barraqueir 
			Bordão:
				
			Conexões
				
			*/
		// [5]
			/*
			Conhecimento > 100	
			Cis
			Branc - Ruiv - Olhos Verder - Magr
			Comportamento - CDF
			Personalidade - Orgulhos - Militante
			Bordão:
				
			Conexões
				
			*/
		// [6]
			/*
			Beleza > 100
			Cis
			Asiático - Preto - Olhos Pretos - Magro
			Comportamento -  e-girl/e-boy 
			Personalidade - Pervertid 
			Bordão:
				
			Conexões
				
			*/
// Escopo dos personagens - end

	// ${oap()}
	// ${eap()}
	// ${oas(i)}
	// ${eas(i)}



//fim da História
	function histF() {
		pressEnter();
		let hf001 = `Fim do ano letivo`;
		let hf002 = `Agora é hora de decidir o meu futuro`;
		let hf003 = `As aulas terminaram e vou começar preparar para entrar na faculdade`
			let hf004 = `Mas antes, preciso decidir se quero continuar solteiro, ou se vou começar um romance....`;
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
				console.log(personagensSecundarios[0], personagensSecundarios[1], personagensSecundarios[2], personagensSecundarios[3], personagensSecundarios[4], personagensSecundarios[5], personagensSecundarios[6]);
				namor = prompt('escolha: ').toLowerCase();
				namor = namor[0].toUpperCase() + namor.substr(1);
			} while ((personagensSecundarios.includes(namor)) === false)
			console.clear();
			namorar(namor);
		} else {
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
	Eu sei que sou jovem e tenho um longo caminho pela frente,\n
	e nesse caminho vários vinhos irão aparecer\n
	e eu desejo provar cada um deles...
			`);
			pressEnter();
			console.log(`
	Hoje, tenho aspirações e vontades que\n
	talvez...\n
	Ter alguém ao meu lado pode se tornar um inconveniente\n
	Já que descobrir o mundo é o que eu desejo...\n
	E também,\n
	Estar solteiro não significa necessáriamente estar disponível.\n
	As vezes é necessário colocar uma placa de "NÃO PERTURBE" no coração.\n
	\n
	Agora foco no futuro, e agarrar todas as oportunidades que surgirem
			`);
			pressEnter();
		}
	}
	function namorar(namor) {;
		if (namor === personagensSecundarios[0]) {
			console.log();
			pressEnter();
			console.log(`
	O jeito Agressivo e imperativo de ${personagensSecundarios[0]} me fascinam, e decido me declarar.\n
	Envio uma mensagem para el${eas(0)} e peço para el${eas(0)} me encontrar no Shopping Cidade\n
	Quando ${personagensSecundarios[0]} chega, vamos ao Burguer King e procuramos uma mesa vaga\n
		${personagemPrincipal.nome}\n
	Eu nem sei como eu falo isso sabe\n
	Eu sei que somos amigos à muitos anos, e que nossa amizade é valiosa...\n
	Mas eu só consigo ser feliz quando estou ao seu lado...\n\n
	Após falar sobre meu amor, ${personagensSecundarios[0]} me encara de uma forma estranha...\n
	Pelo olhar de ${personagensSecundarios[0]} estou com medo de receber um SOCO\n
	Mas parece que na verdade el${eas(1)} está em lágrimas...\n\n
	Com muita alegria, ${personagensSecundarios[0]} grita: \n
	\n
		${personagensSecundarios[0]}
	"SIIIIIIIIIIIIIIIIIIIIIIM VEELHOOOO, AAAAAAAAAAA QUE ÓÓÓÓÓÓDIOOOOOOOO, \n
	VOCÊ É TÃO DEVAGAR VEY! DESDE OS 6 ANOS EU ESPERO POR ESSE MOMENTO! <3 <3 <3"
		`);
			pressEnter();
			console.log(`
	Decidemos contar aos amigos, sobre a nossa decisão\n
	\n
	E a reação deles é basicamente um únissono\n
		"aaaaawwwnnnnnnn <3 <3".\n
	\n
	Parece que todos já sabiam sobre os sentimentos de ${personagensSecundarios[0]} ninguém me falou.
		`);
			pressEnter();
			console.log(`
	O nosso namoro resume em assistir animes e filmes de terror todos os dias na casa de ${personagensSecundarios[0]}\n 
	Meio que nos tornamos um lindo casal de comercial de margarina.\n
	Brincadeiras à parte...\n
	Ensinei ${personagensSecundarios[0]} a ser um pouco mais doce e\n
	${personagensSecundarios[0]} me ensinou como quebrar a cara de alguém!\n
	\n
	Nós nos completamos...\n
		E nós sabemos disso...
	`);
		} 
		else if (namor === personagensSecundarios[1]) {
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
	Você decido então ir até el${eas(1)}.\n
	El${eas(1)} também estava me observando, com aquele seu jeito tímido e despistado de sempre... \n
	Mas abre um lindo sorriso quando vê que vou em sua direção.\n
	Me aproximo de ${personagensSecundarios[1]}, envolvo ${oas(1)} em meus braços, e sussurro em seu ouvido\n
		${personagemPrincipal}\n
	Amig${oas(1)}, posso te perguntar uma coisa?\n\n
	Sinto a pele de ${personagensSecundarios[1]} arrepiar e vejo seu rosto enrubrecer\n
		${personagensSecundarios[1]}
	Claro meu anjo, pode me dizer o que quiser sempre que quiser...\n\n
		${personagemPrincipal.nome}
	${personagensSecundarios[1]} você deseja unir nossos espíritos pela ETERNIDADE?
			`);
			pressEnter();
			let testf1 = (	personagemPrincipal.beleza >= 50 &&	personagemPrincipal.conhecimento >= 50 &&	personagemPrincipal.popularidade >= 50 &&	personagemPrincipal.artes >= 50 &&	personagemPrincipal.atributosFisicos >= 50 );
			if(testf1){
				console.log();
				console.log(`
	${personagensSecundarios[1]} rompe em lágrimas, me abraça e me traz junto ao corpo, de uma maneira que sinto nossos espíritos se tocarem\n
	Aquela reação me deixa perplex${oas(1)} e você consego sentir meus olhos marejados.\n
	Sento que agora somo definitivamente um só.\n
				`);
				pressEnter();
				console.log(`
	Resolvemos comemorar visitando a Gruta de Maquiné, 120KM ao norte da cidade\n 
	Passamos o dia coletando pedrinhas e talhando um par de alianças, além de um par de colares e alguns filtros dos sonhos.\n
	À meia-noite, sob a luz da lua...\n
				`);
				pressEnter();
				console.log(`
	\n
		${personagensSecundarios[1]}\n
	${personagemPrincipal.nome}, eu te amo... você é ${oap()} maluc${oap()} mais maluc${oap()} de todos os maluc${oap()}s...\n
	mas você é ${oap()} MEU maluc${oap()}...\n
	\n
	Eu à abraço e colocamos as alianças um no outro\n
	E então nos deitamos observar as estrelas

		Sempre fomos um só, e o destino somente se encarregou de unír-nos.

				`);
				pressEnter();
			}
			else{
				console.log();
				console.log(`
	${personagensSecundarios[1]} me olha estupefat${oas(1)} e se afasta com um pulo\n
		${personagensSecundarios[1]}
	Você está lélé da cuca ${personagemPrincipal.nome}??????????\n
	Me sente um pouco envergonh${oap(1)} e ${personagensSecundarios[1]} percebe...\n
	\n
	${personagensSecundarios[1]} me olha carinhosamente, me abraça e diz\n
		${personagensSecundarios[1]}
	${personagemPrincipal.nome}, eu também te amo... Mas como um amig${oap()}!\n
			`);
			pressEnter();
			console.log(`
	Nós então nos abraçamos e decidemos manter a amizade para toda a vida.\n
	Pessoalmente, sstou chatead${oap()}... Mas algo dentro de mim já esperava essa resposta...\n
	\n
	Eu tenho outras coisas em mente e ter alguém ao lado pode ser inconveniente\n
	Já que descobrir o mundo é o que desejo...\n
	E também...\n
			`);
			pressEnter();
			console.log(`
	Estar solteiro não significa necessáriamente estar disponível.\n
	As vezes é necessário colocar uma placa de "NÃO PERTURBE" no coração.\n
	\n
	Agora é foco no futuro, e aproveitar todas as oportunidades que surgirem...
			`);
			}
		} 
		else if (namor === personagensSecundarios[2]) {
			console.log();
			pressEnter();
			console.log(`
	1 texto pedido de namoro personagem [2]
			`);
			pressEnter();
			console.log(`
	2 texto pedido de namoro personagem [2]
			`);
			pressEnter();
			let testf1 = (	personagemPrincipal.atributosFisicos >= 100 );
			if(testf1){
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [2] aceito
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [2] aceito
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [2] aceito
				`);
				pressEnter();
			}
			else{
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [2] negado
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [2] negado
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [2] negado
				`);
			}
		}
		else if (namor === personagensSecundarios[3]) {
			console.log();
			pressEnter();
			console.log(`
	1 texto pedido de namoro personagem [3]
			`);
			pressEnter();
			console.log(`
	2 texto pedido de namoro personagem [3]
			`);
			pressEnter();
			let testf1 = (	personagemPrincipal.artes >= 100 );
			if(testf1){
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [3] aceito
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [3] aceito
				`);
				pressEnter();
				console.log(`
	3  texto pedido de namoro personagem [3] aceito
				`);
				pressEnter();
			}
			else{
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [3] negado
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [3] negado
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [3] negado
				`);
			}
		}
		else if (namor === personagensSecundarios[4]) {
			console.log();
			pressEnter();
			console.log(`
	1 texto pedido de namoro personagem [4]
			`);
			pressEnter();
			console.log(`
	2 texto pedido de namoro personagem [4]
			`);
			pressEnter();
			let testf1 = (	personagemPrincipal.popularidade >= 100 );
			if(testf1){
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [4] aceito
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [4] aceito
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [4] aceito
				`);
				pressEnter();
			}
			else{
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [4] negado
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [4] negado
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [4] negado
				`);
			}
		}
		else if (namor === personagensSecundarios[5]) {
			console.log();
			pressEnter();
			console.log(`
	1 texto pedido de namoro personagem [5] 
			`);
			pressEnter();
			console.log(`
	2 texto pedido de namoro personagem [5] 
			`);
			pressEnter();
			let testf1 = (	 personagemPrincipal.conhecimento >= 100 );
			if(testf1){
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [5] aceito
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [5] aceito
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [5] aceito
				`);
				pressEnter();
			}
			else{
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [5] negado
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [5] negado
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [5] negado
				`);
			}
		}
		else if (namor === personagensSecundarios[6]) {
			console.log();
			pressEnter();
			console.log(`
	1 texto pedido de namoro personagem [6] 
			`);
			pressEnter();
			console.log(`
	2 texto pedido de namoro personagem [6] 
			`);
			pressEnter();
			let testf1 = (	personagemPrincipal.beleza >= 100 );
			if(testf1){
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [6] aceito
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [6] aceito
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [6] aceito
				`);
				pressEnter();
			}
			else{
				console.log();
				console.log(`
	1 texto pedido de namoro personagem [6] negado
				`);
				pressEnter();
				console.log(`
	2 texto pedido de namoro personagem [6] negado
				`);
				pressEnter();
				console.log(`
	3 texto pedido de namoro personagem [6] negado
				`);
			}
		};

	};
//fim da História - end

	// Quando bater 140pts vai aparecer um Deus

//Seleção de Rotina
	function diario(data) {
		console.clear();
		//Escolha da rotina
		console.log(`\nHoje é ${data}\n`);
		let oQueDesejaFazerDuranteODia = oQDFDOD();
		pressEnter();
		console.log('De manhã eu vou ', manha);
		console.log('De tarde eu vou ', tarde);
		console.log('E de noite eu vou ', noite);
		pressEnter()
		//Escolha da rotina - end
		console.log();
		if (disposicao > 5) {
			irParaAEscola();
		} else {
			descansar();
		}
		pressEnter()
		console.log(`Fim do dia`);
		console.log();
		pressEnter();
	}
//Seleção de Rotina - end

//Ações diárias
function oQDFDOD(){
			console.log(`Ações diárias:`);
			console.log();
			console.log(`Cuidar do visual`);
			console.log(`Descansar`);
			console.log(`Estudar`);
			console.log(`Sair pela cidade`);
			console.log(`Estudar sobre Artes e Culturas`);
			console.log(`Praticar exercícios Físicos`);
			console.log(`Pegar um Freela`);
			console.log();
			console.log(`MANHÃ		TARDE		NOITE`);
			console.log();
			manha = prompt(`De manhã eu vou `);
			while(manhaA===''){
				if(manha===''){manha = manhaA};
				manhaA = manha;
			}
			tarde = prompt(`De tarde eu vou `);
			while(tardeA===''){
				if(tarde===''){tarde = tardeA};
				tardeA = tarde;
			}
			noite = prompt(`De noite eu vou `);
			while(noiteA===''){
				if(noite===''){noite = noiteA};
				noiteA = noite;
			}
			return manhaA, tardeA, noiteA;
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
//Ações diárias - end

//Sequencia de execução
	personagemPrincipal = hist1();
	
	tempo();
	
	console.log(`${personagemPrincipal.nome}`)
	
	histF();
//Sequencia de execução





// Cenas dos Personagens:
// Personagem 0{

	// mes 1[
		 /*dia 1(
			console.clear();
			console.log();
			console.log(`
Que dia lindo para ir a escola... Fim do ensino médio, as mesmas caras dos ultimos anos, ninguém aguenta mais isso kkkkkkk\n 
Estamos no meio de uma pandemia e a escola resolve voltar às aulas presenciais\n 
Que tédio...
			`);
			pressEnter();
			do{
				console.clear();
				console.log();
				console.log(`
			**Barulho de alguém tropeçando e cadernos caindo**\n
Olho para trás e vê ${personagensSecundarios[0]} se recuperando e olhando para mim muito nervos${oas(0)}.\n
\n\n
		${personagensSecundarios[0]}\n
	_VAI FICAR SÓ ME OLHANDO OU VAI AJUDAR? - El${eas(0)} diz irritadíssim${oas(0)}\n
\n `);
				console.log();
				console.log(`Ajudar ${personagensSecundarios[0]} a se levantar?\n`);
				ajudar = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if(ajudar != 's' && ajudar != 'n'){
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			}while(ajudar != 's' && ajudar != 'n')
			console.clear();
			if(ajudar==='s'){
				console.log();
				console.log(`
Começo a rir na cara del${eas(0)} mas me prontifico para ajudar ${personagensSecundarios[0]} a se recompor\n\n
		${personagemPrincipal.nome}\n
	Vem... Já te falei para prestar atenção no caminho!\n
			`);
			personagensSecundariospts[0]++
			}else{
				console.log();
				console.log(`
		${personagemPrincipal.nome}\n
	Ah menin${oas(0)} oh! Você que dê seu jeito ai! Quem manda ser desajeitad${oas(0)} desse jeito?\n\n
Você pega o fichário del${eas(0)} e começa a folhear\n\n
		${personagensSecundarios[0]}\n
	JÁ TE DISSE PARA PARAR DE MEXER NAS MINHAS COISAS ${personagemPrincipal.nome}!!!!!\n\n
Você dá de ombros e continua folheando o caderno...
				`);
			}
			pressEnter();
			console.log(`
			${personagensSecundarios[0]}\n
	Tá animad${oap()} pro resto do ano kkkkkkk? Não aguento mais essa merda!\n
	Vamos entrar pra aula pq como sempre estamos atrasados, o sinal já vai bater!\n
			`);
			pressEnter();
			console.log(`
Desde a infância, vocês são como irmãos!\n
Você ${eas(0)} o quando vocês estavam na pré-escola, desde os 6 anos de idade\n
${personagensSecundarios[0]} é magr${oas(0)} e pard${oas(0)}\n
e na infância, el${eas(0)} era uma criança bem esquisitinha...\n\n
Mas hoje, com seus cabelos cacheados na altura dos ombros, e um rosto simétrico\n
Que inevitavelmente realçam seus olhos castanhos "folha-seca"\n
${personagensSecundarios[0]} se muito tornou atraente\n
Embora você jamais admitiria isso!\n\n
Você ainda vê ${personagensSecundarios[0]} como aquela criancinha desengonçada que brincava com você...
			`);
			pressEnter();
			console.log(`
		${personagensSecundarios[0]}\n
	Na hora do intervalo, se você não estiver ocupad${oap()}...\n
	Vem comigo na vendinha da rua de cima comprar um lanche?\n\n
		${personagemPrincipal.nome}\n
	Nossa... Nem sei se vou conseguir ir com você...\n
	Estou com as atividades do laboratório que tinha que ter feito nas férias todas atrasadas\n\n
		${personagensSecundarios[0]}\n
	Aff... Vc é tão devagar! Era só fazer o troço vey!\n
	Vou te mandar o meu relatório no whatsapp para você tirar de exemplo\n
	Copia mas não faz igual tá!
			`)
		 )
		/*

		/*dia 2(
			console.clear();
			console.log();
			console.log(`
Passeando pelo Shopping Cidade, você resolve se sentar em uma mesa na praça de alimentação para tomar um sorvete\n\n
Quando derrepente...
			`);
			pressEnter();
			console.log(`
			*** PLAU ***\n
Você sente como se o THOR te desse um tapa de duas mãos nos ombros\n
E quando olha para trás, assustad${oas(0)}, vê ${personagensSecundarios[0]} com olhar descarado\n
e um sorriso maroto\n\n
		${personagensSecundarios(0)}\n
	Ué, ta fazendo o que aqui menin${oap()}? Tem serviço não??? kkkkkkkk\n\n
		${personagemPrincipal.nome}\n
	AH Ó, não é da sua conta não! Vim encontrar uma pessoa!\n\n
		${personagensSecundarios(0)}\n
	Ah para! Pra cima de mim!!! Todo mundo sabe que vc não pega ninguém!\n\n
		${personagemPrincipal.nome}\n
	Ih! Vê se me erra!\n
	E você? Veio fazer o que?\n\n
		${personagensSecundarios(0)}\n
	kkkkkkkkkkkkkkkk A verdade doi né?!\n
	Eu vim com a Lily pra assistir Escape Room 2, mas ela é fraca e não aguenta um terrorzinho!\n
	Então vamos assitir Esquadrão Suicida...\n\n
		${personagemPrincipal.nome}\n
	Sai dessa vida vey, vai ver outras coisas! Você só assiste terror!\n
	Mó daora Esquadrão Suicida\n\n
		${personagensSecundarios[0]}\n
	O que eu posso fazer? Eu gosto é de emoção!\n
		\n${personagemPrincipal.nome}
	\nMas filme de herói tem emoção também!\n
		\n${personagensSecundarios[0]}
	\nAh, mas não é meu estilo...
			`);
			pressEnter();
			console.log(`
Então, ${personagensSecundarios[0]} acena para Lily na fila do Burguer King\n\n
		${personagensSecundarios[0]}\n
	Ih, Alá a Lily... Tinha me perdido dela quando fui no Super Mercado comprar Refrigerante e Doritos\n
	Hey, Você não quer vir assistir o filme com a gnt?
			`);
			cinema = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
			if(cinema != 's' && cinema != 'n'){
				prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
			}
			}while(cinema != 's' && cinema != 'n')
			console.clear();
			if(cinema==='s'){
			
			//cinema sim
				
			}else{
				console.log(`
		\n${personagemPrincipal.nome}
	\nIh alá, esse rolê tá mó com cara de date, nem rola ficar de vela kkkkkkkk\n
		\n${personagensSecundarios[0]}
	\nVocê que tá pegando viagem, nada a ver isso ai...
	\nEla é minha amiga, a gente se aproximou por causa de uns animes que a gnt assiste na aula de português...
	\nMas ta tudo bem, depois a gente se vê então\n
\n

				`);
				
			}

			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)*/
	// ]
/*	mes 2[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 3[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 4[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 5[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
}

Personagem 1{
	mes 1[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 2[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 3[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 4[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 5[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
}

Personagem 2{
	mes 1[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 2[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 3[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 4[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 5[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
}

Personagem 3{
	mes 1[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 2[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 3[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 4[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 5[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
}

Personagem 4{
	mes 1[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 2[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 3[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 4[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 5[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
}

Personagem 5{
	mes 1[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 2[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 3[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 4[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 5[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
}

Personagem 6{
	mes 1[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 2[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 3[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 4[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
	mes 5[
		dia 1(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
		dia 2(
			console.clear();
			console.log();
			console.log(`
				Texto 1
			`);
			pressEnter();
			console.log();
			console.log(`
				Texto 2
			`);
			pressEnter();
			console.log(`
				Texto 3
			`);
			pressEnter();
		)
	]
}
*/
// Cenas dos Personagens - end