function arial() {
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.querySelector('footer').style.fontFamily = 'Arial, sans-serif';
  document.querySelector('div').style.fontFamily = 'Arial, sans-serif';
  document.querySelector('nav').style.fontFamily = 'Arial, sans-serif';
}

function sansserif(){
  document.body.style.fontFamily = 'Trebuchet MS, sans-serif';
  document.querySelector('footer').style.fontFamily = 'Trebuchet MS, sans-serif';
  document.querySelector('div').style.fontFamily = 'Trebuchet MS, sans-serif';
  document.querySelector('nav').style.fontFamily = 'Trebuchet MS, sans-serif';
}

function showCaption() {
  const caption = document.querySelector('.caption');
  caption.style.display = 'block';
}

function hideCaption() {
  const caption = document.querySelector('.caption');
  caption.style.display = 'none';
}

function handleImageClick() {
  alert('You clicked the image!');
}

document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('groupImage');

  image.addEventListener('mouseenter', showCaption);
  image.addEventListener('mouseleave', hideCaption);
  image.addEventListener('click', handleImageClick);
});