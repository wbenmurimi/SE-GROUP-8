<?php
/**
*@author Jude Norvor
*@version 0.0.2
*/
include_once ("adb.php");

class Labs extends adb{
	/**
     *@method constructor newLab() Constructor for the lab class
     * @param no parameter
     * @return bool
     */
	function newLab (){
			
	}
 	/**
     **@method boolean addLab($number, $name) Adding new Lab to inventory
     * @param String $number lab number
     * @param String $name name of lab
     * @return bool
     */
	function addLab($number, $name){
	    $str_query="INSERT INTO lecture_halls (hall_number, hall_name )VALUES ('$number','$name')";
		return $this->query($str_query);
	}
	/**
     **@method boolean viewLabs() viewing all available labs
     * @param no parameter
     * @return bool
     */
	function viewLabs(){
		$str_query="SELECT * FROM lecture_halls";
		return $this->query($str_query);
	}

	/**
     **@method boolean deleteLab($number) delete lab by lab number
     * @param String number lab number
     * @return bool
     */
   function deleteLab($number){
		$str_query = "DELETE FROM lecture_halls WHERE id = '$number'" ;
		
		return $this->query($str_query);	
		
		}	
    /**
     * @method boolean updateLab($number, $newName) Editing Lab name at lab number
     * @param String $number specific inventory item
     * @param String $newName inventory item
     * @return bool
     **/	
	function updateLab($number, $newName, $id){
		$str_query = " UPDATE lecture_halls SET hall_name = '$newName',hall_number = '$number' WHERE id=$id";
		return $this->query($str_query);
    
	}
    /**
     * @method boolean viewALab($no) Search for a lab in database
     * @return bool
     **/		
	function viewALab($no){
			$str_query="SELECT * FROM lecture_halls WHERE id='$no'";
			return $this->query($str_query);
		}
    /**
     * @method boolean searchLab($searchItem) Search for labs at each column in database
     * @return bool
     **/	
	function searchLab($searchLab){
		
		$str_query="SELECT * FROM lecture_halls WHERE hall_number LIKE '%$searchLab%' OR hall_name LIKE '%$searchLab%'";
	
		return $this->query($str_query);
	}
}
	
?>