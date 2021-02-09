const player= require("sound-play")
const path = require("path")
const filePath=path.join(__dirname,"done.mp3")
player.play(filePath)