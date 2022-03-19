// Faça um programa que peça um número inteiro e 
// determine se ele é ou não um número primo. 
// Um número primo é aquele que é divisível somente por ele mesmo e por 1


const prompt = require('prompt-sync')();

do{
	console.clear();
	let n = +prompt(`Numero: `);
	let p = false;
	if(n<0){
		for(i=-2;i>n;i--){
			p = (n%i===0);
			if(p===true){
				break
			}
		}

	}else if (n>0){
		for(i=2;i<n;i++){
			p = (n%i===0);
			if(p===true){
				break
			}
		}
	}
	if (p===true){
		console.log(`Is it not Prime!`);
	}else{
		console.log(`It's Prime!`);
	}
	exit = prompt(`press ENTER to continue or type exit`);
}while(exit==='');