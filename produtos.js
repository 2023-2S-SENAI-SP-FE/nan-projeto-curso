

function cadastrarProduto(){

    const data = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        img1: document.getElementById('img1').value,
        img2: document.getElementById('img2').value,
        img3: document.getElementById('img3').value,
        avaliacao: 0,
        status: 'disponível',
    }
    
    const response = fetch('https://655f44c1879575426b44f818.mockapi.io/api/produtos', {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    alert(`Produto adicionado com sucesso!`)
    limparFormulario();
    listarProdutos();
}


function listarProdutos() {
    document.getElementById('listaProdutos').innerHTML = '';
    fetch('https://655f44c1879575426b44f818.mockapi.io/api/produtos')
        .then((response) => response.json())
        .then((produtos) => {produtosData = produtos
        for (i = 0; i < produtosData.length; i++){
            document.getElementById('listaProdutos').innerHTML += `<p class="linhas">Produto: ${produtosData[i].nome} || Preço: ${produtosData[i].preco} || Categoria: ${produtosData[i].categoria} <button type="button" class="btnExcluir" onclick=excluirProduto(${produtosData[i].id})>Excluir</button> </p>`
        }
        })

}

function limparFormulario(){
    const campos = document.querySelectorAll('.form-value')
    campos.forEach(campo => campo.value = '')
}

function excluirProduto(id){
            fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                },
            })
            alert("Produto excluído com sucesso!")
            listarProdutos();
}

listarProdutos();