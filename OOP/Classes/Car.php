<?php

class Car {
    // Properties / Fields
    private $brand;
    private $color;
    public $vehicleType = "Sedan";


    // Constructor
    public function __construct($brand, $color = "none")
    {
        $this->brand = $brand;
        $this->color = $color;
    }


    // Getter  && Setter methods 
    public function getBrand()
    {
        return $this->brand;
    }

    public function setBrand($brand)
    {
        $this->brand = $brand;
    }


    public function getColor()
    {
        return $this->color;
    }

    public function setColor($color)
    {
        $allowedColors = ["Red", "Blue", "Green", "Black", "White"];

        if (in_array($color, $allowedColors)) {
            $this->color = $color;
        }
    }


    // Methods

    public function getCarInfo()
    {
        return "Brand: " . $this->brand . " Color: " . $this->color;
    }
}

// $car01 = new Car("BMW", "Black");
// echo $car01->getCarInfo();
// echo $car01->vehicleType;

