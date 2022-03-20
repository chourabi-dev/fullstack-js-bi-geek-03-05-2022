const galleryURLS = [
    'https://thumbs.dreamstime.com/b/blurry-lights-background-falling-snow-abstract-colorful-winter-bg-blurry-lights-background-falling-snow-abstract-137052111.jpg',
    'https://cdn.dribbble.com/users/901433/screenshots/6214144/red_path.jpg',
    'https://sb.kaleidousercontent.com/67418/800x533/fe745b9915/cars.jpg',
    
]

const mainImg = document.getElementById('main-img');

var selectedIndex = 0;

// init gallery

mainImg.setAttribute('src',galleryURLS[selectedIndex]);

function next(){
    selectedIndex++;
    if (selectedIndex == galleryURLS.length) {
        selectedIndex = 0
    } 

    mainImg.setAttribute('src',galleryURLS[selectedIndex]);
}

function prev(){
    selectedIndex--;
    if (selectedIndex < 0) {
        selectedIndex = (galleryURLS.length -1 )
    }

    mainImg.setAttribute('src',galleryURLS[selectedIndex]);
}


function loopGallery(){
    setInterval(()=>{
        next();
    },3000);
}


loopGallery();