let year = 2024;
if ((year % 4 ===0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("yes," + year + "is a leap year")

} else {
    console.log("no," + year + "is not a leap year")

}