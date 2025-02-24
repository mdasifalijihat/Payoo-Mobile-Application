document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    // console.log(convertedAmount, convertedPin)
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertMainBalance = parseFloat(mainBalance);

    if(amount && pin){
      if(convertedPin === 1234){
        const sum = convertMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        alert('Add Success!')
      }else{
        alert('Wrong Pin ')
      }
    }else{
        alert('Enter Amount')
    }
    
  });
