// Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). 
// Exiba na tela todos os nomes digitados, porém de maneira invertida 
	// (do último para o primeiro) 
// apresente também o maior e o menor nome 
	// (caso haja empate, deve mostrar todos).

const prompt = require('prompt-sync')();

let names = [];
let width = '';

do{
	console.clear()
	n = prompt(`Type name: `);
	names.push(n)
	if(width.length<n.length) {width=n};
	exit = prompt(`press ENTER to continue or type any to finish `);
}while(exit==='');

for(i=names.length-1;i>-1;i--){
	console.log(names[i])
}
console.log(`\n${width}`)