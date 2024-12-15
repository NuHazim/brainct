<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style_home.css" rel="stylesheet">
</head>
<body>

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

<div class="hero">
    <div class="hero-content">
        <h1>Your CT scan results brought home to you</h1>
        <p>A quick automated analysis that flags potential abnormalities</p>
        <a href="login.php" class="btn">Get Started</a>
    </div>
</div>

<div class="section how-it-works">
    <h2>How does it work?</h2>
    <div class="how-it-works-content">
        <div class="text-box">
            <p>Welcome to our brain CT communication platform, where patients and doctors connect seamlessly. Your doctor can share CT scan results with detailed annotations, helping you understand your diagnosis clearly. You can easily schedule follow-ups, view appointments, and use our secure chat to ask questions or address concerns. Stay informed, engaged, and connected throughout your healthcare journey.</p>
        </div>
        <div class="images">
            <img src="img/home_scanner.png" alt="CT Scanner">
            <img src="img/home_scan.png" alt="Brain CT Result">
        </div>
    </div>
</div>

<div class="section benefits-section">
    <h2>Benefits</h2>
    <div class="benefits-container">
        <div class="benefits-list">
            <ul>
                <li>✓ Efficient Sharing of CT Imaging and Reports</li>
                <li>✓ Reliable Results</li>
                <li>✓ Easy Communication</li>
                <li>✓ Real-Time Updates and Notifications</li>
            </ul>
        </div>
        <div class="benefits-image">
            <img src="img/benefits.png" alt="Doctor Consultation">
        </div>
    </div>
</div>

<footer>
    <div>
        <p>Contact Us:</p>
        <p>&#128222; +60 12345678 | &#128231; ctbrain@um.my</p>
        <p>
            Follow Us:
            <a href="#">&#xf09a;</a>
            <a href="#">&#xf099;</a>
            <a href="#">&#xf16d;</a>
        </p>
        <p></p>
    </div>
</footer>
</body>
</html>
