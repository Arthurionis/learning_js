
let count = 0
function wraper() {
    function getDepositIncome(amount, persents, term) {
        let sum = 0

        while (count < term) {
            sum = sum + amount * (persents / 100)
            count = count + 1
        }
        return sum
    }
    const Deposit_1 = getDepositIncome(1500, 15, 5)
const Deposit_2 = getDepositIncome(1500, 30, 5)
const totalSum = Deposit_1 + Deposit_2
console.log(totalSum)
console.log(count)
}
wraper()