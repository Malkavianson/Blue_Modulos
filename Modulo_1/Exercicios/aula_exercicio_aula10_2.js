// Faça um "jogo da velha" criando uma matriz em duas dimensões 
// (Você deve criar um array com 3 arrays de 3 elementos cada dentro).
 // O programa deve pedir as coordenadas 
 // (linha e coluna) 
 // alternadamente para 2 jogares 
 // e marcar X ou O em cada caso. 
 // Caso um jogador vença, 
 // ele deve interromper o programa 
 // e anunciar o vencedor.

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