// making pin generator
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
//making calculator

document.getElementById('cal-digit').addEventListener('click', function (event) {
    const digit = event.target.innerText;
    const cal = document.getElementById('cal-screen');
    if (isNaN(digit)) {
        if (digit == 'C') {
            cal.value = '';

        }


    }
    else {
        const currentDigit = cal.value;
        const presentDigit = currentDigit + digit;
        cal.value = presentDigit;
    }

});

//verify pin num
document.getElementById('submit-btn').addEventListener('click', function () {
    verifyPin();
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const calInput = document.getElementById('cal-screen').value;
    const notifyFail = document.getElementById('fail');
    const notifySuccess = document.getElementById('success');
    //console.log(calInput)
    if (pin == calInput) {
        console.log('matched')
        notifySuccess.style.display = 'block'
        notifyFail.style.display = 'none';


    }
    else {
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}