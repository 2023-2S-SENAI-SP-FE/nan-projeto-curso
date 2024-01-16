function maskCPF(mascara, input){ 
    const vetMask = mascara.split(""); //transformando mascara em vetor
    const numCPF = input.value.replace(/\D/g,""); //torca tudo que não dogito por nada
    const cursor= input.selectionStart //posisção do cursor, armazena o índice do cursor
    
 
        for(let i=0; i<numCPF.length; i++){
            vetMask.splice (vetMask.indexOf("_"), 1, numCPF[i]);
        }
        input.value= vetMask.join("");
}

function error() {
    // console.log("error");
    document.getElementById('confirmSenha').classList.remove('confirmsenha');

}

function validarSenha() {
   const senha=sha256(document.getElementById('senha').value);
   console.log(senha);
    const senhaC=sha256(document.getElementById('confirmSenha').value);
    console.log(senhaC);

    if (senha != senhaC) {
        console.log("Senha Diferentes")
        console.log(document.getElementById('confirmSenha').classList.add('confirmsenha'))
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
 

