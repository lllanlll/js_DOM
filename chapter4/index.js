function switchPicture(whichPic) {
    let source = whichPic.getAttribute('href');
	let placeholder = document.getElementsByClassName('placeImg')[0];
	let descText = document.getElementsByClassName('describe')[0];
	placeholder.setAttribute('src', source);
	descText.firstChild.nodeValue = whichPic.getAttribute('title');
}

function countNode() {
    let bodyEle = document.getElementsByTagName('body')[0];
    let bodyEleNum = bodyEle.childNodes;
    for(let i in bodyEleNum) {
        console.log(bodyEleNum[i]);
    }
}

window.onload = countNode();