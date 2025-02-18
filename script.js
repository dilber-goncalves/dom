const inputCadastrar = document.querySelector('input');
const botaoCadastrar = document.querySelector('button');
const elementoUl = document.querySelector('ul');

botaoCadastrar.onclick = function() {
    console.log("cadastrar item");
    if(inputCadastrar.value.length <= 0) {
        inputCadastrar.classList.add('borda-vermelha');
        return;
    }

    const novaLi = document.createElement('li');

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';

    botaoExcluir.onclick = function() {
        novaLi.remove();
    }

    const elementoSpan = document.createElement('span');
    elementoSpan.textContent = inputCadastrar.value;

    novaLi.appendChild(elementoSpan);
    novaLi.appendChild(botaoExcluir);
    novaLi.textContent = inputCadastrar.value;
    novaLi.onclick = function(event) {
        const elementoLi = event.target;
        elementoLi.classList.toggle('comprado');
    }

    elementoUl.appendChild(novaLi);
    inputCadastrar.value = '';
}; 