// app.js — Physique Program

/* ══════════════════════════════════
   THEME
══════════════════════════════════ */
const THEME_COLORS = {
  dark:  '#0d0d0f',
  light: '#f0f0f5'
};

let currentTheme = localStorage.getItem('pq-theme') || 'dark';

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
  // Update status bar color
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', THEME_COLORS[t]);
  localStorage.setItem('pq-theme', t);
  currentTheme = t;
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

document.getElementById('themeBtn').addEventListener('click', toggleTheme);
applyTheme(currentTheme);


/* ══════════════════════════════════
   RENDER EXERCISES
══════════════════════════════════ */
function renderExercises() {
  Object.entries(DAY_MAP).forEach(([day, key]) => {
    const list = document.getElementById('exercises-' + key);
    if (!list) return;
    const exArr = EXERCISES[key] || [];
    list.innerHTML = exArr.map((ex, i) => `
      <article class="ex">
        <div class="ex-top">
          <div class="ex-num">${i + 1}</div>
          <div class="ex-info">
            <div class="ex-name">${ex.name}</div>
            <div class="ex-sets">${ex.sets}</div>
          </div>
        </div>
        <p class="ex-desc">${ex.desc}</p>
        <div class="ex-gif-wrap">
          <img
            src="${ex.gif}"
            alt="${ex.name}"
            loading="lazy"
            onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22120%22><rect width=%22200%22 height=%22120%22 fill=%22%23222%22/><text x=%22100%22 y=%2265%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2214%22>GIF unavailable</text></svg>'"
          >
          <button
            class="zoom-btn"
            onclick="openGifModal('${ex.gif.replace(/'/g, "\\'")}', '${ex.name.replace(/'/g, "\\'")}')"
            title="Zoom"
            aria-label="Zoom ${ex.name}"
          >🔍</button>
        </div>
      </article>
    `).join('');
  });
}


/* ══════════════════════════════════
   DAY SWITCHER
══════════════════════════════════ */
function showDay(n, btn) {
  document.querySelectorAll('.wcard').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.day-tab').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  document.getElementById('day' + n).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ══════════════════════════════════
   GIF ZOOM MODAL
══════════════════════════════════ */
function openGifModal(src, name) {
  const modal = document.getElementById('gifModal');
  document.getElementById('gifModalImg').src = src;
  document.getElementById('gifModalName').textContent = name;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGifModal() {
  document.getElementById('gifModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeGifModal();
});


/* ══════════════════════════════════
   PWA — SERVICE WORKER
══════════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('[PWA] SW registered:', reg.scope))
      .catch(err => console.warn('[PWA] SW failed:', err));
  });
}


/* ══════════════════════════════════
   PWA — INSTALL PROMPT
══════════════════════════════════ */
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-banner').classList.add('show');
});

document.getElementById('install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log('[PWA] Install outcome:', outcome);
  deferredPrompt = null;
  document.getElementById('install-banner').classList.remove('show');
});

document.getElementById('install-close').addEventListener('click', () => {
  document.getElementById('install-banner').classList.remove('show');
});

window.addEventListener('appinstalled', () => {
  document.getElementById('install-banner').classList.remove('show');
  console.log('[PWA] App installed');
});


/* ══════════════════════════════════
   OFFLINE TOAST
══════════════════════════════════ */
const toast = document.getElementById('offline-toast');
window.addEventListener('offline', () => toast.classList.add('show'));
window.addEventListener('online',  () => toast.classList.remove('show'));
if (!navigator.onLine) toast.classList.add('show');


/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
renderExercises();
