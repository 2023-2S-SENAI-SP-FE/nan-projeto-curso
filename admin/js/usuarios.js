listarUsuarios();

function listarUsuarios(){
    document.querySelector('.table-content').innerHTML = '';
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios`)
        .then((response) => response.json())
        .then((usuario) => {
            for (i = 0; i < usuario.length; i++){
                document.querySelector('.table-content').innerHTML += `
            <div class="table-row">
                <div class="table-data">${usuario[i].id}</div>
                <div class="table-data">${usuario[i].nome}</div>
                <div class="table-data">${usuario[i].nivel}</div>
                <div class="table-data edit">
                    <div class="btn"><button type="button" class="btnEdit" onclick=listarUsuarioId(${usuario[i].id})>Editar</button></div>
                    <div class="btn"><button type="button" class="btnExcluir" onclick=excluirUsuario(${usuario[i].id})>Excluir</button></div>
                </div>
            </div>
                `;
            }
        })

}

function limparFormulario(){
    const campos = document.querySelectorAll('.form-value')
    campos.forEach(campo => campo.value = '')
}
function listarUsuarioId(id) {
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios/${id}`)
    .then((response) => response.json())
    .then((usuario) => {
        document.getElementById('nome').value =usuario.nome,
        document.getElementById('cpf').value = usuario.cpf,
        document.getElementById('dataNascimento').value = usuario.dataNascimento,
        document.getElementById('telefone').value = usuario.telefone,
        document.getElementById('email').value = usuario.email,
        document.getElementById('cep').value = usuario.cep,
        document.getElementById('logradouro').value = usuario.logradouro,
        document.getElementById('numero').value = usuario.numero,
        document.getElementById('estado').value = usuario.estado,
        document.getElementById('cidade').value = usuario.cidade,
        document.getElementById('nivel').value = usuario.nivel

    })
}

function editarUsuario(id) {
    const data = {
            nome: document.getElementById('nome').value,
            cpf: document.getElementById('cpf').value,
            dataNascimento: document.getElementById('dataNascimento').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value,
            senha: sha256(document.getElementById('senha').value),
            cep: document.getElementById('cep').value,
            logradouro: document.getElementById('logradouro').value,
            numero: document.getElementById('numero').value,
            estado: document.getElementById('estado').value,
            cidade: document.getElementById('cidade').value,
            nivel: document.getElementById('nivel').value
    }
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios/${id}`, {
    method:'PUT' ,
    headers: {
        "content-type": "application/json"
    },
        body: JSON.stringify(data),
    })
    console.log('ok')
}

function cadastrarUsuario(){
    const data = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        senha: sha256(document.getElementById('senha').value),
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        numero: document.getElementById('numero').value,
        estado: document.getElementById('estado').value,
        cidade: document.getElementById('cidade').value,
        nivel: document.getElementById('nivel').value
    }


    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    alert('Usuário Adicionado com Sucesso!');
    limparFormulario();
    listarUsuarios();
}

function excluirUsuario(id){
    fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    })
    alert('Usuário excluído com sucesso!');
    listarUsuarios();

}
