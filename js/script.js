var countDownDate = new Date("Jan 7, 2022 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "д " + hours + "ч " + minutes + "м";
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerText").innerHTML = "Покупай мой курс!";
    document.getElementById("timer").innerHTML = "";
  }
}, 1000);

//timer block animation
const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('appearLeft');
      }
    });
  });
  observer.observe(document.querySelector('.timerBlock'));