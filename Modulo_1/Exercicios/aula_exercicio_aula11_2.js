const prompt = require('prompt-sync')();

let entry = prompt(`enter date (dd/mm/aaaa): `);
let mounths = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function longDate(e) {
	d = parseInt(e.substr(0,2));
	m = parseInt(e.substr(3,2));
	y = parseInt(e.substr(6,4));
	
	mtxt = '';
	
	for(mounth of mounths){
		if(m===mounths.indexOf(mounth)){
			mtxt = mounth;
			break
		}
	}
	
	if (d===1){
		sf = 'st';
	}else if (d===2){
		sf = 'nd';
	}else if (d===3){
		sf = 'rd';
	}else{
		sf = 'th';
	}
	
	if((d>0&&d<32)&&(m>0&&m<12)&&(!isNaN(y))){
		return [d,sf,mtxt,y]	
	}else{
		return	null
	}
	
	
}

let ld = longDate(entry);
if(ld!=null){
	console.log(`${ld[2]} ${ld[0]}${ld[1]}, ${ld[3]}`);
}else{
	console.log(ld)
}