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

    if(email.value == validaUsuario.email && sha256(senha.value) == validaUsuario.senha){
        let token = Math.random().toString(16).substr(2);
        localStorage.setItem('token', token)
        localStorage.setItem('usuarioLogado', JSON.stringify(validaUsuario))
        window.location.href = "./index.html";
    }else{
        alert('Login ou senha inválida!')
    }

}

function logado(){
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    let logado = document.querySelector('.usuario')

    if (usuarioLogado == null){
        logado.innerHTML = `<strong> Olá, visitante </strong>
        <p><a href="./login.html" ">Login</a> <span>| <a href="#">Cadastrar</a></span></p>`;
    }else{
        logado.innerHTML = `<strong> Olá, ${usuarioLogado.nome} </strong>
        <p><a href="#" onclick="./meusPedidos.html">Meus Pedidos</a> <span>| <a href="#" onclick="logout()">Sair</a></span></p>`;
        
    }

}

function logout(){
    console.log('saiu');
}