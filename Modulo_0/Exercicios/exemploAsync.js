const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')();

const init = async () => {
		const browser = await puppeteer.launch({
			defaultViewport: null,
			args: ["--show-taps"],
			headless: false,
		});
	do{
		const page = await browser.newPage();
		await page.goto('https://www.google.com/');
		await page.type('input[title="Pesquisar"]', `Olha o TERMINAL`, {delay:30});
		console.log((`digita ai alguma coisa: `))
		palavra = prompt("");
		const inputValue = await page.$eval('input[title="Pesquisar"]', el => el.value);
		for (let i = 0; i < inputValue.length; i++) {
		  await page.keyboard.press('Backspace');
		}
		await page.type('input[title="Pesquisar"]', palavra, {delay:30});
		await page.keyboard.press('Enter');
		denovo = prompt(`Vai dnv? ([s] ou [n])`);
		await page.close();
	}while(denovo != 'n')
		await browser.close();
}

(async () => {
	init ()
})();