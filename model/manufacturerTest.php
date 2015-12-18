<?php
/**
*@author Benedicta Gokah 
*@version 0.0.0
*Test class for manufacturing class. It tests all the functions in the class
*/
include "manufacturer.php";
class manufacturerTest extends PHPUnit_Framework_TestCase
{
    /**
     * @method  testAddManufacturer() tests method for addManufacturer function in manufacturer class
     * @param int $id specific manufacturer id
     * @param String $name name of manufacturer of inventory item
     * @param int $phone phone number of manufacturer
     * @param int $email email of manufacturer
     * @param String $address address where manufacturer is located
     * @return bool
     **/
    public function testAddManufacturer()
    {
		
        $man = new manufacturer();
		$id = "7647";
		$name = "samsung"; 
		$phone = "02675679";
		$email = "benedicta.gokah@ashesi.edu.gh";
		$address = " p.o box ct 4496 cantonments accra"; 
        $this->assertEquals(true, $man->addManufacturer($id, $name, $phone, $email, $address));
    }
	
	
    /**
     /**
     * @method boolean testEditManufacturer($id,$name,$phone,$email) Editing manufacturer information
     * @param int $id specific manufacturer id
     * @param String $name name of manufacturer of inventory item
     * @param int $phone phone number of manufacturer
     * @param int $email email of manufacturer
     * @param String $address address where manufacturer is located
     * @return bool
     **/
     **/
    public function testEditManufacturer()
    {
        $man = new manufacturer();
	
		$id = "77";
		$name = "dell"; 
		$phone = "0264821126";
		$email = "new.man@zero.edu.gh";
		$address = " p.o box zone"; 
       
        $this->assertEquals(-1, $man->editManufacturer($id, $name, $phone, $email, $address));
    }
	
	
	/**
     * @method  testDeleteManufacturer() tests method for deleteManufacturer function in Manufacturer class
     * @param int id manufacturer id to be deleted
     * @return bool
     **/
    public function testDeleteManufacturer()
    {
        $man = new manufacturer();
        $id="1";
        $this->assertEquals(1, $man->deleteManufacturer($id));
    }
	
	
	
	/**
     * @method  testSearchManufacturers() tests method for searchManufacturers($searchName) function in Manufacturer class
     * @param $searchName which searches for the name of the manufacturer that is being searched for 
     * @return bool
     **/
	  
    public function testSearchManufacturers()
    {
        $man = new manufacturer();
        $searchName = "dell";
        $this->assertEmpty(false, $man->searchManufacturer($searchItem));
    }

   
}