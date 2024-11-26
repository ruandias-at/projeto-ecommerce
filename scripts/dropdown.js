const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Variável para rastrear se o menu está aberto
let menuOpen = false;

// Função para abrir o menu
function openMenu() {
    dropdownMenu.style.display = 'block';
    menuOpen = true;
}

// Função para fechar o menu
function closeMenu() {
    dropdownMenu.style.display = 'none';
    menuOpen = false;
}

// Quando o mouse entra na área do dropdown, abre o menu
dropdown.addEventListener('mouseenter', openMenu);

// Quando o mouse sai da área do dropdown, não fecha o menu imediatamente
dropdown.addEventListener('mouseleave', function(event) {
    if (!dropdownMenu.contains(event.relatedTarget)) {
        // Deixar o menu aberto enquanto o mouse estiver sobre ele
        event.stopPropagation();
    }
});

// Fechar o menu se o usuário clicar fora do dropdown
document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        closeMenu();
    }
});

// Impedir o fechamento do menu se o clique for dentro do menu
dropdownMenu.addEventListener('click', function(event) {
    event.stopPropagation();
});