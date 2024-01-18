listarCategorias();
function limparFormulario(){
    const campos = document.querySelectorAll('.form-value')
    campos.forEach(campo => campo.value = '')
}

function cadastrarCategoria(){

    const data = {
        nome: document.getElementById('nome').value
    }

    fetch('https://655f44c1879575426b44f818.mockapi.io/api/categorias', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    alert(`Categoria adicionada com sucesso!`)
    limparFormulario();
    listarCategorias();

}

function listarCategorias(){
    document.querySelector('.table-content').innerHTML = '';
    fetch('https://655f44c1879575426b44f818.mockapi.io/api/categorias')
        .then((response) => response.json())
        .then((categoria) => {
            for (i = 0; i < categoria.length; i++){
                document.querySelector('.table-content').innerHTML += `
            <div class="table-row">
                <div class="table-data">${categoria[i].id}</div>
                <div class="table-data">${categoria[i].nome}</div>
                <div class="table-data edit">
                    <div class="btn"><button type="button" class="btnEdit" onclick=listarCategoriaId(${categoria[i].id})>Editar</button></div>
                    <div class="btn"><button type="button" class="btnExcluir" onclick=excluirCategoria(${categoria[i].id})>Excluir</button></div>
                </div>
            </div>
                `;
            }
        })
}

function listarCategoriaId(id){
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/categorias/${id}`)
        .then((response) => response.json())
        .then((categoria) => {
            document.getElementById('nome').value = categoria.nome
        })
    voltarTopo();
    document.querySelector('.button').innerHTML = `<button class="btnCadastrar" onclick="editarCategoria(${id})">Editar</button>`;
}

function editarCategoria(id){
    const data = {
        nome: document.getElementById('nome').value
    }
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/categorias/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    alert('Categoria Editada com sucesso!')
    limparFormulario();
    listarCategorias();
    document.querySelector('.button').innerHTML = `<button class="btnCadastrar" onclick="cadastrarCategoria()">Cadastrar</button>`;

}


function excluirCategoria(id){
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/categorias/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        },
    })
    alert("Categoria excluída com sucesso!")
    listarCategorias();
}

function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}