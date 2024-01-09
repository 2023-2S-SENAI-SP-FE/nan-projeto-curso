function dadosProduto(id) {
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {
            produto = resposta;

            document.querySelector('#paginaProduto').innerHTML = `   
            <section class="paginaProdutoPrincipal">
            <div class="paginaProdutoPrincipalProduto">
                <div class="paginaProdutoPrincipalProdutoMiniaturas">
                    <figure><img width="80px" src="${produto.img1}" alt="imagem 1 do  ${produto.nome}"></figure>
                    <figure><img width="80px" src="${produto.img2}" alt="imagem 2 do  ${produto.nome}"></figure>
                    <figure><img width="80px" src="${produto.img2}" alt="imagem 3 do  ${produto.nome}"></figure>
                </div>
                <div class="paginaProdutoPrincipalProdutoFoto">
                    <figure><img width="280" src="${produto.img1}" alt="imagem 1 do  ${produto.nome}"></figure>
                </div>
                <div class="paginaProdutoPrincipalProdutoDescricao">
                    <div class="paginaProdutoPrincipalProdutoDescricaoC">
                        <h2>${produto.nome}</h2>
                        <div class="paginaProdutoPrincipalProdutoDescricaoEstrelas">
                            <figure><img src="./Star 4.png" alt=""></figure>
                            <figure><img src="./Star 4.png" alt=""></figure>
                            <figure><img src="./Star 4.png" alt=""></figure>
                            <figure><img src="./Star 4.png" alt=""></figure>
                            <figure><img src="./Star 5.png" alt=""></figure>
                        </div>
                    </div>

                    <div class="paginaProdutoPrincipalProdutoDescricaoC">
                        <p>R$ ${produto.preco}</p>
                        <p>Em até 6x de R$ ${(produto.preco / 6).toFixed(2)} sem juros </p>
                    </div>

                    <p> ${produto.descricao}</p>

                </div>
                </div>
                <div id="paginaProdutoPrincipalRelacionados">       

                </div>
                <div class="paginaProdutoPrincipalDescricao">
                    <h3>Descrição do Produto</h3>
                    <p>${produto.descricao}</p>
                </div>
            </section>
            <aside class="paginaProdutoAside">
                <div class="paginaProdutoAsideInteracao">
                    <form action="" class="paginaProdutoAsideInteracaoComprar">
                        <p>Status do produto: ${produto.status} </p>
                        <div>
                            <label for="quantidadeProduto">Quantidade: </label>
                            <select name="quantidadeProduto" id="quantidadeProduto">
                                <option value="1">1</option>
                                <option value="10">10</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <button type="submit">COMPRAR</button>
                        <button type="submit">Adicionar ao carrinho</button>
                    </form>

                    <div action="" class="paginaProdutoAsideInteracaoFrete" id = "paginaProdutoAsideInteracaoFrete">
                        <!-- <h3>Frete</h3> -->
                        <input type="text" name="CEP" id="CEP" placeholder="00000000-0">
                        <button id="calcularFrete">Calcular frete</button>
                    </div>
                </div>
                <div class="paginaProdutoAsideEspaçoVago1"></div>
                <div class="paginaProdutoAsideEspaçoVago2"></div>
            </aside>
        </article>
            `})

        .then(respostarelacionado => {
            for (let index = 1; index <= 3; index++) {

                fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${idRel(index)}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                    .then(respostarelacionado => respostarelacionado.json())
                    .then(respostarelacionado => {

                        produtoRelecionado = respostarelacionado;

                        // console.log(produtoRelecionado)

                        document.querySelector('#paginaProdutoPrincipalRelacionados').innerHTML += `
                    <div class="paginaProdutoPrincipalRelacionadosProdutos">
                
                        <figure><img width="96px" src="${produtoRelecionado.img1}" alt="imagem do  ${produtoRelecionado.nome}"></figure>
                        <p> ${produtoRelecionado.nome}</p>
                        <p>R$ ${produtoRelecionado.preco}</p>
                        <p>Em até R$ ${(produtoRelecionado.preco / 6).toFixed(2)} sem juros </p>
                        <button type="submit">COMPRAR</button>

                    </div>
                    `})
            }})
            .then(frete => {

                document.querySelector('#calcularFrete').addEventListener('click', () => {
                    calcularFrete(document.querySelector("#CEP").value)
                })

            })
}


function idRel(idrelacionado) {
    valorid = 0
    while(valorid <= 0 ){
        valorid = parseInt(Math.random()  * 20)
    }
    valorid = 3
    return valorid
}

function calcularFrete(cep) {
    valorFrete = (cep * 500) / 899999999
    console.log("Valor frete = " + valorFrete)

    document.querySelector('#paginaProdutoAsideInteracaoFrete').innerHTML += `
    <p> Freté é R$ ${(valorFrete).toFixed(2)}</p>
    
    
    `
}



document.querySelector('#iniciaPagina').addEventListener('click', () => {
    dadosProduto(3)
})



