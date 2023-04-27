const form = document.querySelector('#form');

let linhas = '';

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const nome = document.getElementById('form-nome');
    const numero = document.getElementById('form-numero');
    
    linhas += `<tr>
        <td>${nome.value}</td>
        <td>${numero.value}</td>
    <tr>`;

    document.querySelector('tbody').innerHTML = linhas;

    nome.value = '';
    numero.value = '';
});