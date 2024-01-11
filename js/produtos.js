function listarProduto(categoria){
    let prodCont = document.querySelector('.produto-conteiner');
    prodCont.innerHTML = '';
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?categoria=${categoria}`)
        .then((response) => response.json())
        .then((produto) => {
            produto.forEach(item => {
                const div = document.createElement('div');
                div.setAttribute("class", "produto");
                div.innerHTML = `
                <div class='divImg'> <img src='${item.img1}'> </div>
                <p class='tituloProduto'>${item.nome}</p>
                <strong>R$ ${item.preco}</strong>
                <p class='parcProduto'> Em até 6x de R$ ${(item.preco / 6).toFixed(2)}</p>
                <button type="button" class='btnComprar'> COMPRAR </button>
                `
                prodCont.appendChild(div);
            });
        })
}

listarProduto();