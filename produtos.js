listarProdutos();

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
    
    fetch('https://655f44c1879575426b44f818.mockapi.io/api/produtos', {
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
    limparFormulario();
    document.getElementById('listaProdutos').innerHTML = '';
    fetch('https://655f44c1879575426b44f818.mockapi.io/api/produtos')
        .then((response) => response.json())
        .then((produtos) => {produtosData = produtos
        for (i = 0; i < produtosData.length; i++){
            document.getElementById('listaProdutos').innerHTML += `<p class="linhas">Produto: ${produtosData[i].nome} || Preço: ${produtosData[i].preco} || Categoria: ${produtosData[i].categoria} || <button type="button" class="btnExcluir" onclick=excluirProduto(${produtosData[i].id})>Excluir</button> || <button type="button" class="btnExcluir" onclick=listarIndividual(${produtosData[i].id})>Editar</button></p>`
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

function editarProduto(id){
    
    let Altdata = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        img1: document.getElementById('img1').value,
        img2: document.getElementById('img2').value,
        img3: document.getElementById('img3').value
    }
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(Altdata)
    })
    alert('Produto editado com sucesso!')
    limparFormulario();
    listarProdutos();
}

function listarIndividual(id){
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`)
        .then((response) => response.json())
        .then((produto) => {
            document.getElementById('nome').value = produto.nome
            document.getElementById('preco').value = produto.preco
            document.getElementById('descricao').value = produto.descricao
            document.getElementById('categoria').value = produto.categoria
            document.getElementById('img1').value = produto.img1
            document.getElementById('img2').value = produto.img2
            document.getElementById('img3').value = produto.img3
        })
    document.getElementById('botoes').innerHTML = `<button onclick='editarProduto(${id})'>Editar</button>  `
        
}