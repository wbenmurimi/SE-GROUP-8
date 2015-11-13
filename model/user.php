<?php

include "adb.php";

class user extends adb{
    /**
     * @param $username
     * @param $user_password
     * @return bool
     */
    function Login($username, $user_password)
    {
        $str_sql = "SELECT * from xx_user where user_name = '$username' AND user_pass = '$user_password'";
       return $this->query($str_sql);
        // return ($this->fetch() != null);
    }
    function signUp($username,$password,$email,$phone)
    {
        $str_sql = "INSERT into xx_user set 
        user_name='$username', user_pass='$password', user_email='$email',user_phone='$phone'";
       return $this->query($str_sql);
        // return ($this->fetch() != null);
    }
   
}

/*$myuser =  new appuser();
echo $myuser->Login("salifu123", "mole12883##");
*/

?>
