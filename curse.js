var choice = Math.floor(Math.random()*5);
var particula;
const TEMPO_MINIMO = 100;
const TEMPO_VARIAVEL = 300;
const img = document.getElementsByTagName("img");
const text = document.getElementsByTagName("h1")[0]

function criarimg(path) {
    const img = new Image();
    img.src = path;
    return img;
  }

if (choice == 1) {
    img[0].src = "imgs/Cearense.jpg";
    img[3].src = "imgs/Cearense.jpg";
    img[1].src = "imgs/rapadura.png";
    img[2].src = "imgs/rapadura.png";
    text.textContent="Olá, aqui tome uma pedaço de rapadura e descance.";
    var particula = criarimg("imgs/Icon.png");
}else if(choice == 2){
    img[0].src = "imgs/Evil-cearense.jpg";
    img[3].src = "imgs/Evil-cearense.jpg";
    img[1].src = "imgs/skull.png";
    img[2].src = "imgs/skull.png";
    text.textContent="Você ousa dizer as palavras proibidas? Prepare-se para morrer!";
    var particula = criarimg("imgs/Icon.png");
}else if(choice == 3){
    img[0].src = "imgs/Evil-cearense2.png";
    img[3].src = "imgs/Evil-cearense2.png";
    img[1].src = "imgs/earth.png";
    img[2].src = "imgs/earth.png";
    var particula = criarimg("imgs/Icon.png");
    text.textContent="Obrigado por me libertar. Por muito tempo fiquei preso, esperando, planejando mas finalmente isso terá valido apena. Agora eu peço que você assista enquando eu trago ruína a esse mundo!!";
}else if(choice == 4){
    img[0].src = "imgs/Good-cearense.jpg";
    img[3].src = "imgs/Good-cearense.jpg";
    img[1].src = "imgs/pé-de-muleque.png";
    img[2].src = "imgs/pé-de-muleque.png";
    var particula = criarimg('imgs/Icon.png');
    text.textContent="Livre finalmente. Muito obrigado! Aqui tome um pedaço de pé de moleque, meu tesouro mais precioso.";
}else{
    img[0].src = "imgs/Good-cearense2.jpg";
    img[3].src = "imgs/Good-cearense2.jpg";
    img[1].src = "imgs/heart.png";
    img[2].src = "imgs/heart.png";
    var particula = criarimg('imgs/Icon.png');
    text.textContent="Por muito tempo eu fiquei preso, mas você finalmente me libertou. Eu lhe agradeço! Juntos tranformaremos esse mundo, apenas eu e você...";
}

criarparticula();