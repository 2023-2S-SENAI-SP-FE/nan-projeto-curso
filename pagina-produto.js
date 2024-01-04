document.querySelector('#iniciaPagina').addEventListener('click', () => {    
    document.querySelector('#paginaProduto').innerHTML = `
    
    <section class="paginaProdutoPrincipal">
    <div class="paginaProdutoPrincipalProduto">
        <div class="paginaProdutoPrincipalProdutoMiniaturas">
            <figure><img width="80px" src="./bomba-de-agua.png" alt=""></figure>
            <figure><img width="80px" src="./bomba-de-agua.png" alt=""></figure>
            <figure><img width="80px" src="./bomba-de-agua.png" alt=""></figure>
        </div>
        <div class="paginaProdutoPrincipalProdutoFoto">
            <figure><img width="280" src="./bomba-de-agua.png" alt=""></figure>
        </div>
        <div class="paginaProdutoPrincipalProdutoDescricao">
            <div class="paginaProdutoPrincipalProdutoDescricaoC">
                <h2>Titulo do produto</h2>
                <div class="paginaProdutoPrincipalProdutoDescricaoEstrelas">
                    <figure><img src="./Star 4.png" alt=""></figure>
                    <figure><img src="./Star 4.png" alt=""></figure>
                    <figure><img src="./Star 4.png" alt=""></figure>
                    <figure><img src="./Star 4.png" alt=""></figure>
                    <figure><img src="./Star 5.png" alt=""></figure>
                </div>
            </div>

            <div class="paginaProdutoPrincipalProdutoDescricaoC">
                <p>R$ 476,25</p>
                <p>Em até 6x de R$ 76,35 sem juros </p>
            </div>

            <p>Mini descrição produto/ pontos importantes pipipopo lorem ipsumo</p>

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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem consequuntur provident corrupti amet odit iure eos distinctio non, illum facilis temporibus voluptate earum voluptas, aut debitis dolorum soluta tenetur ut placeat? At, provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis sunt temporibus aliquid fuga, omnis at possimus doloremque enim adipisci ad quae ipsam repellendus nobis.</p>
    </div>
</section>
<aside class="paginaProdutoAside">
    <div class="paginaProdutoAsideInteracao">

            <form action="" class="paginaProdutoAsideInteracaoComprar">
                <p>Estoque do produto: 100 </p>
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
</article>`

})