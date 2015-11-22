<?php
/**
*@author Jude Norvor
*@version 0.0.2
*/
include "adb.php";

class Inventory extends adb{
    /**
     * @method boolean addInventory($number, $barcode, $name, $manufacturer, $price, $dateBought, $repairDate, $conditions, $location, $department, $userId, $quantity) Store information of Inventory in database
     * @param String $number specific inventory item
     * @param Int $barcode
     * @param String $name Inventory name
     * @param String $manufacturer manufacturer of inventory item
     * @param Int $price price of inventory
     * @param Date $dateBought date of inventory purchase
     * @param Date $repairDate date of last repair of inventory item
     * @param String $conditions condition of inventory item
     * @param String $location where inventory item is located 
     * @param String $department Department inventory belongs to
     * @param Int $userId head of department id
     * @param Int $quantity amount of inventory item in stock
     * @return bool
     **/
    function addInventory($number, $barcode, $name, $manufacturer, $price, $dateBought, $repairDate, $conditions, $location, $department, $userId, $quantity)
    {
        $str_query = "INSERT INTO items(item_number, barcode_number, item_name, manufacturer, price, date_bought, last_repair_date, conditions, e_location, department, userid, quantity) 
        VALUES('$number','$barcode','$name','$manufacturer','$price', '$dateBought','$repairDate','$conditions','$location','$department','$userId','$quantity')";
        return $this->query($str_query);
    }
    /**
     * @method boolean viewInventory() Showing all inventory items
     * @param no parameter
     * @return bool
     **/
    function viewInventory()
    {
        $str_query = "SELECT * FROM items";
        return $this->query($str_query);
    }
    /**
     * @method boolean editInventory($number, $barcode, $name, $manufacturer, $price, $dateBought, $repairDate, $conditions, $location, $department, $userId, $quantity) Editing inventory item at specific item number
     * @param String $number specific inventory item
     * @param Int $barcode
     * @param String $name Inventory name
     * @param String $manufacturer manufacturer of inventory item
     * @param Int $price price of inventory
     * @param Date $dateBought date of inventory purchase
     * @param Date $repairDate date of last repair of inventory item
     * @param String $conditions condition of inventory item
     * @param String $location where inventory item is located 
     * @param String $department Department inventory belongs to
     * @param Int $userId head of department id
     * @param Int $quantity amount of inventory item in stock
     * @return bool
     **/
    function editInventory($number, $barcode, $name, $manufacturer, $price, $dateBought, $repairDate, $conditions, $location, $department, $userId, $quantity)
    {
     $str_query = "UPDATE items SET barcode_number=$barcode, item_name=$name,manufacturer=$manufacturer,price=$price,date_bought=$dateBought,last_repair_date=$repairDate,conditions=$conditions,location=$location,department=$department, userid=$userId,quantity=$quantity WHERE item_number=$number";
     return $this->query($str_query);
 }
    /**
     * @method boolean deleteInventory($id) Delete inventory item at specific item number
     * @param Int id item number to be deleted
     * @return bool
     **/
    function deleteInventory($id)
    {
        $str_query="DELETE FROM items WHERE item_number='$id'";
        return $this->query($str_query);
    }
    /**
     * @method boolean searchInventory($searchItem) Search for inventory item at each column
     * @return bool
     **/
    function searchInventory($searchItem){
        
        $str_query="SELECT * FROM items WHERE item_number LIKE '%$searchItem%' OR manufacturer LIKE '%$searchItem%'
        OR conditions LIKE '%$searchItem%' OR location LIKE '%$searchItem%' OR department LIKE '%$searchItem%'
        OR item_name LIKE '%$searchItem%' OR price LIKE '%$searchItem%'";
        return $this->query($str_query);
    }
      /**
     * @method boolean getInventory($eqpId) gets a specific equipment given the item number
     * @param Int eqpId item number to be fetched
     * @return bool
     **/
      function getInventory($eqpId)
      {
        $str_query = "SELECT * FROM items where item_number='$eqpId'";
        return $this->query($str_query);
    }
}

?>
