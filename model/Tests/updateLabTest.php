<?php

/**
 * Created by PhpStorm.
 * User: Jude
 * Date: 12/17/2015
 * Time: 4:49 PM
 */
class updateLabTest extends PHPUnit_Framework_TestCase
{
include "../model/lab.php";
$obj=new newLab();
return assertionTrue($obj->updateLab("LAB 221", "My Lab", 2));
}
