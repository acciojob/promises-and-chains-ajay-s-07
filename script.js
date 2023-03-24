let age = document.querySelector("#age");
let name = document.querySelector("#name");
let form = document.querySelector("#form");
// let button = document.querySelector("#btn").value;

// function abc(event){
	
// }

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	let age2 = parseInt(age.value);
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			if(age >= 18){
				resolve();
			}
			else reject();
		}, 4000);
	});
	promise.then(() => {
		alert(`Welcome, '${name.value}'. You can vote.`);
	})
	.catch(() => {
		alert(`Oh sorry, '${name.value}'. You aren't old enough.`);
	});
});








