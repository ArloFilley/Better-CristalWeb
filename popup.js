document.addEventListener('DOMContentLoaded', () => {
    let selectors = document.getElementsByTagName('input');
    let colorNow;
    let navbar = selectors[0];
    let background = selectors[1];
    let text = selectors[2];
    let positiveColor = selectors[3];
    let goodColor = selectors[4];
    let mediocreColor = selectors[5];
    let badColor = selectors[6];

    chrome.storage.sync.get(['navbar', 'background', 'text', 'positiveColor', 'goodColor', 'mediocreColor', 'badColor'], function(result) {
        navbar.value = result.navbar;
        background.value = result.background;
        text.value = result.text;
        positiveColor.value = result.positiveColor;
        goodColor.value = result.goodColor;
        mediocreColor.value = result.mediocreColor;
        badColor.value = result.badColor;
    });
    navbar.addEventListener('change', () => {
        colorNow = navbar.value;
        chrome.storage.sync.set({ "navbar": colorNow }, () => {
            alert('Value is set to ' + colorNow);
        });
    });
    background.addEventListener('change', () => {
        colorNow = background.value;
        chrome.storage.sync.set({ "background": colorNow }, () => {
            alert('Value is set to ' + colorNow);
        });
    });
    text.addEventListener('change', () => {
        colorNow = text.value;
        chrome.storage.sync.set({ "text": colorNow }, () => {
            alert('Value is set to ' + colorNow);
        });
    });
    positiveColor.addEventListener('change', () => {
        colorNow = positiveColor.value;
        chrome.storage.sync.set({ "positiveColor": colorNow }, () => {
            alert('Value is set to ' + colorNow);
        });
    });
    goodColor.addEventListener('change', () => {
        colorNow = goodColor.value;
        chrome.storage.sync.set({ "goodColor": colorNow }, () => {
            alert('Value is set to ' + colorNow);
        });
    });
    mediocreColor.addEventListener('change', () => {
        colorNow = mediocreColor.value;
        chrome.storage.sync.set({ "mediocreColor": colorNow }, () => {
            alert('Value is set to ' + colorNow);
        });
    });
    badColor.addEventListener('change', () => {
        colorNow = badColor.value;
        chrome.storage.sync.set({ "badColor": colorNow }, () => {
            alert('Value is set to ' + colorNow);
        });
    });
});