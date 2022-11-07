let offset = 0;
const sliderBox = document.querySelector('.top-NFT_body');

document.querySelector('.slider-next').addEventListener('click', function() {
  offset = offset + 330;
  sliderBox.style.left = -offset + 'px';
  
} )
document.querySelector('.slider-prev').addEventListener('click', function() {
  offset = offset - 330;
  sliderBox.style.left = -offset + 'px';
  
} )
