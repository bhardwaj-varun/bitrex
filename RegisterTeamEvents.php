<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of RegisterTeamEvents
 *
 * @author root
 */
require_once 'database/Database.php';
require_once 'Constants.php';
class RegisterTeamEvents {
    //put your code here
    private $teamName,$registerTeamResult;
    private $registerTeamMembersResult,$registerEventResult;
    private $noOfParticipants;
    private $eventName,$emails;
    private $error,$flag;
    public function __construct() {  
        
    }
    public function setTeamName($teamName){
        $this->teamName=$teamName;
    }
    public function getTeamName(){
        return $this->teamName;
    }
    public function setNoOfParticipants($noOfParticipants){
        $this->noOfParticipants=$noOfParticipants;
    }
    public function setEventName($eventName){
        $this->eventName=$eventName;
    }
    public function setEmails($emails){
        $this->emails=$emails;
    }
   public function registerTeam(){
        $db=new Database();
        $db->query = "call insert_team_name(?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('s', $this->teamName); //i for integer , s for string
        $db->stmt->execute();
        $this->registerTeamResult= $db->getResultantRow();
    }
     public function registerTeamMembers(){
      for($i=0;$i < count($this->emails);$i++){
        $db=new Database();
        $db->query = "call insert_team_members(?,?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('is', $this->registerTeamResult['id'],$this->emails[$i]->email ); //i for integer , s for string
        $db->stmt->execute();
        $this->registerTeamMembersResult[]=$db->getResultantRow();
      }
    }
    public function registerTeamForEvent(){
        if(in_array($this->eventName, Constants::TeamEventNames)){
        $db=new Database();
        $db->query = "call register_team_event(?,?)";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->bind_param('si', $this->eventName, $this->registerTeamResult['id'] ); //i for integer , s for string
        $db->stmt->execute();
        $this->registerEventResult=$db->getResultantRow();
        }
    }
    
     public function isTeamIDValid(){
        if($this->registerTeamResult['id']>0 &&  $this->registerTeamResult['row_count']==1){
             return TRUE;
        }
        else{
              return FALSE;
        }
    }
    public function checkMembersSuccessfullyRegistered(){
        $this->flag=1;
        for($i=0;$i<$this->noOfParticipants;$i++){
            $this->flag=$this->flag & $this->registerTeamMembersResult[$i]['row_count'];
        }
        return $this->flag;
    }
   
     public function getJsonResult(){
       $msg=array();
       if($this->registerEventResult['email_exist']==0){
           $msg=array('err'=>'Please Register for fest first.');
       }
       else if($this->registerEventResult['row_count']!=1){
           $msg=array('err'=>'Some database error occured.');
       }
       else{
           $msg=array('msg'=>"Registration Successful.");
       }
           
       echo  json_encode($msg);
       
       
     // echo json_encode(array("msg"=>"hello"));
    }
}

$registerTeamEvents=new RegisterTeamEvents();
$json = json_decode(file_get_contents("php://input"));
$registerTeamEvents->setTeamName($json->teamName);
$registerTeamEvents->setNoOfParticipants($json->noOfParticipants);
$registerTeamEvents->setEventName($json->eventName);
$registerTeamEvents->setEmails($json->emails);
$registerTeamEvents->registerTeam();
if($registerTeamEvents->isTeamIDValid()){
    $registerTeamEvents->registerTeamMembers();
}
 else {
     echo json_encode(array('err'=>"Team already Exist."));
}
if($registerTeamEvents->checkMembersSuccessfullyRegistered()){
    $registerTeamEvents->registerTeamForEvent();
}
else{
   echo json_encode(array('err'=>"Error while adding members")); 
}

$registerTeamEvents->getJsonResult();