<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Access-Control-Allow-Credentials: true');

include '../model/model.php';
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
   $request = json_decode($postdata);
   $email = $request->email;
   $password = $request->password;

   $res = [];
   $signInEmailCheck = $model->signInEmailCheck($email);
   if ($signInEmailCheck) {
      $signInEmailGetUser = $model->signInEmailGetUser($email);
      foreach ($signInEmailGetUser as $value) {
         if (password_verify($password, $value['password'])) {
            $secret_key = "cosmstars";

            $iss = "localhost";
            $iat = time();
            $nbf = $iat + 10;
            $exp = $iat + 900;
            $aud = "user";
            $user = array(
               "id" => $value['id'],
               "email" => $value['email'],
               "username" => $value['username']
            );
            $payload_info = array(
               "iss" => $iss,
               "iat" => $iat,
               "nbf" => $nbf,
               "exp" => $exp,
               "aud" => $aud,
               "data" => $user
            );
            $token = JWT::encode($payload_info, $secret_key, 'HS256');

            $res[] = [
               "token" => $token,
            ];
         } else {
            $res[] = "User is not found";
         }
      }
   } else {
      $res[] = "User is not found";
   }
   $resJson = json_encode($res);
   echo $resJson;
}
?>