//Promisses

function f1(par){
	
	return new Promise((resolve, reject) => {
		console.log(`this is before`);
		const number = par + 1;
		
		resolve(number);
	});
}

function f2(par){
	
	return new Promise((resolve, reject) => {
		console.log(`this is after`);
		const number = par + 1;
		
		resolve(number);
	});
}
function f3(par){
	
	return new Promise((resolve, reject) => {
		console.log(par);
		const number = par + 1;
		
		resolve(number);
	});
}
function f4(par){
	
	return new Promise((resolve, reject) => {
		console.log(par);
		console.log(`this is in the end`)
	});
}


f1(1)
	.then(f2)
	.then(f3)
	.then(f4)
	.catch((err) => console.log('Error',err))

console.log(`middle`);