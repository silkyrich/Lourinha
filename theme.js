// Theme + splash: pick your team, swap CSS variables, persist in localStorage.
(function () {
  var STORE = 'cez.team';
  var html = document.documentElement;
  var splash = document.getElementById('splash');
  var toggle = document.querySelector('.team-toggle');
  var labelEl = document.querySelector('[data-team-value]');

  function applyTeam(team) {
    if (team !== 'skate' && team !== 'skateboard') team = 'skateboard';
    html.setAttribute('data-team', team);
    if (labelEl) labelEl.textContent = team === 'skate' ? 'Skate' : 'Skateboard';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', team === 'skate' ? '#ff5fa2' : '#ff5b1f');
  }

  function showSplash() {
    if (!splash) return;
    splash.hidden = false;
    requestAnimationFrame(function () { splash.classList.add('is-shown'); });
    document.body.style.overflow = 'hidden';
  }

  function hideSplash() {
    if (!splash) return;
    splash.classList.remove('is-shown');
    document.body.style.overflow = '';
    setTimeout(function () { splash.hidden = true; }, 360);
  }

  // Boot
  var stored = null;
  try { stored = localStorage.getItem(STORE); } catch (e) {}

  if (stored) {
    applyTeam(stored);
  } else {
    applyTeam('skateboard');
    showSplash();
  }

  // Splash picks
  document.querySelectorAll('[data-pick-team]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var team = btn.getAttribute('data-pick-team');
      applyTeam(team);
      try { localStorage.setItem(STORE, team); } catch (e) {}
      hideSplash();
    });
  });

  var skipBtn = document.querySelector('.splash-skip');
  if (skipBtn) skipBtn.addEventListener('click', function () {
    try { localStorage.setItem(STORE, 'skateboard'); } catch (e) {}
    hideSplash();
  });

  // Nav toggle: swap teams
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = html.getAttribute('data-team');
      var next = current === 'skate' ? 'skateboard' : 'skate';
      applyTeam(next);
      try { localStorage.setItem(STORE, next); } catch (e) {}
    });
  }

  // Mobile nav
  (function () {
    var btn = document.querySelector('.topnav-toggle');
    var links = document.getElementById('topnav-links');
    if (!btn || !links) return;
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  })();

  // Reveal-on-scroll
  (function () {
    if (!('IntersectionObserver' in window)) return;
    var els = document.querySelectorAll('.band, .spot, .card, .todo li');
    els.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  })();

  // Hide giscus placeholder once the real widget appears
  (function () {
    var mount = document.getElementById('giscus-mount');
    var ph = document.getElementById('giscus-placeholder');
    if (!mount || !ph || !('MutationObserver' in window)) return;
    var mo = new MutationObserver(function () {
      if (mount.querySelector('.giscus-frame, .giscus iframe')) {
        ph.style.display = 'none';
        mo.disconnect();
      }
    });
    mo.observe(mount, { childList: true, subtree: true });
  })();
})();
