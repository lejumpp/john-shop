//Counter for grand total of order
var orderTotal=0;
//validates checkout form entry and creates order after checkout
function checkout(form)
{
    //check if form entries are empty
    if(form.studentID.value != "" && form.firstName.value!="" && form.lastName.value != "" && form.location.value!="")
    {
        if("orderDetails" in localStorage){
            createOrderObj(createStudentObj(form));
            alert("Thank You for Placing Your Order!");
            location.href = "home.html";
        } 
        else {
            alert('Unable to place order due to empty cart');
        }
    }
    else
    {
        alert("Please fill out all information");
    }
};

function createOrderObj(studentObj)
{
    var orderObjTemp={
        "studentInfo":studentObj, "orderDetailInfo":JSON.parse(localStorage.orderDetails), "orderTotal":window.orderTotal
    }
    listofOrdersFunction(orderObjTemp);   
};

function createStudentObj(form)
{
    var studentObj = {
            "studentID":form.studentID.value, "firstName":form.firstName.value, "lastName":form.lastName.value, "location":form.location.value
        }
    return studentObj;
};

function listofOrdersFunction(orderObj)//function to store the student object
{
    var listOfOrders = JSON.parse(localStorage.getItem('listOfOrders')) || [];
        listOfOrders.push(orderObj); 
        localStorage.setItem("listOfOrders",JSON.stringify(listOfOrders));
        localStorage.removeItem('orderDetails');
};

function addToOrderDetail(orderDetail)
{
    var orderDetails = JSON.parse(localStorage.getItem('orderDetails')) || [];
        orderDetails.push(orderDetail); 
        localStorage.setItem("orderDetails",JSON.stringify(orderDetails));
    
};

function calculateTotal(qunatity,price)
{
    var total=qunatity*price;
    window.orderTotal=window.orderTotal+total;
    return total;
    
};

function printCart(itemName, price)
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var amt=localStorage.getItem(itemName)
        cell1.innerHTML = itemName;
        cell2.innerHTML = localStorage.getItem(itemName);
        cell3.innerHTML = "$"+price * amt;
        cell4.innerHTML = "$"+price;
        
        var orderDetail={
            "itemName":itemName, "itemQuauntity":localStorage.getItem(itemName), "subtotal":calculateTotal(amt,price)
        }
        addToOrderDetail(orderDetail);  
        localStorage.removeItem(itemName);


};

if (localStorage.almond > 0) {
    printCart("almond",80);
}

if (localStorage.bananaChips > 0) {
    printCart("bananaChips",70);
}

if (localStorage.bigFoot > 0) {
     printCart("bigFoot",50);
}

if (localStorage.cheetos > 0) {
    printCart("cheetos",120);
}

if (localStorage.cheezit > 0) {
    printCart("cheezit",100);
}

if (localStorage.lays > 0) {
    printCart("lays",150);
}

if (localStorage.fritos > 0) {
    printCart("fritos",130);
}

if (localStorage.plantainChips > 0) {
   printCart("plantainChips",100);
}

if (localStorage.pringles > 0) {
    printCart("pringles",180);
}

if (localStorage.redhot > 0) {
    printCart("redhot",90);
}

if (localStorage.ruffles > 0) {
    printCart("ruffles",120);
}

if (localStorage.skittles > 0) {
    printCart("skittles",150);
}

//access the html table and insert row with grand total of order
var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(0, 128, 128, 0.5)";
        var cell1 = row.insertCell(0);
        cell1.colSpan=3;
        var cell4 = row.insertCell(1);
        cell1.innerHTML = "Total:".bold();
        cell4.innerHTML = "$"+window.orderTotal;
