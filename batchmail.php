<?php

require_once 'database/Database.php';
require_once 'Mail.php';
 $db=new Database();

 function sendMail($email,$regtype,$isc){
    $mail=new Mail();
    if($isc==1 && $regtype==1){ //student of iSC and tshirt not purchased
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
    $mail->setTo($this->email);
    $mail->setSubject("BITREX'17 | REGISTRATION");
    $mail->sendMail();

 }
 sendmail('varunbhardwaj.16dec@gmail.com',1,1);

