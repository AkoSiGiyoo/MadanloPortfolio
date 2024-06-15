document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('.project-card').forEach(function(card) {
        card.classList.add('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
   
    document.querySelectorAll('.text-content').forEach((element) => {
        element.classList.add('show');
    });

    document.querySelectorAll('.card').forEach((card) => {
        card.classList.add('show');
    });

    document.querySelector('.img-fluid').classList.add('show');
});

document.addEventListener("DOMContentLoaded", function() {
   
    document.querySelector('.text-content').classList.add('show');
    document.querySelector('.profile').classList.add('show');
});