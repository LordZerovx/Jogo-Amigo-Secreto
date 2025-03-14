let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == "") {
        let titulo = document.querySelector('input');
        titulo.placeholder = 'Digite um nome válido';
        return;
    } else {
        let titulo = document.querySelector('input');
        titulo.placeholder = 'Digite um nome';
    }

    amigos.push(nome);
    document.querySelector('input').value = '';
    document.querySelector('input').placeholder = 'Digite um nome';
    console.log(amigos);

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Adicione amigos à lista antes de sortear!');
        return;
    }


    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let nomeSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O nome sorteado foi: ${nomeSorteado}`;

    document.getElementById('listaAmigos').innerHTML = '';
}

//document.querySelector('input').addEventListener('click', adicionarAmigo);


//alert('Por Favor, Digite Um Nome Válido!');





//function atualizarLista() {
////    let lista = document.getElementById('listaAmigos');
 //   lista.innerHTML = '';

  //  for (let i = 0; i < amigos.length; i++) {
  //      const item = document.createElement("li");
  //      item.textContent = amigos[i];
   //     lista.appendChild(item);
   // }
//}

//document.querySelector('input').addEventListener('click', adicionarAmigo);