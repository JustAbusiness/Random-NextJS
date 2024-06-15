<?php

class Book {
    public $price;
    protected $title;
    private $year;

    static $name = "Bookssss";

    function setPrice($p) {
        $this->price = $p;
    }

    function setTitle($title) {
        $this->title = $title;
    }

    function setYear($year) {
        $this->year = $year;
    }

    function display() {
        echo $this->price;
        echo $this->title;
        echo $this->year;

        echo self::$name;
    }

}

$book = new Book();
$book->price = '2100';
$book->setTitle('Wibu');
$book->display();






?>