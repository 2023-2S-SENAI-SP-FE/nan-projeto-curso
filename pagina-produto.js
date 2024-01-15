var idProduto = parseInt(Math.random()  * 28) // inserir aqui valor do produto escolhido na pagina principal
var freteFoiCalculado = false;
var valorDoFrete = 0;
dadosProdutos(idProduto)

function dadosProdutos(id) {
    
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    .then(produto => produto.json())
    .then(produto => {
        document.querySelector('#paginaProduto').innerHTML = `   
            <section class="paginaProdutoPrincipal">

                <div class="paginaProdutoPrincipalProduto">

                    <div class="paginaProdutoPrincipalProdutoMiniaturas">
                    <!--    <figure><img width="80px" height="80px" src="${produto.img1}" alt="imagem 1 do  ${produto.nome}"></figure> -->
                        <figure><img src="${produto.img2}" alt="imagem 2 do  ${produto.nome}"></figure>
                        <figure><img src="${produto.img3}" alt="imagem 3 do  ${produto.nome}"></figure>
                    </div>

                    <div class="paginaProdutoPrincipalProdutoFoto">
                        <figure><img src="${produto.img1}" alt="imagem 1 do  ${produto.nome}"></figure>
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
                        <p> ${produto.descricao.substring(0,150) + '...'}</p>
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
                        <div id="resultadoFrete"></div>
                    </div>

                </div>

                <div class="paginaProdutoAsideEspaçoVago1">
                </div>

                <div class="paginaProdutoAsideEspaçoVago2">
                </div>

            </aside>

        </article>
    `}) //construção da pagina do produtos
    .then(() => {
        console.log(freteFoiCalculado)
            if(freteFoiCalculado) {
                document.querySelector('#resultadoFrete').innerHTML = `<p> Freté é R$ ${valorDoFrete}</p>`    
            
            }

    })
    .then(() => {

        idProdutoRelacionado = []
       
        for (let index = 0; index <= 2; index++) {
            verificarId = idRel();

            while(verificarId == idProduto){
                verificarId = idRel()
            }

            if(index > 0){
                while( verificarId == idProdutoRelacionado[index-1]) {
                    verificarId = idRel()
                }
            }

            idProdutoRelacionado[index] = verificarId

            fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/${idProdutoRelacionado[index]}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(produtoRelacionado => produtoRelacionado.json())
            .then(produtoRelacionado => {                
                if(idProdutoRelacionado.length <= 3){
                    document.querySelector('#paginaProdutoPrincipalRelacionados').innerHTML += `
                        <div class="paginaProdutoPrincipalRelacionadosProdutos" >
                            <figure><img width="96px" height="96px" src="${produtoRelacionado.img1}" alt="imagem do  ${produtoRelacionado.nome}"></figure>
                            <p> ${produtoRelacionado.nome}</p>
                            <p>R$ ${produtoRelacionado.preco}</p>
                            <p>Em até 6 x R$ ${(produtoRelacionado.preco / 6).toFixed(2)} sem juros </p>
                            <button type="submit" id="${idProdutoRelacionado[index]}">COMPRAR</button>
                        </div>
                `}
            })

            .then(() => {
                if (idProdutoRelacionado.length >= 3) {
                    
                
                document.getElementById(idProdutoRelacionado[0]).addEventListener('click', () => {
                    dadosProdutos(idProdutoRelacionado[0])
                })
                document.getElementById(idProdutoRelacionado[1]).addEventListener('click', () => {
                    dadosProdutos(idProdutoRelacionado[1])
                })
                document.getElementById(idProdutoRelacionado[2]).addEventListener('click', () => {
                    dadosProdutos(idProdutoRelacionado[2])
                })
            }
        
            }) 

        } //fim laço for
    })   
  
    .then(() => {
            
        document.querySelector('#calcularFrete').addEventListener('click', () => {
            valorDoFrete = calcularFrete(document.querySelector("#CEP").value).toFixed(2)
            document.querySelector('#resultadoFrete').innerHTML = `
            <p> Freté é R$ ${valorDoFrete}</p>      
            `})  
        }
    ) 


}


function idRel() {
    valorid = 0;

    while(valorid <= 0){
        valorid = parseInt(Math.random()  * 20)
    }

    return valorid
}

function calcularFrete(cep) {
    valorFrete = 0
    valorFrete = (cep * 500) / 899999999
    // console.log("Valor frete = " + valorFrete)
    freteFoiCalculado = true
    return valorFrete
}