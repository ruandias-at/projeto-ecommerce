const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const header = document.querySelector('header');

// Função para abrir o menu
function openMenu() {
    dropdownMenu.style.display = 'block';
}

// Função para fechar o menu
function closeMenu() {
    dropdownMenu.style.display = 'none';
}

// Abre o menu quando o mouse entra no dropdown
dropdown.addEventListener('mouseenter', openMenu);

// Fecha o menu quando o mouse sai do dropdown e do header
header.addEventListener('mouseleave', (event) => {
    if (!header.contains(event.relatedTarget)) {
        closeMenu();
    }
});

// Mantém o menu aberto se o mouse estiver dentro dele
dropdownMenu.addEventListener('mouseenter', openMenu);

// Fecha o menu se o mouse sair do dropdownMenu para fora do header
dropdownMenu.addEventListener('mouseleave', (event) => {
    if (!header.contains(event.relatedTarget)) {
        closeMenu();
    }
});
