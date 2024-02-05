// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_art2 = document.getElementById("track-art-popup");
let track_name = document.querySelector(".track-name");
let track_name2 = document.getElementById("track-name-popup");
let track_artist = document.querySelector(".track-artist");
let track_artist2 = document.getElementById("track-artist-popup");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let shuffleButton = document.getElementById("shuffle");

let seek_slider = document.querySelector(".seek_slider");
let seek_slider2 = document.getElementById("seek_slider_popup");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let curr_time2 = document.getElementById("current-time-popup");
let total_duration = document.querySelector(".total-duration");
let total_duration2 = document.getElementById("total-duration-popup");

let shuffle_btn = document.getElementById("shuffle");
let repeat_btn = document.getElementById("repeat");
let track_share_popup = document.getElementById("share_popup");


// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "The Loneliest",
	artist: "Måneskin",
	image: "./images/the_loneliest.jpeg",
	path: "./Music/the_loneliest.mp3",
    link: "https://www.youtube.com/watch?v=odWKEfp2QMY",
},
{
	name: "Monotonía",
	artist: "Shakira ft. Ozuna",
	image: "./images/monotonia.jpg",
	path: "./Music/monotonia.mp3",
    link: "https://www.youtube.com/watch?v=j5y6xLpRwx4",
},
{
	name: "Just Wanna Rock",
	artist: "Lil Uzi Vert",
	image: "./images/just_wanna_rock.jpg",
	path: "./Music/just_wanna_rock.mp3",
    link: "https://www.youtube.com/watch?v=UhbixyxgsiU",
},
{
	name: "Unholy",
	artist: "Sam Smith ft. Kim Petras",
	image: "./images/unholy.png",
	path: "./Music/unholy.mp3",
    link: "https://www.youtube.com/watch?v=Uq9gPaIzbe8",
},
{
	name: "Let It Die",
	artist: "Ellie Goulding",
	image: "./images/let_it_die.png",
	path: "./Music/let_it_die.mp3",
    link: "https://www.youtube.com/watch?v=ivvBb-SOnRA",
},
{
	name: "Bzrp Music Sessions, Vol 50",
	artist: "Duki ft. Bizarrap",
	image: "./images/duki.png",
	path: "./Music/duki.mp3",
    link: "https://www.youtube.com/watch?v=Gzs60iBgd3E",
},



{
	name: "Sweet Child O' Mine",
	artist: "Guns N' Roses",
	image: "./images/sweet_child_o_mine.jpg",
	path: "./Music/sweet_child_o_mine.mp3",
    link: "#",
},
{
	name: "Livin' On A Prayer",
	artist: "Bon Jovi",
	image: "./images/livin_on_a_prayer.jpg",
	path: "./Music/livin_on_a_prayer.mp3",
    link: "#",
},
{
	name: "Hotel California",
	artist: "Eagles",
	image: "./images/hotel_california.jpg",
	path: "./Music/hotel_california.mp3",
    link: "#",
},
{
	name: "Back In Black",
	artist: "AC/DC",
	image: "./images/back_in_black.png",
	path: "./Music/back_in_black.mp3",
    link: "#",
},
{
	name: "Smells Like Teen Spirit",
	artist: "Nirvana",
	image: "./images/smells_like_teen_spirit.jpg",
	path: "./Music/smells_like_teen_spirit.mp3",
    link: "#",
},
{
	name: "Wish You Were Here",
	artist: "Pink Floyd",
	image: "./images/whish_you_were_here.jpg",
	path: "./Music/whish_you_were_here.mp3",
    link: "#",
},



{
	name: "As It Was",
	artist: "Harry Styles",
	image: "./images/as_it_was.jpg",
	path: "./Music/as_it_was.mp3",
    link: "#",
},
{
	name: "Bam Bam",
	artist: "Camila Cabello ft. Ed Sheeran",
	image: "./images/bam_bam.jpg",
	path: "./Music/bam_bam.mp3",
    link: "#",
},
{
	name: "Hold On",
	artist: "Justin Bieber",
	image: "./images/hold_on.jpg",
	path: "./Music/hold_on.mp3",
    link: "#",
},
{
	name: "Angels Like You",
	artist: "Miley Cyrus",
	image: "./images/angels_like_you.jpg",
	path: "./Music/angels_like_you.mp3",
    link: "#",
},
{
	name: "Bones",
	artist: "Imagine Dragons",
	image: "./images/bones.png",
	path: "./Music/bones.mp3",
    link: "#",
},
{
	name: "Cuff It",
	artist: "Beyoncé",
	image: "./images/cuff_it.jpg",
	path: "./Music/cuff_it.mp3",
    link: "#",
},



{
	name: "Austronaut In The Ocean",
	artist: "Masked Wolf",
	image: "./images/astronaut_in_the_ocean.jpg",
	path: "./Music/astronaut_in_the_ocean.mp3",
    link: "#",
},
{
	name: "Edamame",
	artist: "bbno$ ft. Rich Brian",
	image: "./images/edamame.jpg",
	path: "./Music/edamame.mp3",
    link: "#",
},
{
	name: "Tyler Herro",
	artist: "Jack Harlow",
	image: "./images/tyler_herro.jpg",
	path: "./Music/tyler_herro.mp3",
    link: "#",
},
{
	name: "Se Acabo",
	artist: "The Beatnuts ft. Method Man",
	image: "./images/se_acabo.jpg",
	path: "./Music/se_acabo.mp3",
    link: "#",
},
{
	name: "Till I Collapse",
	artist: "Eminem",
	image: "./images/till_i_collapse.jpg",
	path: "./Music/till_i_collapse.mp3",
    link: "#",
},
{
	name: "Buss Down",
	artist: "Aitch, ZieZie",
	image: "./images/buss_down.jpg",
	path: "./Music/buss_down.mp3",
    link: "#",
},



];

function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;

    // Update details of the track2
    track_art2.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name2.textContent = track_list[track_index].name;
    track_artist2.textContent = track_list[track_index].artist;
    track_share_popup.href = track_list[track_index].link;

    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    
}
    
// Function to reset all values to their default
function resetValues() {
    curr_time.textContent = "00:00";
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    total_duration2.textContent = "00:00";
    seek_slider.value = 0;
    seek_slider2.value = 0;
}


function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();
    else pauseTrack();
}
function playthistrack2(clicked_id) {
    track_index = clicked_id;
    loadTrack(track_index);
    playTrack();

    if (!isPlaying) {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;

        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="bi bi-play-fill"></i>';
        document.getElementById("playpause-track-popup").innerHTML = '<i class="bi bi-play-fill"></i>';
        document.getElementById("play"+track_index).className = "bi bi-play-circle"; 
    }
    else {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="bi bi-stop-fill"></i>';
        document.getElementById("playpause-track-popup").innerHTML = '<i class="bi bi-stop-fill"></i>';
        document.getElementById("play"+track_index).className = "bi bi-stop-circle";
    }
    
}

    
function playTrack() {
    // Play the loaded track
    curr_track.play();
    isPlaying = true;
    
    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="bi bi-stop-fill"></i>';
    document.getElementById("playpause-track-popup").innerHTML = '<i class="bi bi-stop-fill"></i>';
    document.getElementById("play"+track_index).className = "bi bi-stop-circle";
}
    
function pauseTrack() {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;
    
    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="bi bi-play-fill"></i>';
    document.getElementById("playpause-track-popup").innerHTML = '<i class="bi bi-play-fill"></i>';
    document.getElementById("play"+track_index).className = "bi bi-play-circle";
}
    
function nextTrack() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;
    
    // Load and play the new track
    loadTrack(track_index);
    playTrack();

    
}
    
function prevTrack() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length - 1;
    
    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekto = curr_track.duration * (seek_slider.value / 100);
    seekto2 = curr_track.duration * (seek_slider2.value / 100);
    
    // Set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
    curr_track.currentTime = seekto2;
}
    
function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
}
    
function seekUpdate() {
    let seekPosition = 0;
    
    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seekPosition2 = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
        seek_slider2.value = seekPosition2;
    
        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    
        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    
        // Display the updated duration
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        curr_time2.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        total_duration2.textContent = durationMinutes + ":" + durationSeconds;
        
    }
}

function playthistrack(clicked_id) {
    track_index = clicked_id;
    loadTrack(track_index);
    playTrack();
    
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function shuffletrack() {
    // Choose new random index
    track_index = getRandomIntInclusive(0, track_list.length)
    loadTrack(track_index);
    playTrack();
}

function repeatTrack() {
    loadTrack(track_index);
    playTrack();
    
}

// Load the first track in the tracklist
loadTrack(track_index);




// -------------- Botones -------------- //
function openplayerpopup() {
    var cajaMenu = document.querySelector('.playerpopup');    
    if(cajaMenu.style.display == "flex") { // Si cajaMenu se esta viendo, lo escondemos
        cajaMenu.style.display = "none";
    }
    else { // Si cajaMenu no se esta viendo, lo enseñamos
        cajaMenu.style.display = "flex";
    }
}
    

