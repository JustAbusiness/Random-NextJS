<?php 

class Bdh {
    private $host = "localhost";
    private $dbname = 'myfirstdatabase';
    private $dbusername = 'root';
    private $dbpassword = '';

    protected function connect() {
        try {
            $dsn = "mysql:host=$this->host;dbname=$this->dbname";
            $pdo = new PDO($dsn, $this->dbusername, $this->dbpassword);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
}




