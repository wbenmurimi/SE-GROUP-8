<?php

/**
 * Created by PhpStorm.
 * User: Jude
 * Date: 12/17/2015
 * Time: 3:57 PM
 */
class addLabTest extends PHPUnit_Framework_TestCase
{
include "../model/lab.php";
$obj=new newLab();
return assertionTrue($obj->addLab("lab345","Labwork"));
}
