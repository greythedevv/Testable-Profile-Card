
  /* ── Epoch clock ───────────────────────────────────────── */
  const timeEl = document.getElementById('epoch-time');
  function tick() {
    if (timeEl) timeEl.textContent = Date.now();
  }
  tick();
  setInterval(tick, 1000);

 