//your JS code here. If required.

const age = document.getElementById("age").value;
const name = document.getElementById("name").value;
const promise = new Promise((reslove, reject) => {
	if(age > 18){
		reslove(`Welcome ${name}. You can vote.`);
	}
	else{
		reject(`Oh sorry ${name}. You aren't old enough.`);
	}
})