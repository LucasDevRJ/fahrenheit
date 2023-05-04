function converteTemperaturas() {
	var valorDigitado = document.getElementById("valor").value;
	var conversoes = document.getElementById("conversoes");
	var conversaoSelecionada = document.getElementsByTagName("option");

	var valorConvertido;

	for (var i = 0; i < conversoes.length; i++) {
		if (conversaoSelecionada[i].selected) {
			if (conversaoSelecionada[i].value == "fahrenheitParaCelsius") {
				valorConvertido = (valorDigitado - 32) * 5 / 9;
				console.log(valorConvertido);
			} else if (conversaoSelecionada[i].value == "fahrenheitParakelvin") {
				valorConvertido = (valorDigitado - 32) * 5 / 9 + 273.15;
				console.log(valorConvertido);
			} else if (conversaoSelecionada[i].value == "celsiusParaFahrenheit") {
				valorConvertido = valorDigitado * 9 / 5 + 32;
				console.log(valorConvertido);
			} else if (conversaoSelecionada[i].value == "celsiusParaKelvin") {
				valorConvertido = valorDigitado + 273.15;
				console.log(valorConvertido);
			} else if (conversaoSelecionada[i].value == "kelvinParaFahrenheit") {
				valorConvertido = valorDigitado + 273.15;
				console.log(valorConvertido);
			} else if (conversaoSelecionada[i].value == "kelvinParaCelsius") {
				valorConvertido = valorDigitado - 273.15;
				console.log(valorConvertido);
			} 
		}
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", converteTemperaturas);