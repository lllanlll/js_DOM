function addClass(node, value) {
    if(!node.className) {
        node.className = value;
    } else {
        newClassName = node.className;
        newClassName += ' ';
        newClassName += value;
        node.className = newClassName;
    }
}