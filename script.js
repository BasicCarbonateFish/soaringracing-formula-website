// 移动端菜单、滚动进度以及渐入动画。无需安装任何依赖。
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? '打开导航菜单' : '关闭导航菜单');
    mobileNav.hidden = expanded;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '打开导航菜单');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const progress = document.querySelector('.page-progress');
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: .08, rootMargin: '0px 0px -25px 0px' });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}
