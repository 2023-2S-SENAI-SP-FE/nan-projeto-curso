listarUsuarios();

function listarUsuarios(){
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios`)
        .then((response) => response.json())
        .then((usuario) => {
            for (i = 0; i < usuario.length; i++){
                document.querySelector('.table-content').innerHTML += `
            <div class="table-row">
                <div class="table-data">${usuario[i].id}</div>
                <div class="table-data">${usuario[i].nome}</div>
                <div class="table-data edit">
                    <div class="btn"><button type="button" class="btnEdit" onclick=listarProdutoId(${usuario[i].id})>Editar</button></div>
                    <div class="btn"><button type="button" class="btnExcluir" onclick=excluirProduto(${usuario[i].id})>Excluir</button></div>
                </div>
            </div>
                `;
            }
        })
}