let url_string = window.location.href;
var idProduto = new URL(url_string).searchParams.get('id') // inserir aqui valor do produto escolhido na pagina principal
var freteFoiCalculado = false;
var valorDoFrete = 0;

dadosEntrega = localStorage;

dadosProdutos(idProduto)

function dadosProdutos(id) {
    console.log(id)
    
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
                        <figure><img src="${produto.img2}" id="imagem2Produto" alt="imagem 1 do  ${produto.nome}"></figure>
                        <figure><img src="${produto.img3}" id="imagem3Produto" alt="imagem 2 do  ${produto.nome}"></figure>
                        <figure><img src="${produto.img4}" id="imagem4Produto" alt="imagem 3 do  ${produto.nome}"></figure>
                    </div>

                    <div class="paginaProdutoPrincipalProdutoFoto">
                        <figure><img src="${produto.img1}" id="imagem1Produto" alt="imagem 1 do  ${produto.nome}"></figure>
                    </div>

                    <div class="paginaProdutoPrincipalProdutoDescricao">

                        <div class="paginaProdutoPrincipalProdutoDescricaoC">
                            <h2>${produto.nome}</h2>

                            <div class="paginaProdutoPrincipalProdutoDescricaoEstrelas">
                                <figure><img src="./img/Star 4.png" alt=""></figure>
                                <figure><img src="./img/Star 4.png" alt=""></figure>
                                <figure><img src="./img/Star 4.png" alt=""></figure>
                                <figure><img src="./img/Star 4.png" alt=""></figure>
                                <figure><img src="./img/Star 5.png" alt=""></figure>
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

    })
    .then(() => {
        console.log(freteFoiCalculado)
            if(freteFoiCalculado) {
                document.querySelector('#resultadoFrete').innerHTML = `<p> Freté é R$ ${localStorage.getItem("FreteCliente")}</p>`
                document.getElementById('CEP').setAttribute('placeholder', localStorage.getItem("CepCliente"))
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
            localStorage.setItem("CepCliente", document.querySelector("#CEP").value)
            valorDoFrete = calcularFrete(document.querySelector("#CEP").value).toFixed(2)
            localStorage.setItem("FreteCliente", valorDoFrete)
            document.querySelector('#resultadoFrete').innerHTML = `<p> Freté é R$ ${valorDoFrete}</p>`  
        })  
    })
}

function idRel() {
    valorid = 0;

    while(valorid <= 0){
        valorid = parseInt(Math.random()  * 29)
    }

    return valorid
}

function calcularFrete(cep) {
    valorFrete = 0
    valorFrete = (cep * 500) / 899999999
    freteFoiCalculado = true

    return valorFrete
}

// async function dadosProduto() {
//     let categoria;
//     let url_string = window.location.href;
//     let id = new URL(url_string).searchParams.get('id')
//     await fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?id=${id}&page=1&limit=1`)
//         .then(produto => produto.json())
//         .then((produto) => {
//             categoria = produto[0].categoria;
//             document.querySelector('.produto-container').innerHTML = 
//             `
//             <div class="produto-content">
//                                 <div class="produto-thumbs">
//                                     <img src="${produto[0].img2}" alt="" srcset="">
//                                     <img src="${produto[0].img3}" alt="" srcset="">
//                                     <img src="${produto[0].img4}" alt="" srcset="">
//                                 </div>
//                                 <div class="produto-dados">
//                                     <img src="${produto[0].img1}" alt="" srcset="">
//                                     <div class="produto-dados-conteudo">
//                                         <h2>${produto[0].nome}</h2>
//                                         <div class="produto-valores">
//                                             <p>R$ ${produto[0].preco}</p>
//                                             <p class="parcelas">Em até 6x de R$ ${(produto[0].preco / 6).toFixed(2)} sem juros </p>
//                                         </div>
//                                         <p class="produto-mini-descricao">${produto[0].descricao.substr(0,70)}...</p>
//                                     <div class="hd"></div>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="produto-frete">
//                                 <div class="frete-dados">
//                                     <h2>Frete</h2>
//                                     <input type="text" id="input-frete">
//                                     <button type="button" class="btnCalcularFrete">Calcular Frete</button>
//                                     <div class="divComprar">
//                                         <button type="button" class="btnFreteComprar">COMPRAR</button>
//                                     </div>
//                                 </div>
//                             </div>
            
//             `
//             document.querySelector('.produto-descricao-completa').innerHTML = 
//             `
//             <h2>Descrição Completa</h2>
//             <p>${produto[0].descricao}</p>
//             `
//         })
        
//         // produtos relacionados

//         fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?categoria=${categoria}&page=2&limit=4`)
//             .then((relacionados) => relacionados.json())
//             .then((relacionado) => {
//                 relacionado.forEach(item => {
//                     document.querySelector('#paginaProdutoPrincipalRelacionados').innerHTML += 
//                     `
//                     <div class="paginaProdutoPrincipalRelacionadosProdutos">
//                         <figure><img width="96px" height="96px" src="${item.img1}" alt="imagem do  ${item.nome}"></figure>
//                         <p> ${item.nome}</p>
//                         <p>R$ ${item.preco}</p>
//                         <p>Em até 6 x R$ ${(item.preco / 6).toFixed(2)} sem juros </p>
//                         <button type="submit" onclick="window.location.href = './produto.html?id=${item.id}'"> COMPRAR </button>
//                     </div>
//                     `
//                 });
//             })
        
// }

// dadosProduto();


