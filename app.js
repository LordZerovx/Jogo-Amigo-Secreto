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