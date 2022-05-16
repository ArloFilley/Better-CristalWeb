let resources = 'chrome-extension:/gkcfokhfblkdchjfdjabegaiegodalnp/assets/';
let head = document.getElementsByTagName('head');
let version = 'v1.4';
let realeased = 'Release candidate';
let extensionName = 'Better-CristalWeb';
let locations = document.location.href;
let locate = locations.substring(48, locations.length).toLowerCase();
if (locate.charAt(locate.length - 1) === '?') {
    locate = locate.substring(0, locate.length - 1);
}

loadStandard();
setVariables();

if (locate === 'students') {
    var reveiws = content.getElementsByClassName('wide');
    var review = document.getElementsByTagName('th');
    review[0].innerHTML = "<b>Reviews</b>";

    var dials = content.getElementsByClassName('review-dial');
    console.log(dials[0].innerHTML);

} else if (locate = 'reveiws') {
    var reveiws = content.getElementsByClassName('wide');
    var review = document.getElementsByTagName('th');
    review[0].innerHTML = "<b>Your Reviews</b>";
}

function loadStandard() {
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
    chrome.storage.sync.get(['navbar', 'background', 'text'], function(value) {
        document.documentElement.style.setProperty('--navbar-color', value.navbar);
        document.documentElement.style.setProperty('--background-color-1', value.background);
        document.documentElement.style.setProperty('--background-color-2', value.background);
        document.documentElement.style.setProperty('--text-color', value.text);
    });
}