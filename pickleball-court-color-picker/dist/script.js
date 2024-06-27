document.querySelectorAll('.color-box').forEach(function(el) {
    el.style.backgroundColor = el.getAttribute('data-color');
});



document.querySelector('#court-colors').addEventListener('click', function(event) {
    if (event.target.matches('.color-box')) {
        var color = event.target.getAttribute('data-color');
        document.querySelector('#court').style.backgroundColor = color; 
    }
});

document.querySelector('#border-colors').addEventListener('click', function(event) {
    if (event.target.matches('.color-box')) {
        var color = event.target.getAttribute('data-color');
        document.querySelector('#border').style.backgroundColor = color; 
    }
});

document.querySelector('#zone-colors').addEventListener('click', function(event) {
    if (event.target.matches('.color-box')) {
        var color = event.target.getAttribute('data-color');
        document.querySelector('#net-zone').style.backgroundColor = color; 
    }
});