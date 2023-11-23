

function postData(){

    const data = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value
    }
    
    const response = fetch('https://655f35cd879575426b44d699.mockapi.io/api/produtos/produtos', {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    console.log(data);
}