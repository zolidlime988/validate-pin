const testCase = [
    { pin: "17283", usability: false },
    { pin: "172839", usability: true },
    { pin: "111822", usability: false },
    { pin: "112762", usability: true },
    { pin: "123743", usability: false },
    { pin: "321895", usability: false },
    { pin: "124578", usability: true },
    { pin: "112233", usability: false },
    { pin: "882211", usability: false },
    { pin: "887712", usability: true },
]

testCase.forEach(({ pin, usability }) => {
    console.log(`PIN: ${pin} can be used? result: ${validatePin(pin)}. Answer is ${usability}`)
})

function validatePin(pin) {
    // validate only number
    const isOnlyNumber = pin.match(/^[0-9]*$/)
    if (!isOnlyNumber) {
        return false;
    }
    // validate length
    if (pin.length < 6) {
        return false;
    }
    const duplicateNumber = [];
    // validate first set of duplication
    if (pin[0] === pin[1]) {
        duplicateNumber.push(pin[0])
    }

    for (let pos = 1; pos < pin.length - 1; pos++) {
        // validate triplet number
        if (pin[pos - 1] === pin[pos] === pin[pos + 1]) {
            return false;
        }
        // validate order number
        if (Number(pin[pos - 1]) - Number(pin[pos]) === Number(pin[pos]) - Number(pin[pos + 1])) {
            return false;
        }
        // validate second and more set of duplication
        if (pin[pos] === pin[pos + 1]) {
            duplicateNumber.push(pin[pos])
            if (duplicateNumber.length > 2) {
                return false;
            }
        }
    }
    return true;
}