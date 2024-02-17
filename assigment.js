const loanCalulator = (interestRate) => {
    return [
        calculate = (principal, time) => {
            return principal * time * interestRate / 100;
        },
        update = (newInterestRate) => {
            interestRate = newInterestRate;
        }
    ]


}

const [calculateHomeLoan, updateHomeLoan] = loanCalulator();
updateHomeLoan(10);
console.log(calculateHomeLoan(10000, 10));
console.log(calculateHomeLoan(20000, 10));
