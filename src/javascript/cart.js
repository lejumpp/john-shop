//Counter for grand total of order
var orderTotal=0;
//validates checkout form entry and creates order after checkout
function checkout(form)
{
    //check if form entries are empty
    if(form.studentID.value != "" && form.firstName.value!="" && form.lastName.value != "" && form.location.value!="")
    {
        
        if("orderDetails" in localStorage){
            var studentObj = {
            "studentID":form.studentID.value, "firstName":form.firstName.value, "lastName":form.lastName.value, "location":form.location.value
        }
            createOrderObj(studentObj);
            //location.reload();
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

function almonds()//creates row with order item details in cart table if almond snack is ordered
{
    printCart("almond",80)
};

function bananaChips()//creates row with order item details in cart table if banana chips snack is ordered
{
    printCart("bananaChips",70)

};

function bigFoot()//creates row with order item details in cart table if big foot snack is ordered
{
    printCart("bigFoot",50)
};

function cheetos()//creates row with order item details in cart table if cheetos snack is ordered
{
    printCart("cheetos",120)
};

function cheezIt()//creates row with order item details in cart table if cheezit snack is ordered
{
    printCart("cheezit",100)
};

function lays()//creates row with order item details in cart table if lays snack is ordered
{
    printCart("lays",150)
};

function fritos()//creates row with order item details in cart table if fritos snack is ordered
{
    printCart("fritos",130)
};

function plantainChips()//creates row with order item details in cart table if plantain chips snack is ordered
{
    printCart("plantainChips",100)
};

function pringles()//creates row with order item details in cart table if pringles snack is ordered
{
    printCart("pringles",180)
};

function redHot()//creates row with order item details in cart table if red hot snack is ordered
{
    printCart("redhot",90)
};

function ruffles()//creates row with order item details in cart table if ruffles snack is ordered
{
    printCart("ruffles",120)
};

function skittles()//creates row with order item details in cart table if skittles snack is ordered
{
    printCart("skittles",150)
};

    if (localStorage.almond > 0) {
        almonds();
    }

    if (localStorage.bananaChips > 0) {
        bananaChips();
    }

    if (localStorage.bigFoot > 0) {
        bigFoot();
    }

    if (localStorage.cheetos > 0) {
        cheetos();
    }

    if (localStorage.cheezit > 0) {
        cheezIt();
    }

    if (localStorage.lays > 0) {
        lays();
    }

    if (localStorage.fritos > 0) {
        fritos();
    }

    if (localStorage.plantainChips > 0) {
       plantainChips();
    }

    if (localStorage.pringles > 0) {
        pringles();
    }

    if (localStorage.redhot > 0) {
        redHot();
    }

    if (localStorage.ruffles > 0) {
        ruffles();
    }

    if (localStorage.skittles > 0) {
        skittles();
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
