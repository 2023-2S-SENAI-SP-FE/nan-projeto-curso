function cadastrarCategoria(){

    const data = {
        nome: document.getElementById('nome').value
    }

    fetch('https://655f44c1879575426b44f818.mockapi.io/api/categorias', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    alert(`Categoria adicionada com sucesso!`)

}