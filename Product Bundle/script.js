const products=document.getElementsByClassName("r");
const count=document.getElementsByClassName("c");
const bill=document.getElementById("bill");
const values=[50,30,40,20];
const totalitems=document.getElementById("items");

let totalcost=()=>{
    
    let cost=0;
    let items=0;
    for(let i=0;i<products.length;i++){
        products[i].innerText=values[i];
        cost+=(values[i])* (count[i].value);
        // console.log(cost);
        items+=parseInt(count[i].value);
        
    }
    console.log(items)
    // console.log(bill.textContent)
    bill.textContent=cost;
    totalitems.textContent=items;
    if(items==8){
    for(let i=0;i<count.length;i++){
        count[i].max=count[i].value;
        // console.log("max");
    }
    }
    else{
        for(let i=0;i<count.length;i++){
        count[i].max=count[i].value+ 8- items;
    }
    }
}
totalcost();
for(let i=0;i<count.length;i++){
count[i].addEventListener('input',totalcost);
}