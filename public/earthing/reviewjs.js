// Brightness slider
document.getElementById('brightnessSlider').addEventListener('input', function() {
  let brightness = this.value;
  document.getElementById('brightnessImage').style.filter = `brightness(${brightness})`;
  let icon = document.getElementById('iconbrit');
  if (brightness < 1) {
      icon.textContent = '☀️';
      icon.style.transform = 'rotate(0deg)';
  } else {
      icon.textContent = '🌙';
      icon.style.transform = 'rotate(360deg)';
  }
});
// Popup for sign in
function openSignInPopup() {
  document.getElementById('signInPopup').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeSignInPopup() {
  document.getElementById('signInPopup').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close popup if clicking outside the content
window.onclick = function(event) {
  const popup = document.getElementById('signInPopup');
  if (event.target === popup) {
      closeSignInPopup();
  }
}
// Sample data - replace with your actual data for reviews
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const dotsContainer = document.querySelector('.carousel-dots');
    const playPauseButton = document.querySelector('.play-pause-button');
    
    let currentIndex = 0;
    let isPlaying = true;
    let slideInterval;
    const slideDelay = 3000;
    
    function updateSlidePositions() {
        slides.forEach((slide, index) => {
            slide.className = 'carousel-slide';
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add('next');
            }
        });
    }
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlidePositions();
        updateDots();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }
    
    function startSlideshow() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDelay);
    }
    
    function stopSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }
    
    function resetInterval() {
        if (isPlaying) {
            stopSlideshow();
            startSlideshow();
        }
    }
    
    function togglePlayPause() {
        isPlaying = !isPlaying;
        playPauseButton.textContent = isPlaying ? '⏸️' : '▶️';
        if (isPlaying) {
            startSlideshow();
        } else {
            stopSlideshow();
        }
    }
    
    // Event listeners
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
    playPauseButton.addEventListener('click', togglePlayPause);
    
    // Pause on hover
    track.addEventListener('mouseenter', stopSlideshow);
    track.addEventListener('mouseleave', () => {
        if (isPlaying) startSlideshow();
    });
    
    // Initialize positions
    updateSlidePositions();
    
    // Start the slideshow
    startSlideshow();
});
    // Add hover preview functionality for slideshow images
    document.querySelectorAll('.continuous-slideshow img').forEach(img => {
        img.addEventListener('mouseenter', (e) => {
            const previewImage = document.querySelector('.preview-image');
            const hoverImageSrc = e.target.getAttribute('data-hover-image');
            if (hoverImageSrc) {
                previewImage.src = hoverImageSrc;
                document.querySelector('.hover-preview').style.display = 'block';
            }
        });

        img.addEventListener('mouseleave', () => {
            document.querySelector('.hover-preview').style.display = 'none';
        });
    });

// Add hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navClose = document.querySelector('.nav-close');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);
    navClose.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && 
            !navMenu.contains(event.target) && 
            navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});