// alert('welcome')

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    // console.log(accountNumber)
    const pin = document.getElementById('pin').value;
    // console.log(pin)
    const convertedPin = parseInt(pin)
    if(accountNumber.length ===11){
        if(convertedPin === 1234){
            window.location.href='/main.html'
        }else{
            alert('Please enter this right pin ')
        }
    }else{
        alert('invalid account')
    }
    
    
})