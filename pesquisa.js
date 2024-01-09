function searchbar() {
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/`)
    .then(response => response.json())
    .then((json)=> {
            (console.log(json));
        const ul = document.getElementById('listaProdutos');
        json.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML=`<a href="#">
                <span class="item-nome">${item.nome}</span>
                </a>`;
            ul.appendChild(li);
            console.log(ul)
        });
    })
     
}
searchbar()

function filtrar() {
    var input,
        filter,
        ul,
        li,
        a,
        span,
        i,
        txtValue,
        count = 0

    input = document.getElementById("searchbar");
    ul = document.getElementById('listaProdutos');

    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");

    // console.log (li)
    for(i=0; i<li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
    
            count++
    
            span=li[i].querySelector(".item-nome");
            if(span){
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"),(match)=> {
                        return "<strong>" + match + "</strong>";
                })
            }
        }else {
            li[i].style.display = "none";
        }

    }
    if (count===0) {
        ul.style.display="none";
    }else {
        ul.style.display="block";
    }
} 