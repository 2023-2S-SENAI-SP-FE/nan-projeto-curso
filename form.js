function validarSenha() {
    senha=sha256(document.getElementById('senha').value);
    senhaC=sha256(document.getElementById('confirmSenha').value);

    if (senha!=senhaC) {
        // senhaC.setCustomValidity
        console.log("Senha Diferentes")
        return false;

        }else {
            return true;
    }

}
function teste(){
    console.log('teste')
}



function limparForm(){
    const campo = document.querySelectorAll('input');
        campo.forEach(campo => campo.value = '');
}


// console.log(sha256('nada'))

function cadastroUsuario(){
   let usuario = {
        nome:document.getElementById('nome').value,
        cpf:document.getElementById('cpf').value,
        dataNascimento:document.getElementById('data').value,
        telefone:document.getElementById('telefone').value,
        email:document.getElementById('email').value,
        senha:sha256(document.getElementById('senha').value),
        confirmsenha:document.getElementById('confirmsenha').value,
        cep:document.getElementById('cep').value,
        logradouro:document.getElementById('log').value,
        numero:document.getElementById('numero').value,
        bairro:document.getElementById('bairro').value,
        estado:document.getElementById('estado').value,
        cidade:document.getElementById('cidade').value,
        nivel:1

   }

fetch ('https://65995a81a20d3dc41cef99fb.mockapi.io/usuarios', {
    method: 'POST',

    headers: {
        "content-type": "application/json"

    },
    body:JSON.stringify(usuario)
        })
            console.log(usuario)
            limparForm();
}
 

