$(document).ready(function () {
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
        scrollOffset: 5
    });
    $('.modal-trigger').leanModal({
        dismissible: true,
        opacity: .6
    });

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYear: 15
    });
});

function f() {
    var email = document.getElementById("email1").value;
    var txt = document.getElementById("textarea1").value;

    if (txt.length > 0 && email.length > 0) {
        document.getElementById('b').innerHTML = "Sucessfull!";
    } else {
        document.getElementById('b').innerHTML = "Error!";
    }
}
function ff() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name.length > 0 && email.length > 0) {
        document.getElementById('a').innerHTML = "Sucessfull!";
    } else {
        document.getElementById('a').innerHTML = "Error!";
    }
}