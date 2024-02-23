document.addEventListener('DOMContentLoaded', function () {
  var buttonContainer = document.getElementById('button-container');
  var switchButton = document.getElementById('switch-btn');
  var currentThemeIndex = 0;

  var themeGroup = [
    // Dark Theme
    {
      '--background-color': '#101010',
      '--button-color': '#202020',
      '--background-button-color': '#080808',
      '--boxShadow-button-color': '#adadad',
      '--border-button-color': '#050505'
    },
    // Light Theme
    {
      '--background-color': '#a0a0a0',
      '--button-color': '#c2c2c2',
      '--background-button-color': '#8a8989',
      '--boxShadow-button-color': '#181818',
      '--border-button-color': '#585858'
    }
  ];

  var applyThemeGroup = function (themeIndex) {
    var currentTheme = themeGroup[themeIndex];
    for (var key in currentTheme) {
      document.documentElement.style.setProperty(key, currentTheme[key])
      if (currentThemeIndex == 1) {
        buttonContainer.style.justifyContent = 'right';
      } else {
        buttonContainer.style.justifyContent = 'left';
      }
    }
  };

  switchButton.addEventListener('click', function () {
    currentThemeIndex = (currentThemeIndex + 1) % themeGroup.length;
    applyThemeGroup(currentThemeIndex);
  })
})