const more = document.querySelectorAll('.more');
const paragraph = document.querySelectorAll('.about-paragraph');

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    more[i].parentNode.parentNode.classList.toggle('active');
  })
}
