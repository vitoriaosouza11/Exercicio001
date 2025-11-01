let contatos = []

function fnSalvar() {
    let umContato = {
        nomeDoFilme: document.getElementById('nomeDoFilme').value,
        fotoDeCapa: document.getElementById('foto').value,
        ano: document.getElementById('ano').value,
        avaliacao: document.getElementById('avaliacao').value,
        trailer: document.getElementById('trailer').value,
        genero: document.getElementById('genero').value,
        duracao: document.getElementById('duracao').value,
        descricao: document.getElementById('descricao').value
    };

    contatos.push(umContato)

    console.dir(contatos)
}

function fnListar() {
    let dados = "";

    contatos.forEach(function (umContato, i) {
        dados += `
        <div class="col-md-4 mb-4">
            <div class="card" style="width: 100%;">
                <img src="${umContato.fotoDeCapa}" class="card-img-top" alt="Foto de ${umContato.nomeDoFilme}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${umContato.nomeDoFilme}</h5>
                    <p class="card-text">
                        <strong>Ano:</strong> ${umContato.ano} <br>
                        <strong>Genero:</strong> ${umContato.genero} <br>
                        <strong>Duracao:</strong> ${umContato.duracao} <br>
                        <strong>Avaliacao:</strong> ${umContato.avaliacao} <br>
                        <p class="card-text">
                        <strong>Descricao:</strong> ${umContato.descricao} <br>
                        </p>
                    </p>
                    <button type="button" onclick="fnExcluir(${i})" class="btn btn-danger">Excluir</button>
                </div>
            </div>
        </div>`;
    });

    document.getElementById("listaDeContatos").innerHTML = dados;
}

function fnExcluir(indice) {
    contatos.splice(indice, 1)
    fnListar()
}

function fnLimpar() {
    document.getElementById('formulario').reset()
}

document.getElementById('btSalvar').addEventListener('click', function () {
    fnSalvar()
    fnListar()
    fnLimpar()
})