document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const items = document.querySelectorAll('.items .item');
  let timeoutId;

  function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  searchInput.addEventListener('input', function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      const searchTerm = removeAccents(searchInput.value.toLowerCase());

      items.forEach(function (item) {
        const name = removeAccents(item.querySelector('.name').getAttribute('data-name')).toLowerCase();
        const city = removeAccents(item.querySelector('.city').getAttribute('data-city')).toLowerCase();
        const country = removeAccents(item.querySelector('.country').getAttribute('data-country')).toLowerCase();

        const nameMatch = name.includes(searchTerm);
        const cityMatch = city.includes(searchTerm);
        const countryMatch = country.includes(searchTerm);

        if (nameMatch || cityMatch || countryMatch) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }, 300);
  });
});