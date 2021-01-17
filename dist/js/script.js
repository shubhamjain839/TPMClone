function showSlider(){
    let classList = document.getElementById('ham-menu-slider').classList;
    classList.add('show-slider');
    document.getElementById('ham-menu-slider').classList = classList;
}
function closeSlider(){
    let classList = document.getElementById('ham-menu-slider').classList;
    classList.remove('show-slider');
    document.getElementById('ham-menu-slider').classList = classList;
}