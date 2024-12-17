<?php
session_start();

$database = "brainct";
$db_handle = mysqli_connect('localhost', 'root', '', $database);

if (!isset($_SESSION['pending_registration'])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['doctor_card'])) {
    $file = $_FILES['doctor_card'];
    $file_type = mime_content_type($file['tmp_name']);

    if ($file_type != 'application/pdf') {
        echo "<script>alert('Please upload a valid PDF file.'); window.history.back();</script>";
        exit();
    }

    $upload_dir = 'uploads/';
    $file_name = basename($file['name']);
    $upload_path = $upload_dir . $file_name;

    if (move_uploaded_file($file['tmp_name'], $upload_path)) {

        $pending_data = $_SESSION['pending_registration'];

        $query = "INSERT INTO users (user_type, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($db_handle, $query);
        mysqli_stmt_bind_param($stmt, "sssss", $pending_data['user_type'], $pending_data['first_name'], $pending_data['last_name'], $pending_data['email'], $pending_data['password']);
        mysqli_stmt_execute($stmt);

        unset($_SESSION['pending_registration']);

        echo "<script>alert('Registration successful! You can now login.'); window.location.href='login.php';</script>";
        exit();
    } else {
        echo "<script>alert('Error uploading the file. Please try again.'); window.history.back();</script>";
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Doctor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header text-center bg-primary text-white">
                    <h4>Upload Doctor's Card</h4>
                </div>
                <div class="card-body">
                    <form action="verify_doctor.php" method="POST" enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="doctor_card" class="form-label">Please upload your doctor card (PDF only):</label>
                            <input type="file" name="doctor_card" class="form-control" accept="application/pdf" required>
                        </div>

                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-center">
                    <a href="login.php" class="btn btn-link">Cancel</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
