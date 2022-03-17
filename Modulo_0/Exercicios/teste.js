let obj = {
			0: a(),
			1: b(),
			2: c(),
			3: d(),
			4: e()
};


for(i=0;i<5;i++){
	console.log(`Loop: ${i}`)
	obj.i.call()
	console.log(`fim do for`)
}



function a(p){
	console.log(`1`,p)
}
function b(p){
	console.log(`2`,p)
}
function c(p){
	console.log(`3`,p)
}
function d(p){
	console.log(`4`,p)
}
function e(p){
	console.log(`5`,p)
}



