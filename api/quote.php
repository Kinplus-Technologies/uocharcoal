<?php 
require_once('initialize.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

		$data = json_decode(file_get_contents("php://input"), true); // Get raw posted data as assoc array
		$from = $data['name'];
			$subject = "Request Quote - from {$from}";
			$msg = '';
			foreach ($data as $key => $value) {
				$msg .= "<p>".ucwords($key). ": {$value}</p>";
			}				
				$maildata = send_mail(new PHPMailer(), $msg, 'nnoromstan@yahoo.com', $subject);				
				$maildata = send_mail(new PHPMailer(), $msg, 'emagbetereoruese@gmail.com', $subject);				
				$smsdata = send_message("{$subject}. UOcharcoal.com");
				
			if($maildata['mailsent']){
				echo json_encode(['ok'=>1]);
			}else {
				echo $maildata['message'];
			}
			// echo json_encode(['msg' => $msg, 'sub' => $subject]);
		
?>