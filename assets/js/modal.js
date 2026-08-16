const modal = document.querySelector('#video-modal');
const player = document.querySelector('[data-video-player]');
const triggers = document.querySelectorAll('[data-video-url]');
let lastTrigger = null;

function toEmbedUrl(url) {
  if (!url) return '';
  if (url.indexOf('embed') !== -1) return url;
  const match = url.match(/[?&]v=([^&]+)/);
  if (match) return 'https://www.youtube-nocookie.com/embed/' + match[1];
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) return 'https://www.youtube-nocookie.com/embed/' + shortMatch[1];
  return '';
}

function openModal(url) {
  if (!modal || !player) return;
  player.src = toEmbedUrl(url) + '?autoplay=1';
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const close = modal.querySelector('.modal-close');
  if (close) close.focus();
}

function closeModal() {
  if (!modal || !player) return;
  player.src = '';
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastTrigger) lastTrigger.focus();
}

if (modal && triggers.length) {
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      lastTrigger = trigger;
      openModal(trigger.dataset.videoUrl);
    });
  });

  modal.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}
