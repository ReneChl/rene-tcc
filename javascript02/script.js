window.revelar = ScrollReveal({reset:true});

    revelar.reveal('.swiper', { // estou chamando a classe  a qual eu quero atribuir o efeito do scrollReveal
        duration: 2500,
        distance: '70px',
        origin: 'left'
    });






//carrossel automatico sem botões nem interacções

const swiper = new Swiper('.swiper', { //Inicializando o carrossel na classe ".swiper" usando a biblioteca swiper
    loop: true, //faz o carrossel repetir intinitamente (lop contímuo)
    autoplay: { //configura a reprodução aotomática
    deplay: 2000, //tempo de espera entre os slides (2000ms = 2 segundos)
    disableOnInteraction: false, //continua o autoplay mesmo se o suário interagir (ex: tentar arrastar)
 },

 efect: 'fade', // define o tip-o de transition entre as imagens (fade = dissolver)
 fadeEffect: { crossFade: true }, // faz com que o slide anterior  desapareça suavemente enquanto aparece outro
 allowTouchMove: true, //Impede que o usuario use o toque (arraste) para mudar slide

});