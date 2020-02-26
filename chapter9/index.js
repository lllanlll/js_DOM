
function getNextEle(node) {
    if(node.nodeType === 1) return node;
    if(node.nextSibling) {
        return getNextEle(node.nextSibling);
    }
    return null;
}

function styleHeaderBling(tag, theClass) {
    let tagList = document.getElementsByTagName(tag);
    for(let value of tagList) {
        let ele = getNextEle(value.nextSibling);
        addClass(ele, theClass);
    }
}

addLoadEvent(function() {
    styleHeaderBling('h1', 'examName')
});

function tableAddCss() {
    let table = document.getElementsByTagName('table');
    let odd,rows;
    for(let i = 0; i < table.length; i++) {
        odd = false;
        rows = table[i].getElementsByTagName('tr');
        for(let j = 0; j < rows.length; j++) {
            if(odd) {
                addClass(rows[j], 'odd');
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

addLoadEvent(tableAddCss);

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

function highlightTr() {
    let rows = document.getElementsByTagName('tr');
    for(let tr of rows) {
        tr.onmouseover = function() {
            this.style.fontWeight = 'bold';
        }
        tr.onmouseout = function() {
            this.style.fontWeight = 'normal';
        }
    }
}

addLoadEvent(highlightTr);