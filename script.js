console.log("Welcome to Spotify");

// Intianlize the Variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName: "Bhool Jaa Arijit Singh 320 Kbps", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    {songName: "Bhula Du Stebin Ben 320 Kbps", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    {songName: "Chaleya Jawan 320 Kbps", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    {songName: "Eeriye Arijit Singh 320 Kbps", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    {songName: "Hum Toh Deewane Yasser Desai 320 Kbps", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    {songName: "Jalsa2 Mission Raniganj 320 Kbps", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    {songName: "Masti Gad Gad Pyaar Hai Toh Hai 320 Kbps", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    {songName: "Phir Aur Kya Chahiye Zara Hatke Zara Bachke 320 Kbps", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    {songName: "Phone Mila Ke Raftaar 320 Kbps", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    {songName: "Pyaar Mein Stebin Ben 320 Kbps", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
    {songName: "Tera Hua Cash 320 Kbps", filepath: "songs/11.mp3", coverpath: "covers/1.jpg" },
    {songName: "Yaar Ka Sataya Hua Hai B Praak 320 Kbps", filepath: "songs/12.mp3", coverpath: "covers/5.jpg" },
]

songItems.forEach((element, i)=>{
   
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0] .innerText = songs[i].songName;

})
// audioElement.play();

// Haddle Play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0;
    }
})
// Liste to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })

}


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        //   console.log(e.target);
          makeAllPlays();
          songIndex = parseInt(e.target.id);
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
          audioElement.src = `songs/${songIndex+1}.mp3`;
          masterSongName.innerText = songs[songIndex].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          gif.style.opacity =1;
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
    songIndex += 1;
    }
          audioElement.src = `songs/${songIndex+1}.mp3`;
          masterSongName.innerText = songs[songIndex].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
    songIndex -= 1;
    }
          audioElement.src = `songs/${songIndex+1}.mp3`;
          masterSongName.innerText = songs[songIndex].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
})