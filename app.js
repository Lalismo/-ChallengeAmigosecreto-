// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {

    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; 
    }
    
  
    amigos.push(nombreAmigo);
    
    actualizarListaAmigos();
    
    inputAmigo.value = '';
    
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear amigos
function sortearAmigo() {

    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añada al menos un nombre.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>!</li>`;

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
}
