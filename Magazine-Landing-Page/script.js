const sections = document.querySelectorAll('.magazine');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const color = entry.target.getAttribute('data-color');
      document.body.style.backgroundColor = color;
      header.style.backgroundColor = color;
      footer.style.backgroundColor = color;
    }
  });
}, { threshold: 0.5 });

// Observe each section
sections.forEach(section => observer.observe(section));

// Set initial color
if (sections.length > 0) {
  const initialColor = sections[0].getAttribute('data-color');
  document.body.style.backgroundColor = initialColor;
  header.style.backgroundColor = initialColor;
  footer.style.backgroundColor = initialColor;
}


const magazines = document.querySelectorAll('.magazine');
let isScrolling = false;
let currentIndex = 0;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return; // prevent rapid scrolls

  if (e.deltaY > 0 && currentIndex < magazines.length - 1) {
    currentIndex++;
  } else if (e.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  }

  isScrolling = true;
  magazines[currentIndex].scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    isScrolling = false;
  }, 500); // prevents fast double scroll
});
