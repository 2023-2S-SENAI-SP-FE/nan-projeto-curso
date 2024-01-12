function listarProduto(categoria){
    let url;
    if (categoria != undefined){
        url = `https://655f44c1879575426b44f818.mockapi.io/api/produtos/?categoria=${categoria}`;
    }else{
        url = `https://655f44c1879575426b44f818.mockapi.io/api/produtos/`;
    }
    let prodCont = document.querySelector('.produto-conteiner');
    prodCont.innerHTML = '';
    fetch(`${url}`)
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
                <button type="button" class='btnComprar' onclick='dadosProduto(${item.id})'> COMPRAR </button>
                `
                prodCont.appendChild(div);
            });
        })
        
        let produtoDetalhes = document.querySelector('.produtoDetalhes');

        if(produtoDetalhes ==  null){
            console.log('div n existe')
        }else{
            produtoDetalhes.remove();
        }

}

listarProduto();