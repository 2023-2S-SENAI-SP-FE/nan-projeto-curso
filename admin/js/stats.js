async function stats(url, box){
    let length = await fetch(`${url}`)
        .then((response) => response.json())
        .then((total) => {
            return total.length;
        })
    document.querySelector(`.stats-box.${box} > h1`).innerHTML = `${length}`;
}