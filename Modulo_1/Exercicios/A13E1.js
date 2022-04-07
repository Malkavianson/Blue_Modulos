// Aula 13 - exercício 1
// Crie um objeto pessoa com os atributos: nome, idade, peso e altura.
// Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer.
// Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. 
		// (edit.: Pela lógica até os 10 anos ela precisa crescer em torno de 3cm/ano)
// Crie um método bio que retorna uma string com todas as informações da pessoa.


// (!) aleatoreidade baixa!

const prompt = require('prompt-sync')();

	let ds = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
	let ma = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro', 'Novembro', 'Dezembro'];


// name
// age
// weigh
// height

	function Pessoa() {
		
		this.random = function(num){
			r = Math.round(Math.random() * num);
			return r;
		}
		
		
		this.emg = 0;
		this.eng = 0;
		this.ntr = 0;
		
		
		console.log(`entre [NOME]: `);
		let n = /*prompt(`		`);*/'Ale'

		console.log(`entre [IDADE] (em anos) `);
		let i = /*+prompt(`		`);*/0

		console.log(`entre [PESO] (em gramas) `);
		let p = /*+prompt(`		`);*/1345

		console.log(`entre [ALTURA] (em cm) `);
		let a = /*+prompt(`		`);*/40

		Object.defineProperties(this,{
			nome: {
				enumerable: true,
				value: n,
				writable: false,
				configurable: false,
			},
			idade: {
				enumerable: true,
				value: i,
				writable: true,
				configurable: true,
			},
			peso: {
				enumerable: true,
				value: p,
				writable: true,
				configurable: true,
			},
			altura: {
				enumerable: true,
				value: a,
				writable: true,
				configurable: true,
			},
			vivo: {
				enumerable: true,
				value: 1,
				writable: true,
				configurable: true,
			},
			idadei: {
				enumerable: false,
				value: i,
				writable: false,
				configurable: false,
			},
			pesoi: {
				enumerable: false,
				value: p,
				writable: false,
				configurable: false,
			},
			alturai: {
				enumerable: false,
				value: a,
				writable: false,
				configurable: false,
			},
		});
	
		this.envelhecer = function(){
			this.idade++;
		};
		
		this.engordar = function(){
			if(this.idade<5){
				r = this.random(2000);
				this.peso+= (4500 + r) /365;
			}else if(this.idade<11){
				r = this.random(1000);
				this.peso+= (2400 + r) /365;
			}else if(this.idade<18){
				r = this.random(2500);
				this.peso+= (5000 + r) /365;
			}else if(this.idade>60){
				r = this.random(200);
				this.peso-= (200 + r) / 365;
			}
			r = this.random(2500);
			this.peso+= (5000 + r) /365;
		};
		
		this.emagrecer = function(){
			if(this.idade<5){
				r = this.random(2000);
				this.peso+= (4500 + r) /365;
			}else if(this.idade<11){
				r = this.random(1000);
				this.peso+= (2400 + r) /365;
			}else if(this.idade<18){
				r = this.random(2500);
				this.peso+= (5000 + r) /365;
			}else if(this.idade>60){
				r = this.random(200);
				this.peso-= (200 + r) / 365;
			}
			r = this.random(2500);
			this.peso-= (5000 + r) /365;
		};
		
		this.crescer = function(){
			if(this.idade<9){
				this.altura+=this.random(12)+3;
			}else if(this.idade<15){
				this.altura+=this.random(11)+5;
			}else if (this.idade<22){
				this.altura+=0.5;
			};
		};
		
		this.day = function(){
			let p = this.random(300000);
			let g = (this.random(7))+2
			do{ m = (this.random(7))+2}while(m===g)
			if(p%g===0&&p%m!=0){
				this.engordar();
				this.eng++
			} else if (p%m===0&&p%g!=0){
				this.emagrecer();
				this.emg++
			}else{
				this.ntr++
				if(this.idade<5){
					r = this.random(1250);
					this.peso+= (2250+r) /365
				}else if(this.idade<11){
					r = this.random(1250);
					this.peso+= (2250+r) /365
				}else if(this.idade<15){
					r = this.random(2750);
					this.peso+= (3500+r) /365
				}else if(this.idade>60){
					r = this.random(200);
					this.peso-= r / 365;
				};
			};
		};
		
		this.bio = function(){
			if(this.idade>119||this.peso>636000||this.peso<0){
				if(this.idade>119){
					b = `Você morreu de causa natural, atingiu ${this.idade} anos\n e infelizmente seu corpo não suportou\n		Descanse em paz ${this.nome}`;
				}else if(this.peso>636000){
					b = `Você morreu aos ${this.idade} anos por falha no coração por obesidade com ${this.peso/1000}kg\n	Sua família sente que foi um alívio para você!`
				}else if(this.idade>10&&this.peso<20000){
					b = `Você morreu de desnutrição aos ${this.idade} anos com ${this.peso/1000}kgs \n	Sua família sente sua falta!`
				}
				this.vivo = 0;
			}else{
				b = `\n		Nome:	${this.nome}\n		Idade:	${this.idade}\n		Peso:	${(this.peso/1000).toFixed(2)}kg\n		Altura:	${(this.altura/100).toFixed(2)}`;
			};
			return b;
		};
	};

periodo = 0
const p1 = new Pessoa();
const p2 = new Pessoa();
const p3 = new Pessoa();
const p4 = new Pessoa();


function y(){
	let hoje = 1;
	let m31 = 1;
	looptime: for (let m = 0; m < 12; m++) {
		m31++;
		loopmes: for (let s = 0; s < 5; s++) {
			for (let d = 0; d < 7; d++) {
				p1.day();
				p2.day();
				p3.day();
				p4.day();
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
console.clear();
periodo++;
y();
p1.envelhecer();
p1.crescer();
console.log(p1.bio());
console.log(`	Seu peso alterou ${Math.round((p1.peso-p1.pesoi)/1000)}kg em ${periodo} anos\n engordar ${p1.eng}\n emagrecer ${p1.emg}\n neutro ${p1.ntr} `)
p2.envelhecer();
p2.crescer();
console.log(p2.bio());
console.log(`	Seu peso alterou ${Math.round((p2.peso-p2.pesoi)/1000)}kg em ${periodo} anos\n engordar ${p2.eng}\n emagrecer ${p2.emg}\n neutro ${p2.ntr} `)
p3.envelhecer();
p3.crescer();
console.log(p3.bio());
console.log(`	Seu peso alterou ${Math.round((p3.peso-p3.pesoi)/1000)}kg em ${periodo} anos\n engordar ${p3.eng}\n emagrecer ${p3.emg}\n neutro ${p3.ntr} `)
p4.envelhecer();
p4.crescer();
console.log(p4.bio());
console.log(`	Seu peso alterou ${Math.round((p4.peso-p4.pesoi)/1000)}kg em ${periodo} anos\n engordar ${p4.eng}\n emagrecer ${p4.emg}\n neutro ${p4.ntr}  `)
// console.log(p1)
prompt(``);
}while(p1.vivo>0)