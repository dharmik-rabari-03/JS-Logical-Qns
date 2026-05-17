// Method 2: Count occurrences of specific character using split() method

function check1(str, char) {

    const strOFchar = str.split(char)

    console.log(strOFchar)

    const repeat = strOFchar.length - 1

    console.log(repeat)

}

check1("dharmik", "d")

// Method 1: Count frequency of each character using object

let str="sms"

function check2(str) {

    let count = {}

    for (let n of str) {

        if (count[n]) {
            count[n] = count[n] + 1
        } else {
            count[n] = 1
        }

        

    }
console.log(count)
}

check2(str)