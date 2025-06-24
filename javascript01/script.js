//Criamos um objeto chamamdo "options" com as configurações para o efeito de  digitação
const options = {
    // lista de frases que serão exibidas umas aoos outras
    strings: [
        "Bem-vindo ao ESTÉTICA AVANÇADA BE YOU",
        "Sua pele merece o melhor. Descubra a beleza que vem do cuidado!",
        "Brilhe com confiança: cuide do seu rosto com quem entende de beleza.",
        "Estética facial de verdade: qualidade, resultado e autoestima elevada!",
        "Porque seu rosto é seu cartão de visita.",
        "Tratamentos que transformam. Produtos que realçam.",
        "Catastre-se aqui!"
    ],
    typeSpeed: 60, //Velocidade da digitação (em milisegundos por caractere)
    backSpeed: 40,//Velocidade em apagar os textos
    loop: true, //Faz ccon que as frases se repitam indifinidamente
    backDelay: 2000,//Temppo de espera (em milisegundos)antes de começar a apagar da proxima frase
    smartBackspace: true //Ptimiza o a´pagamento: apaga apenas os catacteres diferentes da próxima frase

};

//cria uma nova instância do Typed.js
//"#typed" é  o seletor do elemento HTML onde o texto será digitado
//"options" é o objeto com as configurações acima
new Typed("#typed", options); // Typed no se pode erra