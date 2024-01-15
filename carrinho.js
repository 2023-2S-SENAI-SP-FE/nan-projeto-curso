if(document.readyState =="loading"){
    document.addEventListener("DOMContentLoaded", ready)
} else{
    ready
}

function ready(){
    atualizarTotal()
    const RemoverProdutoBotao = document.getElementsByClassName("excluir")
    for(var i = 0; i <RemoverProdutoBotao.length; i++){
        RemoverProdutoBotao[i].addEventListener("click", removerProduto)
    }
    const quantidadeInputs = document.getElementsByClassName("Qproduto")
    for(var i = 0; quantidadeInputs.length; i++){
        quantidadeInputs[i].addEventListener("change", atualizarTotal)
    }
}
function removerProduto(event){
    event.target.parentElement.parentElement.parentElement.remove()
    atualizarTotal()
}

function atualizarTotal(){
    let PrecoTotalProdutosCarrinho = 0
    const ProdutosCarrinho = document.getElementsByClassName("produtoNoCarrinho")
    for(var i = 0; i < ProdutosCarrinho.length; i++){
        const precoProduto = ProdutosCarrinho[i].getElementsByClassName("valorProduto")[0].innerText.replace("R$", "").replace(",", ".")
        const quantidadeProdutos = ProdutosCarrinho[i].getElementsByClassName("Qproduto")[0].value
        PrecoTotalProdutosCarrinho += precoProduto * quantidadeProdutos
    }
    
    let frete = document.querySelector(".PrecoTotalCarrinho h6").innerText.replace("R$", "").replace(",", ".")
    let TotalCarrinho = 0
    frete = parseFloat(frete)
    console.log(frete)
    console.log(PrecoTotalProdutosCarrinho)
    TotalCarrinho = PrecoTotalProdutosCarrinho + frete
    PrecoTotalProdutosCarrinho = PrecoTotalProdutosCarrinho.toFixed(2)
    PrecoTotalProdutosCarrinho = PrecoTotalProdutosCarrinho.replace(".", ",")
    document.querySelector(".PrecoTotalCarrinho span").innerText = "R$"+ PrecoTotalProdutosCarrinho
    TotalCarrinho = TotalCarrinho.toFixed(2)
    TotalCarrinho = TotalCarrinho.replace(".", ",")
    document.querySelector(".Total h3").innerText = "R$"+ TotalCarrinho
    
}
