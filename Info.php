<?php

/**
 * Created by PhpStorm.
 * User: root
 * Date: 7/4/17
 * Time: 12:43 AM
 */
require_once 'database/Database.php';
class Info
{
      private  $infoResult,$tshirtResult,$email;


    public function getParticipantsInfo() {
        $db=new Database();
        $db->query = "call get_registration_info(?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('s',$this->email);
        $db->stmt->execute();
        $this->infoResult =$db->getResultantRow();

    }
    public function setEmail($email){
        $this->email=$email;
    }
    public function fetchData(){
        $this->getParticipantsInfo();
        if($this->infoResult['regtype']==2){
            $this->getTshirtInfo();
            $this->infoResult=array_merge($this->infoResult,$this->tshirtResult);
        }
    }
    public function getTshirtInfo(){
        $db=new Database();
        $db->query = "call get_tshirt_info(?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('s',$this->email);
        $db->stmt->execute();
        $this->tshirtResult =$db->getResultantRow();
    }
    public function getJSONResult(){
        echo json_encode(array("msg"=> $this->infoResult));
    }

}
$info=new Info();
$json = json_decode(file_get_contents("php://input"));
$info->setEmail($json->email);
$info->fetchData();
$info->getJSONResult();
