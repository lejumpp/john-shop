var orderTotal=0;

function checkout(form)
{
    if(form.studentID.value != "" && form.firstName.value!="" && form.lastName.value != "" && form.location.value!="")
    {

        if("orderDetails" in localStorage){
            var studentObj = {
            "studentID":form.studentID.value, "firstName":form.firstName.value, "lastName":form.lastName.value, "location":form.location.value
        }
            createOrderObj(studentObj);
            location.reload();
            alert("Thank You for Placing Your Order!");
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

function almonds()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Almonds";
        cell2.innerHTML = localStorage.almond;
        cell3.innerHTML = "$"+80 * localStorage.almond;
        cell4.innerHTML = "$"+80;

        var orderDetail={
            "itemName":"Almonds", "itemQuauntity":localStorage.almond, "subtotal":calculateTotal(localStorage.almond,80)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('almond');
};

function bananaChips()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Banana Chips";
        cell2.innerHTML = localStorage.banana;
        cell3.innerHTML = "$"+70 * localStorage.banana;
        cell4.innerHTML = "$"+70;

        var orderDetail={
            "itemName":"Banana Chips", "itemQuauntity":localStorage.banana, "subtotal":calculateTotal(localStorage.banana,70)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('banana');
};

function bigFoot()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Big Foot";
        cell2.innerHTML = localStorage.bigFoot;
        cell3.innerHTML = "$"+50 * localStorage.bigFoot;
        cell4.innerHTML = "$"+50;

        var orderDetail={
            "itemName":"Big Foot", "itemQuauntity":localStorage.bigFoot, "subtotal":calculateTotal(localStorage.bigFoot,50)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('bigFoot');
};

function cheetos()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Cheetos";
        cell2.innerHTML = localStorage.cheetos;
        cell3.innerHTML = "$"+120 * localStorage.cheetos;
        cell4.innerHTML = "$"+120;

        var orderDetail={
            "itemName":"Cheetos", "itemQuauntity":localStorage.cheetos, "subtotal":calculateTotal(localStorage.cheetos,120)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('cheetos');
};

function cheezIt()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "CheezIT";
        cell2.innerHTML = localStorage.cheezit;
        cell3.innerHTML = "$"+100 * localStorage.cheezit;
        cell4.innerHTML = "$"+100;

        var orderDetail={
            "itemName":"CheezIT", "itemQuauntity":localStorage.cheezit, "subtotal":calculateTotal(localStorage.cheezit,100)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('cheezit');
};

function lays()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Lays";
        cell2.innerHTML = localStorage.lays;
        cell3.innerHTML = "$"+150 * localStorage.lays;
        cell4.innerHTML = "$"+150;

        var orderDetail={
            "itemName":"Lays", "itemQuauntity":localStorage.lays, "subtotal":calculateTotal(localStorage.lays,150)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('lays');
};

function fritos()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Fritos";
        cell2.innerHTML = localStorage.fritos;
        cell3.innerHTML = "$"+130 * localStorage.fritos;
        cell4.innerHTML = "$"+130;

        var orderDetail={
            "itemName":"Fritos", "itemQuauntity":localStorage.fritos, "subtotal":calculateTotal(localStorage.fritos,130)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('fritos');
};

function plantainChips()
{
     var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Plantain Chips";
        cell2.innerHTML = localStorage.plantain;
        cell3.innerHTML = "$"+100 * localStorage.plantain;
        cell4.innerHTML = "$"+100;

        var orderDetail={
            "itemName":"Plantain Chips", "itemQuauntity":localStorage.plantain, "subtotal":calculateTotal(localStorage.plantain,100)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('plantain');
};

function pringles()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Pringles";
        cell2.innerHTML = localStorage.pringles;
        cell3.innerHTML = "$"+180 * localStorage.pringles;
        cell4.innerHTML = "$"+180;

        var orderDetail={
            "itemName":"Pringles", "itemQuauntity":localStorage.pringles, "subtotal":calculateTotal(localStorage.pringles,180)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('pringles');
};

function redHot()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Red Hot";
        cell2.innerHTML = localStorage.redhot;
        cell3.innerHTML = "$"+90 * localStorage.redhot;
        cell4.innerHTML = "$"+90;

        var orderDetail={
            "itemName":"Red Hot", "itemQuauntity":localStorage.redhot, "subtotal":calculateTotal(localStorage.redhot,90)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('redhot');
};

function ruffles()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Ruffles";
        cell2.innerHTML = localStorage.ruffles;
        cell3.innerHTML = "$"+120 * localStorage.ruffles;
        cell4.innerHTML = "$"+120;

        var orderDetail={
            "itemName":"Ruffles", "itemQuauntity":localStorage.ruffles, "subtotal":calculateTotal(localStorage.ruffles,120)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('ruffles');
};

function skittles()
{
    var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(204, 85, 0, 0.5)";
        var cell1 = row.insertCell(0);
        var cell4 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = "Skittles";
        cell2.innerHTML = localStorage.skittles;
        cell3.innerHTML = "$"+150 * localStorage.skittles;
        cell4.innerHTML = "$"+150

        var orderDetail={
            "itemName":"Skittles", "itemQuauntity":localStorage.skittles, "subtotal":calculateTotal(localStorage.skittles,150)
        }
        addToOrderDetail(orderDetail);
        localStorage.removeItem('skittles');
};

    if (localStorage.almond > 0) {
        almonds();
    }

    if (localStorage.banana > 0) {
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

    if (localStorage.plantain > 0) {
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

var table = document.getElementById("cart");
        var row = table.insertRow();
        row.style.background = "rgba(0, 128, 128, 0.5)";
        var cell1 = row.insertCell(0);
        cell1.colSpan=3;
        var cell4 = row.insertCell(1);
        cell1.innerHTML = "Total:".bold();
        cell4.innerHTML = "$"+window.orderTotal;
