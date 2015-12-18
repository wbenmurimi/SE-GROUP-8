/* u is url */
/* function by Mr Aelaf Dafla */
var myurl = "model/main.php?";
var currentCity = "";

function sendRequest(u) {
    // Send request to server
    //u a url as a string
    //async is type of request
    var obj = $.ajax({
        url: u,
        async: false
    });
    //Convert the JSON string to object
    var result = $.parseJSON(obj.responseText);
    return result; //return object
}

$(function () {
    $('#login').submit(function (e) {
        e.preventDefault();
        Login();
    });
});

$(function () {
    $('#viewproduct').submit(function (e) {
        e.preventDefault();
        viewForm();
    });
});

function hide() {
    $(".contentArea").show();
    for (var i = 0; i < arguments.length; i++) {

        var input = arguments[i];
        $('#' + input).addClass('hide'); //jquery way
    }

}

function showDiv(input) {
    $('#' + input).removeClass('hide');
    $('#' + input).show(); //jquery way

}

function viewForm() {
    $("#myBody").load("views/viewProduct.html");
    getProducts();
}
/**
 *Function to log user in
 **/
function Login() {
    /*username*/
    var user_name = $("#username").val();
    /*password*/
    var pass_word = $("#password").val();

    /* empty username */
    if (user_name.length == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty username<i class="material-icons">close</i></div>';
        return
    }
    if (pass_word.length == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = myurl + "cmd=1&username=" + user_name + "&password=" + pass_word;
    prompt("url", strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if (objResult.result == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    window.location.href = "operationsView1.html";
}
/**
 *Get specific user in database
 **/
function getUser() {
    var strUrl = myurl + "cmd=5";
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        alert(objResult.message);
        return;
    }
    document.getElementById("username").innerHTML = objResult.message;
}

function userSignUp() {
    /*password*/
    var password = $("#upassword").val();
    /*username*/
    var user_name = $("#uusername").val();
    /*email*/
    var email = $("#uemail").val();
    /*phone*/
    var phone = $("#uphone").val();

    /* empty username */
    if (user_name.length == 0) {
        document.getElementById("error_area2").innerHTML = '<div class="chip red white-text">Empty Username<i class="material-icons">close</i></div>';
        return
    }
    /* empty password */
    if (password.length == 0) {
        document.getElementById("error_area2").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    /* empty email */
    if (email.length == 0) {
        document.getElementById("error_area2").innerHTML = '<div class="chip red white-text">EmptyEmail<i class="material-icons">close</i></div>';
        return;
    }
    /* empty phone */
    if (phone.length == 0) {
        document.getElementById("error_area2").innerHTML = '<div class="chip red white-text">Empty Phone<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = myurl + "cmd=2&username=" + user_name + "&password=" + password + "&email=" + email + "&phone=" + phone;
    // prompt("url",strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area2");
    document.getElementById("error_area2").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if (objResult.result == 0) {
        document.getElementById("error_area2").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    $("#uusername").val('');
    $("#upassword").val('');
    $("#uphone").val('');
    $("#uemail").val('');
    document.getElementById("error_area2").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';

    // window.location.href = "index.html";
}

/**
Adding a new equipment
*/

function addEquipment() {
    /*Equip name*/
    var name = $("#eName").val();
    // alert(name)
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

    if (name.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Name<i class="material-icons">close</i></div>';

        return;
    }
    if (quantity.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Quantity<i class="material-icons">close</i></div>';
        return;
    }
    if (price.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Price<i class="material-icons">close</i></div>';
        return;
    }
    if (number.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Number<i class="material-icons">close</i></div>';
        return
    }
    if (barcode.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Barcode<i class="material-icons">close</i></div>';
        return;
    }
    if (manufacturer.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty manufacturer<i class="material-icons">close</i></div>';
        return;
    }
    if (repairDate.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Repair Date<i class="material-icons">close</i></div>';
        return
    }
    if (dateBought.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Date Bought<i class="material-icons">close</i></div>';
        return;
    }
    if (location.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Location<i class="material-icons">close</i></div>';
        return;
    }
    if (condition.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Condition<i class="material-icons">close</i></div>';
        return
    }
    if (department.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Department<i class="material-icons">close</i></div>';
        return;
    }


    var strUrl = myurl + "cmd=4&number=" + number + "&eName=" + name + "&code=" + barcode + "&manu=" + manufacturer +
        "&repairDate=" + repairDate + "&price=" + price + "&dateBought=" + dateBought + "&cod=" + condition +
        "&loc=" + location + "&dep=" + department + "&uid=" + userId + "&qty=" + quantity;
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_areap");
    document.getElementById("error_areap").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if (objResult.result == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
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


    document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';

    location.reload();
}


/**
 * get all equipment
 **/
function getEquipment() {
    var strUrl = myurl + "cmd=5";
    //    prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        alert(objResult.message);
        return;
    }
    if (objResult.result == 1) {
        var mytable = document.getElementById("productTable");

        //deleting all rows in the table

        var rows = mytable.rows;
        var x = rows.length;
        while (--x) {
            // rows[x].parentNode.removeChild(rows[x]);
            // // or
            mytable.deleteRow(x);
        }

        for (i = 1; i < objResult.equipment.length; i++) {
            var myrow = mytable.rows.length;
            row = mytable.insertRow(myrow);
            numcell = row.insertCell(0);
            barcodecell = row.insertCell(1);
            namecell = row.insertCell(2);
            manucell = row.insertCell(3);
            pricecell = row.insertCell(4);
            qtycell = row.insertCell(5);
            dateboughtcell = row.insertCell(6);
            repairdatecell = row.insertCell(7)
            conditioncell = row.insertCell(8);
            locationcell = row.insertCell(9);
            dptcell = row.insertCell(10);
            editcell = row.insertCell(11)
            deletecell = row.insertCell(12)

            numcell.innerHTML = objResult.equipment[i].item_number;
            barcodecell.innerHTML = objResult.equipment[i].barcode_number;
            namecell.innerHTML = objResult.equipment[i].item_name;
            manucell.innerHTML = objResult.equipment[i].manufacturer;
            pricecell.innerHTML = objResult.equipment[i].price;
            qtycell.innerHTML = objResult.equipment[i].quantity;
            dateboughtcell.innerHTML = objResult.equipment[i].date_bought;
            repairdatecell.innerHTML = objResult.equipment[i].last_repair_date;
            conditioncell.innerHTML = objResult.equipment[i].condition;
            locationcell.innerHTML = objResult.equipment[i].e_location;
            dptcell.innerHTML = objResult.equipment[i].department;
            editcell.innerHTML = '</div><button id="myBtn2" onclick="fetchEquipment(this)" class="btn waves-effect waves-light green center-align fa fa-edit " type="submit" name="action"></button></div>';
            deletecell.innerHTML = '</div><button id="myBtn1" onclick="deleteEquipment(this)" class="btn waves-effect waves-light red center-align fa fa-trash-o" type="submit" name="action"></button></div>';

            var newId = objResult.equipment[i].item_number;
            if (document.getElementById('myBtn1')) {
                var getClicked = document.getElementById('myBtn1')

                getClicked.setAttribute('id', newId);

            }
            if (document.getElementById('myBtn2')) {
                var getClicked = document.getElementById('myBtn2')

                getClicked.setAttribute('id', newId);

            }
        }
    }
}
/**
Function to delete the equipment
**/
function deleteEquipment(newid) {
    var p = newid.getAttribute('id');
    var strUrl = myurl + "cmd=7&id=" + p;
    // prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    if (objResult.result == 1) {

        document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
    }
}

/**
Function to fetch one equipment
**/
function fetchEquipment(newid) {
    $("contentArea").val("");
    var myid = document.getElementById("editInvent");

    var p = newid.getAttribute('id');
    var strUrl = myurl + "cmd=16&id=" + p;
    // prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    if (objResult.result == 1) {
        hide('eqpTable');
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

        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
    }
}

/**
Function to edit the equipment
**/
function editEquipment() {
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

    var strUrl = myurl + "cmd=6&number=" + number + "&eName=" + name + "&code=" + barcode + "&manu=" + manufacturer +
        "&repairDate=" + repairDate + "&price=" + price + "&dateBought=" + dateBought + "&cod=" + condition +
        "&loc=" + location + "&dep=" + department + "&uid=" + userId + "&qty=" + quantity;
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    if (objResult.result == 1) {
        document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
    }
}

function addLab() {
    /*Hall name*/
    var name = $("#hallName").val();
    alert(name);
    /*Hall number*/
    var number = $("#hallNumber").val();
    alert(number);
    /* if Hall name is empty*/
    if (name.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty field for Hall name<i class="material-icons">close</i></div>';
        return;
    }
    /* if Hall number is empty*/
    if (number.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty field for Hall Number<i class="material-icons">close</i></div>';
        return;
    }

    var strUrl = myurl + "cmd=8&number=" + number + "&name=" + name;
    prompt("url", strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if (objResult.result == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    $("#hallName").val('');
    $("#hallNumber").val('');

    document.getElementById("error_area").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';

    location.reload();
}
/**
Get all available labs
*/
function getLabs() {
    var strUrl = myurl + "cmd=9";
    //prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        alert(objResult.message);
        return;
    }
    if (objResult.result == 1) {

        var mytable = document.getElementById("lectureTable");
        for (i = 1; i < objResult.lab.length; i++) {
            // alert(objResult.lab[i].id);
            var myrow = mytable.rows.length;
            row = mytable.insertRow(myrow);
            var hallName = row.insertCell(0);
            var hallNumber = row.insertCell(1);
            var editcell = row.insertCell(2)
            var deletecell = row.insertCell(3)
                //filling in fields with data from database 
            var ids = objResult.lab[i].id;
            hallName.innerHTML = objResult.lab[i].hall_name;
            hallNumber.innerHTML = objResult.lab[i].hall_number;
            editcell.innerHTML = '</div><button id="myBtn2" onclick="getALab(this)" class="btn waves-effect waves-light green center-align" type="submit" name="action">EDIT </button></div>';
            deletecell.innerHTML = '</div><button id="myBtn1" onclick="deleteLab(this)" class="btn waves-effect waves-light green center-align" type="submit" name="action">DELETE </button></div>';

            var newId = objResult.lab[i].id;
            if (document.getElementById('myBtn1')) {
                var getClicked = document.getElementById('myBtn1')

                getClicked.setAttribute('id', newId);
            }
            if (document.getElementById('myBtn2')) {
                var getClicked = document.getElementById('myBtn2')

                getClicked.setAttribute('id', newId);

            }

        }
    }
}
/**
Get all available labs called upon
*/
function getALab(newid) {
    var mytable = document.getElementById("editLab");
    hide('labTable');
    showDiv("editLab");
    var p = newid.getAttribute('id');
    var strUrl = myurl + "cmd=17&id=" + p;
    prompt("url", strUrl);
    var objResult = sendRequest(strUrl);
    if (objResult.result == 0) {
        alert(objResult.message);
        return;
    }
    if (objResult.result == 1) {
        alert(objResult.lab[0].hall_name);
        $("#editHallName").val(objResult.lab[0].hall_name);
        $("#editHallNumber").val(objResult.lab[0].hall_number);
    }
}
/**
Delete Lab at specific ID
*/
function deleteLab(newid) {
    var p = newid.getAttribute('id');
    var strUrl = myurl + "cmd=11&id=" + p;
    prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        document.getElementById("error_areap").innerHTML = objResult.message;
        return;
    }
    if (objResult.result == 1) {

        document.getElementById("error_areap").innerHTML = objResult.message;
    }
}
//Java Script function for adding manufacturers 
function addManufacturer() {
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
    if (id.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text"> Please Insert Man ID <i class="material-icons">close</i></div>';
        return
    }
    /* empty name field*/
    if (name.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Please enter Name<i class="material-icons">close</i></div>';
        return;
    }
    /* empty phone field */
    if (phone.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Phone Field<i class="material-icons">close</i></div>';
        return;
    }
    /* empty email field */
    if (email.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Email Field<i class="material-icons">close</i></div>';
        return;
    }
    /* empty address field */
    if (address.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Address Field<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = myurl + "cmd=12&manId=" + id + "&manName=" + name + "&manPhone=" + phone +
        "&manEmail=" + email + "&manAddress=" + address;
    //prompt("url", strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if (objResult.result == 0) {
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    $("#manId").val('');
    $("#manName").val('');
    $("#manPhone").val('');
    $("#manAddress").val('');
    $("#manEmail").val('');
    document.getElementById("error_area").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';

    location.reload();
}

//js to view all Manufacturers in Database 
function viewManufacturers() {
    var strUrl = myurl + "cmd=13";
    //prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        alert(objResult.message);
        return;
    }
    if (objResult.result == 1) {

        var mytable = document.getElementById("manufacturersTable");
        for (i = 1; i < objResult.manufacturer.length; i++) {
            //using Js to create table 
            var myrow = mytable.rows.length;
            row = mytable.insertRow(myrow);
            //creating variables to populate the table 
            var manId = row.insertCell(0);
            var name = row.insertCell(1);
            var number = row.insertCell(2);
            var email = row.insertCell(3);
            var address = row.insertCell(4);

            var editcell = row.insertCell(5);
            var deletecell = row.insertCell(6);

            //filling in fields with data from database 
            manId.innerHTML = objResult.manufacturer[i].manufacturer_id;
            name.innerHTML = objResult.manufacturer[i].manufacturer_name;
            number.innerHTML = objResult.manufacturer[i].phone_number;
            email.innerHTML = objResult.manufacturer[i].email;
            address.innerHTML = objResult.manufacturer[i].address;
            editcell.innerHTML = '</div><button id="myBtn2" onclick="getAManufacturer(this)" class="btn waves-effect waves-light green center-align" type="submit" name="action">EDIT </button></div>';
            deletecell.innerHTML = '</div><button id="myBtn1" onclick="deleteManufacturer(this)" class="btn waves-effect waves-light red center-align" type="submit" name="action">DELETE </button></div>';

            var newId = objResult.manufacturer[i].manufacturer_id;
            if (document.getElementById('myBtn1')) {
                var getClicked = document.getElementById('myBtn1')

                getClicked.setAttribute('id', newId);
            }
            if (document.getElementById('myBtn2')) {
                var getClicked = document.getElementById('myBtn2')

                getClicked.setAttribute('id', newId);

            }
        }
    }
}
/**
 *
 **/
function getAManufacturer(newid) {
    hide('viewMan');
    showDiv("editMan");
    var p = newid.getAttribute('id');
    var strUrl = myurl + "cmd=18&id=" + p;
   // prompt("url", strUrl);
    var objResult = sendRequest(strUrl);
    if (objResult.result == 0) {
        alert(objResult.message);
        return;
    }
    if (objResult.result == 1) {
        //alert(objResult.manufacturer[1].manufacturer_id)
        $("#editManId").val(objResult.manufacturer[1].manufacturer_id);
        $("#editManName").val(objResult.manufacturer[1].manufacturer_name);
        $("#editManPhone").val(objResult.manufacturer[1].phone_number);
        $("#editManAddress").val(objResult.manufacturer[1].address);
        $("#editManEmail").val(objResult.manufacturer[1].email);
    }
}

function editManufacturer() {
    /*manufacturer id*/
    var id = $("#editManId").val();
    /*manufacturer name*/
    var name = $("#editManName").val();
    /*manufacturer phone details*/
    var phone = $("#editManPhone").val();
    /*manufacturer email address*/
    var email = $("#editManEmail").val();
    /*manufacturer physical address details*/
    var address = $("#editManAddress").val();

    /* empty manID */
    if (id.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text"> Please Insert Man ID <i class="material-icons">close</i></div>';
        return
    }
    /* empty name field*/
    if (name.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Please enter Name<i class="material-icons">close</i></div>';
        return;
    }
    /* empty phone field */
    if (phone.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Phone Field<i class="material-icons">close</i></div>';
        return;
    }
    /* empty email field */
    if (email.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Email Field<i class="material-icons">close</i></div>';
        return;
    }
    /* empty address field */
    if (address.length == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">Empty Address Field<i class="material-icons">close</i></div>';
        return;
    }


    var strUrl = myurl + "cmd=14&manId=" + id + "&manName=" + name + "&manPhone=" + phone +
        "&manEmail=" + email + "&manAddress=" + address;
   // prompt("url", strUrl);
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_areap").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if (objResult.result == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip red white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    $("#editManId").val('');
    $("#editManName").val('');
    $("#editManPhone").val('');
    $("#editManAddress").val('');
    $("#editManEmail").val('');


    document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';

}


function deleteManufacturer(newid) {
    alert("deleting");
    var p = newid.getAttribute('id');
    var strUrl = myurl + "cmd=15&id=" + p;
    //  prompt("url", strUrl);
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        return;
    }
    if (objResult.result == 1) {

        document.getElementById("error_areap").innerHTML = '<div class="chip green white-text">' + objResult.message + '<i class="material-icons">close</i></div>';
        viewManufacturers();
    }
}


//function to search for manufacturers 
function searchManufacturer()
{
    var id = document.getElementById("mSearch");
    id.addEventListener("keyup", function () {
       // alert("please enter search for manufacturer");
        $s = $("#mSearch").val();
        //alert($s);
        var strUrl = myurl + "cmd=20&id=" + $s;
       // prompt("yes", strUrl);
        var objResult = sendRequest(strUrl);
        // var objResult = sendRequest(strUrl);

        if (objResult.result == 0) {
            alert(objResult.message);
            return;
        }
        if (objResult.result == 1) {
            var mytable = document.getElementById("manufacturersTable");
            //deleting all rows in the table
            var rows = mytable.rows;
            var x = rows.length;
            while (--x) {
                // rows[x].parentNode.removeChild(rows[x]);
                // // or
                mytable.deleteRow(x);
            }
        }
        var mytable = document.getElementById("manufacturersTable");
        for (i =1 ; i < objResult.manufacturer.length; i++) {
             //alert(objResult.manufacturer[i].manufacturer_id);
            var myrow = mytable.rows.length;
            row = mytable.insertRow(myrow);
			
            var manId = row.insertCell(0);
            var manName = row.insertCell(1);
            var manPhone = row.insertCell(2)
            var manEmail = row.insertCell(3)
			var manAddress = row.insertCell(4)
			var editcell = row.insertCell(5)
			var deletecell = row.insertCell(6)
                //filling in fields with data from database 
            var ids = objResult.manufacturer[i].manufacturer_id;
            manId.innerHTML = objResult.manufacturer[i].manufacturer_id;
            manName.innerHTML = objResult.manufacturer[i].manufacturer_name;			
			manPhone.innerHTML = objResult.manufacturer[i].phone_number;
			manEmail.innerHTML = objResult.manufacturer[i].email;
			manAddress.innerHTML = objResult.manufacturer[i].address;
			
            editcell.innerHTML = '</div><button id="myBtn2" onclick="getAManufacturer(this)" class="btn waves-effect waves-light green center-align" type="submit" name="action">EDIT </button></div>';
            deletecell.innerHTML = '</div><button id="myBtn1" onclick="deleteManufacturer(this)" class="btn waves-effect waves-light red center-align" type="submit" name="action">DELETE </button></div>';
        
        var newId = objResult.manufacturer[i].manufacturer_id;
        if (document.getElementById('myBtn1')) {
            var getClicked = document.getElementById('myBtn1')

            getClicked.setAttribute('id', newId);
        }
        if (document.getElementById('myBtn2')) {
            var getClicked = document.getElementById('myBtn2')

            getClicked.setAttribute('id', newId);
		}
        }
    });

}

function Logout() {
    var strUrl = myurl + "cmd=3";
    var objResult = sendRequest(strUrl);

    if (objResult.result == 0) {
        alert(objResult.message);
        return;
    }
    alert(objResult.message);
    window.location.href = "index.html";

}

function searchLab() {
    var id = document.getElementById("eSearch");
    id.addEventListener("keyup", function () {
        alert("hey");
        $s = $("#eSearch").val();
        alert($s);
        var strUrl = myurl + "cmd=19&id=" + $s;
        prompt("yes", strUrl);
        var objResult = sendRequest(strUrl);
        // var objResult = sendRequest(strUrl);

        if (objResult.result == 0) {
            alert(objResult.message);
            return;
        }
        if (objResult.result == 1) {
            var mytable = document.getElementById("lectureTable");
            //deleting all rows in the table
            var rows = mytable.rows;
            var x = rows.length;
            while (--x) {
                // rows[x].parentNode.removeChild(rows[x]);
                // // or
                mytable.deleteRow(x);
            }
        }
        var mytable = document.getElementById("lectureTable");
        for (i = 1; i < objResult.lab.length; i++) {
            // alert(objResult.lab[i].id);
            var myrow = mytable.rows.length;
            row = mytable.insertRow(myrow);
            var hallName = row.insertCell(0);
            var hallNumber = row.insertCell(1);
            var editcell = row.insertCell(2)
            var deletecell = row.insertCell(3)
                //filling in fields with data from database 
            var ids = objResult.lab[i].id;
            hallName.innerHTML = objResult.lab[i].hall_name;
            hallNumber.innerHTML = objResult.lab[i].hall_number;
            editcell.innerHTML = '</div><button id="myBtn2" onclick="getALab(this)" class="btn waves-effect waves-light green center-align" type="submit" name="action">EDIT </button></div>';
            deletecell.innerHTML = '</div><button id="myBtn1" onclick="deleteLab(this)" class="btn waves-effect waves-light green center-align" type="submit" name="action">DELETE </button></div>';
        }
        var newId = objResult.lab[i].id;
        if (document.getElementById('myBtn1')) {
            var getClicked = document.getElementById('myBtn1')

            getClicked.setAttribute('id', newId);
        }
        if (document.getElementById('myBtn2')) {
            var getClicked = document.getElementById('myBtn2')

            getClicked.setAttribute('id', newId);

        }
    });
}