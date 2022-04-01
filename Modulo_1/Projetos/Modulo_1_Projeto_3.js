//Modulos
const prompt = require('prompt-sync')();
const colors = require('colors');
const fs = require('fs');

//Variaveis importantes
let ng = 's';
let init = [];
let personagemPrincipal = {};
let time = {};
let dinheiro = 0;
let disposicao = 100;

let op_id = ['homem', 'mulher'];
let op_os = ['he', 'ho', 'bi'];

// let horario = ['Alvorada', 'Manhã', 'Tarde', 'Noite', 'hora de dormir'];
var manhaA = '';
var tardeA = '';
var noiteA = '';

let ds = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let ma = ['Outubro', 'Novembro', 'Dezembro'];

let garotas = ['Nivea', 'Sophia', 'Rosa' /*, 'Alice', 'Ludmila', 'Rebecca', 'Monica'*/];
let garotos = ['Frederico', 'Davi', 'Otavio' /*, 'Marcelo', 'Ricardo', 'Alexandre', 'Otto'*/];
let garotxs = ['Nivea', 'Sophia', 'Otavio' /*, 'Alice', 'Ludmila', 'Alexandre', 'Otto'*/];
let personagensSecundarios = [];
let personagensSecundariosPts = [0, 0, 0 /*,0,0,0,0*/]

// Variaveis das compras
//DECIDIR O QUE FAZER DOS ITENS!
var cx_choco = 0; // Para dar ao [0]
var camisa_unicornio = 0; //para dar ao [6]
var livro = 0; //para dar ao [5]
var colar_micanga = 0; //para dar ao [1]
var minasCap = 0; //Random todo dia 15
var pocaoDoAmor = 0; //aumentar Status Beleza e Popularidade
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

const pressEnter = () => {
    console.log();
    prompt(`pressione ENTER para continuar`);
    console.clear();
    console.log();
};
//PressEnterFunction - end

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
    return [personagemPrincipal, time, personagensSecundarios, dinheiro, disposicao];
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
}

function namorar(namor) {
    if (namor === personagensSecundarios[0]) {
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
    } else if (namor === personagensSecundarios[1]) {
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
    } else if (namor === personagensSecundarios[2]) {
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
        let testf1 = (personagemPrincipal.atributosFisicos >= 100);
        if (testf1) {
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
        } else {
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
    /*    else if (namor === personagensSecundarios[3]) {
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
     */
};
//História - end

//Tempo
function 
tempo() {
    pressEnter()
    console.log('Personagem', personagemPrincipal)
    let hoje = time.hoje;
    let m31 = 1;
    looptime: for (let m = time.m; m < ma.length; m++) {
        m31++;
        loopmes: for (let s = time.s; s < 5; s++) {
            console.log();
            for (let d = time.d; d < ds.length; d++) {
                let data = ` Dia ${hoje} de ${ma[m]} de 2021 - ${ds[d]}`.blue;
                //	Aqui vao entrar as atividades diárias
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
        };
    };
};
//Tempo - end

// Engine
// Quando bater 140pts aparecer um Deus ( ? )

function status_(attr, vlr) {
    this.Status = attr;
    this.Nivel = vlr;
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

//Seletor de rotina
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
//Seletor de rotina - end

// cabeçalho de pontos
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
    console.log();
}
// cabeçalho de pontos - end

function jogo() {
    if (ng === 's') {
        return hist1();
    } else {
        console.log(`Carregando jogo... `);
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
            // /*carregar JSON*/
            pressEnter();
            console.log(`\nPersonagem Carregado: ${personagemPrincipal.nome}\n\n Affairs:\n ${personagensSecundarios}`);
            pressEnter();
            return [personagemPrincipal, time, personagensSecundarios, personagensSecundariosPts, dinheiro, disposicao];
        } catch {
            console.log(`Jogo salvo não encontrado, iniciando novo jogo!`);
            pressEnter();
            jogo();
        }
    }
}

//Ações diárias
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
    //Variaveis à serem salvas:
    // hoje 						'let'
    // m 							'let'
    // s 							'let'
    // d 							'let'
    // personagemPrincipal			'obj'
    // dinheiro						'let'
    // disposicao					'let'
    // personagensSecundarios		'arr'
    // personagensSecundariosPts	'arr'
    console.clear();
    prompt(`	Salvando dados de ${personagemPrincipal.nome}... `);
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

	function addM(){
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
			this.beleza += 3;
			console.log('Ganhou 3 de beleza')
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
			this.artes += 3;
			this.conhecimento++;
			disposicao--;
			console.log(`Ganhou 3 de Artes e culturas\n		e algum conhecimento`)
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
			this.artes -= 3;
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
                            console.log(`Você não tem dinheiro suficiente...`)
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
                                console.log(`\n Você comprou um bilhete de loteria, aguarde até sair o resultado`)
                                minasCap++;
                                minasCapC = 'n';
                                dinheiro -= 5;
                                pressEnter();
                            } else {
                                console.log(`\nVocê não tem dinheiro suficiente...`)
                                pressEnter();
                            }
                        }
                    } while (minasCapC != 'n')
                    aShoppingC = 'v';
                } else if (aShoppingC === 'm') {
                    do {
                        console.log(`\n\n		hey, psiu... Aqui você encontrará artigos misteriosos...`);
                        if (colar_micanga === 0) {
                            console.log(`Colar de Miçangas - R$ 50,00 [m]`)
                        };
                        if (pocaoDoAmor === 0) {
                            console.log(`Poção do Amor - $200,00 [a]`)
                        };
                        console.log(`VOLTAR[v]`)
                        aShoppingMisterio = prompt(`O que deseja comprar na loja misteriosa? `);
                        if (aShoppingMisterio === 'm') {
                            if (dinheiro >= 50) {
                                console.log(`\nEsse lindo colar de miçangas me interessou, o vendedor disse que ele tem poderes mágicos...`)
                                colar_micanga++
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
                                console.log(`O que será que isso faz?`)
                                personagemPrincipal.beleza += 10;
                                personagemPrincipal.popularidade += 10;
                                pocaoDoAmor++
                                dinheiro -= 200
                                aShoppingMisterio = 'v'
                                    pressEnter();
                            } else {
                                console.log(`\nVocê não tem dinheiro suficiente...`)
                                pressEnter();
                            }
                        }
                    } while (aShoppingMisterio != 'v')
                    aShoppingC = 'v';
                }
                if (aShoppingC === 'v') {
                    break;
                }
            } while (aShoppingC != 'v')
        } else {
            console.log(`\n Acho melhor voltar para casa...`)
            break;
        }
    } while (aShopping != 'n')
    pressEnter();
    console.log(`Ganhou 3 de popularidade`)
}

//Ações diárias - end
function endGame() {
    console.clear();
    console.log(`\nVocê finalizou o
		\n		A d o l e D a t e s❤️`.brightMagenta.bold);
    console.log(`\n	O Florescer do coração`.brightMagenta.underline);
    console.log(`
		\ncriado e produzido por @MalkavianSon
			`.bold)
    pressEnter();
    process.exit()
}
// Engine

//Sequencia de execução
console.clear();
console.log(`\n\n		A d o l e D a t e s❤️`.brightMagenta.bold);
console.log(`\n	O Florescer do coração`.brightMagenta.underline);
console.log(`\n Recomendado manter o terminal em modo fullScreen`)
pressEnter();
do {
    ng = prompt(`		Deseja iniciar um novo jogo? [s] ou [n]`).toLowerCase();
} while (ng != 's' && ng != 'n');

init = jogo();

personagemPrincipal = init[0];
time = init[1];
personagensSecundarios = init[2];
dinheiro = init[3];
disposicao = init[4];

tempo();
histF();
endGame();

//Sequencia de execução - fim

// Cenas dos Personagens:
function especial(manha, tarde, noite, hoje, m) {
    if (hoje === 18 && m === 0) {
        pressEnter();
        personagem0(1,1);
    } else if (hoje === 20 && m === 0) {
        pressEnter();
        personagem1(1,1)
    } else if (hoje === 22 && m === 0) {
        pressEnter();
        personagem2(1,1)
    } else if (hoje > 18 && tarde === 's' && m === 0 && personagensSecundariosPts[0] === 0) {
        personagem0(1,2);
    } else if (hoje > 19 && noite === 't' && m === 0 && personagensSecundariosPts[1] === 0) {
        personagem1(1,2);
    }
    // else if (periodo q vai acontecer === o que vai acontecer && m === 0 && personagensSecundariosPts[2] === 0){
    // personagem2(1,2);
    // }
    else if (hoje === 2 && m === 1) {
        pressEnter();
        personagem0(2, 1);
    } else if (hoje === 19 && m === 1) {
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
                prompt(`\nVocê precisa digitar [ ${personagensSecundarios[1]} ] ou ${personagensSecundarios[2]}\n\npressione ENTER para continuar`)
            }
        } while (pergunta != personagensSecundarios[1].toLowerCase() && pergunta != personagensSecundarios[2].toLowerCase())
        console.clear();
        if (pergunta === personagensSecundarios[1].toLowerCase()) {
            pressEnter();
            personagem1(2, 1)

        } else {
            pressEnter();
            personagem2(2, 1)
        }
    } else if (hoje > 2 && noite === 'd' && m === 2 && personagensSecundariosPts[0] === 1) {
        personagem0(2, 2);
    } else if (hoje > 19 && manha === 's' && hoje === 4 && m === 2 && personagensSecundariosPts[1] === 1) {
        personagem1(2, 2);
    }
    // else if (periodo q vai acontecer === o que vai acontecer && m === 2 && personagensSecundariosPts[2] === 1){
    // personagem2(2,2);
    // }

}

function personagem0(mes, dia) {
    if (mes === 1) {
        if (dia === 1) {
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
            console.clear();
            console.log(`
\nCaminhando pela escola vejo várias tribos espalhadas em grupinhos
\nAcho interessante como o pessoal do segundo ano é totalmente diferente do terceiro...
			`);
            pressEnter();
            console.log(`
\nO primeiro ano aqui no colégio é somente de tarde, e o segundo e o terceiro são de manhã
\nEntão, quando nós passamos para o terceiro e a galera do primeiro passou para a manhã
\nE a escola se diversificou bastante no quesito "tribos Urbanas"
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
\n${oas(2).toUpperCase()} minin${oas(2)} que estava cantando esbarra em minha perna
\n		${personagemPrincipal.nome}
\n	Ow! Presta atenção onde passa! Enxerga não menin${oas(2)}?
\nDigo chei${oap()} de ódio
			`);
            pressEnter();
            console.log(`
\n		???????????
\n	Oooneee?
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
\n	Heey! Baka! Tenha cuidado!!!__Diz brava com sua voz doce e felpuda
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
\nCom a capa dura e uma pelicula plástica para proteger a edição
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
\n	Olha lá você falando dificil de novo!
			`);
            pressEnter();
            console.log(`
\n		${personagensSecundarios[2]}
\n	Hihi, me desculpe... é o Hábito
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
\nAté aquele momento não tinha notado o quão ${personagensSecundarios[2]} é tão bonit${oas(2)}
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
\nAlgo me diz que esse não é nosso ultimo encontro
			`);
            }
			else {
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
        }
		else if (dia === 2) {
            personagensSecundariosPts[2]++
            console.clear();
            console.log(`
\n		//texto introdução outubro historia 2
			`);
            pressEnter();
            do {
                console.clear();
                console.log(`
\n		//Texto introdução outubro historia 2
				`);
                console.log(`
\n		//Pergunta outubro historia 2
				`);
                pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
                if (pergunta != 's' && pergunta != 'n') {
                    prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
                }
            } while (pergunta != 's' && pergunta != 'n')
            console.clear();
            if (pergunta === 's') {
                console.log();
                console.log(`
\n		//Texto positivo 1 outubro historia 2
			`);
            } else {
                console.log();
                console.log(`
\n		//texto negativo 1 outubro historia 2
				`);
            }
            pressEnter();
            console.log(`
\n	//texto final outubro historia 2
			`);
            pressEnter();
        }
    }
	else if (mes === 2) {
        if (dia === 1) {
            console.clear();
            console.log(`
\n		//texto introdução novembro historia 1
			`);
            pressEnter();
            do {
                console.clear();
                console.log(`
\n		//Texto introdução novembro historia 1
				`);
                console.log(`
\n		//Pergunta novembro historia 1
				`);
                pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
                if (pergunta != 's' && pergunta != 'n') {
                    prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
                }
            } while (pergunta != 's' && pergunta != 'n')
            console.clear();
            if (pergunta === 's') {
                console.log();
                console.log(`
\n		//Texto positivo 1 novembro historia 1
			`);
            } else {
                console.log();
                console.log(`
\n		//texto negativo 1 novembro historia 1
				`);
            }
            pressEnter();
            console.log(`
\n	//texto final novembro historia 1
			`);
            pressEnter();
        }
		else if (dia === 2) {
            personagensSecundariosPts[2]++
            console.clear();
            console.log(`
\n		//texto introdução novembro historia 2
			`);
            pressEnter();
            do {
                console.clear();
                console.log(`
\n		//Texto introdução novembro historia 2
				`);
                console.log(`
\n		//Pergunta novembro historia 2
				`);
                pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
                if (pergunta != 's' && pergunta != 'n') {
                    prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
                }
            } while (pergunta != 's' && pergunta != 'n')
            console.clear();
            if (pergunta === 's') {
                console.log();
                console.log(`
\n		//Texto positivo 1 novembro historia 2
			`);
            } else {
                console.log();
                console.log(`
\n		//texto negativo 1 novembro historia 2
				`);
            }
            pressEnter();
            console.log(`
\n	//texto final novembro historia 2
			`);
            pressEnter();
        }
    }
};
// Cenas dos Personagens - end
