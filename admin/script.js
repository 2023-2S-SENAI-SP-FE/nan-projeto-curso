listarCategorias();
function limparFormulario(){
    const campos = document.querySelectorAll('.form-value')
    campos.forEach(campo => campo.value = '')
}


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
    limparFormulario();
    listarCategorias();

}

function listarCategorias(){
    document.querySelector('.table-content').innerHTML = '';
    fetch('https://655f44c1879575426b44f818.mockapi.io/api/categorias')
        .then((response) => response.json())
        .then((categoria) => {
            for (i = 0; i < categoria.length; i++){
                document.querySelector('.table-content').innerHTML += `
            <div class="table-row">
                <div class="table-data">${categoria[i].id}</div>
                <div class="table-data">${categoria[i].nome}</div>
                <div class="table-data edit">
                    <div class="btnEdit">Editar</div>
                    <div class="btnExcluir">Excluir</div>
                </div>
            </div>
                `;
            }
        })
}