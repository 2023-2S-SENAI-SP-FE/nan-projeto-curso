function dadosProduto(id) {
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(produto => produto.json())
        .then(produto => {
            document.querySelector('.main').innerHTML = `  
            <h1>PRODUTOS</h1>
            <section class="produto-conteiner"></section>
            <div class="produtoDetalhes">
                <section class="paginaProdutoPrincipal">
                <div class="paginaProdutoPrincipalProduto">
                    <div class="paginaProdutoPrincipalProdutoMiniaturas">
                    <!--    <figure><img width="80px" height="80px" src="${produto.img1}" alt="imagem 1 do  ${produto.nome}"></figure> -->
                        <figure><img src="${produto.img2}" alt="imagem 2 do  ${produto.nome}"></figure>
                        <figure><img src="${produto.img3}" alt="imagem 3 do  ${produto.nome}"></figure>
                        <figure><img src="${produto.img4}" alt="imagem 4 do  ${produto.nome}"></figure>
                    </div>
                    <div class="paginaProdutoPrincipalProdutoFoto">
                        <figure><img src="${produto.img1}" alt="imagem 1 do  ${produto.nome}"></figure>
                    </div>
                    <div class="paginaProdutoPrincipalProdutoDescricao">
                        <div class="paginaProdutoPrincipalProdutoDescricaoC">
                            <h2>${produto.nome}</h2>
                            <div class="paginaProdutoPrincipalProdutoDescricaoEstrelas">
                                <figure><img src="../img/Star 4.png" alt=""></figure>
                                <figure><img src="../img/Star 4.png" alt=""></figure>
                                <figure><img src="../img/Star 4.png" alt=""></figure>
                                <figure><img src="../img/Star 4.png" alt=""></figure>
                                <figure><img src="../img/Star 5.png" alt=""></figure>
                            </div>
                        </div>
                    

                        
                        <p> ${produto.descricao}</p>
                    </div>
                </div>
            

                <aside class="paginaProdutoAside">
                        <div class="precoProduto"> 
                            <p class="strong">R$ ${produto.preco}</p> 
                            <p class="parcelas">Em até 6x de R$ ${(produto.preco / 6).toFixed(2)} sem juros </p>
                        </div>
                        <button type="submit" class="btnComprarFrete">COMPRAR</button>
                    </form>

                    

                        <div class="calculoFrete">
                            <input type="text" name="CEP" id="CEP" placeholder="00000000-0" class="inputCep">
                            <button id="calcularFrete" onclick="calcularFrete(06773330)">Calcular frete</button>
                            <p class="freteValor"></p>
                        </div>
                    
            </aside>
            </section>


                   
               </div>
            `})

        .then(respostarelacionado => {
            id = []
            for (let index = 0; index <= 2; index++) {
              id[index] = idRel()

              fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id[index]}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                    .then(produtoRelecionado => produtoRelecionado.json())
                    .then(produtoRelecionado => {

                        // console.log(produtoRelecionado)
 
                        if(id.length <= 3){
                            document.querySelector('#paginaProdutoPrincipalRelacionados').innerHTML += `
                                <div class="paginaProdutoPrincipalRelacionadosProdutos" >
                                    <figure><img width="96px" height="96px" src="${produtoRelecionado.img1}" alt="imagem do  ${produtoRelecionado.nome}"></figure>
                                    <p> ${produtoRelecionado.nome}</p>
                                    <p>R$ ${produtoRelecionado.preco}</p>
                                    <p>Em até 6 x R$ ${(produtoRelecionado.preco / 6).toFixed(2)} sem juros </p>
                                    <button type="submit" id="${id[index]}">COMPRAR</button>
                                </div>
                    `}
                })
                    .then(() => {
                        document.getElementById(id[0]).addEventListener('click', () => {
                            dadosProduto(id[0])
                        })
                        document.getElementById(id[1]).addEventListener('click', () => {
                            dadosProduto(id[1])
                        })
                        document.getElementById(id[2]).addEventListener('click', () => {
                            dadosProduto(id[2])
                        })
                    })
            }})
}


function idRel(idrelacionado) {
    valorid = 0
    while(valorid <= 0 ){
        valorid = parseInt(Math.random()  * 20)
    }
    return valorid
}

function calcularFrete() {
    valorFrete = 0
    valorFrete = (4970000 * 500) / 899999999;

    document.querySelector('.freteValor').innerHTML = `
        Frete: R$ ${(valorFrete).toFixed(2)}
    `
}





