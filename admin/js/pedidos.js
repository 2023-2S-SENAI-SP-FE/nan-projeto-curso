listarPedidos();

function teste() {
    document.getElementById('pedido-container').setAttribute('style', 'display: block');
}

function listarPedidos(){
    document.querySelector('.table-content').innerHTML = '';
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/pedidos`)
        .then((response) => response.json())
        .then((pedido) => {
            console.log(pedido)
            for (i = 0; i < pedido.length; i++){
                document.querySelector('.table-content').innerHTML += `
            <div class="table-row">
                <div class="table-data">${pedido[i].id}</div>
                <div class="table-data">${pedido[i].nome_usuario}</div>
                <div class="table-data">${pedido[i].status}</div>
                <div class="table-data">R$ ${pedido[i].total}</div>
                <div class="table-data edit">
                    <div class="btn"><button type="button" class="btnExcluir" onclick=excluirPedido(${pedido[i].id})>Excluir</button></div>
                </div>
            </div>
                `;
            }
        })
}

function excluirPedido(id){
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/pedidos/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    })
    alert('Pedido excluído com sucesso!');
    listarPedidos();

}