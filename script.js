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