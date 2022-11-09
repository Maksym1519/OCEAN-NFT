let offset = 0;
const sliderBox = document.querySelector('.top-NFT_body');

document.querySelector('.slider-next').addEventListener('click', function() {
  offset = offset + 330;
  sliderBox.style.left = -offset + 'px';
  sliderBox.style.overflow = 'visible';
  } )
document.querySelector('.slider-prev').addEventListener('click', function() {
  offset = offset - 330;
  sliderBox.style.left = -offset + 'px';
} )
document.querySelector('.top-NFT_body').addEventListener('click', function() {
  sliderBox.style.overflow = 'scroll'
})
/*-----------------------------------------------------------------------*/
const header = document.querySelector('._navigation-hover');
const headerLinks = document.querySelector('.gamburger-hover');

/*------------------------------------------------------------------------*/
(function() {
 const burger = document.querySelector('.header-gamburger')
 burger.addEventListener('click', () => {
  offset = offset + 600;
  header.style.left = -offset + 'px';
  headerLinks.style.height = '200px'
  })
}())
/*-------------------------------------------------------------------------------- */

/*--------------------------------------------------------------------------------*/
const burgerClose = document.querySelector('.gamburger-close')
burgerClose.addEventListener('click', () => {
  offset = offset -600
  header.style.left = -offset + 'px';
  headerLinks.style.height = '0px'
})


