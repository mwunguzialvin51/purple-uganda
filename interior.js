var section =document.querySelector('section')
var images = [
    'url("living-room-second\ interior.jpg")',
    'url("livingroom-interior.jpg")',
]


setInterval(function(){
    var bg = images[Math.floor(Math.random() * images.length)]

    section.style.backgroundImage =bg
},1000)

