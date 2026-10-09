(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('scanora-privacy-theme');
  const media = window.matchMedia?.('(prefers-color-scheme: dark)');

  const applyTheme = theme => {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    root.style.colorScheme = theme;
  };

  applyTheme(saved || (media?.matches ? 'dark' : 'light'));

  toggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('scanora-privacy-theme', next);
  });

  if (!saved) media?.addEventListener?.('change', e => applyTheme(e.matches ? 'dark' : 'light'));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const id = link.getAttribute('href');
      const target = id && document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
