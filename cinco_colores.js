const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Elige un color: ", (colores) => {
	switch (colores) {
		case "azul":
			console.log(
				"En el cielo profundo, el alma se pierde en un azul sin fin."
			);
			break;
		case "verde":
			console.log("Bajo la luz del sol, la vida florece en verde resplandor.");
			break;
		case "rojo":
			console.log("En el horizonte ardiente, el sol se pinta de rojo candente");
			break;
		case "amarillo":
			console.log(
				"En el campo dorado, el sol y las flores bailan de amarillo encantado."
			);
			break;
		case "violeta":
			console.log("Bajo la luna serena, la noche se viste de violeta, serena.");
			break;
		default:
			console.log("Por favor escriba un color.");
	}
	rl.close()
});
