function searchbar() {
    fetch(`https://655f44c1879575426b44f818.mockapi.io/api/produtos/`)
    .then(response => response.json())
    .then((json)=> {
        const ul = document.getElementById('listaProdutos');
        json.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" class="lupa" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg><a href="#">
                <span class="item-nome">${item.nome}</span>
                </a>`;
            ul.appendChild(li);
        });
    })
     
}
searchbar()

function filtrar() {
    let input,
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

    if (input.value =="") {
        ul.style.display="none"
    }
} 

function limparFiltro(){
    ul = document.getElementById('listaProdutos');
    ul.style.display = "none";
}