'use strict';
// All navigation to a different HTML page uses target="_blank" in the markup.
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
}
const form = document.querySelector('#contact-form');
if (form) {
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', (event) => {
    status.classList.remove('error');
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      status.textContent = 'Please complete the required fields before sending.';
      status.classList.add('error');
      return;
    }
    // FormSubmit handles submission and its first-use email confirmation page.
    // Deliberately submit normally rather than claiming an unconfirmed success.
  });
}
