<?php

/**
 * Created by PhpStorm.
 * User: Jude
 * Date: 12/17/2015
 * Time: 4:57 PM
 */
class viewLabTest extends PHPUnit_Framework_TestCase
{
include "../model/lab.php";
$obj=new newLab();
return assertionTrue($obj-> searchLab("lib"));
}
