function valorProduto() {

    Totalcompra = document.querySelector(".preco");

    fetch ("produtoSite.json").then((response) => {
        response.json().then((produtoSite) =>{
            produtoSite.total.map((total) => {
                Totalcompra.innerHTML += `<li class="elemento1"> ${total.valor} </li>`
            })
        })
    }) 

}


