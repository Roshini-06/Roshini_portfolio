// Mobile nav toggle & small UX helpers
const nav = document.getElementById('site-nav');
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', (!expanded).toString());
  nav?.classList.toggle('show');
});

// Close nav when clicking a link (mobile)
nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('show'));
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
