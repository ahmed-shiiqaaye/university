let showLinks = document.getElementById('see');
let links = document.getElementById('links');


function showMe(){
    links.classList.toggle('show');
    if(showLinks.innerText === "see links"){
        showLinks.innerText = "close";
    }else{
        showLinks.innerText = "see links"
    }
}
showLinks.addEventListener('click', showMe);
