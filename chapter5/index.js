function popUp(href) {
    window.open('https://www.baidu.com', "baidu", "width=320, height=480");
}

function prapareLink() {
    if(!document.getElementsByTagName) return false;
    let links = document.getElementsByTagName('a');
    for(let i = 0;i < links.length; i++) {
        if(links[i].getAttribute('class') === 'popUp') {
            links[i].onclick = function() {
                popUp(this.getAttribute('href'));
                return false;
            }
        }
    }
}

window.onload = prapareLink();
