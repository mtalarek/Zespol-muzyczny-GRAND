/* Mobile menu */

let mobileHolder = document.getElementById('holder');
let mobileMenu = document.getElementsByClassName('mobile-menu');


const open = function() {
    mobileMenu[0].classList.toggle("open");
}
mobileHolder.addEventListener('click', open);

const close = function() {
    mobileMenu[0].classList.toggle("open");
}
mobileMenu[0].addEventListener('click', close);


/* Header-slide */

let vsOpts = {
    $slides: $('.v-slide'),
    $list: $('.v-slides'),

    slid: document.getElementById('v-slide'),

    duration: 8,
    lineHeight: 50
    };

    console.log(vsOpts.$slides);
    console.log(vsOpts);
  
  let vSlide = new TimelineMax({
    paused: true,
    repeat: -1
  });
  
  vsOpts.$slides.each(function(i) {
    vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
      y: i * -1 * vsOpts.lineHeight,
      ease: Elastic.easeOut.config(1, 0.4)
    });
  });
vSlide.play();


/* Komentarze */

let btn = document.getElementById('button');
let lista = document.getElementById('list');

const dodawanie = function(e) {
    e.preventDefault();
    
    /* Data komentarza */

    let data = new Date();

    let rokKomentarza = data.getFullYear();
    let miesiacKomentarza = data.getMonth();
    let dzienKomentarza = data.getDate();

    let month = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

    let dataKomentarza = `(`+dzienKomentarza+` `+month[miesiacKomentarza]+` `+rokKomentarza+`)`;
    

    /* Dodanie komentarza do listy */

    let komentarz = document.getElementById('comment').value;
    let imie = document.getElementById('name').value;

    if((komentarz.length == 0) | (imie.length == 0)) {
        if(komentarz.length == 0)  alert("Wpisz komentarz");
        if(imie.length == 0)  alert("Wpisz imię");   
    } else {
        let liElement = document.createElement('li');
        let komentarzNode = document.createTextNode(`"${komentarz}" - ${imie} ${dataKomentarza}`);
        liElement.appendChild(komentarzNode);
        lista.appendChild(liElement);    
    }
}

btn.addEventListener('click', dodawanie);



