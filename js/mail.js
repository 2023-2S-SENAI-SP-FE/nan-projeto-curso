function cadastrarEmail (){
    let dados = {
        email: document.getElementById('oferta').value
    }

    let email = dados.email;

    fetch(`https://65a12313600f49256fb0fe7a.mockapi.io/mail/?email=${email}`)
        .then((res) => res.json())
        .then((mail) => {
            console.log(mail)
            if (mail == "Not found"){
                fetch(`https://65a12313600f49256fb0fe7a.mockapi.io/mail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
        })
                  alert('Email cadastrado com sucesso! Obrigado!');
            }else{
                alert('Email já cadastrado!')
            }

        });

        document.getElementById('oferta').value = '';
        
   }


