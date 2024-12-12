const reverseString = function() {
    // let arr_str = str.split(" ");
    // let new_str;
    // for (let i = 0; i < arr_str.length; i++) {
    //     let arr = [], reverse_arr = [];
    //     // console.log(arr_str[i]);
    //     for (let j = 0; j < arr_str[i].length; j++) {
    //         arr[j] = arr_str[j];
    //     }
    //     reverse_arr = arr.reverse();
    //     new_str = reverse_arr.join(" ") + " ";
    // }
    // return new_str;

    return str.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
