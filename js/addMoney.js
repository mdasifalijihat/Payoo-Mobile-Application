document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log(event, 'welcome')
    const amount = document.getElementById('amount').value;
    // console.log(typeof amount)
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    if(convertedPin === 1234){
        console.log('Pin okay')
    }else{
        alert('Wrong Pin')
    }


})