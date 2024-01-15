listarPedidos();

function teste() {
    document.getElementById('pedido-container').setAttribute('style', 'display: block');
}

function listarPedidos(){
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/pedidos`)
        .then((response) => response.json())
        .then((pedido) => {
            for (i = 0; i < pedido.length; i++){
                document.querySelector('.table-content').innerHTML += `
            <div class="table-row">
                <div class="table-data">${pedido[i].id}</div>
                <div class="table-data">${pedido[i].nome_usuario}</div>
                <div class="table-data">${pedido[i].status}</div>
                <div class="table-data">R$ ${pedido[i].total.toFixed(2)}</div>
                <div class="table-data edit">
                    <div class="btn"><button type="button" class="btnEdit" onclick=listarProdutoId(${pedido[i].id})>Editar</button></div>
                    <div class="btn"><button type="button" class="btnExcluir" onclick=excluirProduto(${pedido[i].id})>Excluir</button></div>
                </div>
            </div>
                `;
            }
        })
}

function excluirUsuario(id){
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/pedidos/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    })
    alert('Pedido excluído com sucesso!');
    lisarPedidos();

}