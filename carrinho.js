const RemoverProdutoBotao = document.getElementsByClassName("excluir")
for(var i = 0; i <RemoverProdutoBotao.length; i++){
    RemoverProdutoBotao[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.parentElement.remove()
        atualizarTotal()
    })
}
function atualizarTotal(){
    let PrecoTotalProdutosCarrinho = 0
    const ProdutosCarrinho = document.getElementsByClassName("produtoNoCarrinho")
    for(var i = 0; i < ProdutosCarrinho.length; i++){
        const precoProduto = ProdutosCarrinho[i].getElementsByClassName("valorProduto")[0].innerText.replace("R$", "").replace(",", ".")
        const quantidadeProdutos = ProdutosCarrinho[i].getElementsByClassName("Qproduto")[0].value
        PrecoTotalProdutosCarrinho += precoProduto * quantidadeProdutos
    }
    PrecoTotalProdutosCarrinho = PrecoTotalProdutosCarrinho.toFixed(2)
    PrecoTotalProdutosCarrinho = PrecoTotalProdutosCarrinho.replace(".", ",")
    document.querySelector(".PrecoTotalCarrinho span").innerText = "R$"+ PrecoTotalProdutosCarrinho
}
