/* Komentarze */

let btn = document.getElementById('button');
let lista = document.getElementById('list');

console.log(lista);

const dodawanie = function(e) {
    e.preventDefault();
    
    /* Data komentarza */

    let data = new Date();

    let rokKomentarza = data.getFullYear();
    let miesiacKomentarza = data.getMonth();
    let dzienKomentarza = data.getDate();

    if(miesiacKomentarza == 0) miesiacKomentarza = "styczeń";
    if(miesiacKomentarza == 1) miesiacKomentarza = "luty";
    if(miesiacKomentarza == 2) miesiacKomentarza = "marzec";
    if(miesiacKomentarza == 3) miesiacKomentarza = "kwiecień";
    if(miesiacKomentarza == 4) miesiacKomentarza = "maj";
    if(miesiacKomentarza == 5) miesiacKomentarza = "czerwiec";
    if(miesiacKomentarza == 6) miesiacKomentarza = "lipiec";
    if(miesiacKomentarza == 7) miesiacKomentarza = "sierpień";
    if(miesiacKomentarza == 8) miesiacKomentarza = "wrzesień";
    if(miesiacKomentarza == 9) miesiacKomentarza = "październik";
    if(miesiacKomentarza == 10) miesiacKomentarza = "listopad";
    if(miesiacKomentarza == 11) miesiacKomentarza = "grudzień";

    let dataKomentarza = `(`+dzienKomentarza+` `+miesiacKomentarza+` `+rokKomentarza+`)`;
    
    /* Dodanie komentarza do listy */

    let komentarz = document.getElementById('comment').value;
    let imie = document.getElementById('name').value;

    if((komentarz.length == 0) | (imie.length == 0)) {
        if(komentarz.length == 0)  alert("Wpisz komentarz");
        if(imie.length == 0)  alert("Wpisz imię");   
    } else {
        let liElement = document.createElement('li');
        let komentarzNode = document.createTextNode(`"`+ komentarz + `"` + ` - ` + imie + ` ` + dataKomentarza);
        liElement.appendChild(komentarzNode);
        lista.appendChild(liElement);    
    }
}

btn.addEventListener('click', dodawanie);
