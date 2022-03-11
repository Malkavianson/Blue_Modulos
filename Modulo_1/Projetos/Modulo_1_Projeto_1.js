const prompt = require('prompt-sync')();
		let resultado="";
		let questao=[];
		let sim=0;
		let hist=`O mundo é um lugar sombrio, você só consegue sobreviver graças às suas habilidades.\nDentro de sua própria loucura você alcança a sobrevivência, e isso é o que diferencia você dos demais.\nCada detalhe é importante!\nVocê está nos arredores do prédio de seu arqui-inimigo, sabote o máximo de coisas que puder!\nMostre seu poder e aniquile seu INIMIGO!`;

		function resp(){
			if(sim===0){
				resultado=`Você deixa o detonador cair na água enquanto tentava fugir.\n Ao parar para pega-lo, é surpreendido por um dos seguranças\nVocê falhou miseravelmente!`;
			}else if(sim===1&&questao.includes("s4")===true){
				resultado=`Vocês se entreolham, e caem na risada. _Você é um louco varrido??????-diz a porta estupefata.\nVocê responde que está em uma missão importantíssima e que precisa acabar com o dono daquele prédio.\n A porta te conta que ele é um homem rude que lucra em cima de pessoas pobres, superfaturando o preço dos produtos para visar enormes ganhos.\n E ainda por cima bate todas as portas quando passa por elas!\n Você já o odiava, não pode aceitar ele bater em pobres e indefesas portas sem consequências.\n A porta te mostra uma passagem secreta para o aposento dele, e assim você o encontra dormindo.\n Foi uma morte rápida e indolor... Você aniquilou seu arqui-rival e ainda salvou todas as portas do prédio! Parabéns.\n A propósito, Você é um verdadeiro Malkavian!`;
			}else if(sim===1||sim===2){
				resultado=`Você não contava com cães no prédio, que rapidamente te encontraram!\n Você corre o mais rápido que pode e chega até o muro.\n O animal não te pega por centímetros.\nVocê falhou, porém conseguiu escapar`;
			}else if(sim===3){
				resultado=`Já do lado de fora do prédio, você aguarda a explosão... Porém, nada acontece\nVocê então percebe que se esqueceu de ativar a bomba, e o prédio já está protegido novamente.\nVocê chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`;
			}else if(sim===4){
				if(questao.includes("n4")===true){
					resultado=`Ao tentar sair do prédio, se deparou com a porta emperrada. Parecia não querer abrir, e você perde seus últimos 30 segundos tentando encontrar outra saída e bomba é detonada antes que você consiga sair.\nDepois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`;
				}else if(questao.includes("s5")===true){
					resultado=`Ao tentar subir as escadas correndo, você tropeça em seus cadarços. Rola as escadas até o subsolo novamente, infelizmente você não chega à saída antes da detonação.\nDepois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`;
				}else{
					resultado=`O Caos é instaurado e você percebe que faltava somente a bomba a ser plantada no SUBSOLO\n Quando você encontra algo muito melhor!\n Vários animais presos em gaiolas, que provavelmente seriam usados para testes. \n Animais como leões, lobos e tigres, que aparentavam estar bem machucados, pelos maus tratos dos funcionários do prédio. \n Você decide então entrar na cabine de segurança e destravar todas as jaulas simultaneamente\n e pelas câmeras, consegue ver todo o banho de sangue. \n \n Você vê um gorila subir as escadas de emergência, até o aposento do seu arqui-rival e \n logo depois a câmera mostra o mesmo gorila saindo de lá coberto de sangue! \n \n Uma sensação de serviço concluído passa pelas suas veias e você consome todo aquele frenesi... \n Até que se lembra que também precisa sair da sala de segurança. \n \n resolve aguardar os animais acalmarem e sairem do prédio, mas depois de destroçar todas as pessoas daquele prédio\n os animais começam a se agrupar em frente à sala de segurança e aguardam ansiosamente pela sua saída. \n \n Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita. `;
				}
			}else{
				resultado=`Parabéns\nVocê derrubou o prédio de 18 andares da corporação farmacêutica\nVocê triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`;
			}
		console.log(resultado);
		}
		
	function registrar(){
		
		console.log();
		console.log(hist);
		console.log();
		let p1 = '';
		while((p1!='sim'&&p1!='s')&&(p1!='nao'&&p1!='n')){
			console.log('responda somente SIM ou NAO');
			console.log();
			p1 = prompt(`Conseguiu entrar no prédio? `);
			p1 = p1.toLowerCase();
		}
		if(p1==='s'||p1==='sim'){
			sim++;
			questao.push('s1');
		}else{
			questao.push('n1');
		}
		
		console.clear();
		console.log();
		console.log(hist);
		console.log();
		let p2 = '';
		while((p2!='sim'&&p2!='s')&&(p2!='nao'&&p2!='n')){
			console.log('responda somente SIM ou NAO');
			console.log();
			p2 = prompt(`Desativou o sistema de ALARMES? `);
			p2 = p2.toLowerCase();
		}
		if(p2==='s'||p2==='sim'){
			sim++;
			questao.push('s2');
		}else{
			questao.push('n2');
		}
		
		console.clear();
		console.log();
		console.log(hist);
		console.log();
		let p3 = '';
		while((p3!='sim'&&p3!='s')&&(p3!='nao'&&p3!='n')){
			console.log('responda somente SIM ou NAO');
			console.log();
			p3 = prompt(`Desligou a CHAVE GERAL? `);
			p3 = p3.toLowerCase();
		}
		if(p3==='s'||p3==='sim'){
			sim++;
			questao.push('s3');
		}else{
			questao.push('n3');
		}
			
		console.clear();
		console.log();
		console.log(hist);
		console.log();
		let p4 = '';
		while((p4!='sim'&&p4!='s')&&(p4!='nao'&&p4!='n')){
			console.log('responda somente SIM ou NAO');
			console.log();
			p4 = prompt(`Perguntou à porta "Qual a semelhança entre o corvo e a escrivaninha? `);
			p4 = p4.toLowerCase();
		}
		if(p4==='s'||p4==='sim'){
			sim++;
			questao.push('s4');
		}else{
			questao.push('n4');
		}
			
		console.clear();
		console.log();
		console.log(hist);
		console.log();
		let p5 = '';
		while((p5!='sim'&&p5!='s')&&(p5!='nao'&&p5!='n')){
			console.log('responda somente SIM ou NAO');
			console.log();
			p5 = prompt(`IMPLANTOU A BOMBA NO SUBSOLO? `);
			p5 = p5.toLowerCase();
		}
		if(p5==='s'||p5==='sim'){
			sim++;
			questao.push('s5');
		}else{
			questao.push('n5');
		}
			
		console.clear();
	}

registrar();
resp();