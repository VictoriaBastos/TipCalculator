var btnSend = document.getElementById("send");
btnSend.addEventListener("click",calculate);

function calculate(){

    var billAmount = Number(document.getElementById("totalAmount").value);
    var tip = Number(document.getElementById("tipPercentage").value);
    var numOfPeople = Number(document.getElementById("split").value);

    var tipAmount = ""
    var totalPrice = ""
    var split = ""


    if(billAmount == ""){
        return alert(" [ERROR] Type your bill amount.")
    } else {
        if (tip != ""){
            tipAmount = (billAmount * tip)/100
            totalPrice = billAmount + tipAmount
        } else if (tipAmount == ""){
            tipAmount = 0
            totalPrice = billAmount
        }
    }

    if(numOfPeople == ""){
        split = 1
    } else {
        split = numOfPeople
    }

    document.getElementById("valueTotal").innerHTML = `Total: ${Intl.NumberFormat('en-US', {style:'currency',currency:'USD'}).format(totalPrice)}`;
    document.getElementById("totalIndividual").innerHTML = `Amount per person: ${Intl.NumberFormat('en-US', {style:'currency',currency:'USD'}).format(totalPrice/split)}`
    document.getElementById("tipPerPerson").innerHTML = `Tip per person: ${Intl.NumberFormat('en-US', {style:'currency',currency:'USD'}).format(tipAmount/split)}`
    document.getElementById("totalPerPerson").innerHTML = `Total per person: ${Intl.NumberFormat('en-US', {style:'currency',currency:'USD'}).format(billAmount/split)}`
}