function valorProduto() {

        let Totalquantidade =document.querySelector(".quant");
        let Statusproduto = document.querySelector(".situacao");
        let Totalcompra = document.querySelector(".preco");

        fetch ("produtoSite.json").then((response) => {
            response.json().then((produtoSite) =>{
                produtoSite.total.map((total) => {
                    Totalquantidade.innerHTML += `<p class="elemento3"> ${total.quantidadetotal} </p>`
                    Statusproduto.innerHTML += `<li class="elemento2"> ${total.status} </li>`
                    Totalcompra.innerHTML += `<li class="elemento1"> ${total.valor} </li>`
                })
            })
        }) 

  
}

function DetalhesCompra() {



    let MostrainformCompra =document.querySelector(".detalhesinfo");

    fetch ("produtoSite.json").then((response) => {
        response.json().then((produtoSite) =>{
            produtoSite.total.map((total) => {
                MostrainformCompra.innerHTML += `<li class="buttondetalhes detalhesinfo ocultosobrepoe"> ${total.valor} </li>`
            })
        })
    })
    
}

