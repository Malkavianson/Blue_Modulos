// Faça um programa que peça ao usuário digitar 
// a população 
// e a taxa de crescimento populacional 
// de 2 países A e B

// Sendo que a população do país A deve ser menor que a de B
// e a taxa de crescimento de A seja maior. 

// Faça um programa que calcule e escreva o número de anos necessários
// para que a população do país A ultrapasse
// ou iguale a população do país B, mantidas as taxas de crescimento.

const prompt = require('prompt-sync')();

let países = []

do{
	console.clear();
	// do{
	console.clear();
	console.log(`Type here two country populations and respective growth rates`);
	ap = +prompt(`first country population: `);
	ag = +prompt(`first country annual growth rate: `);
	bp = +prompt(`second country population: `);
	bg = +prompt(`second country annual growth rate: `);
	// }while(ap<bp&&bg<ag)
	let a = 0;
	for(i=ap;i<=bp;i+=ag){
		bp+=bg;
		console.log(ap,ag,bp,bg,i)
		a++;
	}
	
	console.log(`${a} years`)
	exit = prompt(`press ENTER to another or type any to finish `);
}while(exit==='');