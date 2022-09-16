const btnPlayer = document.querySelector('#btnPlayer');
const btnChange = document.querySelector('#btnChange');
var video = document.getElementById('bgVideo');
var source = document.getElementById('source');
const fa = document.querySelector('.fa');
const faSolid = document.querySelector('.fa-solid');
const preloader = document.querySelector('.preloader');

let sourceArray = [];
sourceArray.push('darcky.mp4');
sourceArray.push('lofi.mp4');
sourceArray.push('rocky.mp4');

console.log(sourceArray);

let nameArray = [];
nameArray.push('Darkdro');
nameArray.push('Lofibree');
nameArray.push('Rockkom');

console.log(nameArray);

video.pause();
source.src = 'bgVideo.mp4';
video.load();
video.play();

btnPlayer.addEventListener('click', () => {
    if (btnPlayer.classList.contains('pause')) {
        btnPlayer.classList.remove('pause');
        video.play();
        fa.classList.add('fa-pause');
        fa.classList.remove('fa-play');
    } else {
        btnPlayer.classList.add('pause');
        video.pause();
        fa.classList.remove('fa-pause');
        fa.classList.add('fa-play');
    };
});

btnChange.addEventListener('click', () => {
    var stepV = 1;
    for (var i = 0; i < stepV; i++) {
        sourceArray.unshift(sourceArray.pop());
        nameArray.unshift(nameArray.pop());
    };
    console.log(sourceArray);
    var name = document.getElementById('name');
    name.innerHTML = nameArray[0];
    console.log(nameArray);
    video.pause();
    source.src = sourceArray[0];
    video.load();
    video.play();
    fa.classList.add('fa-pause');
    fa.classList.remove('fa-play');
});

window.addEventListener('load', () => {
    preloader.style.zIndex = '-2';
});