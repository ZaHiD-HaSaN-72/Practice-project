 let btn = document.querySelector('#deposit-btn');
let btn2 = document.getElementById("withdraw-btn");

btn.addEventListener('click', function(){
    // deposit section
    let newDepositString = document.getElementById('deposit-input').value;
 let newDepositValue = parseFloat (newDepositString);
      
    let depositTotalString = document.getElementById('deposit-balance').innerHTML;
    let depositTotalValue = parseFloat (depositTotalString);
    
    let mainBalanceString = document.getElementById('total-balance').innerHTML;
    let mainBalancevalue = parseFloat(mainBalanceString);

    if(newDepositValue<=0){
        alert(`can't deposit`);
        document.getElementById('deposit-input').value = '';
    }
    else if (newDepositValue>0){
        let totalDeposit = newDepositValue + depositTotalValue;
    document.getElementById('deposit-balance').innerHTML = totalDeposit;

    let mainBalance = newDepositValue+mainBalancevalue;
    document.getElementById('total-balance').innerHTML = mainBalance;

    document.getElementById('deposit-input').value ='';
    }
    else{
        document.getElementById('deposit-input').value =''; 
    };

    //history start
    let textBox1 = document.getElementById('text-box1');
    let date = new Date();
    let hrs = date.getHours();
    let mnts = date.getMinutes();
    let scds = date.getSeconds();
    let dys = date.getUTCDate();
    let mths = date.getMonth();
    let yrs = date.getFullYear();
    
    let time = `Time:- ${dys +"/"+mths+"/"+yrs} ${hrs +':'+mnts+':'+scds}`;

    let count = textBox1.childElementCount;
    let txt = document.createElement("p");

    if(newDepositValue>0){
        txt.innerHTML= `${count +0 }.--> Deposit Amount: ${newDepositValue}.00 TK ${time}`;
        textBox1.appendChild(txt);
    }
    else{
        document.getElementById('deposit-input').value =''; 
    };
    // history end       
});

btn2.addEventListener('click', function(){
    // withdraw section
    let newWithdrawString = document.getElementById('withdraw-input').value;
    let newWithdrawValue = parseFloat (newWithdrawString);
      
    let TotalBalanceString = document.getElementById('total-balance').innerHTML;
    let TotalBalanceValue = parseFloat (TotalBalanceString);
    
    let mainWithdrawString = document.getElementById('withdraw-balance').innerHTML;
    let mainWithdrawvalue = parseFloat(mainWithdrawString);

    if( newWithdrawValue>TotalBalanceValue){
        alert('low balace');
        document.getElementById('withdraw-input').value = '';
    }
    else if(newWithdrawValue<=0){
        alert(`can't withdraw`);
        document.getElementById('withdraw-input').value = '';

    }
    else if (newWithdrawValue<=TotalBalanceValue){
        let totalBalance = TotalBalanceValue - newWithdrawValue;
        document.getElementById('total-balance').innerHTML = totalBalance;

        let totalWtihdraw = newWithdrawValue+mainWithdrawvalue;
        document.getElementById('withdraw-balance').innerHTML = totalWtihdraw;
        document.getElementById('withdraw-input').value = '';
    }
    else{
        document.getElementById('withdraw-input').value = '';
    };
    // withdraw history start
    let textBox2 = document.getElementById('text-box2');
    let date = new Date();
    let hrs = date.getHours();
    let mnts = date.getMinutes();
    let scds = date.getSeconds();
    let dys = date.getUTCDate();
    let mths = date.getMonth();
    let yrs = date.getFullYear();
    
    let time = `Time:- ${dys +"/"+mths+"/"+yrs} ${hrs +':'+mnts+':'+scds}`;
    
    
     let count = textBox2.childElementCount;
     let Text = document.createElement('p');
     
    

     if(newWithdrawValue>0 && newWithdrawValue<TotalBalanceValue){
         Text.innerHTML= `${count +0 }.--> Withdraw Amount: ${newWithdrawValue}.00 TK ${time}`;
         textBox2.appendChild(Text);
    }
    else{
        document.getElementById('withdraw-input').value = ''; 
    };
    // withdraw history end
});



