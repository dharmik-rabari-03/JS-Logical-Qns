// sort an array in Ascending Order


const num = [5, 1, 78, 8, 9, 2, 4, 98, 5, 1, 52, 5, 6, 2];

const arraySortAscending = (num) => {
    const sortedArray = num.sort((a, b) => a - b);

    console.log("sortedArray", sortedArray);
};

arraySortAscending(num); 