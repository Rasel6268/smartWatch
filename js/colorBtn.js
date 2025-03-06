const images = {
    purpleColor: document.getElementById('productImage1'),
    tealColor: document.getElementById('productImage2'),
    cyanColor: document.getElementById('productImage3'),
    grayColor: document.getElementById('productImage4')
};


const defaultImageKey = 'purpleColor';


Object.values(images).forEach(img => img.style.display = 'none');

if (images[defaultImageKey]) {
    images[defaultImageKey].style.display = 'block';
}

document.getElementById('colorBtn').addEventListener('click', function(event) {
    if (images[event.target.id]) { 
        
        Object.values(images).forEach(img => img.style.display = 'none');
         images[event.target.id].style.display = 'block';
    }
});
