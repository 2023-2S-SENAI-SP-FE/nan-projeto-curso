window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");


    loader.addEventListener("transitionedn", () =>{
        document.body.removeChild("loader");
    })
})