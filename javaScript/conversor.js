function converteTemperaturas() {
	var valorDigitado = document.getElementById("valor").value;
	var conversoes = document.getElementById("conversoes");
	var conversaoSelecionada = document.getElementsByTagName("option");
	var resposta = document.getElementById("resposta-conversao");

	if (valorDigitado.length == 0) {
		alert("Digite o valor!");
	} else if (isNaN(valorDigitado)) {
		alert("Digite somente números!");
	} else {
		var valorConvertido;

		for (var i = 0; i < conversoes.length; i++) {
			if (conversaoSelecionada[i].selected) {
				if (conversaoSelecionada[i].value == "fahrenheitParaCelsius") {
					valorConvertido = (valorDigitado - 32) * 5 / 9;
					resposta.innerHTML = valorConvertido.toFixed(2) + "°C";
				} else if (conversaoSelecionada[i].value == "fahrenheitParakelvin") {
					valorConvertido = (valorDigitado - 32) * 5 / 9 + 273.15;
					resposta.innerHTML = valorConvertido.toFixed(2) + "K";
				} else if (conversaoSelecionada[i].value == "celsiusParaFahrenheit") {
					valorConvertido = valorDigitado * 9 / 5 + 32;
					resposta.innerHTML = valorConvertido.toFixed(2) + "°F";
				} else if (conversaoSelecionada[i].value == "celsiusParaKelvin") {
					valorConvertido = valorDigitado + 273.15;
					resposta.innerHTML = valorConvertido.toFixed(2) + "K";
				} else if (conversaoSelecionada[i].value == "kelvinParaFahrenheit") {
					valorConvertido = valorDigitado + 273.15;
					resposta.innerHTML = valorConvertido.toFixed(2) + "°F";
				} else if (conversaoSelecionada[i].value == "kelvinParaCelsius") {
					valorConvertido = valorDigitado - 273.15;
					resposta.innerHTML = valorConvertido.toFixed(2) + "°C";
				} 
			}
		}
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", converteTemperaturas);