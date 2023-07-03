const form = document.getElementById('form-contato');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    totalContatos();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('num-contato');

    if(nome.includes(inputNomeContato.value)){
        alert(`O nome ${inputNomeContato.value} Já foi inserido, adicione outro nome ou sobrenome.`);
    }else{
        nome.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}<td>`;
        linha += `<td> ${inputTelefoneContato.value}<td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function totalContatos(){
    const quantidadeContatos = calculaContatos();

    document.getElementById('total-contatos').innerHTML = quantidadeContatos.toFixed(0);
}

function calculaContatos(){
    return nome.length
}