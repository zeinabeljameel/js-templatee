// start sidebar
let sittingBox = document.querySelector('.sitting-box')
let open = document.querySelector('.fa-gear');
open.onclick = function (){
    this.classList.toggle('fa-spin')
    sittingBox.classList.toggle('open')
}
// end sidebar


// open menu 
let linksMenu = document.querySelector('.links');
let toggleMenuIcon = document.querySelector('.toggle-menu-icon');

toggleMenuIcon.onclick = function (e) {
    this.classList.toggle("menu-active");
    linksMenu.classList.toggle('open');
    e.stopPropagation()
}
document.addEventListener('click', (e)=> {
    if(e.target !== linksMenu && e.target !== toggleMenuIcon) {
        if(linksMenu.classList.contains('open')) {
            toggleMenuIcon.classList.toggle("menu-active");
            linksMenu.classList.toggle('open');
        }
    }
})
linksMenu.onclick = function(e) {
    e.stopPropagation()
}


// Function to write words dynamically
function writeAndRepeat(words, index, speed, repeat) {
    if (index < words.length) {
        document.getElementById('text').innerText += words[index];
        index++;
        setTimeout(function() {
        writeAndRepeat(words, index, speed, repeat);
        }, speed);
    } else {
        setTimeout(function() {
        document.getElementById('text').innerText = '';
        if (repeat) {
            writeAndRepeat(words, 0, speed, repeat);
        }
        }, speed * 40);
    }
}
    const wordsToWrite = 'creative';
    const speed = 100;
    const repeat = true;
    writeAndRepeat(wordsToWrite, 0, speed, repeat);
    
    



    //get in touch button go to contact us
    let getInTouch = document.querySelector('.get-in-touch');
    getInTouch.onclick = function (e){
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
    })}



// scrolling animation
window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    // start aboutus section animation
    let aboutUs = document.querySelector('.about-us');
    let aboutUsTop = aboutUs.offsetTop;
    let aboutUsHeight = aboutUs.offsetHeight;
    if (windowScrollTop > (aboutUsTop + aboutUsHeight - windowHeight -500)) {
        document.querySelector('.about-us h2').classList.add('animation')
        document.querySelector('.about-us .image-box').classList.add('animation')
        document.querySelector('.about-us .info-box').classList.add('animation')
        let aboutH2 = document.querySelectorAll('.about .about-h2')
        aboutH2.forEach((e)=> {
            e.classList.add('animation')
        })
    }
    // end aboutus section animation


    }





