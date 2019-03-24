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
