let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo.trim() != "") {
        listaAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        actualizarLista();
    } else {
        alert("Ingrese un nombre valido");
    }
    return;
}

function actualizarLista() {
    let listadoHTML = document.querySelector("#listaAmigos");
    listadoHTML.innerHTML = "";
    for (let contador = 0; contador < listaAmigos.length; contador++) {
        let amigo = listaAmigos[contador];
        let li = document.createElement("li");
        li.textContent = amigo;
        listadoHTML.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        let numeroRandom = Math.floor(Math.random() * listaAmigos.length);
        amigoSorteado = listaAmigos[numeroRandom];
        document.getElementById("resultado").innerHTML = amigoSorteado;
        document.getElementById("listaAmigos").innerHTML = "";
    }
    return;
}




