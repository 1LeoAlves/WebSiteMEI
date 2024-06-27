function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
};

function removeCartItem(button) {
    if (confirm("Tem certeza que deseja remover este item do carrinho?")) {
        var cartItem = button.parentElement;
        cartItem.remove();
    }
}

function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var submitBtn = document.getElementById('submitBtn');

    // Verificar se todos os campos estão preenchidos e válidos
    if (nameInput.value.trim() !== '' && validateEmail(emailInput.value) && messageInput.value.trim() !== '') {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function validateEmail(email) {
    // Expressão regular para validar o formato de e-mail
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

if(window.location.pathname == "/cart.html"){
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });
}
function configurarMostrarConteudoInicial() {
    const contents = document.querySelectorAll('.nav-content');

    // Mostra o primeiro conteúdo inicialmente
    if (contents.length > 0) {
        contents[0].classList.add('active');
    }
}
function configurarMostrarConteudoInicial() {
    const contents = document.querySelectorAll('.nav-content');

    // Mostra o primeiro conteúdo inicialmente
    if (contents.length > 0) {
        contents[0].classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    // Adiciona evento de clique a cada item de navegação
    navItems.forEach(function(item) {
        const link = item.querySelector('.nav-button');
        const underline = item.querySelector('.underline');

        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const currentActive = document.querySelector('.nav-item.active');

            // Remove a classe 'active' do item atualmente ativo
            if (currentActive) {
                currentActive.classList.remove('active');
                currentActive.querySelector('.underline').style.width = '0'; // Esconde a linha do item não selecionado
            }

            // Adiciona a classe 'active' ao item clicado
            item.classList.add('active');

            // Ajusta a posição da linha indicadora
            const linkRect = link.getBoundingClientRect();
            const navRect = document.getElementById('nav-list').getBoundingClientRect();
            underline.style.width = `${link.offsetWidth}px`;
        });
    });
});

function CheckPage(pathname){
    if(pathname != 'http://127.0.0.1:5500/WebSiteMEI-main/index.html'){
        window.location.href = '//127.0.0.1:5500/WebSiteMEI-main/index.html';
    }
}
