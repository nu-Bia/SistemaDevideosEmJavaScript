const prev = document.querySelector(".prev i"),
next = document.querySelector(".next i"),
video = document.querySelector(".video-lab video"),
play_pause = document.querySelector(".play_pause"),
text_name = document.querySelector(".name"),
img_box = document.querySelector(".img");

prev.addEventListener("click", (e) =>{
    prevTrack();
    backwrd();
});
next.addEventListener("click", (e) =>{
    nextTrack();
    fwrd();
});
//valor global
let track_index = 0;
let isPlaying = false;

// Criar vídeo para o player
let curr_track = document.createElement('video');
let track_list = [
    {
        path: "Diaviwes - Copia.mp4"
	},
	{
        path: "sabão.mp4"
	},
	{
        path: "esponja de cozinha.mp4"
	},
	{
        path: "dica.mp4"
	},
	{
        path: "meme.mp4"
	},
	{
        path: "banheiro.mp4"
	},
	{
        path: "pessoa.mp4"
	},

   
    

];

let track = [
    "Diaviwes - Copia.mp4",
    "sabão.mp4",
    "esponja de cozinha.mp4",
    "meme.mp4" ,
    "banheiro.mp4",
    "pessoa.mp4",
  "nosso.mp4", 
]
let radome_track = track[Math.floor(Math.random()*track.length)]; //opção para classificar
window.onload = (e)=>{
    video.src = radome_track;
}
//carregar
loadTrack(track_index);


function loadTrack(track_index) {
video.src = track_list[track_index].path;
curr_track.load(); 
curr_track.addEventListener("ended", nextTrack);
}
function playpauseTrack() {
    //pause ou trocar
    if(!isPlaying) playTrack();
    else pauseTrack();
}
video.addEventListener("click", e => {
    pauseTrack();
    console.log(e);
});
// pausar
function pauseTrack() {
   
    video.pause();
    isPlaying = false;
    play_pause.classList.add("show");
    play_pause.innerHTML = "<i class='bx bx-play' ></i>";

    setTimeout(()=>{
        video.play();
        isPlaying = true;
        play_pause.innerHTML = "<i class='bx bx-pause' ></i>";
    },1000);

    setTimeout(()=>{
        play_pause.classList.remove("show");
    }, 1300);
}
function nextTrack() {
//avançar
    if(track_index < track_list.length - 1)
    track_index += 1;
    else track_index = 0;

//Carrega e reproduz a nova faixa
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
//volte ao primeiro
    if(track_index > 0)
    track_index -= 1;
    else track_index = track_list.length;

    //reporduzir
    loadTrack(track_index);
    playTrack();
}
function playTrack() {
	
	curr_track.play();
	isPlaying = true;
}
function backwrd() {
    // usuarios
    idArray = new Array()
    idArray [1] = "@Nubia_Reis"
    idArray [2] = "@Nicoly_Santos"
    idArray [3] = "@Ester_a"
    idArray [4] = "@Ana"
    idArray [5] = "@Estefani"
  
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
function fwrd() {
   
    idArray = new Array()
    idArray [1] = "@Nubia_Reis"
    idArray [2] = "@Nicoly_Santos"
    idArray [3] = "@Ester_a"
    idArray [4] = "@ana"
    idArray [5] = "@Estefani"
  
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
img_box.addEventListener("click", (e) => {
    console.log(e);
    img_box.classList.add("followed");

    setTimeout(()=>{
        img_box.classList.add("fade");
    },1400);
});
  
