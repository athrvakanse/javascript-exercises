const fibonacci = function() {
    let fstNum = 0, secNum = 1, sum = 0;
    
    for (let i = 1; i <= num; i++) {
        sum = (fstNum + secNum)
        fstNum = secNum;
        secNum = sum;
    }
    return fstNum;
};

// Do not edit below this line
module.exports = fibonacci;
