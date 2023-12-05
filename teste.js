function listarCategorias(){
    document.getElementById('categorias').innerHTML = '';
    fetch('https://655f44c1879575426b44f818.mockapi.io/api/categorias')
        .then((response) =>  response.json())
        .then((categoria) => {
            for(i=0; i< categoria.length; i++){
                document.getElementById('categorias').innerHTML += `<p>${categoria[i].nome}</p>` 
            }
        })
}

listarCategorias()

function cadastrarCategoria() {
    let dados = {
        nome: document.getElementById('nome').value
    }

    fetch('https://655f44c1879575426b44f818.mockapi.io/api/categorias',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    alert('categoria cadastrada')
    listarCategorias();

}