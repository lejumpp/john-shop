/**
*@author Nicholas Jumpp & Kimone V. Roper I
*@function This function simply verify the credentials entered on the admin page to verify who is logging into the system to view the existing orders
*/
function check(form)
{
            if(form.userid.value == "nicholas" && form.pswrd.value=="T00lt1me1pp6")
            {
                alert("Login Successful Nicholas");
                window.location.href = '\adminpage.html'
            }
            else if(form.userid.value == "kimone" && form.pswrd.value=="despise")
            {
                alert("Login Successful Kimone");
                window.location.href = '\adminpage.html'   
            }
            else
            {
                alert("incorrect password or username");
            }
};
