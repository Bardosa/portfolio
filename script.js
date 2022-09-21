//====== Show Menu
const 
    toggle = document.getElementById('toggle');
    linksMenu = document.querySelectorAll('.nav_items');

function showMenu() {
    const 
        menubar = document.getElementById('menu')
        abrir = document.getElementById('abrir')
        fechar = document.getElementById('fechar')

    if(abrir.style.display != 'none') {
        menubar.classList.add('show_menu')
        abrir.style.display = 'none'
        fechar.style.display = 'inline-flex'
    } else if(fechar.style.display != 'none') {
        menubar.classList.remove('show_menu')
        fechar.style.display = 'none'
        abrir.style.display = 'inline-flex'
    }
}

toggle.addEventListener('click', showMenu)

linksMenu.forEach(e => e.addEventListener('click', showMenu))