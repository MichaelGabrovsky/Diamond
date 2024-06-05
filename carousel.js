// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

class Carousel {
  constructor(carouselId) {
      this.carouselElement = document.getElementById(carouselId);
      this.currentIndex = 0;
      this.imagesToShow = 4; // Number of images to show at a time
      this.init();
  }

  init() {
      this.prevButton = this.carouselElement.querySelector('.body-carousel-button.prev');
      this.nextButton = this.carouselElement.querySelector('.body-carousel-button.next');
      this.imagesContainer = this.carouselElement.querySelector('.body-carousel-images');
      this.images = this.carouselElement.querySelectorAll('.body-carousel-images img');
      this.totalImages = this.images.length;

      this.prevButton.addEventListener('click', () => this.showImage(this.currentIndex - this.imagesToShow));
      this.nextButton.addEventListener('click', () => this.showImage(this.currentIndex + this.imagesToShow));
      
      this.showImage(this.currentIndex);
  }

  showImage(index) {
      if (index < 0) {
          this.currentIndex = this.totalImages - this.imagesToShow;
      } else if (index >= this.totalImages) {
          this.currentIndex = 0;
      } else {
          this.currentIndex = index;
      }

      const width = this.images[this.currentIndex].clientWidth + 10; // Include margin in the width calculation
      this.imagesContainer.style.transform = `translateX(${-this.currentIndex * width}px)`;
  }
}

// Initialize multiple carousels
new Carousel('carousel1');
new Carousel('carousel2');
new Carousel('carousel3');
