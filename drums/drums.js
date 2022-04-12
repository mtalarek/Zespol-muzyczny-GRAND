const clap = document.getElementById("clap");

function border() {
    clap.toggleAttribute("class","red");
}

document.addEventListener("keydown", e => {
    
    console.log(e);
    

    switch (e.key) {
        case "z":
            document.getElementById('audio-z').play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-z").currentTime=0;
            break;
        case "x":
            document.getElementById("audio-x").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-x").currentTime=0;
            break;
        case "c":
            document.getElementById("audio-c").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-c").currentTime=0;
            break;
        case "v":
            document.getElementById("audio-v").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-v").currentTime=0;
            break; 
        case "h":
            document.getElementById("audio-h").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-h").currentTime=0;
            break;
        case "y":
            document.getElementById("audio-y").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-yyy").currentTime=0;
            break;
        case "u":
            document.getElementById("audio-u").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-u").currentTime=0;
            break;
        case "i":
            document.getElementById("audio-i").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-i").currentTime=0;
            break;
        case "o":
            document.getElementById("audio-o").play();
            document.getElementById(e.key).classList.add("class","white");
            setTimeout(function() {document.getElementById(e.key).classList.remove("class","white")}, 100);
            document.getElementById("audio-o").currentTime=0;
            break;

    }
    console.log("Klawisz: ", e.key);
});