function dadosProduto() {
    let url_string = window.location.href;
    let id = new URL(url_string).searchParams.get('id')
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/?id=${id}&page=1&limit=1`)
        .then(produto => produto.json())
        .then((produto) => {
            console.log(produto);
        })
        
}





