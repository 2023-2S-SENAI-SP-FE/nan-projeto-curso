function listarCategorias(){
    let ulCat = document.getElementById('listaCategorias');
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/categorias/?orderby=nome`)
        .then((response) => response.json())
        .then((categoria) => {
            categoria.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `<a href='#' onclick="window.location.href = './categoria.html?nome=${item.nome}'">${item.nome}</a>`;
                ulCat.appendChild(li);
            });
        })
}

listarCategorias();