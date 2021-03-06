/**
*@author Nicholas Jumpp & Kimone V. Roper I
*@function This is a description of the script that is ran on the homepage.
*This scripts collects all buttons with the class name "btnsnackitem" and stores them in a variable called btns.
*If one of the buttons is clicked on the homepage an alert is displayed and the item selected is incremented and stored in localstorage.
*/
var controller = new snackController("localStorage");
var btns= document.getElementsByClassName("btnsnackitem");
    for(var i=0; i<btns.length; i++)
    {
        var btn=btns[i];
        btn.addEventListener("click",function(){
        alert("Item Added to Cart: "+this.getAttribute("id"));
        var amt=controller.getItemAmt(this.getAttribute("id")) || 0;
            amt++;
        controller.setItemAmt(this.getAttribute("id"),amt);
        });
    }
