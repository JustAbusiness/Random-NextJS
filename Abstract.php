<?php
abstract class parentTest {
        abstract public function func1();

        abstract public function func2();

}
class childTest extends parentTest {
    public function func1() {
        echo "Function 1 ne";
    }

    public function func2() {
        echo "Function 2 ne";
    }
}

$child = new childTest();
$child->func1();
$child->func2();

?>