<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of RegisterEvents
 *
 * @author root
 */
require_once 'database/Database.php';
require_once 'Constants.php';

class RegisterEvents implements Constants {

    //put your code here
    private $email, $event;
    private $db, $registerResult;

    public function __construct() {
        
    }

    public function registerForEvent() {
        $db = new Database();
        $db->query = "call register_event(?,?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('ss', $this->event, $this->email); //i for integer , s for string
        $db->stmt->execute();
        $this->registerResult = $db->getResultantRow();
    }

    public function isEventExist($event) {
        return in_array($event, Constants::EventNames);
    }

    public function setEvent($event) {
        $this->event = $event;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getJson() {
        $msg = array();
        if ($this->registerResult['email_exist'] == 0) {
            $msg = array('err' => 'Email does not Exist. Please register for fest first.');
        } else if ($this->registerResult['row_count'] != 1) {
            $msg = array('err' => 'Some Error Occured.');
        }else if ($this->registerResult['row_count'] == 1){
            $msg = array('msg'=> 'Successfully registered for event');
        }
        
        echo json_encode($msg);
    }

}

$registerEvents = new RegisterEvents();
$json = json_decode(file_get_contents("php://input"));
if ($registerEvents->isEventExist($json->event)) {
    $registerEvents->setEvent($json->event);
    $registerEvents->setEmail($json->email);
    $registerEvents->registerForEvent();
} else {
    echo json_encode(array("err" => "Event Name does not exist."));
}
$registerEvents->getJson();
