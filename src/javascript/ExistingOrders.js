var listOfOrders = JSON.parse(localStorage.getItem("listOfOrders"));

var panelId= "panel";

function myFunction() {
  var myPanelId = this.getAttribute('data-panel-id');
  var x = document.getElementById(myPanelId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}


listOfOrders.forEach(function (element) {

    panelId = panelId+2;

    var order = document.createElement("P");
    order.setAttribute('data-panel-id', panelId);
    order.class = "flip";
	order.align = "center";
    order.style.background = "rgba(0, 128, 128, 0.5)";

    var otext = document.createTextNode("Name: "+element.studentInfo.firstName+" "+element.studentInfo.lastName+"\t Location: "+element.studentInfo.location);
    order.appendChild(otext);
    document.body.appendChild(order);





    var panel = document.createElement("DIV");
    panel.id = panelId;
    panel.style.display= "none";
	panel.align = "center";
    panel.style.background = "rgba(204, 85, 0, 0.5)";

    var details = document.createElement("P");
    var head = document.createElement("HEADER");
    var htext = document.createTextNode("Order Details");
    details.style.fontWeight = "700";
    head.style.fontWeight = "700";
    head.appendChild(htext);

    var orderDetailInfo = element.orderDetailInfo;
    orderDetailInfo.forEach(function (element) {
        var dtext = document.createTextNode("Item: "+element.itemName+" Quantity: "+element.itemQuauntity);
        var br = document.createElement("BR");
        details.appendChild(dtext);
        details.appendChild(br);
    });
    var dtext = document.createTextNode("Order Total: $"+element.orderTotal);
        var br = document.createElement("BR");
        details.appendChild(dtext);
        details.appendChild(br);

    panel.appendChild(head);
    panel.appendChild(details);
    document.body.appendChild(panel);

    order.onclick = myFunction;





               });

