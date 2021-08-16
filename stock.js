function CheckProfitLoss(){
    var CostPrice=parseFloat(document.querySelector("#CP").value);
    var QuantityofStock=parseFloat(document.querySelector("#QTY").value);
    var CurrentPrice=parseFloat(document.querySelector("#SP").value);

    var percentage=(Math.round(Math.abs(((CurrentPrice-CostPrice)/CostPrice)*10000)))/100;
    var AmountofLossorGain=(Math.round(Math.abs((CurrentPrice-CostPrice)*QuantityofStock*100)))/100;

    Output=document.getElementById("profitloss")
    Output.style.display="block";

    
    //  document.getElementById('container').style.backgroundSize="cover";
    var stock=document.getElementById('stock');
    var connect=document.getElementById('connect');
    
       if(percentage<50)
         {
             document.container.style.backgroundImage="none";
             stock.style.backgroundImage="url('/images/stock.svg')";
             stock.style.backgroundColor="rgba(62, 7, 124, 0.70)";
             connect.style.backgroundColor="rgba(231, 170, 57, 0.65)"
         }

    if(CostPrice>CurrentPrice)
          {
              Output.textContent="You lost "+`${percentage}`+"%. Your loss Amount :"+`${AmountofLossorGain}`;
              if(percentage>50)
               {
                   document.container.style.backgroundImage="url('/images/loss.gif')"
                   document.container.style.backgroundSize="cover"
                   stock.style.backgroundImage="none";
                   stock.style.backgroundColor="transparent";
                   connect.style.backgroundColor="transparent";
                   document.getElementById('profitloss').style.color="black";
                   connect.style.backgroundColor="rgba(22, 22, 22, 0.45)";

                   
               }
          }
    else
           {
            if(percentage>50)
             {document.container.style.backgroundImage="url('/images/profit.gif')"
             document.container.style.backgroundImage="cover";
             stock.style.backgroundImage="none";
                   stock.style.backgroundColor="transparent";
                   connect.style.backgroundColor="transparent";} 

            Output.textContent="Yay!!! You earned a Profit of "+`${percentage}`+"%. Your total profit is ₹"+`${AmountofLossorGain}`;
           }


}