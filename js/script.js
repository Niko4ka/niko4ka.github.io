var countDownDate = new Date("Jan 7, 2022 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("timer").innerHTML = days + "д " + hours + "ч " + minutes + "м";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timerText").innerHTML = "";
        document.getElementById("timer").innerHTML = "Покупай мой курс :)";
        var buttons = document.getElementsByClassName("buyCourse");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";
        }
    }
}, 1000);

//greeting animation
let observerDown = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        const greet = entry.target.querySelector(".greeting");
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            greet.classList.add('appearDown');
            return;
        }
        greet.classList.remove('appearDown');
    });
});
observerDown.observe(document.querySelector('.main'));

let observerLeft = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        const greet = entry.target.querySelector(".timer");
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            greet.classList.add('appearLeft');
        }
    });
});
observerLeft.observe(document.querySelector('.timerBlock'));

let observerInfo = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        const info = entry.target.querySelectorAll('.infoLeft');
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            info.forEach(elem => elem.classList.add('appearLeft'));
            info.forEach(elem => elem.classList.remove('opacity0'));
        }
    });
});
observerInfo.observe(document.querySelector('.info'));

let observerSecond = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        const message = entry.target.querySelector(".message");
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            message.classList.add('appearDown');
            return;
        }
        message.classList.remove('appearDown');
    });
});
observerSecond.observe(document.querySelector('.secondMain'));