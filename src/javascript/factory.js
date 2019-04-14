//sudo class for snack
function Snack(id, name, price)
{
    var _self=this;
    _self.id = id || 0;
    _self.name = name || "";
    _self.price = price || 0.0;
    _self.getName = function(){
        return _self.name;
    }
};
var snack = new Snack(3, "Big Foot", 60);

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

function snackController()
{
    var _self=this;
    _self.db=createDBFactory("localStorage");

    _self.getItemAmt=function(snackName){
        return _self.db.get(snackName);
    }
}


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

//var db= new LocalStorageDB();
//db.get("key");

function createDBFactory(dbType)
{
    if(dbType=="localStorage"){
        return new LocalStorageDB();
    }
    else
        throw new error("No other db exist");
}

//var DB_INSTANCE=null;

//singleton
/*fucntion createDBFactory(dbType){
    if(dbType=="localStorage"){
        if(DB_INSTANCE== null){
            DB_INSTANCE=new LocalStorageDb();
        }
        else{
            return DB_INSTANCE;
        }
    }
    else throw new Error("No other db exists");
}*/

//var db=createDbFactory("localStorage");
