<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DBConnect.php';
$connection = new DBConnect();
$connection -> connect();

$method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];
$request_uri = str_replace('/api/', '', $request_uri);

$segments = explode('/', $request_uri);

$endpoint = array_shift($segments);

switch($method) {
    case "GET":
        if ($endpoint === "users") {
            if (!empty($segments)) {
                $id = $segments[0];
                $query = "SELECT cod_cli, rag_soc FROM anacli WHERE cod_cli = ?";
                $params = array($id);
            }
            else {
                $query = "SELECT cod_cli, rag_soc FROM anacli LIMIT 500";
                $params = array();
            }
        }
        else if ($endpoint === "items") {
            if (!empty($segments)) {
                $id = $segments[0];
                $query = "SELECT cod_art, des_art FROM anaart WHERE cod_art = ?";
                $params = array($id);
            }
            else {
                $query = "SELECT cod_art, des_art FROM anaart LIMIT 500";
                $params = array();
            }
        }
        $data = $connection -> runQuery($query, $params);
        if ($data) {
            echo json_encode($data);
        }
        else {
            echo json_encode("Not found");
        }
}
$connection -> close();
?>