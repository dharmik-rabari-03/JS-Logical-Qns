const num = [1, 2, 3, 4, 5, 5, 7, 6, 7, 8, 9, 9, 10];

function check1(num) {

    let count = {}

    for (let n of num) {
        if (count[n]) {

            count[n] = count[n] + 1

        } else {
            count[n] = 1
        }
    }

    console.log("count", count);


}

check1(num)
 


// using for loop

function check2(num) {

    let count = {}

    for (let i = 0; i < num.length; i++) {

        let val = num[i]

        if (count[val]) {
            count[val] = count[val] + 1
        } else {
            count[val] = 1
        }

    }

    console.log("count ", count)

}

check2(num)