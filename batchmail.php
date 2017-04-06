<?php

/**
 * Created by PhpStorm.
 * User: root
 * Date: 6/4/17
 * Time: 9:26 AM
 */
require_once 'database/Database.php';
require_once 'Mail.php';

class batchmail
{

    private $rows;


    function sendMail($email,$regtype,$isc){
        $mail=new Mail();
        if($isc==1 && $regtype==1){ //student of iSC and t-shirt not purchased
            $mail->setPayment(0,0);
        }
        else if($isc==1 && $regtype==2 ){
            $mail->setPayment(1,300);
        }
        else if($isc=0 && $regtype==1 ){
            $mail->setPayment(1,200);
        }
        else if($isc==0 && $regtype==2 ){
            $mail->setPayment(1,500);
        }
        $mail->setMessage();
        $mail->setTo($email);
        $mail->setSubject("BITREX'17 | REGISTRATION");
        $mail->sendMail();
    }
    public function getEmails(){
        $db=new Database();
        $db->query = "call selectmail()";
        $db->stmt = $db->prepare($db->query);
        $db->stmt->execute();
        $this->rows= $db->getMultipleResultantRows();
    }
    public function emailer(){
        for($i=0;$i<count($this->rows);$i++) {
            echo $this->rows[$i]['email'] .' '.$this->rows[$i]['regtype'].' '.$this->rows[$i]['isc'] ;
            //sendmail('varunbhardwaj.16dec@gmail.com',1,1);
        }
    }



}
$obj=new batchmail();
$obj->getEmails();
$obj->emailer();