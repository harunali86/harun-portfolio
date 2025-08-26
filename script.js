const sections = document.querySelectorAll('.section');
const revealItems = document.querySelectorAll('.reveal-item');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = parseFloat(entry.target.dataset.delay || '0');
      entry.target.style.transitionDelay = `${delay}s`;
      entry.target.classList.add('reveal');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => io.observe(section));
revealItems.forEach((item) => io.observe(item));

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hover tilt effect for project cards (small, GPU-friendly)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
  const media = card.querySelector('.card-media img');
  if (!media) return;

  const handleMove = (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
  };
  const reset = () => { card.style.transform = 'rotateX(0deg) rotateY(0deg)'; };

  card.addEventListener('mousemove', handleMove);
  card.addEventListener('mouseleave', reset);
});
