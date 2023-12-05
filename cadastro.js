
// buscar dados na API ou em qualquer lugar
function listarProdutos () {
    
    document.getElementById("categorias").innerHTML ="";
    fetch ("https://655f44c1879575426b44f818.mockapi.io/api/categorias")
    .then((response)=>(response.json()))
    .then((categoria)=> {
        categorias.forEach((categoria) => {
            document.getElementById ("categorias").innerHTML += `<p>${categoria[i].nome}</p>`
        })
    })  
}

listarProdutos() 

function cadastrarCategorias(){
    let dados = {
        nome:document.getElementById('nome').value,
        categoria: document.getElementById("categoria").value,
        nome: document.getElementById("nome").value,
        produto: document.getElementById("produto").value,
        preco:document.getElementById('preco').value,
        }

    fetch('https://655f44c1879575426b44f818.mockapi.io/api/categorias',{
        method:'POST',
        headers: {'Content-Type':"application/json"
        },
        body: JSON.stringify(dados)
    })

    alert('Produtos cadastrado')
    listarPodutos();
    limparFormulario();
}

// cadastrarCategorias ()

function limparFormulario () {
    var campos = document.querySelectorAll('.form-value');
    campos.forEach(campo => campo.value = '');
}

function deleteProdutos(id) {
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/categorias`,{
        method:'DELETE',
        headers: {'Content-Type':"application/json"}
    })
    alert('Deletado com sucesso!')
    listarCategorias ();
}

function altProd(id){
    let editado = {
        nome:document.getElementById('nome').value,
        categoria: document.getElementById("categoria").value,
        nome: document.getElementById("nome").value,
        produto: document.getElementById("produto").value,
        preco:document.getElementById('preco').value,
    }
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/ ${id}`,{
        method:'PUT',
        headers: {"content-type": "application/json"
        }, //=> define o tipo do conteúdo da requisição como JSON, isso é necessário porque os dados enviado estão em formato JSON
        body: JSON.stringify(editado)// estou convertendo um objeto (editado) js em um String JSON
        })


    }