const form = document.getElementById('form');
const apv = '<img src="./images/aprovado.png" alt="aprovado"/>';
const rpv = '<img src="./images/reprovado.png" alt="reprovado"/>';
let linhas = '';
const ativi = [];
const not = [];
const spanapv = '<span class="resultado aprovado">Aprovado</span>'
const spanrpv = '<span class="resultado reprovado">Reprovado</span>'
const notaminima = prompt('Digite a nota pra passar:')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    AddLinhas();
    AttTabela();
    MediaFinal();
});
function AddLinhas(){
    const nome = document.getElementById('nome');
    const nota = document.getElementById('nota');
        ativi.push(nome.value);
        not.push(parseFloat(nota.value));
            let linha = '<tr>';
                linha += `<td>${nome.value}</td>`;
            linha += `<td>${nota.value}</td>`;
        linha += `<td>${nota.value >= notaminima? apv:rpv }</td>`;
        linha += `</tr>`;
    linhas += linha;
    nome.value = '';
    nota.value = '';
};

function AttTabela(){
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
    const mediaf = calculoM();
    document.getElementById('mediafinal').innerHTML = mediaf
    document.getElementById('mediafinalresultado').innerHTML = mediaf >= notaminima ? spanapv : spanrpv; 
};

function ATTMediaFinal(){

}
function calculoM(){
        let soma = 0;
    for(let i = 0; i < not.length; i++){
        soma += not[i];
    }
    return soma/not.length
}
