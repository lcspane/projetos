document.addEventListener('DOMContentLoaded', function () {
    var colorSwitchBtn = document.getElementById('colorSwitch-btn');
    var currentGroupIndex = 0;

    var colorGroups = [
        // Color 1
        {
            '--background-color': '#4F6F52',
            '--background-color-transparent': '#4F6F522C',
            '--main-color': '#739072',
            '--second-color': '#86A789',
            '--effect-color': '#D2E3C8'
        },
        // Color 2
        {
            '--background-color': '#756AB6',
            '--background-color-transparent': '#756AB62C',
            '--main-color': '#AC87C5',
            '--second-color': '#E0AED0',
            '--effect-color': '#FFE5E5'
        },
        // Color 3
        {
            '--background-color': '#F6B17A',
            '--background-color-transparent': '#F6B17A2C',
            '--main-color': '#7077A1',
            '--second-color': '#424769',
            '--effect-color': '#2D3250'
        },
        // Color 4
        {
            '--background-color': '#A87C7C',
            '--background-color-transparent': '#A87C7C2C',
            '--main-color': '#7E6363',
            '--second-color': '#503C3C',
            '--effect-color': '#3E3232'
        },
        // Color 5
        {
            '--background-color': '#B1B2FF',
            '--background-color-transparent': '#B1B2FF2C',
            '--main-color': '#AAC4FF',
            '--second-color': '#D2DAFF',
            '--effect-color': '#EEF1FF'
        },
        // Color 6
        {
            '--background-color': '#52616B',
            '--background-color-transparent': '#52616B2C',
            '--main-color': '#C9D6DF',
            '--second-color': '#F0F5F9',
            '--effect-color': '#1E2022'
        }
    ];

    var applyColorGroup = function (groupIndex) {
        var currentGroup = colorGroups[groupIndex];
        for (var key in currentGroup) {
            document.documentElement.style.setProperty(key, currentGroup[key]);
        }
        updateHexCodes();
    };

    var updateHexCodes = function () {
        var colorBoxes = document.querySelectorAll('.color-box');

        colorBoxes.forEach(function (box, index) {
            var colorHex = box.querySelector('.color-hex');
            var computedColor = window.getComputedStyle(box).getPropertyValue('background-color');
            var hexColor = rgbToHex(computedColor);
            colorHex.textContent = hexColor;
            colorHex.addEventListener('click', function () {
                copyToClipboard(hexColor, colorHex);
            });
        });
    };

    var copyToClipboard = function (text, element) {
        var dummyTextArea = document.createElement('textarea');
        document.body.appendChild(dummyTextArea);
        dummyTextArea.value = text;
        dummyTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(dummyTextArea);
        element.innerHTML = '<i>Copied to clipboard!</i>';

        setTimeout(function () {
            element.textContent = text;
            element.style.fontStyle = 'normal';
        }, 1500);

        element.style.fontStyle = 'italic';

        console.log('Copied to the clipboard:', text);
    };

    colorSwitchBtn.addEventListener('click', function () {
        currentGroupIndex = (currentGroupIndex + 1) % colorGroups.length;
        applyColorGroup(currentGroupIndex);
    });

    applyColorGroup(currentGroupIndex);
});

function rgbToHex(rgb) {
    var rgbArray = rgb.match(/\d+/g);
    var hex = '#' + rgbArray.map(function (value) {
        var hexValue = parseInt(value).toString(16);
        return hexValue.length === 1 ? '0' + hexValue : hexValue;
    }).join('');
    return hex;
}