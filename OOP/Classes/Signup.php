<?php

class SignUp extends Bdh
{
    private $username;
    private $pwd;

    public function __construct($username, $pwd)
    {
        $this->username = $username;
        $this->pwd = $pwd;
    }

    private function insertUser() {
        $query = "INSERT INTO users ('username, pwd') VALUES (:username, :pwd);";
        $stmt  = parent::connect()->prepare($query);
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":pwd", $this->pwd);
        $stmt->execute();
    }

    private function signupUser()
    {

    }

}
