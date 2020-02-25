function getAbbrText() {
    let abbrList = document.getElementsByTagName('abbr');
    let textList = [];
    if(abbrList.length) {
        for(let value of abbrList) {
            //保证代码在ie7之前不会出错 因为不支持abbr
            if(value.childNodes.length < 1) continue;
            let key = value.lastChild.nodeValue;
            let item = value.getAttribute('title');
            textList[key] = item;
        }

    }
    return textList;
}

//node: string, txt: string
function createNodeWithText(node, txt) {
    let storeNode = document.createElement(node);
    let storeTxt = document.createTextNode(txt);
    storeNode.appendChild(storeTxt);
    return storeNode;
}

function displayDtDl() {
    let list = getAbbrText();
    let body = document.querySelector('body');
    let head = createNodeWithText('h2', 'abbreviations');
    let dlLIst = document.createElement('dl');
    for(let index in list) {
        let dt = createNodeWithText('dt', index);
        let dd = createNodeWithText('dd', list[index]);

        dlLIst.appendChild(dt);
        dlLIst.appendChild(dd);
    }
    //若数组为空 不用执行添加操作
    if(dlLIst.childNodes.length < 1) return false;
    body.appendChild(head);
    body.appendChild(dlLIst);
}

addLoadEvent(displayDtDl);

//获取最后一个 元素 节点 而不是最后一个节点 不然可能取到换行符
function getLastEleNode(node) {
    let storeEle = node.getElementsByTagName('*');
    return storeEle[storeEle.length - 1];
}

function displayCite() {
    let quote = document.getElementsByTagName('blockquote');
    for(let value of quote) {
        if(!value.getAttribute('cite')) continue;
        let url = value.getAttribute('cite');
        let lastEle = getLastEleNode(value);
        if(typeof lastEle === 'undefined') continue;
        let link = createNodeWithText('a', 'source');
        link.setAttribute('href', url);
        let sup = document.createElement('sup');
        sup.appendChild(link);
        lastEle.appendChild(sup);
    }
}

addLoadEvent(displayCite);