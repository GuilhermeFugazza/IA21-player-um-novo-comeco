
const containers = document.querySelectorAll("div.ia21-player")
        containers.forEach(el => {
            const play = el.querySelector("button.playpause")
            const video = el.querySelector("video")
            const timeLine = el.querySelector("dragbar.timeline")
            const timeLineDrag = timeLine.querySelector(".draggable")
            const timer = el.querySelector(".timer")
            play.onclick = () => video.play()

            video.addEventListener("timeupdate", () => {
                const percent = (video.currentTime / video.duration) * 100
                timeLineDrag.style.setProperty("--percent", `${percent}$`)
                timer.innerText = 
             })
        })  