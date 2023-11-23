

function postData(){

    const data = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        img1: document.getElementById('img1').value,
        img2: document.getElementById('img2').value,
        img3: document.getElementById('img3').value,
        avaliacao: 0,
        status: 'disponível',
    }
    
    const response = fetch('https://655f44c1879575426b44f818.mockapi.io/api/produtos', {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}