function editElement(element, match, replacer) {
    const newText = element.textContent.split(match).join(replacer);
    element.textContent = newText;
}