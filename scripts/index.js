let subtitle = document.querySelector("#subtitle")
const subtitle_options = [
    "THINKING ABOUT LUNCH SINCE THIS MORNING",
    "A COMPUTERMAN IN TRAINING",
    "AN ENGINEER OF SOFTWARE",
    "CONSIDERING ORDERING A PIZZA",
    "PLAYING WITH A LEVEL EDITOR",
    "SCROLLING THROUGH HIS STEAM LIBRARY"
]

function getRandomNumber(min, max) {
    let step1 = max - min + 1
    let step2 = Math.random() * step1
    let result = Math.floor(step2) + min
    return result
}

window.onload = (event) => {
    let index = getRandomNumber(0, subtitle_options.length - 1)
    subtitle.innerText = subtitle_options[index]
}