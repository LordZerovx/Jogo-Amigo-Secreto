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
}




//alert('Por Favor, Digite Um Nome Válido!');