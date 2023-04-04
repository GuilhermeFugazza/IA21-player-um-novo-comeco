
const containers = document.querySelectorAll("div.ia21-player")
        containers.forEach(el => {
            const play = el.querySelector("button.play")
            const video = el.querySelector("video")
            play.onclick = () => video.play()
        })  