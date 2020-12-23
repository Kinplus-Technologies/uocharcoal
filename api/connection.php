<?php  
/* Online Connection Details */
	// $host = "localhost";
	// $user = "root";
	// $password = "";
	// $dbname = "meda";

/* Offline Connection Details */
	$host = "localhost";
	$user = "root";
	$password = "";
	$dbname = "uocharcoal";

# PDO CONNECTION
// Set DSN
	$dsn = "mysql:host=$host;dbname=$dbname";
	// $dsn = 'mysql:host='. $host. ';dbname='. $dbname;

	// Create a PDO instance
	$pdo = new PDO($dsn, $user, $password);
if(!$pdo){
	echo "Unable to connect to database";
}
	# DEFAULT FETCH_MODE = FETCH_OBJ
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

?>


