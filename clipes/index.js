document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const projects = document.querySelectorAll('.clipe');
  let timeoutId;

  searchInput.addEventListener('input', function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      const searchTerm = searchInput.value.toLowerCase();

      projects.forEach(function (project) {
        const title = project.querySelector('.clipe-title').textContent.toLowerCase();
        const tags = Array.from(project.querySelectorAll('.clipe-tag')).map(tag => tag.textContent.toLowerCase());

        const titleMatch = title.includes(searchTerm);
        const tagsMatch = tags.some(tag => tag.includes(searchTerm));

        if (titleMatch || tagsMatch) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }, 300);
  });

  const urlParams = new URLSearchParams(window.location.search);
  const videoCode = urlParams.get('c');

  if (videoCode) {
    const clipeCorrespondente = document.querySelector(`.clipe[data-id="${videoCode}"]`);
    const clipesContainer = document.querySelector('.clipes-container');

    if (clipeCorrespondente) {
      const tituloClipe = clipeCorrespondente.querySelector('.clipe-title').textContent;
      const urlClipe = clipeCorrespondente.querySelector('iframe').src;
      const tagsClipe = Array.from(clipeCorrespondente.querySelectorAll('.clipe-tag')).map(tag => tag.textContent);
      const onlyClipeContainer = document.querySelector('.onlyClipe');

      if (onlyClipeContainer) {
        const onlyClipeTitle = onlyClipeContainer.querySelector('.clipe-title');
        const onlyClipeTags = onlyClipeContainer.querySelector('.clipe-tags');
        const onlyClipeVideo = onlyClipeContainer.querySelector('iframe');

        onlyClipeTitle.textContent = `${tituloClipe}`;
        onlyClipeVideo.src = urlClipe;
        onlyClipeTags.innerHTML = "";

        tagsClipe.forEach(tag => {
          const newTag = document.createElement('div');
          newTag.classList.add('clipe-tag');
          newTag.textContent = tag;
          onlyClipeTags.appendChild(newTag);
        });

        onlyClipeContainer.style.display = 'block';
        document.querySelectorAll('.clipe').forEach(function (clipe) {
          clipe.style.display = 'none';
          searchInput.style.display = 'none';
          clipesContainer.style.height = 'auto';
        });
      }
    }
  }
  // Copy to clipboard
  document.querySelectorAll('[id="shareVideo-btn"]').forEach(function (button) {
    button.addEventListener('click', function () {
      toggleIcon(this);
    });
  });

  function toggleIcon(button) {
    var icon = button.querySelector('i');
    var videoId = button.closest('.clipe').getAttribute('data-id');
    var url = 'https://eupane.github.io/projetos/clipes/?c=' + videoId;

    if (icon.classList.contains('fa-share')) {
      button.innerHTML = 'Copiado';

      var tempInput = document.createElement('textarea');
      tempInput.value = url;
      document.body.appendChild(tempInput);

      tempInput.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'bem-sucedido' : 'mal-sucedido';
        // console.log('O comando foi: ' + msg);
      } catch (err) {
        // console.error('Não foi possível copiar o texto', err);
      } finally {
        document.body.removeChild(tempInput);
      }

      setTimeout(function () {
        button.innerHTML = '<i class="fa-clipboard fa-solid fa-share"></i>';
      }, 2000);
    }
  }
});