

// * count heart

document.getElementById('heart-icon1').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon2').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon3').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon4').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon5').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon6').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon7').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon8').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})
document.getElementById('heart-icon9').addEventListener('click',function(e){
    e.preventDefault();
    let loveCount = document.getElementById("love-btn");
    let current = parseInt(loveCount.innerText);
    loveCount.innerText = current + 1;
})


// * Call button 

document.getElementById('call-btn1').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling National Emergency Service 999...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn2').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Police Helpline Number 999...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn3').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Fire Service Number 999...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn4').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Ambulance Service 1994-999999...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn5').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Woman & Child Helpline 109...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn6').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Anti-Corruption Helpline 106...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn7').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Electricity Helpline 16216...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn8').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Brac Helpline 16445...')
    
    coin.innerText = currentCoin - 20;


})
document.getElementById('call-btn9').addEventListener('click',function(e){
    e.preventDefault();
   
    let coin = document.getElementById('coin-call');
    let currentCoin = parseInt(coin.innerText)

     

    if(coin.innerText < 20){
        alert('Not enough coins')
        return;
    }

    alert('Calling Bangladesh Railway Helpline 163...')
    
    coin.innerText = currentCoin - 20;


})



// * call history section

// * for clear button

document.getElementById('clear-btn').addEventListener('click',function(){
    const historyContainers = document.getElementById('history-containers')

    historyContainers.innerText = ''

    for(const data of historyContainers){
        const div = document.createElement("div")
       
    }
    
})

// * for history add

const callBtns = document.querySelectorAll(".call-btn");


callBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".div-container");

    //  card service name (h1)
    const serviceName = card.querySelector("h1").innerText;

    
    const serviceNumber = card.querySelector("span.font-bold").innerText;

    console.log("Service:", serviceName);
    console.log("Number:", serviceNumber);

    
    addToHistory(serviceName, serviceNumber);
  });
});

// History add 
function addToHistory(name, number) {
  const historyBox = document.getElementById("history-containers");
  const timeNow = new Date().toLocaleTimeString();

  const card = document.createElement("div");
  card.className =
    "rounded-[8px] w-[370px] h-[100px] bg-[#f5fff6] m-[24px]";

  card.innerHTML = `
    <div class="p-[10px] flex justify-between items-center">
      <div>
        <h1 class="font-bold">${name}</h1>
        <p class="text-[#5C5C5C]">${number}</p>
      </div>
      <div>
        <span>${timeNow}</span>
      </div>
    </div>
  `;
    
historyBox.prepend(card);

}


// * copy button

    const copyCountEl = document.getElementById("copy-count");
    let copyCount = parseInt(copyCountEl.innerText) || 0;

    
    const copyButtons = document.querySelectorAll(".div-container .btn-parent button");

    copyButtons.forEach(btn => {
       
        if (btn.querySelector("i.fa-copy")) {
            btn.addEventListener("click", function () {
                
                const parentCard = btn.closest(".div-container");
                const serviceNumber = parentCard.querySelector("span").innerText;

                
                navigator.clipboard.writeText(serviceNumber).then(() => {
                    
                    alert(`Copied ${serviceNumber}!`);

                    
                    copyCount++;
                    copyCountEl.innerText = copyCount;
                }).catch(err => {
                    alert("Failed to copy!");
                    console.error(err);
                });
            });
        }
    });