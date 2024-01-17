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
        document.querySelector('.carrin-info').innerHTML = 
        `
            <p>${carrinho.length} items</p>
            <p class="strong">R$ ${(sum).toFixed(2)}</p>
        `;
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
                <h6>R$ 9,99</h6>
            </div>
        `

        document.querySelector('.btnLimpar').innerHTML = 
        `
            <h3>R$ ${(sum + 9.99).toFixed(2)}</h3>
            <button id="esvaziar" type="reset" onclick="limparCarrinho()">LIMPAR CARRINHO</button>
        `
  
    }

    function limparCarrinho(){
        document.querySelector('.produtosCarrinho').innerHTML = 
        `
        <div class="produto">
            <h1> O seu carrinho está vazio </h1>
        </div>
        `
        document.querySelector('.frete').innerHTML = '';
        document.querySelector('.pagamento').innerHTML = '';
        document.querySelector('.resumo-do-pedido').innerHTML = '';
        localStorage.removeItem('carrinho')
    }

    listarCarrinho()