window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound'),
        pads = document.querySelectorAll('.pads div'),
        visual = document.querySelector('.visual'),
        colors = [
            '#60b394',
            '#d36060',
            '#c060d3',
            '#d3d160',
            '#6860d3',
            '#60b2d3'
        ]
    pads.forEach((pad, i) => {
        pad.addEventListener('click', function () {
            sounds[i].currentTime = 0
            sounds[i].play()
            createBubbles(i)
        })
    })
    const createBubbles = i => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[i]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', () => {
            visual.removeChild(this)
        })
    }
})