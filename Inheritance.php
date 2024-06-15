<?php 

class Animal {
    public $legs = 2;
    public $color = "White";
    protected $language = '';
    private $height = 120;

    public function getLegs() {
        return $this->legs;
    }

    protected function getColor() {
        return $this->color;
    }

    protected function sleep() {

    }
}


class Person extends Animal {
    public $nationaility = "Vietnamese";
    public $job = 'Programmer';
    protected $language = 'Kinh';

    public function travel() {
        echo "Going Travel";
    }

    public function doing() {
        echo "Person has " .$this->legs. " legs and speak " .$this->language. " language";
    }
}

$person  = new Person();
echo $person->getLegs();
echo $person->travel();
echo $person->doing();

?>


