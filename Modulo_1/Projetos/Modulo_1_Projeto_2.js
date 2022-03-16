//Módulo
const prompt = require('prompt-sync')();
const colors = require('colors');


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


	emp = 0;
	rodadaAtual = 0;

	function init() {
		do {
			console.log();
			console.log(`\nSeja bem vindo ao JOKENPO\n	REGRAS:\nVocê precisa primeiro escolher entre PEDRA PAPEL ou TESOURA\nO critério de VITÓRIA é:\n A tesoura corta o papel, mas quebra com a pedra;\n O papel embrulha a pedra, mas é cortado pela tesoura\n A pedra quebra a tesoura e é embrulhada pelo papel\n\nRodadas de empate não são contabilizadas\n		Quantas rodadas a partida terá? `.blue)
			rodada = prompt(`(lembre-se de selecionar um número impar de partidas:)`.brightBlue);
			if ((isNaN(rodada)) === false && rodada > 0 && (rodada%2===0)===false) {
				p1.vit = 0;
				p2.vit = 0;
			} else {
				console.log('	Você precisa colocar números ímpares acima de ZERO'.red);
				console.log();
				prompt('\npressione ENTER para continuar'.blue)
				console.clear();
			}
		} while (isNaN(rodada)||rodada <= 0||rodada%2===0);
		return (rodada);
	}

	function verific(rodadas) {
		for(i=0;i<rodadas;i++) {
			rodadaAtual++;
			p2.esc = esc[Math.floor(Math.random() * esc.length)]; //Escolha da Máquina
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
				console.log();
				console.log("	Você venceu".brightGreen);
				p1.vit++;
			} else if ((p2e > p1e && (pp2 === false)) || (p2p === true)) {
				console.log();
				console.log("	Máquina Venceu".brightRed);
				p2.vit++;
			} else {
				console.log(`\n 	EMPATE`)
				i--;
				rodadaAtual--;
			}


			// Letreiro de pontuação:
			console.log(`\n\n	Placar atual: `.blue);
			console.log(`	Você:    ${p1.vit}`.green);
			console.log(`	Máquina: ${p2.vit}`.red);
			console.log('\n\n\n	Quantidades de RODADAS:', rodada.brightBlue);
			console.log(`\n\n	Rodada Atual:`, `${rodadaAtual}`.blue);
			console.log(`\n\n	Você escolheu: ${p1.esc}`.green);
			console.log(`\n	Máquina escolheu:  ${p2.esc}`.red);
			prompt(`\npressione ENTER para continuar`);
			if(p1.vit===parseInt(rodadas/2)+1){
				prompt(`\nVocê venceu por vantagem!\npressione ENTER para continuar`.green);
				break;
			}else if(p2.vit===parseInt(rodadas/2)+1){
				prompt(`\nMáquina venceu por vantagem!\npressione ENTER para continuar`.red);
				break;
			}
		} 
	}

	//Captura a entrada do jogador
	function entrada() {
		do {
			console.log(`\n	Escolha entre: PEDRA || PAPEL || TESOURA \n`.blue);
			p1.esc = prompt().toLowerCase(); //Escolha do jogador
			console.clear();
		} while (esc.includes(p1.esc) === false);
		return p1.esc;
	}

	//Fim da partida
	function resultadoFinal() {
		console.clear();
		if (p1.vit > p2.vit) {
			console.log(`\n\n			Você venceu a máquina!`.brightGreen);
		} else {
			console.log();
			console.log(`\n\n			A Máquina te venceu!`.brightRed);
		}
		console.log();
		console.log(`\n\n			Fim da Partida`.brightBlue);
	}

do{
	console.clear();
	let rodadas = init();
	verific(rodadas);
	resultadoFinal();

	console.log(`\n\n\nJogar Novamente?`.brightYellow);
	jn = prompt(`pressione [S] ou [N] `.yellow).toLowerCase;
} while (jn != 'n');
