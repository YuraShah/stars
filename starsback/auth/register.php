<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

include '../model/model.php';

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
   $request = json_decode($postdata);
   $email = $request->email;
   $username = $request->username;
   $password = $request->password;
   $name = $request->name;
   $surname = $request->surname;

   $res = [];

   $getUserWithEmail = $model->getUserWithEmail($email);
   $getUserWithUsername = $model->getUserWithUsername($username);
   if ($getUserWithUsername) {
      $res = ["This user already exists. Change username"];
   } else if ($getUserWithEmail) {
      $res = ["A user with this email address already exists. Change email address"];
   } else {
      $registerUser = $model->registerUser($email, $username, $password, $name, $surname);
      if ($registerUser) {
         $res = ["You have successfully registered"];
      }
   }

   $resJson = json_encode($res);
   echo $resJson;

}
?>
