<?php 
/**
*@author Jude Norvor
*@version 0.0.2
*/
include_once ("adb.php");

class manufacturer extends adb {
    /**
     * @method boolean addManufacturer($id,$name,$phone,$email) Adding Manufacturer to database
     * @param Int $id specific manufacturer id
     * @param String $name name of manufacturer of inventory item
     * @param Int $phone phone number of manufacturer
     * @param Int $email email of manufacturer
     * @return bool
     **/	
	function addManufacturer($id, $name,$phone,$email, $address){
		$str_query ="INSERT INTO manufacturer(manufacturer_id,manufacturer_name,phone_number, email, address) 
        VALUES($id,'$name',$phone, '$email', '$address')";
		return $this->query($str_query);
	
	}
	/**
     * @method boolean editManufacturer($id,$name,$phone,$email) Editing manufacturer information
     * @param Int $id specific manufacturer id
     * @param String $name name of manufacturer of inventory item
     * @param Int $phone phone number of manufacturer
     * @param Int $email email of manufacturer
     * @return bool
     **/
	function editManufacturer($id,$name,$phone,$email, $address){
	
	$str_query = "UPDATE manufacturer SET manufacturer_name='$name',
	phone_number=$phone,email='$email', address='$address' WHERE manufacturer_id=$id";
	phone_number=$phone,email='$email', address='$address' WHERE manufacturer_id=$id";

		
		return $this->query($str_query);
	}
    /**
     * @method boolean deleteManufacturer($id) Deleting specific manufacturer
     * @param Int id manufacturer id to be deleted
     * @return bool
     **/	
	function deleteManufacturer($id) {
	$str_query = " DELETE FROM manufacturer WHERE manufacturer_id = $id";
	return $this->query($str_query);
	}
    /**
     * @method boolean viewManufacturers() Showing all manufacturers
     * @param no parameter
     * @return bool
     **/	
	function viewManufacturers() {
	$str_query = "SELECT * FROM manufacturer";
	return $this->query($str_query);
	}
    /**
     * @method boolean  viewAManufacturer($id) Search for a manufacturer in database
     * @return bool
     **/			
	function viewAManufacturer($id) {
	$str_query = "SELECT * FROM manufacturer WHERE manufacturer_id=$id";
	return $this->query($str_query);
	}
	/**
     * @method boolean searchManufacturer($searchManufacturer) Search for manufacturers at each column in database
     * @return bool
     **/	
	function searchManufacturer($searchManufacturer){
		
		$querry="SELECT * FROM manufacturer WHERE manufacturer_id LIKE '%$searchManufacturer%' OR manufacturer_name LIKE '%$searchManufacturer%'
			OR code_no LIKE '%$searchManufacturer%'";
	
		return $this->query($querry);
	}
	}

?>	