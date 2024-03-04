// =============Slider-Image script here ==================

let image = document.querySelector(".floating-image");
let translate = 0;
setInterval(() =>{
    if(translate >=0 && translate < 400)
    {
        translate+=100
        // console.log(translate);
    }
    else{
        translate=0
        // console.log(translate);
    }
    image.style.transition= "2s";
    image.style.transform=`translateX(${-translate}%)`
},4000)
function right()
{   if(translate<400)
    {translate+=100
    image.style.transition= "1s";
    image.style.transform=`translateX(${-translate}%)`
    }
}
function left(){
    if(translate>0)
    {translate-=100
    image.style.transition= "1s";
    image.style.transform=`translateX(${-translate}%)`
    }
}
let h1 = document.getElementById("shop-head");
let p1 = document.getElementById("sub");
let i = 0;
let j = 0;
let para_text = "Daisies";
let text = "सनशाइन 🌹";
const typeLbyL = () => {
    if (i < text.length) {
        h1.innerHTML += text[i];
        // p1.innerHTML += para_text[i];
        i++;
        setTimeout(typeLbyL, 100);
    } else {
        setTimeout(() => {
            h1.innerHTML = "";
            // p1.innerHTML="";
            i = 0;
            setTimeout(typeLbyL, 800);
        }, 10000);
    }
};
typeLbyL();

const typeLbyL2 = () => {
    if (j < para_text.length) {
        p1.innerHTML += para_text[j];
        console.log(j)
        p1.style.color="#0ef";
        // p1.innerHTML += para_text[i];
        j++;
        setTimeout(typeLbyL2, 100);
    } else {
        setTimeout(() => {
            // h1.innerHTML = "";
            p1.innerHTML="";
            j = 0;
            setTimeout(typeLbyL2, 800);
        }, 10000);
    }
};
typeLbyL2();
