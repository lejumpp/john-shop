/**
 * @author Nicholas Jumpp & Kimone V. Roper I
 * @function This function simply verify the credentials entered on
 *           the admin page to verify who is logging into the system to view the existing orders
 * @param {object} form access textfields on login.html page
 */
function check(form)
{
    var cred= new credentials(form);
    if(cred.getUsername() == "nicholas" && cred.getPassword() =="tooltime1")
    {
        alert("Login Successful Nicholas");
        window.location.href = '\adminpage.html'
    }
    else if(cred.getUsername() == "kimone" && cred.getPassword() =="despise")
    {
        alert("Login Successful Kimone");
        window.location.href = '\adminpage.html'
    }
    else
    {
        alert("incorrect password or username");
    }
};

function credentials(form)
{
    var _self=this;
    _self.username=form.userid.value;
    _self.password=form.pswrd.value;

    _self.getUsername = function(){
        return _self.username;
    }
    _self.getPassword = function(){
        return _self.password;
    }
};
