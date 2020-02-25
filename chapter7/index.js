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
		let title = whichPic.getAttribute('title');
		if(!title) {
			title = 'no description'
		}
		descText.firstChild.nodeValue = title;
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

const imgObj = {
	class: 'placeImg',
	src: '../assets/images/place.png',
	alt: 'placeholder',
	width: '400px',
	height: '300px',
}

const pObj = {
	class: 'describe',
}

function createImg(obj) {
	if(!document.createElement) return false;
	let img = document.createElement('img');
	for(let prop in obj) {
		img.setAttribute(prop, obj[prop]);
	}
	return img;
}

function createP(obj) {
	if(!document.createElement) return false;
	let p = document.createElement('p');
	for(let prop in obj) {
		p.setAttribute(prop, obj[prop]);
	}
	return p;
}

function insertAfter(newEle, targetEle) {
	let parent = targetEle.parentNode;
	if (parent.lastChild === targetEle) {
		parent.appendChild(newEle);
	} else {
		parent.insertBefore(newEle, targetEle.nextSibling);
	}
}

function generateNode() {
	if(!document.createTextNode) return false;
	let img = createImg(imgObj);
	let p = createP(pObj);
	let txt = document.createTextNode('Img Describe');
	p.appendChild(txt);
	let gallery = document.getElementsByClassName('gallery')[0];
	insertAfter(img, gallery);
	insertAfter(p, img);
}

addLoadEvent(generateNode)
