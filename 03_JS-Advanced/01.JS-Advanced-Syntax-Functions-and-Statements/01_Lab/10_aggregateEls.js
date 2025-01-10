function aggregate(input) {
    function sum(arr) {
        let result = 0;

        for (let el of arr) {
            result += Number(el);
        }

        return result;
    }

    function sumInverse(arr) {
        result = 0;

        for (let el of arr) {
            result += 1 / Number(el);
        }

        return result;
    }

    function concat(arr) {
        return arr.join('');
    }

    console.log(sum(input));
    console.log(sumInverse(input));
    console.log(concat(input));

}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);