const  fib = num => {
    if (typeof num !== 'number') return "this is not a number";
    else if (num < 0 || num % 1 !== 0) return "this is not a natural number";
    else if (num === 0) return [];
    else if (num === 1) return [0];
    else {
        let arrFi = [0, 1];
        for (let i = 2; i < num; i++) {
            arrFi.push(arrFi[i-1] + arrFi[i-2]);
        }
        return arrFi;
    }
};
module.exports = fib;