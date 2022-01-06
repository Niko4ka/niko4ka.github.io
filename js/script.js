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
            buttons[i].classList.add("opacityChange");
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
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('appearLeft');
            entry.target.classList.remove('opacity0');
        }
    });
});
observerLeft.observe(document.querySelector('.timer'));
observerLeft.observe(document.querySelector('.info'));
observerLeft.observe(document.querySelector('.fourFacts'));

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
observerSecond.observe(document.querySelector('.aboutMeDiv'));

let observerThird = new IntersectionObserver(entries => {
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
observerThird.observe(document.querySelector('.thirdMain'));

var first = 0;
var second = 0;
var third = 0;

function openMore(x) {
    if (x == 1) {
        if (first == 0) {
            first = 1;
            document.getElementById('firstAdditional').style.display = "block";
            return;
        } else {
            first = 0;
            document.getElementById('firstAdditional').style.display = "none";
        }
    }

    if (x == 2) {
        if (second == 0) {
            second = 1;
            document.getElementById('secondAdditional').style.display = "block";
        } else {
            second = 0;
            document.getElementById('secondAdditional').style.display = "none";
        }
    }

    if (x == 3) {
        if (third == 0) {
            third = 1;
            document.getElementById('thirdAdditional').style.display = "block";
        } else {
            third = 0;
            document.getElementById('thirdAdditional').style.display = "none";
        }
    }
}

function buy() {
    document.getElementById('infoBuy').style.display = "block";
}

function close() {
    document.getElementById('infoBuy').style.display = "none";
}

let countDownDatePromo = new Date("Jan 14, 2022 00:00:00").getTime();
let y = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDatePromo - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / (1000));
    document.getElementById("promotionTimer").innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с";

    if (distance < 0) {
        clearInterval(y);
        document.getElementById("promotionText").innerHTML = "";
        document.getElementById("promotionTimer").innerHTML = "";
    }
}, 1000);
