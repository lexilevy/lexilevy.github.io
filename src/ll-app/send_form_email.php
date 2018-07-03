<?php
if(isset($_POST['email'])) {
 
    $email_to = "lexi@lsquaredsocial.com";
    $email_subject = "*** New Form Submisison";
 
    $name = $_POST['name']; 
    $email_from = $_POST['email']; 
    $message = $_POST['message'];
    $website = $_POST['website'];
    $budget = $_POST['budget']; 

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
    $email_message .= "Website: ".clean_string($website)."\n";
    $email_message .= "Budget: ".clean_string($budget)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}
?>