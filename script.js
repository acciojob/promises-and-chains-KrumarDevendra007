//your JS code here. If required.
const submit = document.getElementById("btn");

submit.addEventListener("ckick", () => {

	const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;

	const ageNum = parseInt(age);

	checkAge(name, ageNum)
		.then(message1 => {
			console.log(message1);
		})
		.catch(message2 => {
			console.log(message2);
		});
});

const checkAge = () => {

	return new Promise((resolve, reject) => {
		setTimeOut(() => {
			if(age > 18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		}, 4000);
	});
};