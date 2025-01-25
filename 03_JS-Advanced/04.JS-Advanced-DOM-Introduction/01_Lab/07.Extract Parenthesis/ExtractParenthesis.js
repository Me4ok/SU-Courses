function extract(content) {
    const textElement = document.querySelector('#' + content);
    const pattern = /\([\w+ ]+\)/g;
    let matches = textElement.textContent.match(pattern);
    
    matches = matches.map(match => match.substring(1, match.length - 1));
    
    return matches.join('; ');
}