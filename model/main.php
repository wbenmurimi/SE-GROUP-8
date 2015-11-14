<?php
/**
*@author Benson Wachira
*@author Benedicta Gokah
*@author Jude Norvor
*@version 0.0.2
*/
session_start();
ob_start();

if(!isset($_REQUEST['cmd'])){
	echo '{"result": 0, "message": "Unknown command"}';
	return;
}

$cmd = $_REQUEST['cmd'];

switch ($cmd) {
	case 1:
  login();
  break;
  case 2:
  userSignUp();
  break;
  case 3:
  logout();
  break;
  case 4:
  addEquipment();
  break;
  case 5:
  getEquipments();
  break;
  case 6:
  editEquipment();
  break;
  case 7:
  deleteEquipment();
  break;
  case 8:
  addLab();
  break;
  case 9:
  getLabs();
  break;
  case 10:
  editLab();
  break;
 case 11:
  deleteLab();
  break;
  //cases dealing with manufactures :)
  case 12:
  addManufacturer();
  break;
  case 13:
  getManufacturers();
  break;
  case 14:
  editManufacturer();
  break;
 case 15:
  deleteManufacturer();
  break;
 case 16:
  getALab();
  break;
  default:
  echo '{"result": 0, "message": "Unknown command"}';
  return;
  break;
}


function login(){
	include "user.php";

    $myuser = new user();

    $username = $_GET['username'];
    $password = $_GET['password'];
    $myuser->Login($username, $password);
    $row=$myuser->fetch();
        
    if($row){
    session_destroy();
    session_start();

    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
   echo '{"result": 1, "message": "Sign in successful"}';
//        
   return; 
    }
     echo '{"result": 0, "message": "Wrong details"}';
        return;
    
}
function userSignUp(){
    include "user.php";

    $myuser = new user();
    $username = $_GET['username'];
    $password = $_GET['password'];
    $phone = $_GET['phone'];
    $email = $_GET['email'];

    if(!$myuser->signUp($username,$password,$email,$phone)){
        echo '{"result": 0, "message": "User not created"}';
        return;
    }
    echo '{"result": 1, "message": "Sign up was successful"}';

    return;
}
/**
*Method to add an equipment to the database
*/
function addEquipment(){
    include "inventory.php";

    $eqp = new Inventory();
    $number = $_GET['number'];
    $barcode = $_GET['code'];
    $name = $_GET['name'];
    $manufacturer = $_GET['manu'];
    $repairDate = $_GET['repairDate'];
    $price = $_GET['price'];
    $dateBought = $_GET['dateBought'];
    $condition = $_GET['cod'];
    $location = $_GET['loc'];
    $department = $_GET['dep'];
    $userId = $_GET['uid'];
    $quantity = $_GET['qty'];

    if(!$eqp->addInventory($number,$barcode,$name,$manufacturer,$price,$dateBought,$repairDate
      ,$condition,$location,$department,$userId,$quantity)){
        echo '{"result": 0, "message": "Equipment was not added"}';
        return;
    }
    echo '{"result": 1, "message": "Equipment was added successfully"}';

    return;
}
function logout(){

    if(!$_SESSION['username']){
        echo '{"result": 0, "message": "User not loged in"}';
        return;
    }
    session_destroy();
    echo '{"result": 1, "message": "Loged out successfully"}';
    return;
}


/**
*Function to return all the inventory in the database
*/
function getEquipments(){
    include "inventory.php";

    $eqp = new Inventory();
    $row = $eqp->viewInventory();
    if(!$row){
        echo '{"result": 0, "message": "You have no Equipment in the database"}';
        return;
    }

    echo '{"result": 1, "equipment": [';
    while($row){
        echo json_encode($row);
        $row = $eqp->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
    return;
}

/**
*Method to edit an equipment to the database
*/
function editEquipment(){
    include "inventory.php";

    $eqp = new Inventory();
    $number = $_GET['number'];
    $barcode = $_GET['code'];
    $name = $_GET['name'];
    $manufacturer = $_GET['manu'];
    $repairDate = $_GET['repairDate'];
    $price = $_GET['price'];
    $dateBought = $_GET['dateBought'];
    $condition = $_GET['cod'];
    $location = $_GET['loc'];
    $department = $_GET['dep'];
    $userId = $_GET['uid'];
    $quantity = $_GET['qty'];

    if(!$eqp->editInventory($number,$barcode,$name,$manufacturer,$price,$dateBought,$repairDate
      ,$condition,$location,$department,$userId,$quantity)){
        echo '{"result": 0, "message": "Equipment was not edited"}';
        return;
    }
    echo '{"result": 1, "message": "Equipment was edited successfully"}';

    return;
}

/**
*Method to delete an equipment from the inventory
*/
function deleteEquipment(){
    include "inventory.php";

    $eqp = new Inventory();
    $eqpId = $_GET['id'];

    if(!$eqp->deleteInventory($eqpId)){
        echo '{"result": 0, "message": "Equipment was not deleted "}';
        return;
    }
    echo '{"result": 1, "message": "Equipment was deleted successful"}';

    return;
}


/**
 * @method JSON addLab() Adding new lab information to database
 * @param no parameter
 * @return JSON object stating whether or not input has been successful
 **/
function addLab(){
    include "lab.php";
    $myLab = new Lab();
    $number = $_GET['number'];
    $name = $_GET['name'];

    if(!$myLab->addlab($number, $name)){
        echo '{"result": 0, "message": "lab was not added"}';
        return;
    }
    echo '{"result": 1, "message": "Lab was added successfully"}';

    return;
}
/**
 * @method JSON getLabs() Function to return all the Labs in the database
 * @param no parameter
 * @return JSON object one displaying all information or that transaction wasnt successful
 **/
function getLabs(){
   include "lab.php";

    $myLab = new Lab();
    $row = $myLab->viewLabs();
    if(!$row){
        echo '{"result": 0, "message": "You have no Labs in the database"}';
        return;
    }

    echo '{"result": 1, "lab": [';
    while($row){
        echo json_encode($row);
        $row = $myLab->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
    return;
}
/**
 * @method JSON getLabs() Function to return all the Labs in the database
 * @param no parameter
 * @return JSON object one displaying all information or that transaction wasnt successful
 **/
function getALab(){
   include "lab.php";

    $myLab = new Lab();
    $row = $myLab->viewLabs();
    if(!$row){
        echo '{"result": 0, "message": "You have no Labs in the database"}';
        return;
    }

    echo '{"result": 1, "lab": [';
    while($row){
        echo json_encode($row);
        $row = $myLab->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
    return;
}
/**
 * @method JSON getLabs() Function to edit specific lab details
 * @param no parameter
 * @return JSON object informing whether update was successful or not
 **/
function editLab(){
    include "lab.php";

    $myLab = new Lab();
    $number = $_GET['number'];
    $name = $_GET['name'];
    if(!$myLab->editLab($number,$name)){
        echo '{"result": 0, "message": "lab was not edited"}';
        return;
    }
    echo '{"result": 1, "message": "Lab was editedited successfully"}';

    return;
}
/**
 * @method JSON deleteLab() Function to delete specific lab
 * @param no parameter
 * @return JSON object informing whether delete was successful or not
 **/
function deleteLab(){
    include "lab.php";

    $myLab = new Lab();
    $labId = $_GET['id'];

    if(!$myLab->deletelab($labId)){
        echo '{"result": 0, "message": "Lab was not deleted "}';
        return;
    }
    echo '{"result": 1, "message": "Lab was deleted successfully"}';

    return;
}

/**
*Method to add a Manufacturer to the database
*/
function addManufacturer(){
    include "manufacturer.php";

    $myManu = new Manufacturer();
    $id = $_GET['manId'];
    $name = $_GET['manName'];
    $phone= $_GET['manPhone'];
	$email = $_GET['manEmail'];
	$address = $_GET['manAddress'];

    if(!$myManu->addManufacturer($id, $name, $phone, $email,$address)){
        echo '{"result": 0, "message": "Manufacturer was not added"}';
        return;
    }
    echo '{"result": 1, "message": "Manufacturer was added successfully"}';

    return;
}

/**
*Function to return all the Manufacturer in the database
*/
function getManufacturers(){
    include "manufacturer.php";

    $myManu = new Manufacturer();
    $row = $myManu->viewManufacturers();
    if(!$row){
        echo '{"result": 0, "message": "You have no Manufacturer in the database"}';
        return;
    }

    echo '{"result": 1, "manufacturer": [';
    while($row){
        echo json_encode($row);
        $row = $myManu->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
    return;
}

/**
*Method to edit Manufacturer to the database
*/
function editManufacturer(){
    include "manufacturer.php";

    $myManu = new Manufacturer();
    $id = $_GET['manId'];
    $name = $_GET['manName'];
    $phone = $_GET['manPhone'];
	$email = $_GET['manEmail'];
	$address = $_GET['manAddress'];
    if(!$myManu->editManufacturer($id,$name,$phone, $email, $address)){
        echo '{"result": 0, "message": "Manufacturer was not edited"}';
        return;
    }
    echo '{"result": 1, "message": "Manufacturer was editedited successfully"}';

    return;
}

/**
*Method to delete a manufacturer from the database
*/
function deleteManufacturer(){
    include "manufacturer.php";

    $myManu = new Manufacturer();
    $manId = $_GET['id'];

    if(!$myManu->deleteManufacturer($manId)){
        echo '{"result": 0, "message": "Manufacturer was not deleted "}';
        return;
    }
    echo '{"result": 1, "message": "Manufacturer was deleted successfully"}';

    return;
}


function getuserSession(){
    if(!$_SESSION["username"]){
      echo '{"result": 0, "message": "No session stored"}';
        return;  
    }
    echo '{"result": 1, "message": "'.$_SESSION["username"].'"}';

    return;

}
ob_end_flush();

?>
