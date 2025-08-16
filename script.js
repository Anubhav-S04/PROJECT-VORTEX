const trigger = document.getElementById('triggerBox');
const dropdown = document.getElementById('dropdownBox');

trigger.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
  trigger.classList.toggle('active'); // toggles hamburger ↔ X
});


document.addEventListener('click', (e) => {
  if (!document.getElementById('dropdownContainer').contains(e.target)) {
    dropdown.classList.add('hidden');
    trigger.classList.remove('active'); // reset back to hamburger
  }
});
