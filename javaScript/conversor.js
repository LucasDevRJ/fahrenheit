function converteTemperaturas() {
	var valorDigitado = document.getElementById("valor").value;
	var conversoes = document.getElementById("conversoes");
	var conversaoSelecionada = document.getElementsByTagName("option");
	for (var i = 0; i < conversoes.length; i++) {
		if (conversaoSelecionada[i].value == "fahrenheitParaCelsius") {
			
		} else if (conversaoSelecionada[i].value == "fahrenheitParakelvin") {

		}
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", converteTemperaturas);