  function showTab(id, btn) {
    document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('visible'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('visible');
    btn.classList.add('active');
    document.getElementById('karte').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function toggleNav() { document.getElementById('navLinks').classList.toggle('open'); }
  function closeNav() { document.getElementById('navLinks').classList.remove('open'); }
