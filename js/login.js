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
        logradouro: '',
        numero: '',
        bairro: '',
        estado: '',
        cidade: '',
        id: ''
    }

    listaUsuarios.forEach((item) => {
        if(email.value == item.email && sha256(senha.value) == item.senha){
            validaUsuario = {
                nome: item.nome,
                email: item.email,
                senha: item.senha,
                logradouro: item.logradouro,
                numero: item.numero,
                bairro: item.bairro,
                estado: item.estado,
                cidade: item.cidade,
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
        document.getElementById('email').focus();
    }

}

function logado(){
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    let logado = document.querySelector('.usuario')

    if (usuarioLogado == null){
        logado.innerHTML = `<strong> Olá, visitante </strong>
        <p><a href="./login.html" ">Login</a> <span>| <a href="./cadastro.html">Cadastrar</a></span></p>`;
    }else{
        logado.innerHTML = `<strong> Olá, ${usuarioLogado.nome} </strong>
        <p><a href="#" onclick="./meusPedidos.html">Meus Pedidos</a> <span>| <a href="#" onclick="logout()">Sair</a></span></p>`;
        
    }

}

function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    window.location.href = './index.html';
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      login()
    }
  });