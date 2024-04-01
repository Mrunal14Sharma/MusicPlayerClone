console.log("hello");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems = document.getElementsByClassName('songName');
let songs = [
    {songName: "Agar Tum Mil Jao", filePath : "songs/1.mp3"},
    {songName: "Agar Tum Mil Jao", filePath : "songs/2.mp3"},
    {songName: "Agar Tum Mil Jao", filePath : "songs/3.mp3"},
    {songName: "Agar Tum Mil Jao", filePath : "songs/4.mp3"},
    {songName: "Agar Tum Mil Jao", filePath : "songs/5.mp3"},
    {songName: "Agar Tum Mil Jao", filePath : "songs/6.mp3"},
    {songName: "Agar Tum Mil Jao", filePath : "songs/7.mp3"},
    {songName: "Agar Tum Mil Jao", filePath : "songs/8.mp3"},
]

// songItems.array.forEach(element => {
//     console.log(element, i);
//     getElementsByClassName("songName")[0].innerText = songName;
// });

// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         console.log(e);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//     })
// })

document.getElementById('next').addEventListener('click',()=>{
    audioElement.src='songs/2.mp3';
    audioElement.currentTime=0;
    audioElement.play();
})
document.getElementById('previous').addEventListener('click',()=>{
    audioElement.src='songs/8.mp3';
    audioElement.currentTime=0;
    audioElement.play();
})