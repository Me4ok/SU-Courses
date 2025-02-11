// function sort(arr, sortingOrder) {
    
//     const sorting = {
//         asc: function (a, b) {
//             return a - b;
//         },
//         desc: function (a, b) {
//             return b - a;
//         }
//     }

//     console.log(arr.sort(sorting[sortingOrder]));
// }

function sort(arr, order) {
    const sorting = {
        'asc': (input) => {
            return input.sort((a, b) => a - b);
        },
        'desc': (input) => {
            return input.sort((a, b) => b - a);
        }
    }

    return sorting[order](arr);
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');
