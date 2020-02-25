function getNewContent() {
    let request = getHTTPObject();
    if(request) {
        request.open('GET', 'example.txt', true);
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                console.log('async start!');
                let para = document.createElement('p');
                let txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementsByClassName('new')[0].appendChild(para);
                console.log('async done!');
            }
        }
        request.send(null);
    } else {
        alert('sorry your browser do not support ajax');
    }
    console.log('program run done here!');
}

addLoadEvent(getNewContent);