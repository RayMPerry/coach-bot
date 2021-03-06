import { playAudio } from './audio.js';

export const subscriber = async data => {
    const video = document.getElementById("alert-video");
    const container = document.getElementById("alert-container");
    const labels = [ ...document.getElementsByClassName("alert-label")];
    container.classList.remove('hide');
    labels.forEach(e => e.setAttribute('title', data.userName));

    video.src = '/video/subscriber_alert.webm';
    playAudio({
        file: data.audio,
        delay: 0
    })

    setTimeout(() => {
        video.play();
    }, 500);

    video.addEventListener('ended' ,() => container.classList.add('hide'));
}

export const follower = async data => {
    console.log(`New follower! ${ JSON.stringify(data)}`);
}