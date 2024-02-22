const allBtn = document.getElementsByClassName("btn");

for ( const btn of allBtn){
        btn.addEventListener("click", function(event){
        
        const seatNumber = event.target.parentNode.childNodes[0].innerText;
        
        const fourCardSelect = getConvertedValue("buy-seat");
        event.target.setAttribute("disabled", false);
        event.target.style.backgroundColor ="#1DD100";
     
        if(fourCardSelect +1 > 4){
            alert("You can't selected more than 4 number seat");
            return;
        }
       
        const selectedContainer = document.getElementById("select-ticket-container");
        const ticketPrice = document.getElementById('ticket-price').innerText;
        
        const totalSeat = getConvertedValue("total-seat");
        document.getElementById("total-seat").innerText = totalSeat -1;

        const selectedSeat = getConvertedValue("buy-seat");
        document.getElementById("buy-seat").innerText = selectedSeat + 1;


        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("flex-cols-1");
        div.classList.add("text-center");
        div.classList.add("justify-between");
        div.classList.add("gap-32");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        
        p1.innerText = seatNumber;
        p2.innerText = 'Economy Class';
        p3.innerText = ticketPrice;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);

        updateTotalCost(ticketPrice);
        updateGrandTotal();
         
    });
}


function updateGrandTotal(status) {
    const totalCost = getConvertedValue('total-cost'); 
    if(status == undefined){
        
        document.getElementById('grand-total').innerText = totalCost;
    }
    else{
        const cuponCode = document.getElementById('coupon-code').value;

        if(cuponCode == "NEW15"){
            const firstDiscounted = totalCost * 0.15;
            document.getElementById('grand-total').innerText = totalCost - firstDiscounted;
        }

        else if(cuponCode =="Couple 20"){
            const secondDiscounted = totalCost*0.2;
            document.getElementById('grand-total').innerText = totalCost - secondDiscounted;

        }

        else{
            alert("Please Enter a Valid Cupon Code");
        }
    }

  
}

function updateTotalCost(value) {
    const totalCost = getConvertedValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
    
}

function getConvertedValue (id){
    const seatNumber = document.getElementById(id).innerText;
    const convertSeatToNumber = parseInt(seatNumber);
    return convertSeatToNumber;
}

