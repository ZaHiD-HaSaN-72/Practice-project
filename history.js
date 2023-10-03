
let btn3 = document.getElementById('deposit-btn');

 btn3.addEventListener('click', function(){

    let depositHistoryValue = document.getElementById('deposit-input').value;
   
    
    let textBox1 = document.getElementById('text-box1');
  
    let date = new Date();
    let hrs = date.getHours();
    let mnts = date.getMinutes();
    let scds = date.getSeconds();
    let dys = date.getUTCDate();
    let mts = date.getMonth();
    let yrs = date.getFullYear();
    
    
    
    let time = `Time:- ${dys +"/"+mts+"/"+yrs} ${hrs +':'+mnts+':'+scds}`;
    let count = textBox1.childElementCount;
    
    document.getElementById('htry-text1').innerHTML= `${count +0 }.--> Deposit Amount: ${depositHistoryValue}.00 TK ${time}`;
    
    
   });

 