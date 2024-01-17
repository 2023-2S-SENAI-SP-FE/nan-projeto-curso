async function dadosProduto() {
    let categoria;
    let url_string = window.location.href;
    let id = new URL(url_string).searchParams.get('id')
    await fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?id=${id}&page=1&limit=1`)
        .then(produto => produto.json())
        .then((produto) => {
            categoria = produto[0].categoria;
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
                                    <button type="button" class="btnCalcularFrete" onclick="calcularFrete()">Calcular Frete</button>
                                    <div class="divComprar">
                                        <button type="button" class="btnFreteComprar" onclick="adicionarItem(${produto[0].id})">COMPRAR</button>
                                    </div>
                                    <div class="dadosFrete">
                                       
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

    
        
        // produtos relacionados

        fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?categoria=${categoria}&page=2&limit=4`)
            .then((relacionados) => relacionados.json())
            .then((relacionado) => {
                relacionado.forEach(item => {
                    document.querySelector('#paginaProdutoPrincipalRelacionados').innerHTML += 
                    `
                    <div class="paginaProdutoPrincipalRelacionadosProdutos">
                        <figure><img width="96px" height="96px" src="${item.img1}" alt="imagem do  ${item.nome}"></figure>
                        <p> ${item.nome}</p>
                        <p>R$ ${item.preco}</p>
                        <p>Em até 6 x R$ ${(item.preco / 6).toFixed(2)} sem juros </p>
                        <button type="submit" onclick="window.location.href = './produto.html?id=${item.id}'"> COMPRAR </button>
                    </div>
                    `
                });
            })
        
}


function calcularFrete(){
    let inputCep = document.querySelector('#input-frete').value;
    fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
        .then((res) => res.json())
        .then((dadosCep) => {
            if(dadosCep.logradouro === undefined){
                alert('digite um cep válido');
            }else{

                document.querySelector('.dadosFrete').innerHTML = 
                `
                <p>${dadosCep.logradouro}</p>
                <p>${dadosCep.localidade} - ${dadosCep.uf}</p>
                <p class="valorFrete"> FRETE GRÁTIS </p>
                `
            }
        })
}


dadosProduto();



