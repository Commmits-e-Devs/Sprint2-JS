  const scenes  = document.querySelectorAll('.scene');
  const dots    = document.querySelectorAll('.scene-dot');
  const label   = document.getElementById('sceneLabel');
  const ch      = document.getElementById('crosshair');
 
  const labels  = ['Pôr do Sol Urbano', 'Paisagem Natural', 'Modo Retrato'];
  let current   = 0;
 
  function goScene(next) {
    scenes[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = next;
    scenes[current].classList.add('active');
    dots[current].classList.add('active');
    label.textContent = labels[current];
 
    // animação de foco no crosshair
    ch.style.transform = 'scale(1.2)';
    setTimeout(() => ch.style.transform = 'scale(1)', 350);
  }
 
  // Avança automaticamente a cada 3s
  setInterval(() => goScene((current + 1) % scenes.length), 3000);
 
  // Clique nos dots para trocar manualmente
  dots.forEach((dot, i) => dot.addEventListener('click', () => goScene(i)));
 
  // ── Modos ──
  function setMode(el) {
    document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }
 
  // ── Navegação ──
  document.getElementById('btn-gallery').addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = 'galeria.html';
  });
 
  document.getElementById('btn-shutter').addEventListener('click', function(e) {
    e.stopPropagation();
    const flash = document.getElementById('flash');
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 120);
  });
 
  document.getElementById('btn-settings').addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = 'config.html';
  });
