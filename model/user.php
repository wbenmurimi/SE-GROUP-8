<?php

include "adb.php";

class user extends adb{
    /**
     * @method boolean Login($username, $user_password) username and password to enable user to log in
     * @param $username
     * @param $user_password
     * @return bool
     */
    function Login($username, $user_password)
    {
        $str_query = "SELECT * FROM xx_user WHERE user_name = '$username' AND user_pass = md5('$user_password')";
        return $this->query($str_query);
    }
    /**
     * @method boolean signUp($username,$password,$email,$phone) sign up information of user to be stored in the database
     * @param $username name user will sign in with
     * @param $password password of user
     * @param $email email of user
     * @param $phone phone number of user
     * @return bool
     */
    function signUp($username,$password,$email,$phone)
    {
        $str_query = "INSERT INTO xx_user SET user_name='$username', user_pass=md5('$password'), user_email='$email',user_phone='$phone'";
        return $this->query($str_query);
    }
   
}
?>