(function () {
  'use strict';

  // ── Active link highlight ──
  var path = window.location.pathname;
  var page = path.split('/').pop() || 'index.html';
  if (page === '' || page === 'formaticon-docs') page = 'index.html';

  document.querySelectorAll('.sidebar-link').forEach(function (link) {
    var href = link.getAttribute('href') || '';
    var linkPage = href.split('/').pop();
    if (!linkPage || linkPage === '') linkPage = 'index.html';
    if (linkPage === page) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // ── Mobile sidebar toggle ──
  var sidebar   = document.getElementById('sidebar');
  var hamburger = document.getElementById('nav-toggle');
  var overlay   = document.getElementById('nav-overlay');

  if (!sidebar || !hamburger || !overlay) return;

  function openSidebar() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

  document.querySelectorAll('.sidebar-link').forEach(function (link) {
    link.addEventListener('click', closeSidebar);
  });
})();
