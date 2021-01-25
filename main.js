$(document).ready(function () {
}
)
const navslide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector ('.nav-link');
    burger .addEventListener ('click', ()=>{
        nav.classList .toggle('nav-active');
});}

$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow': 'visible'});
})

