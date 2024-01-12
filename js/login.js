let listaUsuarios = [];

listarUsuarios();

async function listarUsuarios(){
    await fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios`)
        .then((response) => response.json())
        .then((usuarios) => {
            listaUsuarios = usuarios
        })
}

function login(){
    let validaUsuario = {
        nome: '',
        email: '',
        senha: '',
        id: ''
    }

    listaUsuarios.forEach((item) => {
        if(email.value == item.email && sha256(senha.value) == item.senha){
            validaUsuario = {
                nome: item.nome,
                email: item.email,
                senha: item.senha,
                id: item.id
            }
        }
    })

}