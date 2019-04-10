if("listOfOrders" in localStorage){

}
else{
    alert('There are currently no orders');
}

var listOfOrders = JSON.parse(localStorage.getItem("listOfOrders"));

//initialize variable to hold panel id to be modified to yeild a unique id for each panel
var panelId= "panel";


/**
 * @function function to display hidden panel with order details
 */
function showOrder() {
  var myPanelId = this.getAttribute('data-panel-id');
  var x = document.getElementById(myPanelId);
  //check if panel is hidden
    if (x.style.display === "none") {
   //display panel
        x.style.display = "block";
  } else {
      //hide panel
    x.style.display = "none";
  }

}


/**
 *iterate through all orders in local storage
 */
listOfOrders.forEach(function (element) {


   /**
    * modify panel id to be unique for each order
    */
    panelId = panelId+2;
    /**
     * create P element to hold student info for each order
     */
    var order = document.createElement("P");
    order.setAttribute('data-panel-id', panelId);
    order.class = "flip";
	order.align = "center";
    order.style.background = "rgba(0, 128, 128, 0.5)";

    /**
     * creates text for P element and adds it
     */
    var otext = document.createTextNode("Name: "+element.studentInfo.firstName+" "+element.studentInfo.lastName+"\t Location: "+element.studentInfo.location);
    order.appendChild(otext);
    //adds P element to html document
    document.body.appendChild(order);




   /**
    * creates hidden DIV element to hold order details for each order
    */
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
    //loop through each order detail in the order to display in the panel
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

     //function to remove order
function removeOrder() {
    //remove display elements from view
    document.body.removeChild(order);
    document.body.removeChild(panel);
    //get index of element containing order delivered
    var i = listOfOrders.indexOf(element);
    //remove 1 element from array soring orders starting at the index gotten
    listOfOrders.splice(i, 1);
    //update array of objects in local storage
    localStorage.setItem("listOfOrders", JSON.stringify(listOfOrders));

}



    var button = document.createElement("BUTTON");
    button.align = "center";
    var delivered = document.createTextNode("Delivered!");
    button.appendChild(delivered);

    panel.appendChild(head);
    panel.appendChild(details);
    panel.appendChild(button);
    //add panel to html document
    document.body.appendChild(panel);

    //call showOrder function when P element with student info is clicked
    order.onclick = showOrder;

    //call removeOrder function with BUTTON element is clicked
    button.onclick = removeOrder;
});
