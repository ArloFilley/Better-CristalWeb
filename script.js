const resources = 'chrome-extension:/gkcfokhfblkdchjfdjabegaiegodalnp/assets/';
const head = document.getElementsByTagName('head');
const version = 'v1.4';
const realeased = 'Release candidate';
const extensionName = 'Better-CristalWeb';
const locations = document.location.href;
const locate = locations.substring(48, locations.length).toLowerCase();
if (locate.charAt(locate.length - 1) === '?') {
    locate = locate.substring(0, locate.length - 1);
}

loadCss();
setVariables();

function loadCss() {
    let main = document.createElement('link');
    main.href = `${resources}main.css`;
    main.rel = "stylesheet";
    main.type = "text/css";

    let navbar = document.createElement('link');
    navbar.href = `${resources}navbar.css`;
    navbar.rel = "stylesheet";
    navbar.type = "text/css";

    let sidebar = document.createElement('link');
    sidebar.href = `${resources}sidebar.css`;
    sidebar.rel = "stylesheet";
    sidebar.type = "text/css";

    let css = document.createElement('link');
    css.href = `${resources}${locate}.css`
    css.rel = "stylesheet";
    css.type = "text/css"


    document.head.append(navbar);
    document.head.append(main);
    document.head.append(sidebar);
    document.head.append(css);

    let oldVersion = document.getElementsByClassName('sidebar__version');
    oldVersion[0].innerHTML = `<b>
        ${version}<br>
        ${realeased}<br>
        ${extensionName}
        </b>`;
    oldVersion[0].style.color = "white";

    let logo = document.getElementsByTagName('img');
    logo[0].src = `${resources}/images/Logo.png`;
}

function setVariables() {
    chrome.storage.sync.get(['navbar', 'background', 'text', 'positiveColor', 'goodColor', 'mediocreColor', 'badColor'], function(value) {
        document.documentElement.style.setProperty('--navbar-color', value.navbar);
        document.documentElement.style.setProperty('--background-color-1', value.background);
        document.documentElement.style.setProperty('--background-color-2', value.background);
        document.documentElement.style.setProperty('--text-color', value.text);
        document.documentElement.style.setProperty('--great-color', value.positiveColor);
        document.documentElement.style.setProperty('--good-color', value.goodColor);
        document.documentElement.style.setProperty('--mediocre-color', value.mediocreColor);
        document.documentElement.style.setProperty('--bad-color', value.badColor);
    });
}