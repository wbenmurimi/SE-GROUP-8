<?php
session_start();
ob_start();

if(!isset($_REQUEST['cmd'])){
	echo '{"result": 0, "message": "Unknown command"}';
	return;
}

$cmd = $_REQUEST['cmd'];

switch ($cmd) {
	case 1:
  Login();
  break;
  case 2:
  getProducts();
  break;
  case 3:
  userSignUp();
  break;
  case 4:
  addProduct();
  break;
  case 5:
  getuserSession();
  break;
  case 6:
  logout();
  break;
  case 7:
  getShoppingProducts();
  break;
  case 8:
  getShoppingCartProducts();
  break;
  case 9:
  addTransact();
  break;
  case 10:
  getTransByPhone();
  break;
 case 11:
  addDiscountTransact();
  break;
  default:
  echo '{"result": 0, "message": "Unknown command"}';
  return;
  break;
}


function Login(){
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

function logout(){

    if(!$_SESSION['username']){
        echo '{"result": 0, "message": "User not loged in"}';
        return;
    }
    session_destroy();
    echo '{"result": 1, "message": "Loged out successfully"}';
    return;
}

function getTransByPhone(){
   
    $tphone = $_GET['phone'];
    include "transaction.php";
    $trans = new transaction(); 
        $trans->getTransactionByPhone($tphone);
    $row =$trans->fetch();
    if(!$row){
        echo '{"result": 0, "message": "You dont have any discount"}';
        return;
    }

    echo '{"result": 1, "product": [';
    while($row){
        echo json_encode($row);
        $row = $trans->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
    return;
}

function getProducts(){
   
    include "product.php";
    $product = new product();
    $row = $product->fetchProducts();
    if(!$row){
        echo '{"result": 0, "message": "You have no products"}';
        return;
    }

    echo '{"result": 1, "product": [';
    while($row){
        echo json_encode($row);
        $row = $product->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
    return;
}

//shopping products
function getShoppingProducts(){
   
    include "product.php";
    $product = new product();
    $row = $product->fetchShoppingProducts();
    if(!$row){
        echo '{"result": 0, "message": "You have no products"}';
        return;
    }

    echo '{"result": 1, "product": [';
    while($row){
        echo json_encode($row);
        $row = $product->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
    return;
}
//cart products
function getShoppingCartProducts(){
   
    include "product.php";
    $product = new product();
    $name = $_REQUEST['pdt'];
    $product->boughtProducts($name);
       $row = $product->fetch();
    if(!$row){
        echo '{"result": 0, "message": "Product not added to the cart"}';
        return;
    }
    echo '{"result": 1, "product": [';
    while($row){
        echo json_encode($row);
        $row = $product->fetch();
        if($row){
            echo ',';
        }
    }
    echo "]}";
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
//adding a product
function addProduct(){
    include "product.php";

    $prdct = new product();
    $name = $_GET['name'];
    $price = $_GET['price'];
    $qty = $_GET['qty'];
    $pid = $_GET['pid'];

    if(!$prdct->addProduct($name,$price,$qty,$pid)){
        echo '{"result": 0, "message": "Product was not added"}';
        return;
    }
    echo '{"result": 1, "message": "Product was added successful"}';

    return;
}

//performing a transaction
function addTransact(){
    include "transaction.php";

    $trans = new transaction();
    $tproduct = $_GET['name'];
    $tcost = $_GET['cost'];
    $tquantity = $_GET['qty'];
    $tphone = $_GET['phone'];

    if(!$trans->addTransaction($tphone,$tproduct,$tquantity,$tcost)){
        echo '{"result": 0, "message": "Transaction failed"}';
        return;
    }
    echo '{"result": 1, "message": "Transaction was successful"}';

    return;
}

//performing a transaction with discount
function addDiscountTransact(){
    include "transaction.php";

    $trans = new transaction();
    $tproduct = $_GET['name'];
    $tcost = $_GET['cost'];
    $tquantity = $_GET['qty'];
    $tphone = $_GET['phone'];
    $discount = $_GET['discount'];

    if(!$trans->addDisTransaction($tphone,$tproduct,$tquantity,$tcost,$discount)){
        echo '{"result": 0, "message": "Transaction failed"}';
        return;
    }
    echo '{"result": 1, "message": "Transaction was successful"}';

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
