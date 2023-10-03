




let btn3 = document.getElementById('deposit-btn');

let textBox1 = document.getElementById('text-box1');

let inputValueH = document.getElementById("deposit-input").;


btn3.addEventListener('click', function(){

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
    
    document.getElementById('htry-text1').innerHTML= `${count +0 }.--> Deposit Amount: ${inputValueH}.00 TK ${time}`;
    
    
   });

 