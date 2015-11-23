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
    $(".contentArea").show();
    for (var i = 0; i < arguments.length; i++) {

        var input = arguments[i];
        $('#'+input).addClass('hide'); //jquery way
    }

}
function showDiv(input){
    $('#'+input).removeClass('hide');
        $('#'+input).show(); //jquery way

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
    /*Equip name*/
    var name = $("#eName").val();
    alert(name)
    /*quantity*/
    var quantity = $("#eQty").val();
    /*price*/
    var price = $("#ePrice").val();

    var number = $("#eNumber").val();
    var barcode = $("#eCode").val();
    var manufacturer = $("#eManu").val();
    var repairDate = $("#repairDate").val();
    var dateBought = $("#dateBought").val();
    var condition = $("#eCond").val();
    var location = $("#eLoc").val();
    var department = $("#eDep").val();
    var userId = "benson";
  
    if(name.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Name<i class="material-icons">close</i></div>';
        
        return;
    }
    if(quantity.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Quantity<i class="material-icons">close</i></div>';
        return;
    }
    if(price.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Price<i class="material-icons">close</i></div>';
        return;
    }
    if(number.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Number<i class="material-icons">close</i></div>';
        return
    }
    if(barcode.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Barcode<i class="material-icons">close</i></div>';
        return;
    }
    if(manufacturer.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty manufacturer<i class="material-icons">close</i></div>';
        return;
    }
    if(repairDate.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Repair Date<i class="material-icons">close</i></div>';
        return
    }
    if(dateBought.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Date Bought<i class="material-icons">close</i></div>';
        return;
    }
    if(location.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Location<i class="material-icons">close</i></div>';
        return;
    }
    if(condition.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Condition<i class="material-icons">close</i></div>';
        return
    }
    if(department.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Department<i class="material-icons">close</i></div>';
        return;
    }


var strUrl = myurl+"cmd=4&number="+number+"&eName="+name+"&code="+barcode+"&manu="+manufacturer+
"&repairDate="+repairDate+"&price="+price+"&dateBought="+dateBought+"&cod="+condition+
"&loc="+location+"&dep="+department+"&uid="+userId+"&qty="+quantity;
// prompt("url",strUrl);
var objResult = sendRequest(strUrl);
var errorArea = document.getElementById("error_areap");
document.getElementById("error_areap").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
if(objResult.result == 0) {
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
}

  $("#eName").val('');

   $("#eQty").val('');
$("#ePrice").val('');

$("#eNumber").val('');
     $("#eCode").val('');
   $("#eManu").val('');
   $("#repairDate").val('');
    $("#dateBought").val('');
    $("#eCond").val('');
   $("#eLoc").val('');
  $("#eDep").val('');


document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';

// location.reload();
}


/**
* get all equipment
*/

function getEquipment(){
    var strUrl = myurl+"cmd=5";
//    prompt("url", strUrl);
var objResult = sendRequest(strUrl);

if(objResult.result == 0){
    alert(objResult.message);
    return;
}
if(objResult.result == 1){
 var mytable=document.getElementById("productTable");

 //deleting all rows in the table

 var rows = mytable.rows;
  var x = rows.length;
  while (--x) {
    // rows[x].parentNode.removeChild(rows[x]);
    // // or
    mytable.deleteRow(x);
  }
  
 for(i=1;i<objResult.equipment.length;i++){
     var myrow=mytable.rows.length;
     row=mytable.insertRow(myrow);
     numcell=row.insertCell(0);
     barcodecell=row.insertCell(1);
     namecell=row.insertCell(2);
     manucell=row.insertCell(3);
     pricecell=row.insertCell(4);
     qtycell=row.insertCell(5);
     dateboughtcell=row.insertCell(6);
     repairdatecell=row.insertCell(7)
     conditioncell=row.insertCell(8);
     locationcell=row.insertCell(9);
     dptcell=row.insertCell(10);
     editcell=row.insertCell(11)
     deletecell=row.insertCell(12)

     numcell.innerHTML=objResult.equipment[i].item_number;
     barcodecell.innerHTML=objResult.equipment[i].barcode_number;
     namecell.innerHTML=objResult.equipment[i].item_name;
     manucell.innerHTML=objResult.equipment[i].manufacturer;  
     pricecell.innerHTML=objResult.equipment[i].price;
     qtycell.innerHTML=objResult.equipment[i].quantity;
     dateboughtcell.innerHTML=objResult.equipment[i].date_bought;
     repairdatecell.innerHTML=objResult.equipment[i].last_repair_date;
     conditioncell.innerHTML=objResult.equipment[i].condition;
     locationcell.innerHTML=objResult.equipment[i].e_location;
     dptcell.innerHTML=objResult.equipment[i].department;
     editcell.innerHTML='</div><button id="myBtn2" onclick="fetchEquipment(this)" class="btn waves-effect waves-light green center-align fa fa-edit " type="submit" name="action"></button></div>'; 
     deletecell.innerHTML='</div><button id="myBtn1" onclick="deleteEquipment(this)" class="btn waves-effect waves-light red center-align fa fa-trash-o" type="submit" name="action"></button></div>';    
     
     var newId=objResult.equipment[i].item_number;
     if(document.getElementById('myBtn1')){
        var getClicked=document.getElementById('myBtn1')

        getClicked.setAttribute('id',newId);

    }
    if(document.getElementById('myBtn2')){
        var getClicked=document.getElementById('myBtn2')

        getClicked.setAttribute('id',newId);

    }
 }
}
}
/**
Function to delete the equipment
**/
function deleteEquipment(newid){
    var p= newid.getAttribute('id');
    var strUrl = myurl+"cmd=7&id="+p;
    // prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
      document.getElementById("error_areap").innerHTML =objResult.message;
        return;
    }
    if(objResult.result == 1){

       document.getElementById("error_areap").innerHTML =objResult.message;
    }
}

/**
Function to fetch one equipment
**/
function fetchEquipment(newid){
    var myid=document.getElementById("editInvent");
    
    var p= newid.getAttribute('id');
    var strUrl = myurl+"cmd=16&id="+p;
    // prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
      document.getElementById("error_areap").innerHTML ='<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
        return;
    }
    if(objResult.result == 1){
        $("contentArea").innerHTML="";
        showDiv("editInvent");
     $("#eeNumber").val(objResult.equipment[1].item_number);
     $("#eeCode").val(objResult.equipment[1].barcode_number);
     $("#eeName").val(objResult.equipment[1].item_name);
     $("#eeManu").val(objResult.equipment[1].manufacturer);  
     $("#eePrice").val(objResult.equipment[1].price);
     $("#eeQty").val(objResult.equipment[1].quantity);
     $("#edateBought").val(objResult.equipment[1].date_bought);
     $("#erepairDate").val(objResult.equipment[1].last_repair_date);
     $("#eeCond").val(objResult.equipment[1].condition);
     $("#eeLoc").val(objResult.equipment[1].e_location);
     $("#eeDep").val(objResult.equipment[1].department);

       document.getElementById("error_areap").innerHTML ='<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    }
}

/**
Function to edit the equipment
**/
function editEquipment(){
        var name = $("#eeName").val();
    var quantity = $("#eeQty").val();
    var price = $("#eePrice").val();

    var number = $("#eeNumber").val();
    var barcode = $("#eeCode").val();
    var manufacturer = $("#eeManu").val();
    var repairDate = $("#erepairDate").val();
    var dateBought = $("#edateBought").val();
    var condition = $("#eeCond").val();
    var location = $("#eeLoc").val();
    var department = $("#eeDep").val();
    var userId = "benson";
    
var strUrl = myurl+"cmd=6&number="+number+"&eName="+name+"&code="+barcode+"&manu="+manufacturer+
"&repairDate="+repairDate+"&price="+price+"&dateBought="+dateBought+"&cod="+condition+
"&loc="+location+"&dep="+department+"&uid="+userId+"&qty="+quantity;
// prompt("url",strUrl);
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
      document.getElementById("error_areap").innerHTML ='<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
        return;
    }
    if(objResult.result == 1){  
       document.getElementById("error_areap").innerHTML ='<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    }
}
function addLab(){
    /*Hall name*/
    var name = $("#hallName").val();
    /*Hall number*/
    var number = $("#hallNumber").val();

    /* if Hall name is empty*/
    if(name.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty field for Hall name<i class="material-icons">close</i></div>';
        return;
    }
    /* if Hall number is empty*/
    if(number.length == 0){
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty field for Hall Number<i class="material-icons">close</i></div>';
        return;
    }

    var strUrl = myurl+"cmd=8&number="+number+"&name="+name;
    //prompt("url",strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
        return;
    }
    $("#hallName").val('');
    $("#hallNumber").val('');

    document.getElementById("error_area").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';

    location.reload();
}

/**
Get all available labs
*/
function getLabs(){
    var strUrl = myurl+"cmd=9";
    //prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
        alert(objResult.message);
        return;
    }
    if(objResult.result == 1){

        var mytable=document.getElementById("lectureTable");
        for(i=1;i<objResult.lab.length;i++){
            var myrow=mytable.rows.length;
            row=mytable.insertRow(myrow);
            var hallName=row.insertCell(0);
            var hallNumber=row.insertCell(1);
            //filling in fields with data from database 
            hallName.innerHTML=objResult.lab[i].hall_name;
            hallNumber.innerHTML=objResult.lab[i].hall_number;   

        }
    }
}
/**
Get all available labs
*/
function getALab(){
    var strUrl = myurl+"cmd=16";
    //prompt("url", strUrl);
    var objResult = sendRequest(strUrl);
if(objResult.result == 0){
        alert(objResult.message);
        return;
    }
    if(objResult.result == 1){
        
        var mytable=document.getElementById("lectureTable");
        for(i=1;i<objResult.lab.length;i++){
            var myrow=mytable.rows.length;
            row=mytable.insertRow(myrow);
            var hallName=row.insertCell(0);
            var hallNumber=row.insertCell(1);
            //filling in fields with data from database 
            hallName.innerHTML=objResult.lab[i].hall_name;
            hallNumber.innerHTML=objResult.lab[i].hall_number;   

        }
    }
}
//Java Script function for adding manufacturers 
function addManufacturer(){
    /*manufacturer id*/
    var id = $("#manId").val();
    /*manufacturer name*/
    var name = $("#manName").val();
    /*manufacturer phone details*/
    var phone = $("#manPhone").val();
    /*manufacturer email address*/
    var email = $("#manEmail").val();
	/*manufacturer physical address details*/
    var address = $("#manAddress").val();

/* empty manID */
if(id.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text"> Please Insert Man ID <i class="material-icons">close</i></div>';
    return
}
/* empty name field*/
if(name.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Please enter Name<i class="material-icons">close</i></div>';
    return;
}
/* empty phone field */
if(phone.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Phone Field<i class="material-icons">close</i></div>';
    return;
}
/* empty email field */
if(email.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Email Field<i class="material-icons">close</i></div>';
    return;
}
/* empty address field */
if(address.length == 0){
    document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Address Field<i class="material-icons">close</i></div>';
    return;
}

 
var strUrl = myurl+"cmd=12&manId="+id+"&manName="+name+"&manPhone="+phone+
"&manEmail="+email+"&manAddress="+address;
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
Get all products
*/






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

