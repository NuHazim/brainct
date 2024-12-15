<?php
session_start();

// Database connection
$database = "brainct";
$db_handle = mysqli_connect('localhost', 'root', '', $database);

if (!$db_handle) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_GET['action']) && $_GET['action'] == 'logout') {
    session_destroy();
    header("Location: login.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST['connection'])) {
        $first_name = trim($_POST['Prenom']);
        $last_name = trim($_POST['Nom']);
        $email = trim($_POST['Mail']);
        $password = trim($_POST['Password']);
        $user_type = trim($_POST['UserType']);

        $query = "SELECT user_id, user_type FROM users WHERE first_name = ? AND last_name = ? AND email = ? AND password = ? AND user_type = ?";
        $stmt = mysqli_prepare($db_handle, $query);
        $stmt->bind_param("sssss", $first_name, $last_name, $email, $password, $user_type);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {

            $stmt->bind_result($user_id, $statut);
            $stmt->fetch();
            $_SESSION['user_type'] = $statut;
            $_SESSION['user_id'] = $user_id;
            $_SESSION['last_name'] = $last_name;
            $_SESSION['first_name'] = $first_name;
            header("Location: home.php");
        } else {

            echo "<script>alert('Incorrect email or password. Please try again.'); window.history.back();</script>";
            exit();
        }
    } elseif (isset($_POST['inscription'])) {
        $first_name = trim($_POST['Prenom']);
        $last_name = trim($_POST['Nom']);
        $email = trim($_POST['Mail']);
        $password = trim($_POST['Password']);
        $user_type = trim($_POST['UserType']);

        // Vérifier si l'email existe déjà
        $query = "SELECT * FROM users WHERE first_name = ? AND last_name = ? AND email = ? AND password = ? AND user_type = ?";
        $stmt = mysqli_prepare($db_handle, $query);
        $stmt->bind_param("sssss", $first_name, $last_name, $email, $password, $user_type);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo "<script>alert('This email already exists. Please login.'); window.history.back();</script>";
            exit();
        } else {
            if ($user_type == 'Doctor') {
                // Si l'utilisateur est un docteur, redirigez-le vers la page de téléchargement de la carte de docteur
                $_SESSION['pending_registration'] = [
                    'first_name' => $first_name,
                    'last_name' => $last_name,
                    'email' => $email,
                    'password' => $password,
                    'user_type' => $user_type
                ];
                header("Location: verify_doctor.php");
                exit();
            } else {
                // Inscription pour un client classique
                $query = "INSERT INTO users (user_type, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)";
                $stmt = mysqli_prepare($db_handle, $query);
                mysqli_stmt_bind_param($stmt, "sssss", $user_type, $first_name, $last_name, $email, $password);
                mysqli_stmt_execute($stmt);

                echo "<script>alert('Registration successful! You can now login.'); window.location.href='login.php';</script>";
                exit();
            }
        }
    }
}

// Close the database connection
mysqli_close($db_handle);
?>
