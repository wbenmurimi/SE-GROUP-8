<?php

/**
 * Created by PhpStorm.
 * User: Jude
 * Date: 12/17/2015
 * Time: 5:13 PM
 */
include "lab.php";

class Test extends PHPUnit_Framework_TestCase
{
    /**
     * @method  testViewLabs() tests method for viewLabs function in Lab class
     * @param no parameter
     * @return bool
     **/
    public function testViewLabs()
    {
        $obj = new Labs();
        $this->assertEquals(-1, $obj->viewLabs());
    }
    /**
     * @method  testDeleteLab() tests method for deleteLab($id) function in Lab class
     * @param no parameter
     * @return bool
     **/
    public function testDeleteLab()
    {
        $obj = new Labs();
        $id=2;
        $this->assertEquals(1, $obj->deleteLab($id));
    }
    /**
     * @method  testSearchLab() tests method for searchLab($searchItem) function in Lab class
     * @param no parameter
     * @return bool
     **/
    public function testSearchLab()
    {
        $obj = new Labs();
        $searchItem="lib";
        $this->assertEmpty(false, $obj->searchLab($searchItem));
    }
    /**
     * @method  testAddLab() tests method for addLab($number,$name)function in Lab class
     * @param no parameter
     * @return bool
     **/
    public function testAddLab()
    {
        $obj = new Labs();
        $number="mphA";
        $name="Motulsky";
        $this->assertEquals(true, $obj->addLab($number,$name));
    }
    /**
     * @method  testUpdateLab() tests method for updateLab($number,name) function in Lab class
     * @param no parameter
     * @return bool
     **/
    public function testUpdateLab()
    {
        $obj = new Labs();
        $number="LAB 221";
        $name="My Labs";
        $id=3;
        $this->assertEquals(true, $obj->updateLab($number,$name,$id));
    }
    /**
     * @method  testViewALAb() tests method for viewALab($id) function in Lab class
     * @param no parameter
     * @return bool
     **/
    public function testViewALAb()
    {
        $obj = new Labs();
        $id=1;
        $this->assertEquals(-1, $obj->viewALab($id));
    }
}

