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
    window.location.href = "Logic/device.php";
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
Adding a new product
*/
function addProduct(){
    /*Product name*/
    var name = $("#pname").val();
    /*quantity*/
    var quantity = $("#pquantity").val();
    /*price*/
    var price = $("#pprice").val();
    /*product Id */
//    var productId = document.getElementById("scanlabel").innerText;
var productId =8000;
alert(productId);

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

var strUrl = myurl+"cmd=4&name="+name+"&qty="+quantity+"&price="+price+"&pid="+productId;
//prompt("url",strUrl);
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


function getProducts(){
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

var j=0;
//method to add a product to the shopping cart
function  addP(newid){
    var p= newid.getAttribute('id');
    var strUrl = myurl+"cmd=8&pdt="+p;
//    prompt("url", strUrl);
var objResult = sendRequest(strUrl);

if(objResult.result == 0){
    alert(objResult.message);
    return;
}
if(objResult.result == 1){
   var myArray=new Array(20);
   var x=0;
   var carttable=document.getElementById("cartTable");
//   var totalArea=document.getElementById("totalsale")
//   alert(objResult.product.length);
for(i=0;i<objResult.product.length;i++){
    var myrow=carttable.rows.length;
    row=carttable.insertRow(myrow);
    namecell=row.insertCell(0);
    pricecell=row.insertCell(1);
    qtycell=row.insertCell(2);
//  btncell=row.insertCell(3);

namecell.innerHTML=objResult.product[i].p_name;
pricecell.innerHTML=objResult.product[i].p_price;
pricecell.id="priceid"; //the product price cell is given the priceid as its id.
pricecell.className="priceClass";
qtycell.innerHTML=1;
    updateTotal();// update total sales
}
}
}

//function to update the total after clicking a product
function updateTotal(){
	var totalPrice=0;//set the cell to zero.

	$(".priceClass").each(function(){ //for each cell with id priceid (the price cell)

		totalPrice=totalPrice+parseFloat($(this).text()); //add to the totalprice variable.

	});

	var total=document.getElementById("totalsale");//get the cell with totalprice using the totalprice id
	
	total.value=totalPrice; //sets the totalprice in the respective cell.
	
}

/**
Adding a new transaction
*/
function addTransact(){
        
    var Ttable=document.getElementById("cartTable");
	var rows=Ttable.rows.length;
	var pnames="";
	var quantities="";
//    alert(rows);
	for(var i=1;i<rows;i++){
		var row=Ttable.rows[i];
		pnames=pnames + row.cells[0].innerHTML + ","; //get all the product  names separated by a comma

		quantities=quantities+row.cells[2].innerHTML+","; //get all quantities separated by a comma

	}
    //delete all the rows after transaction
    for(var j=rows-1;j>0;j--){

        Ttable.deleteRow(j);
    }
    /*price*/
    var price = $("#totalsale").val();
    /*phone*/
    var phone = $("#tphone").val();
document.getElementById("totalsale").value=null;
document.getElementById("tphone").value=null;
var strUrl = myurl+"cmd=9&name="+pnames+"&qty="+quantities+"&cost="+price+"&phone="+phone;
// prompt("url",strUrl);
    
var objResult = sendRequest(strUrl);
var errorArea = document.getElementById("error_area");
document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
}


document.getElementById("error_area").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';

}


/**
Check if a user will receive discount
*/


function checkForDiscount(){
      /*phone*/
    var phone = $("#tphone").val();
    /*price*/
    var price = $("#totalsale").val();
    var strUrl = myurl+"cmd=10&phone="+phone;
//    prompt("url", strUrl);
var objResult = sendRequest(strUrl);

if(objResult.result == 0){
    alert(objResult.message);
    addTransact();
    return;
}
if(objResult.result == 1){
    alert("last purchase: "+objResult.product[0].t_cost);
    if(parseFloat(objResult.product[0].t_discount)<=0){
    var totalPrice=(parseFloat(price)*0.9);
    var discount=(parseFloat(price)*0.1);
    alert("Customer received a discount of: "+discount); 
     document.getElementById("error_area").innerHTML = '<div class="chip green white-text">Customer was given a discount<i class="material-icons">close</i></div>'
    document.getElementById("totalsale").value=totalPrice;
    addDiscountTransact(discount);
    }
    else{
      addTransact();  
    }
}
}
/**
Adding a new transaction with discount
*/
function addDiscountTransact(discount){
        
    var Ttable=document.getElementById("cartTable");
	var rows=Ttable.rows.length;
	var pnames="";
	var quantities="";
//    alert(rows);
	for(var i=1;i<rows;i++){
		var row=Ttable.rows[i];
		pnames=pnames + row.cells[0].innerHTML + ","; //get all the product  names separated by a comma

		quantities=quantities+row.cells[2].innerHTML+","; //get all quantities separated by a comma

	}
    //delete all the rows after transaction
    for(var j=rows-1;j>0;j--){

        Ttable.deleteRow(j);
    }
    /*price*/
    var price = $("#totalsale").val();
    /*phone*/
    var phone = $("#tphone").val();
document.getElementById("totalsale").value=null;
document.getElementById("tphone").value=null;
var strUrl = myurl+"cmd=11&name="+pnames+"&qty="+quantities+"&cost="+price+"&phone="+phone+"&discount="+discount;
// prompt("url",strUrl);
    
var objResult = sendRequest(strUrl);
var errorArea = document.getElementById("error_area");
document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
}


document.getElementById("error_area").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';

}

////Items for shopping
//function getAllProducts(){
//      var strUrl = myurl+"cmd=7";
////    prompt("url", strUrl);
//    var objResult = sendRequest(strUrl);
//
//    if(objResult.result == 0){
//        alert(objResult.message);
//        return;
//    }
//     if(objResult.result == 1){
//         var bigrow = document.createElement("<di");
//   	 var col1=document.getElementById("col1");
//     var col2=document.getElementById("col2");
//     var col3=document.getElementById("col3");
//     var col4=document.getElementById("col4");
//         var collArray=[col1,col2,col3,col4];
//        	 alert(objResult.product.length);
//          alert(collArray.length);
//         var j=0;
//        	for(i=0;i<objResult.product.length;i++){
//                 alert("product");
//        	   if(j<4){
//                    alert("choosing column");
//                   alert(collArray[j]);
//                    collArray[j].innerHTML=objResult.product[i].p_name +'<hr>'+objResult.product[i].p_price; 
//               }
//                else{
//                    alert("initialized array");
//                    j=0;
//                } 
//            
//        }
//     }
//    
//}
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

