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
        })
}

function cadastrarProduto(){
    const data = {
        nome: document.getElementById('nome').value,
        valor: document.getElementById('nome').value,
        descricao: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        img1: document.getElementById('img1').value,
        img2: document.getElementById('img2').value,
        img3: document.getElementById('img3').value,
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

