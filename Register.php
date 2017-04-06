<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Register-test
 *
 * @author root
 */
require_once 'database/Database.php';
require_once 'Constants.php';
require_once 'Mail.php';

class Register implements Constants {

    //put your code here
        private $name, $phone, $email, $college, $university, $course,
                $regtype, $resultParticipantInfo, $resultTshirtInfo,
                $address, $style, $size, $isISC, $msg;

    public function __construct() {

    }

    public function setDetails($json) {
        $this->email = $json->email;
        $this->name = $json->name;
        $this->phone = $json->phone;
        $this->college = $json->college;
        $this->university = $json->university;
        $this->course = $json->course;
        $this->regtype = $json->regtype;
        $this->address = $json->address;
        $this->style = $json->style;
        $this->size = $json->size;
        $this->isISC = $json->isISC;


    }

    public function InsertParticipantsInfo() {
        $db=new Database();
        $db->query = "call insert_info(?,?,?,?,?,?,?,?,?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('ssssssiis',$this->email,$this->name,$this->phone,$this->college,$this->university,$this->course,$this->regtype,$this->isISC,$this->address);
        $db->stmt->execute();
        $this->resultParticipantInfo =$db->getResultantRow();

    }

    public function InsertTshirtInfo() {
        $db=new Database();
        $db->query = "call insert_tshirt_preference(?,?,?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('sss', $this->email, $this->style, $this->size); //i for integer , s for string
        $db->stmt->execute();
        $this->resultTshirtInfo = $db->getResultantRow();
    }

    public function insert() {
        $this->InsertParticipantsInfo();
       if ($this->resultParticipantInfo['row_count'] == 1 ) {
           if($this->regtype==2){
            $this->InsertTshirtInfo();
                if ($this->resultTshirtInfo['row_count'] == 1) {
                $this->msg = array('msg' => 'info & tshirt inserted successfully');
                } else {
                $this->msg = array("err" => 'error in inserting tshirt info');
                }
           }
        } else {
            $this->msg = array("err" => 'Email already Exists.');
        }
    }
    public function getJson() {
        echo json_encode($this->msg);
    }
    public function sendMail(){
        $mail=new Mail();
        if($this->isISC==1 && $this->regtype==1){ //student of iSC and tshirt not purchased
            $mail->setPayment(0,0);
        }
        else if($this ->isISC==1 && $this->regtype==2 ){
            $mail->setPayment(1,300);
        }
        else if($this ->isISC=0 && $this->regtype==1 ){
            $mail->setPayment(1,200);
        }
        else if($this ->isISC==0 && $this->regtype==2 ){
            $mail->setPayment(1,500);
        }
        $mail->setMessage();
        $mail->setTo($this->email);
        $mail->setSubject("BITREX'17 | REGISTRATION");
        $mail->sendMail();

    }

}

$register = new Register();
$json = json_decode(file_get_contents("php://input"));
$register->setDetails($json);
$register->insert();
$register->getJson();
$register->sendMail();
