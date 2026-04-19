(function () {
  const words = ['учеников', 'учителей', 'администрации'];
  const el = document.getElementById('ticker-word');
  let index = 0;

  function tick() {
    el.classList.add('is-exiting');

    setTimeout(function () {
      index = (index + 1) % words.length;
      el.classList.add('is-entering');
      el.classList.remove('is-exiting');
      el.textContent = words[index];

      el.offsetWidth;

      el.classList.remove('is-entering');
    }, 400);
  }

  setInterval(tick, 1800);
}());
