let bannerIndex = 0;
showBanner();

function showBanner() {
  let i;
  let banners = document.getElementsByClassName("banner");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";  
  }
  bannerIndex++;
  if (bannerIndex > banners.length) {bannerIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  banners[bannerIndex-1].style.display = "block";  
  dots[bannerIndex-1].className += " active";
  setTimeout(showBanner, 4000); // muda image tudo de 4 segundos
}
