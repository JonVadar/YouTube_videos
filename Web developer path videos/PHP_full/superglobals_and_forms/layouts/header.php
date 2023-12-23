<?php include './config/db_config.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>

<body class="bg-slate-100">
    <header class="bg-white py-4 px-6 shadow-lg mb-6">
        <nav class="flex justify-between items-center">
            <a href="index.php" class="hover:underline">Home</a>
            <a href="post_create.php" class="hover:underline">New Post</a>
            <a href="file_upload.php" class="hover:underline">File upload</a>
        </nav>
    </header>
    <main class="bg-white m-4 px-4 py-8 rounded-md shadow-lg">