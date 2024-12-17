let sum = +prompt("Enter the deposit amount: ", 500);
const persent = +prompt("Enter the persents of deposit : ", 5);;
const goalsum = 2000;
let count = 0;
const depositTerm = +prompt("Indicate the deposite term: ", 1)

while (count < depositTerm) {
    sum = sum + sum * (persent / 100)
    count = count + 1
    document.write(count + " year: " + persent + "% " + sum + "<br>")
}
