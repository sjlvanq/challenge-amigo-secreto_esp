// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {
	let amigoInput = document.getElementById("amigo");
	if(listaAmigosUl.children.length == 0){alert("Ingrese el nombre");return;}
	let listaAmigosUl = document.getElementById("listaAmigos");
	let listaAmigosNewLi = document.createElement("li");
	listaAmigosNewLi.innerHTML = amigoInput.value;
	listaAmigosUl.appendChild(listaAmigosNewLi);
	
	amigoInput.value = "";
	amigoInput.focus();
}

function sortearAmigo() {
	let listaAmigosUl = document.getElementById("listaAmigos");
	if(listaAmigosUl.children.length == 0){alert("No tienes amig@s");return;}
	let resultadoUl = document.getElementById("resultado");
	
	let resultadoNewLi = document.createElement("li");
	resultadoNewLi.innerHTML = _getRandomFromList(listaAmigosUl.children).innerHTML;
	
	resultadoUl.innerHTML = "";
	resultadoUl.appendChild(resultadoNewLi);
}

function _getRandomFromList(inputList){
	return inputList[Math.floor(Math.random() * inputList.length)];
}
