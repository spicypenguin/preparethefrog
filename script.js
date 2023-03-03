const images = [
    'img/frog_angry.png',
    'img/frog_cant_believe.png',
    'img/frog_disbelief.png',
    'img/frog_ground_rain_keys.png',
    'img/frog_ground_rain_other.png',
    'img/frog_melting_sad.png',
    'img/frog_sad_bad.png',
    'img/frog_sad_curb.png',
    'img/frog_so_many_hands.png'
]

const getRandomInt = (max) => Math.floor(Math.random() * max);

const pickRandomImage = (images) => images[getRandomInt(images.length)];

const handleClick = () => {
    const imgContainer = document.getElementById("imgContainer");
    const filteredImages = images.filter((img) => img !== imgContainer.src);
    imgContainer.src = pickRandomImage(filteredImages);
}

window.onload = () => {
    const moodText = document.getElementById("mood");
    const imgContainer = document.getElementById("imgContainer");
    const everythingDiv = document.getElementById("everything");

    if (moodText && imgContainer && everythingDiv) {
        imgContainer.src = pickRandomImage(images);
        moodText.onclick = handleClick;
        everythingDiv.style.display = 'flex';
    }
}