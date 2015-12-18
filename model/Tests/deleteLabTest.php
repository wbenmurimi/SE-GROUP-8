<?php

/**
 * Created by PhpStorm.
 * User: Jude
 * Date: 12/17/2015
 * Time: 4:55 PM
 */
class deleteLabTest extends PHPUnit_Framework_TestCase
{
include "../model/lab.php";
$obj=new newLab();
return assertionTrue($obj->deleteLab(2));

}
