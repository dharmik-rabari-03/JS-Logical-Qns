//method 1 (using method)

let name = "121";

function Check() {
  let nameInLowercase = name.toLowerCase();
  let reverseName = name.split("").reverse().join("");

  if (nameInLowercase === reverseName) {
    console.log(name, "is palindrome");
  } else {
    console.log(name, "is not palindrome");
  }
}

Check();

//without method


//1

let name2 = "dharmik";

const check2 = (str) => {
  let cleanedWord = str.toLowerCase();
  let reversed = "";

  for (let i = cleanedWord.length - 1; i >= 0; i--) {
    reversed += cleanedWord[i];
  }

  cleanedWord === reversed
    ? console.log("given string is palindrome string", str)
    : console.log("given string is not palindrome string");
};

check2(name2)

//2

let name3 = "devloper";

function Check3() {
  let NameInLowercase = name3.toLowerCase();
  let reverse = [...NameInLowercase].reverse().join("");

  if (NameInLowercase === reverse) {
    console.log(name3, "is palindrome");
  } else {
    console.log(name3, "is not palindrome");
  }
}

Check3();
