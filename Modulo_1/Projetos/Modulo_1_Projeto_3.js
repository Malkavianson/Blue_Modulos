//Modulo
	const prompt = require('prompt-sync')();
	const colors = require('colors');

//Variaveis importantes
	let personagemPrincipal = {};
	let dinheiro = 0;
	let disposicao = 100;

	let op_id = ['homem', 'mulher'];
	let op_os = ['he', 'ho', 'bi'];

	let horario = ['Alvorada', 'Manhã', 'Tarde', 'Noite', 'hora de dormir'];
	var manhaA = '';
	var tardeA = '';
	var noiteA = '';

	let ds = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
	let ma = ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

	let garotas = ['Nivea', 'Sophia', 'Rosa', 'Alice', 'Ludmila', 'Rebecca', 'Monica'];
	let garotos = ['Frederico', 'Davi', 'Otavio', 'Marcelo', 'Ricardo', 'Alexandre', 'Otto'];
	let garotxs = ['Nivea', 'Sophia', 'Otavio', 'Alice', 'Ludmila', 'Alexandre', 'Otto'];
	let personagensSecundarios = [];
	
	// Variaveis das compras
	var cx_choco = 0; // Para dar ao [0]
	var camisa_unicornio = 0; //para dar ao [6]
	var livro = 0; //para dar ao [5]
	var colar_micanga = 0; //para dar ao [1]
	var minasCap = 0; //Random todo dia 15
	var pocaoDoAmor = 0; //aumentar Status Beleza e Popularidade
	// Variaveis das compras - end

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
		let h100006 = `\n	Agora nos diga com qual desses tipos você deseja ter?`;
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
		let h100000 = `Hoje é dia 01 de Agosto de 2021`;
		let h100001 = `As férias de julho acabaram e eu voltei do sítio dos seus avós\n Onde eles fizeram uma grande festa para meu aniversário!`;
		let h100002 = `Acabo de completar 18 anos, e estou terminando o Ensino médio.`;
		let h100003 = `Vou começar a arruma as coisas para voltar às aulas... \n Contra minha vontade, como sempre...`;
		let h100004 = `Já que você jamais foi ${oap()} primeir${oap()} da turma...\n mas também nunca fiquei para trás!`;
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
		console.log(`\nAgora vamos entender como acompanhar o dia:`.blue);
		pressEnter();
		console.log(`Estes são os atributos:`.brightBlue);
		let dis = new status_('DISPOSIÇÃO              ', disposicao)
		let blz = new status_('Beleza                  ', personagemPrincipal.beleza);
		let cnh = new status_('Conhecimento            ', personagemPrincipal.conhecimento);
		let pop = new status_('Popularidade            ', personagemPrincipal.popularidade);
		let art = new status_('Gosto por Artes         ', personagemPrincipal.artes);
		let atf = new status_('Atributos Físicos       ', personagemPrincipal.atributosFisicos);
		let din = new status_('Dinheiro                ', 'R$ '+dinheiro+',00')
		console.table([dis, blz, cnh, pop, art, atf, din]);
		console.log(`\nSe a DISPOSIÇÃO cair para 5, ficarei exaust${oap()} e descansarei durante o dia inteiro.`);
		console.log(`
	\nTodos os dias tenho que decidir o que vou fazer...
	\n Caso eu vá fazer as mesmas coisas de ontem, basta dar um enter\n
		`)
		pressEnter();
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
					let data = ` Dia ${hoje} de ${ma[m]} de 2021 - ${ds[d]}`.blue;
						hoje++;
						//	Aqui vao entrar as atividades diárias
						diario(data,hoje,m,d);
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

//fim da História
	function histF() {
		pressEnter();
		let hf001 = `Fim do ano letivo`;
		let hf002 = `Agora é hora de decidir o meu futuro`;
		let hf003 = `As aulas terminaram e vou começar preparar para entrar na faculdade`
			let hf004 = `	Mas antes, preciso decidir se quero continuar solteiro, ou se vou começar um romance....`;
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
	Agora foco é no futuro, e agarrar todas as oportunidades que surgirem...
			`);
			pressEnter();
		}
	}

	function namorar(namor) {;
		if (namor === personagensSecundarios[0]) {
			console.log();
			pressEnter();
			console.log(`
	\nO jeito Agressivo e imperativo de ${personagensSecundarios[0]} me fascinam, e decido me declarar.\n
	Envio uma mensagem para el${eas(0)} e peço para me encontrar no Shopping Cidade\n
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
	Decidimos contar aos amigos sobre a nossa decisão\n
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
	Ensinei ${personagensSecundarios[0]} a ser um pouco mais doce\n e\n
	${personagensSecundarios[0]} me ensinou como quebrar a cara de alguém! kkkkkkkk \n
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
	Eu decido ir até el${eas(1)}.\n
	El${eas(1)} também estava me observando, com aquele seu jeito tímido e despistado de sempre... \n
	Mas abre um lindo sorriso quando vê que vou em sua direção.\n
	Me aproximo de ${personagensSecundarios[1]}, envolvo ${oas(1)} em meus braços, e sussurro em seu ouvido\n
		${personagemPrincipal.nome}\n
	Amig${oas(1)}, posso te perguntar uma coisa?\n\n
	Sinto a pele de ${personagensSecundarios[1]} arrepiar e vejo seu rosto enrubrecer\n
		${personagensSecundarios[1]}
	Claro meu anjo, pode me dizer o que quiser sempre que quiser...\n\n
		${personagemPrincipal.nome}
	${personagensSecundarios[1]} você deseja unir nossas almas pela ETERNIDADE?
			`);
			pressEnter();
			let testf1 = (	personagemPrincipal.beleza >= 50 &&	personagemPrincipal.conhecimento >= 50 &&	personagemPrincipal.popularidade >= 50 &&	personagemPrincipal.artes >= 50 &&	personagemPrincipal.atributosFisicos >= 50 );
			if(testf1){
				console.log();
				console.log(`
	${personagensSecundarios[1]} rompe em lágrimas, me abraça e me traz junto ao corpo, de uma maneira que sinto nossos espíritos se tocarem\n
	Aquela reação me deixa perplex${oas(1)} e consigo sentir meus olhos marejados.\n
	Sinto que agora somos definitivamente um só.\n
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
	Minhas energias recarregam nesse momento, agarro-n${oas(1)} num abraço e colocamos as alianças um no outro\n
	E então nos deitamos para observar as estrelas...\n
	Deitad${oap()}, viro de lado e vejo o perfil de ${personagensSecundarios[1]} sob a luz do luar...\n
	Toco seus lábios com a ponta de meus dedos e aproximo meu rosto para dar-lhe um beijo\n\n
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
	Me sinto um pouco envergonh${oap(1)} e ${personagensSecundarios[1]} percebe...\n
	\n
	${personagensSecundarios[1]} carinhosamente olha para mim, me abraça e diz\n
		${personagensSecundarios[1]}
	${personagemPrincipal.nome}, eu também te amo... Mas como um amig${oap()}!\n
			`);
			pressEnter();
			console.log(`
	Nós então nos abraçamos e decidemos manter a amizade para toda a vida.\n
	Pessoalmente, estou chatead${oap()}... Mas algo dentro de mim já esperava essa resposta...\n
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

	function status_(attr, vlr) {
			this.Status = attr;
			this.Nivel = vlr;
		}

	function diario(data,hoje,m,d) {
		console.clear();
		if(hoje===15&&minasCap!=0){
			console.log(`\n Hoje sai o resultado do MinasCap\n	Vou conferir o resultado pela TV...`.blue)
			pressEnter();
			for(i=0;i<minasCap;i++){
				loto = (Math.floor(Math.random() * 300));
				if(loto%3===0&&loto%4===0){
					console.log('MEU DEUS o prêmio!! No bilhete'.brightYellow, (Math.floor(Math.random() * 300000)));
					console.log(`Valor do prêmio: R$ 5000,00`.yellow)
					dinheiro+=5000;
					break;
				}else{
					console.log('Infelizmente o bilhete', (Math.floor(Math.random() * 300000)),'não foi sorteado...');
				}
				minasCap=0
			}
			pressEnter();
			console.log();
		}
		if (disposicao > 5) {
			afazeresDia(data,hoje,m,d);
		} else {
			exausto();
		}
		pressEnter()
		console.log(`Fim do dia`);
		console.log();
		pressEnter();
	}

//Seletor de rotina
	function seletor(data,manha,tarde,noite,hoje,m,d){
			console.clear();
			scoreTotal(data);
// Quadros especiais da manhã

// Quadros especiais da manhã - end
			if('ipe'===manha){
				console.log(`			Manhã:`);
				irParaAEscola();
			}else if('v'=== manha){
				console.log(`			Manhã:`);
				aVisual()		
			}else if('d'=== manha){
				console.log(`			Manhã:`);
				aDescansar()
			}else if('e'=== manha){
				console.log(`			Manhã:`);
				aEstudar();
			}else if('s'=== manha){
				console.log(`			Manhã:`);
				aCidade()				
			}else if('a'=== manha){
				console.log(`			Manhã:`);
				aArtes()
			}else if('f'=== manha){
				console.log(`			Manhã:`);
				aExercicios()
			}else {
				console.log(`			Manhã:`);
				aFreela()
			}
// Quadros especiais da tarde

// Quadros especiais da tarde - end
			if('v'=== tarde){
				console.log(`			Tarde:`);
				aVisual()		
			}else if('d'=== tarde){
				console.log(`			Tarde:`);
				aDescansar()
			}else if('e'=== tarde){
				console.log(`			Tarde:`);
				aEstudar();
			}else if('s'=== tarde){
				console.log(`			Tarde:`);
				aCidade()				
			}else if('a'=== tarde){
				console.log(`			Tarde:`);
				aArtes()
			}else if('f'=== tarde){
				console.log(`			Tarde:`);
				aExercicios()
			}else {
				console.log(`			Tarde:`);
				aFreela()
			}
// Quadros especiais da noite

// Quadros especiais da noite - end
			if('v'=== noite){
				console.log(`			Noite:`);
				aVisual()		
			}else if('d'=== noite){
				console.log(`			Noite:`);
				aDescansar()
			}else if('e'=== noite){
				console.log(`			Noite:`);
				aEstudar();
			}else if('s'=== noite){
				console.log(`			Noite:`);
				aCidade()				
			}else if('a'=== noite){
				console.log(`			Noite:`);
				aArtes()
			}else if('f'=== noite){
				console.log(`			Noite:`);
				aExercicios()
			}else {
				console.log(`			Noite:`);
				aFreela()
			}
	}
//Seletor de rotina - end

// cabeçalho de pontos
function scoreTotal(data){
		console.clear();
		console.log(`\nHoje é ${data}\n`.blue);
		let dis = new status_('DISPOSIÇÃO              ', disposicao)
		let blz = new status_('Beleza                  ', personagemPrincipal.beleza);
		let cnh = new status_('Conhecimento            ', personagemPrincipal.conhecimento);
		let pop = new status_('Popularidade            ', personagemPrincipal.popularidade);
		let art = new status_('Gosto por Artes         ', personagemPrincipal.artes);
		let atf = new status_('Atributos Físicos       ', personagemPrincipal.atributosFisicos);
		let din = new status_('Dinheiro                ', 'R$ '+dinheiro+',00')
		let statsBar = console.table([dis, blz, cnh, pop, art, atf, din]);
		console.log();
}
// cabeçalho de pontos - end


//Ações diárias
	function afazeresDia(data,hoje,m,d){
		function atvd(){
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
		if(d===0||d===6){
			do{
				console.clear();
				scoreTotal(data);
				atvd();
				manha = prompt(`De manhã eu vou `);
				if(manha != '' && manha != 'v' && manha != 'd' && manha != 'e' && manha != 's' && manha != 'a' && manha != 'f' && manha != 't'){
					console.log();
					console.log(`Digite somente a letra dentro dos colchetes\nOu pressione ENTER para repetir a atividade de ontem`);
					pressEnter();
				}
			}while(manha != '' && manha != 'v' && manha != 'd' && manha != 'e' && manha != 's' && manha != 'a' && manha != 'f' && manha != 't');
			if(manha==''){
				manha = manhaA
			};
			manhaA = manha;
		}else{
			scoreTotal(data);
			prompt(`De manhã eu vou para a escola!`);
			manha = 'ipe'}
		do{
			console.clear();
			scoreTotal(data);
			atvd();
			tarde = prompt(`De tarde eu vou `);
			if(tarde != '' && tarde != 'v' && tarde != 'd' && tarde != 'e' && tarde != 's' && tarde != 'a' && tarde != 'f' && tarde != 't'){
				console.log();
				console.log(`Digite somente a letra dentro dos colchetes\nOu pressione ENTER para repetir a atividade de ontem`);
				pressEnter();
			}
		}while(tarde != '' && tarde != 'v' && tarde != 'd' && tarde != 'e' && tarde != 's' && tarde != 'a' && tarde != 'f' && tarde != 't');
		if(tarde==''){
			tarde = tardeA
		};
		tardeA = tarde;
		do{
			console.clear();
			scoreTotal(data);
			atvd();
			noite = prompt(`De noite eu vou `);
			if(noite != '' && noite != 'v' && noite != 'd' && noite != 'e' && noite != 's' && noite != 'a' && noite != 'f' && noite != 't'){
				console.log();
				console.log(`Digite somente a letra dentro dos colchetes\nOu pressione ENTER para repetir a atividade de ontem`);
				pressEnter();
			}
		}while(noite != '' && noite != 'v' && noite != 'd' && noite != 'e' && noite != 's' && noite != 'a' && noite != 'f' && noite != 't');
		if(noite==''){
			noite = noiteA
		};
		noiteA = noite;
		
		seletor(data,manha,tarde,noite,hoje,m,d);
	}

	function irParaAEscola() {
		console.log(`Você foi para a escola!`)
		personagemPrincipal.conhecimento++;
		personagemPrincipal.popularidade++;
		personagemPrincipal.atributosFisicos++;
		disposicao--;
	}

	function aVisual(){
		console.log(`\nNada melhor que se sentir bel${oap()}\nParei para cuidar do meu visual`);
		personagemPrincipal.beleza+=3;
		disposicao--;
	}

	function aDescansar(){
		if (disposicao < 100) {
			console.log(`\nNinguém é de ferro\nVou descansar um pouco`);
			disposicao+=7;
			personagemPrincipal.sorte+=5;
		}
		if (disposicao > 100) {
			disposicao = 100;
		}
	}

	function aEstudar(){
		console.log(`\nConhecimento é poder!\nEstudei intensamente`);
		personagemPrincipal.conhecimento+=3;
		disposicao-=2;
	}

	function aCidade(){
		console.log(`\nNada melhor que ver um pouco de gente\n\nSaí um pouco pela cidade`);
		personagemPrincipal.popularidade+=3;
		disposicao++;
		do{
			console.log(`\nSerá que farei alguma comprinha hoje?`);
			aShopping = prompt(`[s] ou [n] `).toLowerCase();
			if(aShopping==='s'){
				console.clear();
				do{
					console.log(`\n		Ir ao shopping Cidade [s]\n		Ir à Casa Lotérica[l]\n		Ir à Loja de artigos Místicos[m]\n		VOLTAR[v]`);
					aShoppingC = prompt(`Selecione um destino: `).toLowerCase();
					console.clear();
					if(aShoppingC==='s'){
						
						console.log(`\nO que deseja comprar no shopping\n?`);
						
						if(cx_choco===0){console.log(`Caixa de Chocolate - R$ 15,00 [c]`)};
						console.log(`Energético - R$ 18,00 [e]`);
						if(camisa_unicornio===0){console.log(`Camisa de Unicórnio - R$ 150,00 [u]`)}; 
						console.log(`Livro sobre Artes - R$ 50,00 [a]`);
						if(livro===0){console.log(`\nLivro de Ficção (romance) - R$ 80,00 [r]`)}; 
						
						aShoppingCompra = prompt(`\n O que deseja comprar?`).toLowerCase();
						
						if(aShoppingCompra==='c'){
							if(dinheiro>=15){
								console.clear();
								console.log(`\n Acho que vou comprar uma caixa de chocolates...`);
								cx_choco++;
								dinheiro-=15;
								pressEnter()
							}else{
								console.log(`Você não tem dinheiro suficiente...`)
								pressEnter();
							}
						}else if(aShoppingCompra==='e'){
							if(dinheiro>=18){
								console.clear();
								console.log(`\nUm Energético é sempre bom para recarregar as energias...`);
								disposicao+=5;
								dinheiro-=18;
								pressEnter();
							}else{
								console.log(`Você não tem dinheiro suficiente...`)
								pressEnter();
							}
						}else if(aShoppingCompra==='u'){
							if(dinheiro>=150){
								console.clear();
								console.log(`\nAdorei essa camisa de unicórnio, darei para alguém especial`);
								camisa_unicornio++;
								dinheiro-=150;
								pressEnter();
							}else{
								console.log(`Você não tem dinheiro suficiente...`)
								pressEnter();
							}
						}else if(aShoppingCompra==='a'){
							if(dinheiro>=50){
								console.clear();
								console.log(`\nUm material extra de artes nunca faz mal à ninguém!`);
								personagemPrincipal.artes+=5;
								dinheiro-=50
								pressEnter();
							}else{
								console.log(`Você não tem dinheiro suficiente...`)
								pressEnter();
							}
						}else if(aShoppingCompra==='r'){
							if(dinheiro>=80){
								console.clear();
								console.log(`\nComo é bom me inspirar com um romance bem clichê!`);
								personagemPrincipal.conhecimento++
								livro++;
								dinheiro-=80
								pressEnter()
							}else{
								console.log(`Você não tem dinheiro suficiente...`)
								pressEnter();
							}
						}
						aShoppingC='v';
					}else if(aShoppingC==='l'){
						do{
							console.log(`	"Deseja comprar um MINAS CAP garot${oap()}?\n		só R$ 5,00\n		Todo dia 15 sai o resultado!"`);
							minasCapC = prompt(`Comprar bilhete de loteria? [s] ou [n]`).toLowerCase();
							if(minasCapC==='s'){
								if(dinheiro>=5){
									console.log(`\n Você comprou um bilhete de loteria, aguarde até sair o resultado`)
									minasCap++;
									minasCapC='n';
									dinheiro-=5;
									pressEnter();
								}else{
									console.log(`\nVocê não tem dinheiro suficiente...`)
									pressEnter();
								}
							}
						}while(minasCapC!='n')
						aShoppingC='v';
					}else if(aShoppingC==='m'){
						do{console.log(`\n\n		hey, psiu... Aqui você encontrará artigos misteriosos...`);
						if(colar_micanga===0){console.log(`Colar de Miçangas - R$ 50,00 [m]`)};
						if(pocaoDoAmor===0){console.log(`Poção do Amor - $200,00 [a]`)};
						console.log(`VOLTAR[v]`)
						aShoppingMisterio = prompt(`O que deseja comprar na loja misteriosa? `);
						if(aShoppingMisterio==='m'){
							if(dinheiro>=50){
								console.log(`\nEsse lindo colar de miçangas me interessou!`)
								colar_micanga++
								aShoppingMisterio='v'
								dinheiro-=50;
								pressEnter();
							}else{
								console.log(`\nVocê não tem dinheiro suficiente...`);
								pressEnter();
							}
						}else if(aShoppingMisterio==='a'){
							if(dinheiro>=200){
								console.log(`O que será que isso faz?`)
								personagemPrincipal.beleza+=3;
								personagemPrincipal.popularidade+=3;
								pocaoDoAmor++
								dinheiro-=200
								aShoppingMisterio='v'
								pressEnter();
							}else{
								console.log(`\nVocê não tem dinheiro suficiente...`)
								pressEnter();
							}
						}
						}while(aShoppingMisterio!='v')
						aShoppingC='v';
					}
					if(aShoppingC==='v'){
						break;
					}
				}while(aShoppingC!='v')
			}else{
				console.log(`\n Acho melhor voltar para casa...`)
				break;
			}
		}while(aShopping!='n')
		pressEnter();
	}

	function aArtes(){
		console.log(`\nA arte liberta a alma e colore os pensamentos\nEstudei artes e culturas`);
		personagemPrincipal.artes+=3;
		personagemPrincipal.conhecimento++;
		disposicao--;
	}

	function aExercicios(){
		console.log(`\nMens sana in corpore sano\nCuidar do corpo é essêncial!\nFui à academia me exercitar`);
		personagemPrincipal.atributosFisicos+=3;
		personagemPrincipal.beleza++;
		personagemPrincipal.popularidade++
		disposicao--;
	}

	function aFreela(){
		console.log(`\nO trabalho dignifica!\nNada como um freela pra encher a carteira`);
		dinheiro+=50;
		personagemPrincipal.sorte++;
		disposicao-=2;
	}

	function exausto() {
		console.log(`\nMe sento muito exaust${oap()} e vou tirar o dia para descansar!`);
			disposicao += 15;
			personagemPrincipal.conhecimento--;
			personagemPrincipal.artes--;
			personagemPrincipal.atributosFisicos--;
	}
//Ações diárias - end

//Sequencia de execução
	personagemPrincipal = hist1();
	
	tempo();
	
	histF();
//Sequencia de execução

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
				Lily - amiga de Infância
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

// Cenas dos Personagens:
function personagem0(mes,dia){

	if(mes===1){
		if(dia===1){
			console.clear();
			console.log(`
\nQue dia lindo para ir a escola... Fim do ensino médio, as mesmas caras dos ultimos anos, ninguém aguenta mais isso kkkkkkk
\nEstamos no meio de uma pandemia e a escola resolve voltar às aulas presenciais
\nQue tédio...
			`);
			pressEnter();
			do{
				console.clear();
				console.log(`
\n			**Barulho de alguém tropeçando e cadernos caindo**
\nOlho para trás e vejo ${personagensSecundarios[0]} se recuperando e olhando para mim muito nervos${oas(0)}.
\n		${personagensSecundarios[0]}
\n	_VAI FICAR SÓ ME OLHANDO OU VAI AJUDAR? - El${eas(0)} diz irritadíssim${oas(0)}\n
`);
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
\nComeço a rir na cara del${eas(0)} mas me prontifico para ajudar ${personagensSecundarios[0]} a se recompor
\n		${personagemPrincipal.nome}
\n	Vem... Já te falei para prestar atenção no caminho!\n
			`);
			personagensSecundariospts[0]++
			}else{
				console.log();
				console.log(`
\n		${personagemPrincipal.nome}
\n	Ah menin${oas(0)} oh! Você que dê seu jeito ai! Quem manda ser desajeitad${oas(0)} desse jeito?\n
\nPego o fichário del${eas(0)} e começa a folhear
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
\n${personagensSecundarios[0]} é magr${oas(0)} e pard${oas(0)}
\ne na infância, el${eas(0)} era uma criança bem esquisitinha...
\nMas hoje, com seus cabelos cacheados na altura dos ombros, e um rosto simétrico
\nQue inevitavelmente realçam seus olhos castanhos "folha-seca"
\n${personagensSecundarios[0]} se muito tornou atraente
\n\nEmbora eu jamais admitiria isso!\n
\nAinda vejo ${personagensSecundarios[0]} como aquela criancinha desengonçada que brincava comigo na infância...
			`);
			pressEnter();
			console.log(`
\n		${personagensSecundarios[0]}
\n	Na hora do intervalo, se você não estiver ocupad${oap()}...
\n	Vem comigo na vendinha da rua de cima comprar um lanche?\n
\n		${personagemPrincipal.nome}
\n	Nossa... Nem sei se vou conseguir ir com você...
\n	Estou com as atividades do laboratório que tinha que ter feito nas férias todas atrasadas\n
\n		${personagensSecundarios[0]}
\n	Aff... Vc é tão devagar! Era só fazer o troço vey!
\n	Vou te mandar o meu relatório no whatsapp para você tirar de exemplo
\n	Copia mas não faz igual tá!
			`)
		}

		else if(dia===2){
			console.clear();
			console.log();
			console.log(`
\nPasseando pelo Shopping Cidade, resolvo me sentar em uma mesa na praça de alimentação para tomar um sorvete
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
\n		${personagensSecundarios[0]}
\n	Ah para! Pra cima de mim!!! Todo mundo sabe que vc não pega ninguém!\n
\n		${personagemPrincipal.nome}
\n	Ih! Vê se me erra!
\n	E você? Veio fazer o que?\n
\n		${personagensSecundarios[0]}
\n	kkkkkkkkkkkkkkkk A verdade doi né?!
\n	Eu vim com a Lily pra assistir Escape Room 2, mas ela é fraca e não aguenta um terrorzinho!
\n	Então vamos assitir Esquadrão Suicida...\n
\n		${personagemPrincipal.nome}
\n	Sai dessa vida vey, vai ver outras coisas! Você só assiste terror!
\n	Mó daora Esquadrão Suicida\n
\n		${personagensSecundarios[0]}
\n	O que eu posso fazer? Eu gosto é de emoção!\n
\n		${personagemPrincipal.nome}
\n	Mas filme de herói tem emoção também!\n
\n		${personagensSecundarios[0]}
\n	Ah, mas não é meu estilo...\n
			`);
			pressEnter();
			console.log(`
\nEntão, ${personagensSecundarios[0]} acena para Lily na fila do Burguer King
\n		${personagensSecundarios[0]}
\n	Ih, Alá a Lily... Tinha me perdido dela quando fui no Super Mercado comprar Refrigerante e Doritos
\n	Hey, Você não quer vir assistir o filme com a gente? Hoje eu pago!\n
			`);
			do{
				cinema = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if(cinema != 's' && cinema != 'n'){
				prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
			}
			}while(cinema != 's' && cinema != 'n');
			console.clear();
			if(cinema==='s'){
			
			console.clear();
			console.log();
			console.log(`
\n		${personagemPrincipal.nome}
\n	O QUE? VOCÊ VAI PAGAR MINHA ENTRADA????????
\n	E você acha que precisa de perguntar????
\n	Deve achar q eu sou doida de recusar uma mamata dessa?
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
			}
			else{
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
	}
	else if(mes===2){
		if(dia===1){
			console.clear();
			console.log();
			console.log(`
\nDepois da aula de Quimica, vou correndo até a fila da lanchonete.
\nQuem não corre acaba ficando o intervalo inteiro esperando para conseguir comprar alguma coisa...
			`);
			pressEnter();
			do{
				console.log();
				console.log(`
\n		${personagensSecundarios[0]}
\n	HEY ${personagemPrincipal.nome}!!!! Eu fiquei agarrad${oas(0)} na aula de geografia...
\n	Aproveita que você já está correndo na frente de todo mundo mesmo e compra a minha ficha para mim!\n
			`);
				console.log(`
\n Ajudar ${personagensSecundarios[0]} a comprar o lanche?
				`)
				lanche = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if(lanche != 's' && lanche != 'n'){
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			}while(lanche != 's' && lanche != 'n');
			console.clear();
			if(lanche==='s'){
			console.log();
			console.log(`
\n		${personagemPrincipal.nome}
\n	Eu não vou comprar nada pra você kkkkk 
\n	Se você quiser fura fila aqui comigo e compra!\n
\nAs outras pessoas da fila não gostaram NADA dessa atitude, e eu conseguia ouvir murmurinhos das pessoas atras de mim
\nMas não liguei
\n${personagensSecundarios[0]} e eu ficamos conversando enquanto aguardávamos nossa vez\n
\n Acabou que naquele dia passamos todo o intervalo juntos jogando conversa fora...
			`);
			pressEnter();
			}else{
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
		}
		else if (dia===2){
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
			do{
			console.log(` \n
\n		${personagensSecundarios[0]}
\n	${personagemPrincipal.nome.toUpperCase()}, você está em casa????
\n Abre aí, sou eu!\n
			`);
				console.log(`
\n Devo atender ${personagensSecundarios[0]}?
				`)
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if(pergunta != 's' && pergunta != 'n'){
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			}while(pergunta != 's' && pergunta != 'n');
			pressEnter();
			if(pergunta==='s'){
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
\nEu abro a porta e ${personagensSecundarios[0]} me cumprimenta com um calosoro abraço
\nEu retribuo o abraço, meio cansad${oap()} e sonolento
\n${personagensSecundarios[0]} percebe e me pergunta
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
\n		${personagemPrincipal.nome}
\n	Eu gosto de chá verde, mas tem outros se quiser\n
\n		${personagensSecundarios[0]}
\n	Ah, obrigada, adoro chá verde!\n
				`)
				pressEnter();
				console.clear()
				console.log(`
\n		${personagensSecundarios[0]}
\n	Estava fazendo caminhada aqui na avenida, e aproveitei para passar na sua casa.
\n	Estudamos juntos, mas é tão dificil de te encontrar na escola\n
				`)
				pressEnter();
				console.clear()
				console.log(`
\n		
				`)
				pressEnter();
				console.clear()
				console.log(`
\n		
				`)
				pressEnter();
			}
			else{
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
			console.log(`
				Texto 3
			`);
			pressEnter();
		}
	}
	else if(mes===3){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===4){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===5){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
}

function personagem1(mes,dia){

	if(mes===1){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===2){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===3){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===4){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===5){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
}

function personagem2(mes,dia){

	if(mes===1){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===2){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===3){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===4){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===5){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
}

function personagem3(mes,dia){

	if(mes===1){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===2){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===3){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===4){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===5){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
}

function personagem4(mes,dia){

	if(mes===1){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===2){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===3){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===4){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===5){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
}

function personagem5(mes,dia){

	if(mes===1){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===2){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===3){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===4){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===5){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
}

function personagem6(mes,dia){

	if(mes===1){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===2){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===3){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===4){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
	else if(mes===5){
		if(dia===1){
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
		}
		else if (dia===2){
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
		}
	}
}

// Cenas dos Personagens - end