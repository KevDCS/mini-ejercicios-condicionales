const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("¿La lámpara funciona? (si/no): ", (respuesta1) => {
	if (respuesta1.toLowerCase() === "no") {
		console.log("Enchufar la lámpara.");
		rl.question("¿Está enchufada la lámpara? (si/no): ", (respuesta2) => {
			if (respuesta2.toLowerCase() === "si") {
				rl.question("¿Está quemado el foco? (si/no): ", (respuesta3) => {
					if (respuesta3.toLowerCase() === "si") {
						console.log("Reemplazar el foco.");
					} else {
						console.log("Comprar una nueva lámpara.");
					}
					rl.close();
				});
			} else {
				console.log("Enchufa la lámpara para que funcione.");
				rl.close();
			}
		});
	} else {
		console.log("La lámpara ya funciona correctamente.");
		rl.close();
	}
});
