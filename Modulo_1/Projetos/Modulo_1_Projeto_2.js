//Módulo
const prompt = require('prompt-sync')();

//Dados dos Jogadores
let p1 = {
	esc: "",
	vit: 0
};

let p2 = {
	esc: "",
	vit: 0
};
//Dados dos Jogadores - end

const esc = ['pedra', 'papel', 'tesoura'];

do {
	emp = 0;
	rodadaAtual = 0;

	let rodadas = init();

	function init() {
		do {
			console.log();
			rodada = prompt(`	Quantas rodadas a partida terá? `);
			if ((isNaN(rodada)) === false && rodada > 0) {
				p1.vit = 0;
				p2.vit = 0;
			} else {
				console.log('	Você precisa colocar números acima de ZERO');
				console.log();
				prompt('pressione ENTER para continuar')
				console.clear();
			}
		} while (isNaN(rodada)||rodada <= 0);
		return (rodada);
	}

	function verific() {
		do {
			p2.esc = esc[Math.floor(Math.random() * 2)]; //Escolha da Máquina
			console.clear();
			p1.esc = entrada();

			const p1e = esc.indexOf(p1.esc);
			const p2e = esc.indexOf(p2.esc);

			const pp1 = (p1e === 2 && p2e === 0);
			const pp2 = (p2e === 2 && p1e === 0);
			const p1p = (p1e === 0 && p2e === 2);
			const p2p = (p2e === 0 && p1e === 2);

			//verifica vitorioso
			if ((p1e > p2e && (pp1 === false)) || (p1p === true)) {
				console.log()
				console.log("	Você venceu")
				p1.vit = p1.vit + 1;
			} else if ((p2e > p1e && (pp2 === false)) || (p2p === true)) {
				console.log();
				console.log("	Máquina Venceu")
				p2.vit = p2.vit + 1;
			} else {
				console.log();
				console.log("	Empate");
				emp = +1;
			}

			rodadaAtual++;
			rodadas--;

			// Letreiro de pontuação:
			console.log();
			console.log();
			console.log(`	Placar atual: `);
			console.log(`	Você:    ${p1.vit}`);
			console.log(`	Máquina: ${p2.vit}`);
			console.log(`	Empates: ${emp}`);
			console.log();
			console.log();
			console.log();
			console.log('	Quantidades de RODADAS:', rodada);
			console.log();
			console.log();
			console.log(`	Rodada Atual: ${rodadaAtual}`);
			console.log();
			console.log();
			console.log(`	Você escolheu ${p1.esc}`);
			console.log();
			console.log(`	Máquina escolheu:  ${p2.esc}`);
			console.log();
			prompt(`pressione ENTER para continuar`);
		} while (rodadas != 0);
	}

	//Captura a entrada do jogador
	function entrada() {
		do {
			console.log();
			console.log(`	Escolha entre: PEDRA || PAPEL || TESOURA `);
			console.log();
			p1.esc = prompt().toLowerCase(); //Escolha do jogador
			console.clear();
		} while (esc.includes(p1.esc) === false);
		return p1.esc;
	}

	//Fim da partida
	function resultadoFinal() {
		if (p1.vit > p2.vit) {
			console.log();
			console.log("			Você venceu a máquina!");
		} else {
			console.log();
			console.log("			A Máquina te venceu!");
		}
		console.log();
		console.log("			Fim da Partida");
	}

	verific();
	resultadoFinal();

	console.log(`Jogar Novamente?`);
	jn = prompt(`pressione [S] ou [N] `);
} while (jn != 'n')