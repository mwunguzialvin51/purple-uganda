function background(){



    
    const images = [
        'url("soffa-1.jpg")',
        'url("soffa-2.jpg")',
    ]


    const section = document.querySelector('section')
    const bg = images [Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;


}


setInterval(background,1000)



