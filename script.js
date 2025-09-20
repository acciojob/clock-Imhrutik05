function render(){
	let element = document.querySelector('p');
	let date = new Date();
	
	let month = date.getMonth();
	let dateD = date.getDate();
	let year = date.getFullYear();
	let hours = date.getHours();
	let hoursD = hours % 12;
	let mins = date.getMinutes();
	let secs = date.getSeconds();
	let ampm = hours >= 12 ? "PM" : "AM";
	element.innerHTML = `
		${month}/${dateD}/${year}, ${hoursD}:${mins}:${secs} ${ampm}
	`;
}
setInterval(render, 999);