var choice = Math.floor(Math.random()*5);
var particula;
const img = document.getElementsByTagName("img");
const text = document.getElementsByTagName("h1")[0]
var image;

if (choice == 1) {
    image = "imgs/Cearense.jpg";
    particula = "imgs/rapadura.png"
    text.textContent="Olá, aqui tome uma pedaço de rapadura e descance.";
}else if(choice == 2){
    image = "imgs/Evil-cearense.jpg";
    particula = "imgs/skull.png";
    text.textContent="Você ousa dizer as palavras proibidas? Prepare-se para morrer!";
}else if(choice == 3){
    image = "imgs/Evil-cearense2.png";
    particula = "imgs/earth.png";
    text.textContent="Obrigado por me libertar. Por muito tempo fiquei preso, esperando, planejando mas finalmente isso terá valido apena. Agora eu peço que você assista enquando eu trago ruína a esse mundo!!";
}else if(choice == 4){
    image = "imgs/Good-cearense.jpg";
    particula = "imgs/pé-de-muleque.png";
    text.textContent="Livre finalmente. Muito obrigado! Aqui tome um pedaço de pé de moleque, meu tesouro mais precioso.";
}else{
    image = "imgs/Good-cearense2.jpg";
    particula = "imgs/heart.png";
    text.textContent="Por muito tempo eu fiquei preso, mas você finalmente me libertou. Eu lhe agradeço! Juntos tranformaremos esse mundo, apenas eu e você...";
}
img[0].src = image;
img[0].style.borderRadius = "40%";
img[2].src = image;
img[3].src = particula;
img[1].src = particula;