function switchPicture(whichPic) {
    if(!document.getElementsByClassName('placeImg')) return false;
    let source = whichPic.getAttribute('href');
    let placeholder = document.getElementsByClassName('placeImg')[0];
    if(!placeholder) {
        return false;
    }
    placeholder.setAttribute('src', source);
    
    if(document.getElementsByClassName('describe')) {
        let descText = document.getElementsByClassName('describe')[0];
        descText.firstChild.nodeValue = whichPic.getAttribute('title');
    }
    return true;
}

function countNode() {
    let bodyEle = document.getElementsByTagName('body')[0];
    let bodyEleNum = bodyEle.childNodes;
    for(let i in bodyEleNum) {
        console.log(bodyEleNum[i]);
    }
}

function addLoadEvent(func) {
    let oldOnload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldOnload();
            func();
        }
    }
}

addLoadEvent(countNode);

function checkObj() {
    if(!document.getElementsByClassName) {
        return false;
    }
    if(!document.getElementsByTagName) {
        return false;
    }
    return true;
}

function prepareGallery() {
    if(!checkObj()) return false;
    if(!document.getElementsByClassName('gallery')) return false;
    let gallery = document.getElementsByClassName('gallery')[0];
    let links = gallery.getElementsByTagName('a');
    for(let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            if(switchPicture(this)) {
                return false;
            } else {
                return true;
            }
        }
    }
}

addLoadEvent(prepareGallery);