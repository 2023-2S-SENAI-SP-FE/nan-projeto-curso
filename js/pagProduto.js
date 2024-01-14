function dadosProduto() {
    let url_string = window.location.href;
    let id = new URL(url_string).searchParams.get('id')
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?id=${id}&page=1&limit=1`)
        .then(produto => produto.json())
        .then((produto) => {
            document.querySelector('.produto-container').innerHTML = 
            `
            <div class="produto-content">
                                <div class="produto-thumbs">
                                    <img src="${produto[0].img2}" alt="" srcset="">
                                    <img src="${produto[0].img3}" alt="" srcset="">
                                    <img src="${produto[0].img4}" alt="" srcset="">
                                </div>
                                <div class="produto-dados">
                                    <img src="${produto[0].img1}" alt="" srcset="">
                                    <div class="produto-dados-conteudo">
                                        <h2>${produto[0].nome}</h2>
                                        <div class="produto-valores">
                                            <p>R$ ${produto[0].preco}</p>
                                            <p class="parcelas">Em até 6x de R$ ${(produto[0].preco / 6).toFixed(2)} sem juros </p>
                                        </div>
                                        <p class="produto-mini-descricao">${produto[0].descricao.substr(0,70)}...</p>
                                    <div class="hd"></div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="produto-frete">
                                <div class="frete-dados">
                                    <h2>Frete</h2>
                                    <input type="text" id="input-frete">
                                    <button type="button" class="btnCalcularFrete">Calcular Frete</button>
                                    <div class="divComprar">
                                        <button type="button" class="btnFreteComprar">COMPRAR</button>
                                    </div>
                                </div>
                            </div>
            
            `
            document.querySelector('.produto-descricao-completa').innerHTML = 
            `
            <h2>Descrição Completa</h2>
            <p>${produto[0].descricao}</p>
            `
        })
        
}

dadosProduto();



