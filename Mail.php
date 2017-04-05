<?php

require_once 'MailFree.php';
require_once 'MailPaid.php';
class Mail
{
    private $msg,$to,$sub;
    private $headers;
    private $isPayment;
    private $cost;


    public function __construct()
    {
        $this->headers = 'MIME-Version: 1.0' . "\r\n";
        $this->headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $this->headers .= 'From: Bitrex<noreply@bitrex.in>' . "\r\n";
    }

    public function setMessage(){
        if($this->isPayment){
            $html=new MailPaid($this->cost);
            $this->msg=$html->getHtml();
        }
        else{
            $html=new MailFree();
            $this->msg=$html->getHtml();
        }
    }
    public function setPayment($pay,$amt){
        $this->isPayment=$pay;
        $this->cost=$amt;
    }
    public function setTo($to){
        $this->to=$to;
    }
    public function setSubject($sub){
        $this->sub=$sub;
    }
    public function sendMail(){
        mail($this->to,$this->sub,$this->msg,$this->headers);
    }
    public function printMail(){
        echo $this->msg;
    }
}
$mail=new Mail();
$mail->setPayment(1,200);
$mail->setMessage();
//$mail->sendMail();
$mail->printMail();