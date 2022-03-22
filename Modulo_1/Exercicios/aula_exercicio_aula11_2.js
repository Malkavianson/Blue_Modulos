const prompt = require('prompt-sync')();

do{	entry = prompt(`enter date (dd/mm/yyyy): `);
	if((entry[2]!='/')&&(entry[5]!='/')&&(entry.length!=10)){
		console.log(`entre com o formato dd/mm/yyyy`)};
}while((entry[2]!='/')&&(entry[5]!='/')&&(entry.length!=10));

function longDate(e) {
	d = parseInt(e.substr(0,2));
	m = parseInt(e.substr(3,2));
	y = parseInt(e.substr(6));

	if((d>0&&d<32)&&(m>0&&m<13)&&(!isNaN(y))){
		let dt = new Date(`${m}/${d}/${y}`);
		dt = dt.toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric' });
		return dt
	}else{
		return null
	}
}

let date = longDate(entry)
console.log(date)