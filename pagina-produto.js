function dadosProduto(id){
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(resposta => resposta.json())
    .then(resposta => {
        produto = resposta;

        document.querySelector('#paginaProduto').innerHTML = 
        
            `   
            <section class="paginaProdutoPrincipal">
            <div class="paginaProdutoPrincipalProduto">
                <div class="paginaProdutoPrincipalProdutoMiniaturas">
                    <figure><img width="80px" src="./${produto.img1}" alt="imagem 1 do  ${produto.nome}"></figure>
                    <figure><img width="80px" src="./${produto.img2}" alt="imagem 2 do  ${produto.nome}"></figure>
                    <figure><img width="80px" src="./${produto.img2}" alt="imagem 3 do  ${produto.nome}"></figure>
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
                        <p>Em até 6x de ${(produto.preco / 6).toFixed(2)} sem juros </p>
                    </div>

                    <p> ${produto.descricao}</p>

                </div>
            </div>
            <div class="paginaProdutoPrincipalRelacionados">
                <div class="paginaProdutoPrincipalRelacionadosProdutos">
                
                    <figure><img width="96px" src="./bomba-de-agua.png" alt="produto relacionado"></figure>
                    <p>Bomba d’àgua volvo 3.0/ 3.2 24v. S60/ S80/ V60/ XC60/ XC70</p>
                    <p>R$ 476,25</p>
                    <p>Em até 6x de R$ 76,35 sem juros </p>
                    <button type="submit">COMPRAR</button>
                </div>

                <div class="paginaProdutoPrincipalRelacionadosProdutos">
                    <figure><img width="96px" src="./bomba-de-agua.png" alt="produto relacionado"></figure>
                    <p>Bomba d’àgua volvo 3.0/ 3.2 24v. S60/ S80/ V60/ XC60/ XC70</p>
                    <p>R$ 476,25</p>
                    <p>Em até 6x de R$ 76,35 sem juros </p>
                    <button type="submit">COMPRAR</button>
                </div>

                <div class="paginaProdutoPrincipalRelacionadosProdutos">
                    <figure><img width="96px" src="./bomba-de-agua.png" alt="produto relacionado"></figure>
                    <p>Bomba d’àgua volvo 3.0/ 3.2 24v. S60/ S80/ V60/ XC60/ XC70</p>
                    <p>R$ 476,25</p>
                    <p>Em até 6x de R$ 76,35 sem juros </p>
                    <button type="submit">COMPRAR</button>
                </div>
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

                    <form action="" class="paginaProdutoAsideInteracaoFrete">
                        <!-- <h3>Frete</h3> -->
                        <input type="text" name="CEP" id="CEP" placeholder="00000000-0">
                        <button type="submit">Calcular frete</button>
                    </form>


            </div>

            <div class="paginaProdutoAsideEspaçoVago1"></div>
            <div class="paginaProdutoAsideEspaçoVago2"></div>
        </aside>
        </article>
        `
        
        })

}

function produtosRel(){

}


document.querySelector('#iniciaPagina').addEventListener('click', () => {

    console.log(dadosProduto(3));  



})