function converteTemperaturas() {
	var conversoes = document.getElementById("conversoes");
	var conversaoSelecionada = document.getElementsByTagName("option");
	for (var i = 0; i < conversoes.length; i++) {
		if (conversaoSelecionada[i].value == "fahrenheitParaCelsius") {
			alert("Escolheu!!");
		}
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", converteTemperaturas);