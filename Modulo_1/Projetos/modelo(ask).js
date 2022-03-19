modelo de pergunta:


			do{
			console.log(` \n
\n		//texto
				`)
				console.log(`
\n	// pergunta
				`)
				pergunta = prompt(`SIM[s] ou NÃO[n]`).toLowerCase();
				if(pergunta != 's' && pergunta != 'n'){
					prompt(`\nVocê precisa digitar [s] ou [n]\n\npressione ENTER para continuar`)
				}
			}while(pergunta != 's' && pergunta != 'n');
			if(pergunta==='s'){
				console.clear()
				console.log(`
\n	// texto Positivo
				`)
				pressEnter();
			}
			else{
				console.clear()
				console.log(`
\n	// texto negativo
				`)			
				pressEnter();
			}
