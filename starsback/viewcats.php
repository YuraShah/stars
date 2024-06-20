<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

include 'model/model.php';

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
   $request = json_decode($postdata);

   $viewCats = $model->viewCats($request);
   echo json_encode($viewCats);
}
?>