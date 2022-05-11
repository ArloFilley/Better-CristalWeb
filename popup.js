document.addEventListener('DOMContentLoaded', () => {
    let selectors = document.getElementsByTagName('input');
    let colorNow;
    let navbar = selectors[0];
    let background = selectors[1];
    let text = selectors[2];

    chrome.storage.sync.get(['navbar', 'background', 'text'], function(result) {
        navbar.value = result.navbar;
        background.value = result.background;
        text.value = result.text;
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
});