const prompt = require('prompt-sync')();

// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

do{
nome = prompt(`Digite seu nome com mais de 3 caracteres `);
console.clear();
idade = prompt(`Digite uma idade entre 0 e 150 `);
console.clear();
salario = prompt(`Digite seu salario válido `);
console.clear();
console.log(`Qual seu estado civil? `)
estadoCivil = prompt(`SOLTEIRO[s] CASADO[c] VIUVO[v] DIVORCIADO[d] `).toLowerCase;
}while(nome.length>2&&idade>=0&&idade<=150&&salario!=0&&(estadoCivil==='s'&&estadoCivil==='c'&&estadoCivil==='v'&&estadoCivil==='d'))
