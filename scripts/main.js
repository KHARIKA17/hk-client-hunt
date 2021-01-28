import getLocation from './location.js';




async function locationHandler() {
    const locText = await getLocation();
    document.getElementById('locationAnswer').innerHTML = locText;
}


function clearErrorText() {
    document.getElementById('error-message').innerHTML = '';
}



// main method
function main() {
    console.log('Starting main method...');

    // get references to html elements
    const locationElement = document.getElementById('location');
    const errorElement = document.getElementById('error-message');

    // init error to empty string
    errorElement.innerHTML = '';

    locationElement.addEventListener('click', locationHandler)
    locationElement.addEventListener('touch', locationHandler);
    
}








//starting point where it begins
window.addEventListener('load', main);

