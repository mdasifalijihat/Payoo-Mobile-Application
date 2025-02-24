document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log(event, 'welcome')
    const amount = document.getElementById('amount').value;
    // console.log(typeof amount)
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        alert('Add success!')
    }else{
        alert('Wrong Pin')
    }


})