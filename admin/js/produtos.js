listarProdutos()

function limparFormulario(){
    const campos = document.querySelectorAll('.form-value')
    campos.forEach(campo => campo.value = '')
}

function listarProdutos(){
    document.querySelector('.table-content').innerHTML = '';
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos`)
        .then((response) => response.json())
        .then((produto) => {
            for (i = 0; i < produto.length; i++){
                document.querySelector('.table-content').innerHTML += `
            <div class="table-row">
                <div class="table-data">${produto[i].id}</div>
                <div class="table-data">${produto[i].nome}</div>
                <div class="table-data edit">
                    <div class="btn"><button type="button" class="btnEdit" onclick=listarProdutoId(${produto[i].id})>Editar</button></div>
                    <div class="btn"><button type="button" class="btnExcluir" onclick=excluirProduto(${produto[i].id})>Excluir</button></div>
                </div>
            </div>
                `;
            }
        }).then(atualizaCategorias())
}

function atualizaCategorias(){
    document.querySelector('#categoria').innerHTML += '';
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/categorias`)
    .then( categorias => categorias.json())
    .then( categorias => {
        console.log(categorias)
        for (const i of categorias) {
            document.querySelector('#categoria').innerHTML += `
            <option value="${i.nome}">${i.nome}</option>
            `
        }
    })




}

function cadastrarProduto(){
    const data = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('valor').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        img1: document.getElementById('img1').value,
        img2: document.getElementById('img2').value,
        img3: document.getElementById('img3').value,
        img4: document.getElementById('img4').value,
        avaliacao: 0,
        status: 'disponível'
    }
    
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    alert('Produto Adicionado com Sucesso!')
    limparFormulario();
    listarProdutos();

}

function excluirProduto(id){
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    })
    alert('Produto excluído com sucesso!');
    listarProdutos();

}

function listarProdutoId(id){
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`)
        .then((response) => response.json())
        .then((produto) => {
            document.getElementById('nome').value = produto.nome,
            document.getElementById('valor').value = produto.preco,
            document.getElementById('descricao').value = produto.descricao,
            document.getElementById('categoria').value = produto.categoria,
            document.getElementById('img1').value = produto.img1,
            document.getElementById('img2').value = produto.img2,
            document.getElementById('img3').value = produto.img3,
            document.getElementById('img4').value = produto.img4
        })
        voltarTopo();
        document.querySelector('.button').innerHTML = `<button class="btnCadastrar" onclick="editarProduto(${id})">Editar</button>`;
}

function editarProduto(id){
    const data ={
        nome: document.getElementById('nome').value,
        preco: document.getElementById('valor').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        img1: document.getElementById('img1').value,
        img2: document.getElementById('img2').value,
        img3: document.getElementById('img3').value,
        img3: document.getElementById('img4').value
    }

    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`,{
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    alert('Produto editado com sucesso!');
    limparFormulario();
    listarProdutos();
    document.querySelector('.button').innerHTML = `<button class="btnCadastrar" onclick="cadastrarProduto()">Cadastrar</button>`;


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

function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}