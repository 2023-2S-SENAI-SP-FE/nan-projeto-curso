let listaUsuarios = [];
listarUsuarios();

async function listarUsuarios(){
    await fetch(`https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios`)
        .then((response) => response.json())
        .then((usuarios) => {
            listaUsuarios = usuarios;
        })
}
function login(){

    
    
    let email = document.querySelector('#email');
    let emailLabel = document.querySelector('#emailLabel');
    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');
    
    let msgError = document.querySelector('#msgError');
    
   

    let validaUsuario = {
        nome: '',
        email: '',
        senha: '',
        nivel: ''
    }

    listaUsuarios.forEach((item) => {
        if(email.value == item.email && sha256(senha.value) == item.senha){
            validaUsuario = {
                nome: item.nome,
                email: item.email,
                senha: item.senha,
                nivel: item.nivel
            }
           
        }
    })

    if(email.value == validaUsuario.email && sha256(senha.value) == validaUsuario.senha){
        if(validaUsuario.nivel > 1){
             window.location.href = './index.html';
             let token = Math.random().toString(16).substr(2);
             localStorage.setItem('token', token);
             localStorage.setItem('usuarioLogado', JSON.stringify(validaUsuario))
        }else{
            alert('Você não pode acessar essa área <p> redirecionando para a loja... </p>');  
        }
       
    }else{
        emailLabel.setAttribute('style', 'color: red');
        senhaLabel.setAttribute('style', 'color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário ou senha inválida';
        email.focus();
        setTimeout(function() {
            msgError.setAttribute('style', 'display: none');
          }, 2000)
    }
}

function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    window.location.href = './login.html';
}

function logado (){
    if (localStorage.getItem('token') == null){
        alert('Você precisa estar logado para acessar essa página!');
        window.location.href = './login.html';
    }

    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    let logado = document.querySelector('#logado');
    logado.innerHTML = ` ${usuarioLogado.nome}`;

}
