$(document).ready(function(){
    $('.burger').click(function(){
        $('.navigation').toggleClass('active');
    })
});

let navItems = document.querySelectorAll('.navigation .navigation-li');
let navBlock = document.querySelector('.navigation');

navBlock.addEventListener('click', function (e) {
    navItems.forEach(function (el) {
        if (el.classList.contains('active2')) {
            el.classList.remove('active2');
            let toActive = e.target;
            let parent = toActive.parentElement;
            parent.classList.add('active2')
        }
    })
});

function headerAnime() {
    let top = document.getElementById('header');
    let topY = window.pageYOffset;
    if (topY > 100) {
        top.style.background = '#000000';
        top.style.height = '70px';
    } else {
        top.style.background = 'transparent';
        top.style.height = '112px';
    }
};

window.addEventListener('scroll',function () {
    headerAnime();
});