
const imgContainer = document.querySelectorAll('image-container')

const btnLeft = document.getElementById('left-btn')
const btnRight = document.getElementById('right-btn')

let idx = 0

// This is to keep the slider running
let interval = setInterval(run, 2000)

function run() {
    idx++

    // Function to change the image
    changeImage()
}

// Change the translate value on carousel__images-container 
function changeImage() {

    // Check if at beginning or end of slider in regards to the index
    // Max images is 4 in this example. Index starts at 0, length is 4 but index is 3, so hence the -1, then reset index to 0.
    // Else if, is setting the index to the end = 3. (0, 1, 2, 3)
    if(idx > imgs.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = imgs.length - 1
    }    

    // Adding the style transform to move the images
    imgs.style.transform = `translateX(${-idx * 500}px)`;

} 

// Reset the interval
// To prevent usability jerkiness between the 2 second interval clicking the buttons
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

// Buttons
// Clicking these buttons to navigate the slider - so use Event Listeners
prevBtn.addEventListener('click', () => {
    idx++

    resetInterval()    
    changeImage()
})

nextBtn.addEventListener('click', () => {
    idx--

    resetInterval()    
    changeImage()
})