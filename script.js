 //=== Toggle Mobile Menu === function toggleMenu() { const menu = document.getElementById('mobileMenu'); menu.classList.toggle('show'); }

// === Close Menu When Link Clicked === document.querySelectorAll('.mobile-menu a').forEach(link => { link.addEventListener('click', () => { document.getElementById('mobileMenu').classList.remove('show'); }); });

// === Scroll-to-Top Button === const scrollBtn = document.createElement('button'); scrollBtn.textContent = "⬆️"; scrollBtn.id = "scrollTopBtn"; scrollBtn.style.cssText = position: fixed; bottom: 30px; right: 20px; padding: 10px 14px; background: #2563eb; color: white; border: none; border-radius: 50%; font-size: 20px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: none; z-index: 1000;; document.body.appendChild(scrollBtn);

//window.addEventListener('scroll', () => { scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none'; });

//scrollBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// === Fade In Sections On Scroll === const fadeSections = document.querySelectorAll('section');

//const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = 1; entry.target.style.transform = 'translateY(0)'; } }); }, { threshold: 0.2 });

//fadeSections.forEach(section => { section.style.opacity = 0; section.style.transform = 'translateY(40px)'; section.style.transition = 'all 0.6s ease-out'; observer.observe(section); });

// === Typing Effect For Hero Title === const title = document.querySelector('.hero-title'); if (title) { const text = "Sir Nature Phone Repair Services"; let i = 0; title.textContent = ""; function typeEffect() { if (i < text.length) { title.textContent += text.charAt(i); i++; setTimeout(typeEffect, 80); } } typeEffect(); }

function toggleMenu() {
const menu = document.getElementById("mobileMenu");
menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
// script.js
function toggleMenu() {
const menu = document.getElementById("mobileMenu");
menu.classList.toggle("show");
}

