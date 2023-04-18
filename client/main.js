const containers = document.querySelectorAll("div.ia21-player")

containers.forEach(el => {
    const play = el.querySelector("button.playpause")
    const video = el.querySelector("video")
    const timeline = el.querySelector(".dragbar.timeline")
    const timeLineDrag = timeline.querySelector(".draggable")
    const timer = el.querySelector(".timer")
    play.onclick = () => video.play()
    
    //SOCORRO
    
    video.currentTime = 59
    
    video.addEventListener("timeupdate", () => {
        const percent = (video.currentTime / video.duration) * 100
        timeLineDrag.style.setProperty("--porcent",`${percent}%`)
        timer.innerText = Math.floor(video.currentTime)
        
        if (timer.innerText >= 60) {
            min = Math.floor(timer.innerText/60)
            seg = Math.floor(timer.innerText%60)
            timer.innerText = min + ":" + seg
        }
    })
})