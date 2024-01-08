listarProdutos()
function listarProdutos(){
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

