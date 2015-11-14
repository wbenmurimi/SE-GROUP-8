/* u is url */
/* function by Mr Aelaf Dafla */
var myurl = "model/main.php?";
var currentCity = "";
function sendRequest(u) {
    // Send request to server
    //u a url as a string
    //async is type of request
    var obj = $.ajax({url: u, async: false});
    //Convert the JSON string to object
    var result = $.parseJSON(obj.responseText);
    return result;	//return object
}

$(function () {
  $('#login').submit(function(e) {
    e.preventDefault();
    Login();
});
});

$(function () {
  $('#viewproduct').submit(function(e) {
    e.preventDefault();
    viewForm();
});
});

function hide(){
for (var i = 0; i < arguments.length; i++) {
       
            var input = arguments[i];
        $('#'+input).addClass('hide'); //jquery way
    }
    // show();

}

function showDiv(input){
    $('#'+input).removeClass('hide');
        $('#'+input).show(); //jquery way
    // }
//input.clasList.add('hide'); //pure js

}

function viewForm(){
    $("#myBody").load("views/viewProduct.html");
    getProducts();
}

function Login(){
    /*username*/
    var user_name = $("#username").val();
    /*password*/
    var pass_word = $("#password").val();

    /* empty username */
    if(user_name.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty username<i class="material-icons">close</i></div>';
        return
    }
    if(pass_word.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    
    var strUrl = myurl+"cmd=1&username="+user_name+"&password="+pass_word;
   // prompt("url",strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
        return;
    }
    window.location.href = "../home.html";
}



function getUser(){
    var strUrl = myurl+"cmd=5";
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
        alert(objResult.message);
        return;
    }
    document.getElementById("username").innerHTML=objResult.message;

}

function userSignUp(){
 
    /*password*/
    var password = $("#upassword").val();
    /*username*/
    var user_name = $("#uusername").val();
    
    /*email*/
    var email = $("#uemail").val();
    /*phone*/
    var phone = $("#uphone").val();

    /* empty username */
    if(user_name.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty Username<i class="material-icons">close</i></div>';
        return
    }
    /* empty password */
    if(password.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    /* empty email */
    if(email.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">EmptyEmail<i class="material-icons">close</i></div>';
        return;
    }
    /* empty phone */
    if(phone.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty Phone<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = myurl+"cmd=3&username="+user_name+"&password="+password+"&email="+email+"&phone="+phone;
//    prompt("url",strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
        return;
    }
    $("#uusername").val('');
    $("#upassword").val('');
    $("#uphone").val('');
    $("#uemail").val('');
    document.getElementById("error_area").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    
    // window.location.href = "index.html";
}

/**
Adding a new equipment
*/

function addEquipment(){

    var name = $("#ename").val();
    var quantity = $("#eQty").val();
    var price = $("#ePrice").val();
    var number = $("#enumber").val();
    var barcode = $("#ebarcode").val();
    var manufacturer = $("#emanufacturer").val();
    var repairDate = $("#erepairDate").val();
    var dateBought = $("#edateBought").val();
    var condition = $("#econdition").val();
    var location = $("#elocation").val();
    var department = $("#edepartment").val();


/* empty username */
if(name.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Name<i class="material-icons">close</i></div>';
    return
}
if(quantity.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Quantity<i class="material-icons">close</i></div>';
    return;
}
if(price.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Price<i class="material-icons">close</i></div>';
    return;
}
//    if(productId.length == 0){
//        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty City<i class="material-icons">close</i></div>';
//        return;
//    }
 
var strUrl = myurl+"cmd=4&number="+number+"&code="+barcode+"&manu="+manufacturer+
"&repairDate="+repairDate+"&price="+price+"&dateBought="+dateBought+"&cod="+condition
"&loc="+location+"&dep="+department+"&uid="+userId+"&qty="+quantity;
prompt("url",strUrl);
var objResult = sendRequest(strUrl);
var errorArea = document.getElementById("error_area");
document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
}
$("#pname").val('');
$("#pquantity").val('');
$("#pprice").val('');

document.getElementById("error_area").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';

location.reload();
}



/**
Gett all products
*/


function getEquipments(){
    var strUrl = myurl+"cmd=2";
//    prompt("url", strUrl);
var objResult = sendRequest(strUrl);

if(objResult.result == 0){
    alert(objResult.message);
    return;
}
if(objResult.result == 1){
   var mytable=document.getElementById("productTable");
   for(i=1;i<objResult.product.length;i++){
   var myrow=mytable.rows.length;
row=mytable.insertRow(myrow);
idcell=row.insertCell(0);
namecell=row.insertCell(1);
pricecell=row.insertCell(2);
qtycell=row.insertCell(3);


idcell.innerHTML=objResult.product[i].p_id;
namecell.innerHTML=objResult.product[i].p_name;
pricecell.innerHTML=objResult.product[i].p_price;
qtycell.innerHTML=objResult.product[i].p_quantity;      

}
}
}



//Items for shopping
function getAllProducts(){
  var strUrl = myurl+"cmd=7";
//    prompt("url", strUrl);
var objResult = sendRequest(strUrl);

if(objResult.result == 0){
    alert(objResult.message);
    return;
}
if(objResult.result == 1){
   var itemtable=document.getElementById("itemTable");
//         alert(objResult.product.length);
for(i=1;i<objResult.product.length;i++){
    var myrow=itemtable.rows.length;
    row=itemtable.insertRow(myrow);
    namecell=row.insertCell(0);
    pricecell=row.insertCell(1);
    buycell=row.insertCell(2);
    
    namecell.innerHTML=objResult.product[i].p_name;
    pricecell.innerHTML=objResult.product[i].p_price;
    buycell.innerHTML='</div><button id="myBtn" onclick="addP(this)" class="btn waves-effect waves-light green center-align" type="submit" name="action"><i class="material-icons">shopping_cart</i>ADD </button></div>';
    var newId=objResult.product[i].p_name;
    if(document.getElementById('myBtn')){
        var getClicked=document.getElementById('myBtn')

        getClicked.setAttribute('id',newId);

    } 
    
}
}

}


function logout(){
   var strUrl = myurl+"cmd=6";
   var objResult = sendRequest(strUrl);

   if(objResult.result == 0){
    alert(objResult.message);
    return;
}
alert(objResult.message);
window.location.href = "index.html";

}

