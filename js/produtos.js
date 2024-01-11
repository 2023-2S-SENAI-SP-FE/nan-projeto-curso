function listarProduto(){
    let prodCont = document.querySelector('.produto-conteiner');
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?page=1&limit=15`)
        .then((response) => response.json())
        .then((produto) => {
            produto.forEach(item => {
                const div = document.createElement('div');
                div.setAttribute("class", "produto");
                div.innerHTML = `
                <div class='divImg'> <img src='${item.img1}'> </div>
                <p class='tituloProduto'>${item.nome}</p>
                <strong>R$ ${item.preco}</strong>
                <p> Em até 6x de R$ ${(item.preco / 6).toFixed(2)}</p>
                <button type="button"> COMPRAR </button>
                `
                prodCont.appendChild(div);
            });
        })
}

listarProduto();