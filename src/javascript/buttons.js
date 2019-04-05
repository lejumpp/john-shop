/**
*This is a description of the script that is ran on the homepage
*@function
*/
var btns= document.getElementsByClassName("btnsnackitem");
    for(var i=0; i<btns.length; i++)
    {
        var btn=btns[i];
        btn.addEventListener("click",function(){
        alert("Item Added to Cart: "+this.getAttribute("id"));
        var amt=localStorage.getItem(this.getAttribute("id")) || 0;
        amt++;
        localStorage.setItem(this.getAttribute("id"),amt);
        });
    }
    
    

