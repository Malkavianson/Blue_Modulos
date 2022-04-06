const prompt = require('prompt-sync')();

	let ds = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
	let ma = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro', 'Novembro', 'Dezembro'];


// name
// age
// weigh
// height

	const pessoa = new Object();

	pessoa.init = function(n,i,p,a) {
		this.nome 	= n;
		this.idade	= i;
		this.peso	= p;
		this.altura = a;
		this.vivo	= 1;
		this.nomei 	= n;
		this.idadei	= i;
		this.pesoi	= p;
		this.alturai= a;
	};
		
	pessoa.envelhecer = function(){
		this.idade++;
	},
	
	pessoa.engordar = function(){
		this.peso+=100;
	},
	
	pessoa.emagrecer = function(){
		this.peso-=100;
	},
	
	pessoa.crescer = function(){
		if (this.idade<22){
			this.altura+=0.5;
		};
	},
	
	pessoa.day = function(){
		let p = Math.round(Math.random() * 3);
		if(p===1){
			this.engordar();
		}else if (p===2){
			this.emagrecer();
		}
	},
	
	pessoa.bio = function(){
		if(this.idade>121||this.peso>636000||this.altura>272){
			if(this.idade>121){
				b = `Você morreu de causa natural, atingiu ${this.idade} anos\n e infelizmente seu corpo não suportou\n		Descanse em paz ${this.nome}`;
			}else if(this.peso>636000){
				b = `Você morreu por falha no coração por obesidade aos ${this.peso}\n	Sua família sente que foi um alívio para você!`
			}else if(this.altura>272){
				b = `Você morreu em um acidente em uma escada...\n Ao tropeçar em seu próprio cadarço, se desequilibrou e se feriu gravemente no pescoço\n	A natureza não foi em nada generosa com você`
			}
			this.vivo = 0;
		}else{
			b = `\n		Nome:	${this.nome}\n		Idade:	${this.idade}\n		Peso:	${this.peso/1000}kg\n		Altura:	${this.altura/100}`;
		}
		return b;
	},


console.log(`entre [NOME]: `);
let n = prompt(`		`);

console.log(`entre [IDADE] (em anos) `);
let i = +prompt(`		`);

console.log(`entre [PESO] (em gramas) `);
let p = +prompt(`		`);

console.log(`entre [ALTURA] (em cm) `);
let a = +prompt(`		`);
periodo = 0
pessoa.init(n,i,p,a)

function y() {
	let hoje = 1;
	let m31 = 1;
	looptime: for (let m = 0; m < 12; m++) {
		m31++;
		loopmes: for (let s = 0; s < 5; s++) {
			for (let d = 0; d < 7; d++) {
				pessoa.day();
				hoje++;
				if (m > 12 && hoje > 30) {
					break looptime;
				} else if (m31 % 2 === 0) {
					if (hoje > 31) {
						if (d === 6) {
							d = 0
						} else {
							d = d + 1;
						}
						hoje = 1;
						break loopmes;
					};
				} else {
					if (m === 7 && hoje > 30) {
						m31 = 2;
					} else if (m === 1 && hoje > 28) {
						if (d === 6) {
							d = 0
						} else {
							d = d + 1;
						}
						hoje = 1;
						break loopmes;	
					} else if (hoje > 30) {
						if (d === 6) {
							d = 0
						} else {
							d = d + 1;
						}
						hoje = 1;
						break loopmes;
					};
				};
			};
			d = 0;
		};
	};
};


do{
periodo++
console.clear();
y();
pessoa.envelhecer();
pessoa.crescer();
console.log(pessoa.bio());
console.log(`	Seu peso alterou ${Math.round((pessoa.peso-pessoa.pesoi)/1000)}kg em ${periodo} anos `)
prompt(``);
}while(pessoa.vivo>0)