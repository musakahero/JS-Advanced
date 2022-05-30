function editElement(el, match, replacer) {
    let pattern = new RegExp(match, 'g');

    let newText = el.textContent.replace(pattern, replacer);
    el.textContent = newText; 
}