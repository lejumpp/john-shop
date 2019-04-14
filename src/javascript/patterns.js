//sudo class for snack
function Snack(name, quantity)
{
    var _self=this;
    _self.name = name || "";
    _self.quantity = quantity || 0;
    _self.getName = function(){
        return _self.name;
    }
};

//get the stock amount by the name

function getItemAmt(name)
{
    //var _self.this;
    var amt=0;
    if(name in localStorage)
    {
        amt = localStorage.getItem(name);
    }
    else{
        localStorage.setItem(name,amt);
    }
    return amt;
}

function snackController(dbType)
{
    var _self=this;

    _self.db=createDBFactory(dbType);

    _self.getItemAmt=function(snackName){
        return _self.db.get(snackName);
    }

    _self.setItemAmt=function(snackName,amt){
        _self.db.set(snackName,amt)
    }
}

//model
function LocalStorageDB()
{
    var _self=this;

    _self.get = function(key){
        return localStorage.getItem(key);
    }

    _self.set=function(key,value){
        localStorage.setItem(key,value);
    }
};

//factory
function createDBFactory(dbType){
    if(dbType=="localStorage"){
        return singleton();
    }
    else throw new Error("No other db exists");
}

var DB_INSTANCE=null;
//singleton
function singleton()
{
    if(DB_INSTANCE== null){
            DB_INSTANCE=new LocalStorageDB();
            return DB_INSTANCE;
        }
        else{
            return DB_INSTANCE;
        }
};

