var buttonPoint = document.getElementById('button_point');
var buttonKompas = document.getElementById('button_kompas');
var buttonTrash = document.getElementById('button_trash');
var video = document.getElementById('video');


buttonPoint.addEventListener('click', playPoint);
buttonKompas.addEventListener('click', playKompas);
buttonTrash.addEventListener('click', playTrash);

function playPoint() {
    video.src = "assets/mp4/map_state_01.mp4";
    console.log('point');
}

function playKompas() {
    video.src = "assets/mp4/map_state_02.mp4";
    console.log('kompas');
}

function playTrash() {
    video.src = "assets/mp4/map_state_03.mp4";
    console.log('trash');
}