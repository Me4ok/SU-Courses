function rotation(arr, rotations) {
    /*
    // Quicker options with methods
    // for (let i = 1; i <= rotations; i++) {
    //     arr.push(arr.shift());
    // }
    // console.log(arr);    
    */

    let arrL = arr.length;
    let rotationsCount = rotations;
    let newArray = arr;

    for (let i = 0; i < rotationsCount; i++) {
        // initialize new temp array
        let tempArr = [];
        // save first arr element to a variable - this is the element to move
        let firstElement = newArray[0];
        // push all element without firstElement to the new array
        for (let j = 1; j < arrL; j++) {
            tempArr.push(newArray[j]);
        }
        // push firstElement as last into the new array
        tempArr.push(firstElement);
        newArray = tempArr;
    }

    console.log(newArray);
}

rotation([51, 47, 32, 61, 21], 7); // 32, 61, 21, 51, 47, 
// rotation([32, 21, 61, 1], 4);
// rotation([2, 4, 15, 31], 5);