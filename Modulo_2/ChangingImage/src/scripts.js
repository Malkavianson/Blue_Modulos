function Choice() {
	let i = 0;

	let a = {
		txt: `<h2> 🧛️ </h2><p>"Será que todos escutam vozes?"</p>`,
		btn: ` 😐🎭 `,
		img: `./src/i0.png`,
	};

	let b = {
		txt: `<h2> 🧛🏼️ </h2><p>"É sério cara, a cobra tava me contando... <br/>Ela queria comer uma pessoa<br/>com arroz, repolho <br/> e omelete de Couve de Bruxelas"</p>`,
		btn: ` 😵‍🐍 `,
		img: `./src/i1.png`,
	};

	let c = {
		txt: `<h2> 🧛🏼‍♀️ </h2><p>"Não importa o quão insano você é. Existe sempre alguém para completar a sua insanidade."</p>`,
		btn: ` 👱‍♀️‍🔪 `,
		img: `./src/i2.png`,
	};

	let op = [a, b, c];

	Object.defineProperties(this, {
		txt: {
			enumerable: true,
			value: op[i].txt,
			writable: true,
			configurable: true,
		},
		btn: {
			enumerable: true,
			value: op[i].btn,
			writable: true,
			configurable: true,
		},
		img: {
			enumerable: true,
			value: op[i].img,
			writable: true,
			configurable: true,
		},
	});

	this.change = function () {
		if (i > 2) {
			i = 0
		};
		this.txt = op[i].txt;
		this.btn = op[i].btn;
		this.img = op[i].img;
		document.getElementById('t').innerHTML = this.txt;
		document.getElementById('b').innerText = this.btn;
		document.getElementById('i').setAttribute('src', this.img);
		if (i === 1) {
			document.getElementById('i').style.transform = 'translate(calc(var(--vh, 1vh) * 10.6), calc(var(--vh, 1vh) * -2.2))';
		} else {
			document.getElementById('i').style.transform = 'none'
		}

		i++;
	};
}

const c = new Choice();

document.addEventListener("keyup", function (e) {
	if (e.key === 'Enter') {
		c.change();
	};
});