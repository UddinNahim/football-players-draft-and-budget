// create empty array

const cartArray = []; 

console.log(cartArray.length);


function display( cartProduct ){
    // console.log(cartProduct);
    const tableBody=document.getElementById("cart-products")
    tableBody.innerHTML="";
    for(let i = 0; i <cartProduct.length;i++){
        console.log(cartArray[i].playerName);
        const name=cartArray[i].playerName;
       

        const tr=document.createElement("tr");
        tr.innerHTML=`
        <th>${i+1}</th>
        <td>${name}</td>
        
        `;
        tableBody.appendChild(tr);
    }

}
function addTocart(element){
    // console.log(element.parentNode.parentNode.children[0].innerText)

    const playerName=element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);


    const productobj = {
        playerName:playerName,
    
    }
    if(cartArray.length<=4){
        cartArray.push(productobj);
        element.disabled = true; //  if Once selected then disabled the button
    }
        
    else{
        window.alert("Maximum Players selected!!!!!");

    }
    
    
  
    document.getElementById("totalAddedProducts").innerText=cartArray.length; 
    
    display(cartArray)
}

// document.getElementById('btn-lionel-messi').addEventListener('click',function(){
//     const buttonLionelMessi=document.getElementById('btn-lionel-messi');
//     buttonLionelMessi.setAttribute('disabled','true')
// })
// document.getElementById("button-1").disabled = true;



document.getElementById('CalculateExpenses').addEventListener('click',function(){
    const  depositField=document.getElementById('deposit-field');
    const newDeposit=depositField.value;
    const newDepositAmount=parseFloat( newDeposit);
    // console.log(newDepositAmount)
    depositField.value='';

    TotalExpenses=newDepositAmount*cartArray.length;
    document.getElementById("calculate-players-expenses").innerText=TotalExpenses;
    // console.log(TotalExpenses);
    // return TotalExpenses;
    
    
    // console.log(TotalExpenses);
    // const TotalExpenses=document.getElementById('calculate-players-expenses');
    // const previousPlayerExpensesString=TotalExpenses.innerText;
    // const PlayerExpensesTotal=parseFloat(previousPlayerExpensesString);

    // const TotalPlayerExpenses=PlayerExpensesTotal*cartArray.length;
    // TotalExpenses.innerText=TotalPlayerExpenses;

    // console.log(TotalPlayerExpenses);

})
document.getElementById('CalculateTotalExpenses').addEventListener('click',function(){
    const calculateField=document.getElementById('managerField');
    const newCalculate=calculateField.value;
    const newManagerField=parseFloat(newCalculate);

    calculateField.value=' ';

    const coachFieldcalculate=document.getElementById('coachField');
    const newCoachFieldCalculate=coachFieldcalculate.value;
    const newCoachField=parseFloat(newCoachFieldCalculate);

    coachFieldcalculate.value=' ';

    const totalCalculate=TotalExpenses +newManagerField + newCoachField;



    document.getElementById("calculateTotal").innerText= totalCalculate;
    console.log(totalCalculate);

})



