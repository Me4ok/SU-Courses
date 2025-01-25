function sumTable() {
    const priceTdElements = document.querySelectorAll('table tbody td:nth-of-type(2)');
    const sumTdElement = document.querySelector('table tbody tr:last-of-type td:last-of-type');
    let prices = Array.from(priceTdElements)
        .map(el => el.textContent) // convert arr of td elements, to arra of their textContent
        .filter(el => el.length > 0) // exclude empty cells - e.g. of the row "Total"
        .map(el => +el); // convert arr elements to numbers
    // prices = prices.map(el => Number(el));
    sumTdElement.textContent = prices.reduce((el, acc) => (acc + el));
}