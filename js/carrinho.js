



fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('produtos', JSON.stringify(data));
        if(!localStorage.getItem("carrinho")){
            localStorage.setItem("carrinho", "[]");
        }
    })

    let produtos = JSON.parse(localStorage.getItem("produtos"));
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (carrinho == null){carrinho = []}

    if(carrinho.length == 0){
        document.querySelector('.carrin-info').innerHTML = 
        `
            <p>carrinho vazio</p>
            <p class="strong">R$ 0,00</p>
        `;
    }else{
        let itens = JSON.parse(localStorage.getItem('carrinho'));
        
         let sum = itens.reduce(function(accumulator,object){ 
         return accumulator + parseFloat(object.preco)
  },0); 

    if(carrinho.length == 1){
        
        document.querySelector('.carrin-info').innerHTML = 
        `
            <p>
            ${carrinho.length} item
            </p>
            <p class="strong">R$ ${(sum).toFixed(2)}</p>
        `;
    }else{
        
        document.querySelector('.carrin-info').innerHTML = 
        `
            <p>
            ${carrinho.length} itens
            </p>
            <p class="strong">R$ ${(sum).toFixed(2)}</p>
        `;
    }

    }

    function adicionarItem(id){
        let produto = produtos.find(function(produto){
            return produto.id == id;
        })

        if(carrinho.length == 0) {
            carrinho.push(produto);
        }else{
            let res = carrinho.find(e => e.id == id)
            if(res === undefined){
                carrinho.push(produto)
            }
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho))

        alert('Produto Adicionado ao Carrinho!')
        let itens = JSON.parse(localStorage.getItem('carrinho'));
        
         let sum = itens.reduce(function(accumulator,object){ 
         return accumulator + parseFloat(object.preco)
  },0); 
  if(carrinho.length == 1){
        
    document.querySelector('.carrin-info').innerHTML = 
    `
        <p>
        ${carrinho.length} item
        </p>
        <p class="strong">R$ ${(sum).toFixed(2)}</p>
    `;
}else{
    
    document.querySelector('.carrin-info').innerHTML = 
    `
        <p>
        ${carrinho.length} itens
        </p>
        <p class="strong">R$ ${(sum).toFixed(2)}</p>
    `;
}
    }

    // adicionarItem(1)


    function removerItem(id){
        let temp = carrinho.filter(item => item.id != id)
        localStorage.setItem("carrinho", JSON.stringify(temp));

    }
    // removerItem(5);

    
    function listarCarrinho(){
        let itens = JSON.parse(localStorage.getItem('carrinho'));
        itens.forEach(item => {
            document.querySelector('.produtosCarrinho').innerHTML += 
            `
            <div class="produtoCarrinho">
            <div class="produto-carrinho">
                <div class="titulo"><h3 class="tituloProduto">${item.nome}</p></div>
            </div>
           
            <div class="valor">
                <h3 class="precoProduto">R$ ${item.preco}</h3>
            </div>
        </div>
            `;
        });
        valores()
    }


    function valores(){
        let itens = JSON.parse(localStorage.getItem('carrinho'));
        
         let sum = itens.reduce(function(accumulator,object){ 
         return accumulator + parseFloat(object.preco)
  },0); 

        document.querySelector('.resumo').innerHTML = 
        `
            <div>
                <h4 class="descFrete">Items (${itens.length}):</h4>
                <h4 class="descFrete">Frete:</h4>
            </div>
            <div>
                <h6>R$ ${(sum).toFixed(2)}</h6>
                <h6>GRÁTIS</h6>
            </div>
        `

        document.querySelector('.btnLimpar').innerHTML = 
        `
            <h3>R$ ${(sum).toFixed(2)}</h3>
            <button id="esvaziar" type="reset" onclick="limparCarrinho()">LIMPAR CARRINHO</button>
        `
  
    }

    function limparCarrinho(){
        localStorage.removeItem('carrinho');
        document.querySelector('.pagamento').remove();
        document.querySelector('.resumo-do-pedido').innerHTML ='O seu carrinho está vazio'
        document.querySelector('.produtosCarrinho').remove();
        document.querySelector('.topo').remove();
        document.querySelector('.carrin-info').innerHTML = 
        `
            <p>carrinho vazio</p>
            <p class="strong">R$ 0,00</p>
        `;
    }


    function finalizarCompra() {
        let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        let produtos = JSON.parse(localStorage.getItem('carrinho'));
        let itens = JSON.parse(localStorage.getItem('carrinho'));
        
         let sum = itens.reduce(function(accumulator,object){ 
         return accumulator + parseFloat(object.preco)
  },0); 


    if (usuarioLogado == null){
        alert('Você precisa estar logado para finalizar a compra!');
        window.location.href = "./login.html"

    }else{
        
        
        const data = {
            "id_usuario": usuarioLogado.id,
            "nome_usuario": usuarioLogado.nome,
            "produtos": produtos,
            "entrega": [
                {
                    "logradouro": usuarioLogado.logradouro,
                    "numero": usuarioLogado.numero,
                    "cidade": usuarioLogado.cidade,
                    "estado": usuarioLogado.estado,
                    "cep": usuarioLogado.cep
                }
            ],
              "pagamento": [
                  {
                      "nomeCartao": usuarioLogado.nome,
                      "numeroCartao": "4205 1234 7878 1234",
                      "validadeCartao": "11/24",
                      "cvvCartao": "123"
                    }
                ],
                "status": "Em andamento",
                "total": (sum).toFixed(2),
            }
            
            
            fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/pedidos`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        alert('Compra efetuada com Sucesso!');
        
        localStorage.removeItem('carrinho');
        window.location.href = "./index.html"
        
    }

    }