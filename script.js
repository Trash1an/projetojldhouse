let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header1')
    header.classList.toggle('rolagem', window.scrollY > 1)
})


AOS.init();