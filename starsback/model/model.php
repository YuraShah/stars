<?php

class Model
{
   private $conn;
   private function connect()
   {
      require 'localhost.php';
      mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
      try {
         $this->conn = new mysqli($host, $user, $pass, $db, $port);
         $this->conn->set_charset($charset);
         $this->conn->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
      } catch (\mysqli_sql_exception $e) {
         throw new \mysqli_sql_exception($e->getMessage(), $e->getCode());
      } finally {
         unset($host, $db, $user, $pass, $charset);
      }
   }

   public function __construct()
   {
      $this->connect();
   }

   public function __destruct()
   {
      $this->conn->close();
   }


   public function queryOneParamOneBind($sql, $data)
   {
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param('s', $data);
      $stmt->execute();
      $result = $stmt->get_result();
      $resultArray = [];
      while ($row = $result->fetch_assoc()) {
         $resultArray[] = $row;
      }
      return $resultArray;
   }

   public function queryOneParamOneBindRow($sql, $data)
   {
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param('s', $data);
      $stmt->execute();
      $stmt->store_result();
      $result = $stmt->num_rows();
      return $result;
   }

   public function queryTwoParamsTwoBindsIS($sql, $first, $second)
   {
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param('is', $first, $second);
      $stmt->execute();
      $result = $stmt->get_result();
      $resultArray = [];
      while ($row = $result->fetch_assoc()) {
         $resultArray[] = $row;
      }
      return $resultArray;
   }

   public function queryTwoParamsTwoBindsInsert($sql, $uid, $cat)
   {
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param('ii', $uid, $cat);
      $stmt->execute();
      return $stmt->insert_id;
   }

   public function queryTwoParamsTwoBindsInsertIS($sql, $uid, $cat)
   {
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param('is', $uid, $cat);
      $stmt->execute();
      return $stmt->insert_id;
   }

   public function queryFiveParamsFiveBindsInsert($sql, $email, $username, $password, $name, $surname)
   {
      $pass_hash = password_hash($password, PASSWORD_DEFAULT);
      $stmt = $this->conn->prepare($sql);
      $stmt->bind_param('sssss', $email, $username, $pass_hash, $name, $surname);
      $stmt->execute();
      return $stmt->insert_id;
   }



   public function getUserWithEmail($email)
   {
      return $this->queryOneParamOneBind("SELECT id FROM `user` WHERE email=?", $email);
   }

   public function getUserWithUsername($username)
   {
      return $this->queryOneParamOneBind("SELECT id FROM `user` WHERE username=?", $username);
   }

   public function registerUser($email, $username, $password, $name, $surname)
   {
      return $this->queryFiveParamsFiveBindsInsert("INSERT INTO `user` (email, username, password, name, surname) VALUES (?, ?, ?, ?, ?)", $email, $username, $password, $name, $surname);
   }

   public function signInEmailCheck($email)
   {
      return $this->queryOneParamOneBindRow("SELECT * FROM `user` WHERE email=?", $email);
   }

   public function signInEmailGetUser($email)
   {
      return $this->queryOneParamOneBind("SELECT * FROM `user` WHERE email=?", $email);
   }


   public function addCat($uid, $cat)
   {
      return $this->queryTwoParamsTwoBindsInsert("INSERT INTO `user_cat` VALUES (NULL, ?, ?)", $uid, $cat);
   }

   public function viewCats($uid)
   {
      return $this->queryOneParamOneBind("SELECT user_cat_id, cat FROM `user_cat` WHERE user_id=?", $uid);
   }

   public function addRefreshToken($uid, $refresh_token)
   {
      return $this->queryTwoParamsTwoBindsInsertIS("INSERT INTO `user_token` VALUES (NULL, ?, ?)", $uid, $refresh_token);
   }

   public function checkRefreshToken($uid, $refresh_token)
   {
      return $this->queryTwoParamsTwoBindsIS("SELECT user_token_id, FROM `user_token` WHERE user_id=? AND user_refresh_token=?", $uid, $refresh_token);
   }

}

$model = new Model();

?>