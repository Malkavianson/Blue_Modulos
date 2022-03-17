const prompt = require ('prompt-sync')();

let lid 	= [];
let la 		= [];
// let lida	= [];
let mid 	= 0;
let ma 		= 0;

for(i=0;i<5;i++){
	do{
	console.clear()
	console.log(`\nDados da pessoa ${i+1}:\n`)
	var id = +prompt(`Idade: `);
	var a = +prompt(`Altura (em cm): `);
	
	ctz = prompt(`Os dados estão corretos? [s] ou [n]`).toLowerCase();
	}while(ctz!='s');
	lid.push(id);
	la.push(a);
	// ida = id +" - "+ a+" cm";
	// lida.push(ida);
	mid	+=	id;
	ma	+=	a;
}

// console.log(`Lista de idades:`, lid);
// console.log(`Lista de alturas:`, la);
// console.log(`Lista de idades e respectivas alturas:`, lida);
// console.log(`mid: ${mid} / ma: ${ma} `);
console.clear()
console.log(`Média de idades:`,mid/lid.length);
console.log(`Média de alturas:`,ma/la.length);
