// function Person(name){
	// this._name = name;
// };

// let person = new Person(`Alexandre`);

// console.log(person._name)




class Person{
	constructor(name){
		this._name = name;
	}
	
	set name(newName){
		this._name = newName
	}

	get name(){
		return this._name
	}
	
	walk(direcao){
		return `${this._name} está andando para ${direcao}.`
	}
}

let person = new Person(`Alexandre`)
person.name = `Pandora`

console.log(person.walk('frente'))