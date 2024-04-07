const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("¿Cual es su edad?: ", (edad) => {
	if (edad < 18) {
		console.log("No puede entrar a la discoteca");
	} else {
		console.log("Puede entrar a la discoteca");
	}
	rl.close();
});
