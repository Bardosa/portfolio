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


//====== Sobre

const bodyWidth = document.getElementById('body').clientWidth
let sobreTexto = document.getElementById('sobre_text')

if(bodyWidth <= 684){
    sobreTexto.innerHTML = `Minha busca por transformação e crescimento pessoal me trouçe até aqui, sou apaixonado por programação por não gostar da repetição monotona do dia a dia. <a href="https://www.linkedin.com/in/lucas-barbosa-9951bb242" target="_blank" class="link">Ver mais...</a><br><br>Eu sou Lucas Barbosa, desenvolvedor front-end, mas logo serei mais.`
}