function getArticleGenerator(articles) {
    let articlesArr = articles.join('<=>').split('<=>');
    const bodyContent = document.querySelector('body #content');
    
    function print () {
        if (articlesArr.length > 0) {
            const currentArticleToPrint = articlesArr.shift();

            let newArticleEL = document.createElement('article');
            newArticleEL.textContent = currentArticleToPrint;

            bodyContent.appendChild(newArticleEL);
        }        
    }

    return print;
}