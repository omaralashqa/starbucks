function imgslider(x) {
    document.querySelector('.img img').src = x;
}
function changeBackgroundColor(color) {
    const halfCircle = document.querySelector('.half-circle');
    halfCircle.style.backgroundColor = color;
}