function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

function revealCard(i) {
    var cards = document.getElementsByClassName("flip-card-back");
    var card = cards[i-1];
    var animation = card.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 200,
        fill: 'forwards'
    });

    animation.onfinish = function() {
        for (var j = 0; j < cards.length; j++) {
            if (j != i) {
                cards[j].style.display = "block";
            }
        }
    };
}