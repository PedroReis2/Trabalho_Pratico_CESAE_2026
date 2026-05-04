document.addEventListener("click", function (event) {
    let menu = document.getElementById("navbarSupportedContent");
    let button = document.querySelector(".navbar-toggler");

    if (!menu || !button) return;

    let clickedInsideMenu = menu.contains(event.target);
    let clickedButton = button.contains(event.target);

    // só fecha se estiver aberto
    if (!clickedInsideMenu && !clickedButton && menu.classList.contains("show")) {
        let bsCollapse = bootstrap.Collapse.getInstance(menu);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});


// ***************** EVENTOS *****************
let cards = document.querySelectorAll(".event-card");

cards.forEach(function(card) {
    card.addEventListener("click", function () {

        let center = document.querySelector(".event-card.center");
        let clicked = card;

        if (!center || clicked === center) return;

        let isLeft = clicked.classList.contains("left");

        // remover classes
        clicked.classList.remove("left", "center", "right");
        center.classList.remove("left", "center", "right");

        // troca
        clicked.classList.add("center");
        center.classList.add(isLeft ? "left" : "right");
    });
});


// ***************** RESERVA *****************
document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("reservationForm");
    let dataInput = document.getElementById("data");
    let horaInput = document.getElementById("hora");

    if (!form || !dataInput || !horaInput) return;

    // data mínima = hoje
    dataInput.min = new Date().toISOString().split("T")[0];

    // limites de hora
    horaInput.step = 900; // 15 minutos
    horaInput.min = "18:00";
    horaInput.max = "23:11";

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nome = document.getElementById("nome").value.trim();
        let telefone = document.getElementById("telefone").value.trim();
        let email = document.getElementById("email").value.trim();
        let pessoas = parseInt(document.getElementById("pessoas").value);
        let data = document.getElementById("data").value;
        let hora = document.getElementById("hora").value;

        // validação campos vazios
        if (!nome || !telefone || !email || !pessoas || !data || !hora) {
            alert("Por favor preencha todos os campos!");
            return;
        }

        // limite de pessoas
        if (pessoas > 5) {
            alert("Máximo de 5 pessoas por reserva 🍷");
            return;
        }

        // validação horário
        if (hora < "18:00" || hora > "23:11") {
            alert("Horário inválido! Reservas apenas entre 18:00 e 23:11 🍷");
            return;
        }

        alert("Reserva enviada com sucesso! 🍷");

        form.reset();
    });

});