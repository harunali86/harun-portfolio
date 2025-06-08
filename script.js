const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < trigger) {
      section.classList.add('reveal');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
