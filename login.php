<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compte</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <link rel="stylesheet" href="style_login.css">
</head>
<body>
<div class="wrapper">
    <div class="navbar">
        <div>
            <a href="home.php">Home</a>
        </div>
        <div>
            <a href="home.php">Scan</a>
        </div>
        <div>
            <a href="home.php">Past Scans</a>
        </div>
        <div>
            <a href="home.php">Doctors</a>
        </div>
        <div>
            <a href="home.php">About</a>
        </div>
        <div>
            <?php if (isset($_SESSION['user_id'])): ?>
                <a href="login_process.php?action=logout">Logout</a>
            <?php else: ?>
                <a href="login.php?action=login">Login</a>
                <a href="login.php?action=register">Register</a>
            <?php endif; ?>
        </div>
    </div>

    <main class="section">
        <div class="container">
            <h2 class="text-center mb-4">Login page</h2>
            <div class="login-container">
                <img src="img/login.png" alt="Brain Image" class="login-image">

                <form id="loginForm" action="login_process.php" method="post" class="login-form">
                    <div class="mb-3">
                        <label for="Nom" class="form-label">Last name:</label>
                        <input type="text" class="form-control" id="Nom" name="Nom" required>
                    </div>
                    <div class="mb-3">
                        <label for="Prenom" class="form-label">First name:</label>
                        <input type="text" class="form-control" id="Prenom" name="Prenom" required>
                    </div>
                    <div class="mb-3">
                        <label for="Mail" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="Mail" name="Mail" required>
                    </div>
                    <div class="mb-3">
                        <label for="Password" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="Password" name="Password" required>
                    </div>
                    <div class="mb-3">
                        <label for="UserType" class="form-label">User Type:</label>
                        <select class="form-control" id="UserType" name="UserType" required>
                            <option value="Client">Client</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                    </div>
                    <button type="submit" name="connection" class="btn btn-primary w-100 mb-2">Login</button>
                    <button type="submit" name="inscription" class="btn btn-secondary w-100">Sign up</button>
                </form>
            </div>

            <div id="error-message" class="text-center mt-3" style="color: red;"></div>
        </div>
    </main>

    <footer class="footer py-4">
        <div class="container text-center">
            <p></p>
        </div>
    </footer>
</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
</body>
</html>