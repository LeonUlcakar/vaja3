'use strict';

function get_num_dividers(x) {
    let num_of_dividers = 0;
    for (let i = 1; i < x; i++) {
        if (x % i == 0) {
            num_of_dividers++;
        }
    }
    return num_of_dividers;
}

function dividers2(array) {
    let results = [];
    let between = [];
    let num_divisions;
    for (let i in array) {
        num_divisions = get_num_dividers(array[i]);
        between.push({ num: array[i], num_of_divisions: num_divisions });
    }
    results = between.sort((a, b) => {
        if (b.num_of_divisions - a.num_of_divisions > 0)
            return -1;

        if (b.num != a.num && b.num - a.num < 0)
            return 1;

        return 0;
    });

    console.log(results);
}

function dividers3(array) {
    let results = [];
    let between = [];
    let num_divisions;
    for (let i in array) {
        num_divisions = get_num_dividers(array[i]);
        between.push({ num: array[i], num_of_divisions: num_divisions });
    }
    for (let i = 0; i < between.length; i++) {
        for (let j = 0; j < between.length - i - 1; j++) {
            if (between[j].num_of_divisions > between[j + 1].num_of_divisions || between[j].num_of_divisions === between[j + 1].num_of_divisions && between[j].num > between[j + 1].num) {
                let tmp = between[j];
                between[j] = between[j + 1];
                between[j + 1] = tmp;
            }
        }
    }

    console.log(between);
}
