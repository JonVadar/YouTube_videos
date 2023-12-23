<?php include './layouts/header.php';


if (isset($_POST['submit'])) {
    $validExts = ['png', 'jpg', 'webp'];

    $fileName = $_FILES['upload']['name'];
    $fileSize = $_FILES['upload']['size'];
    $fileTempName = $_FILES['upload']['tmp_name'];
    $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);


    // validate the file
    if ($fileSize < 5000000 && in_array($fileExt, $validExts)) {
        move_uploaded_file($fileTempName, "./uploads/$fileName");
    } else {
        echo "Error";
    }
}

?>


<section>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" enctype="multipart/form-data">
        <input type="file" name="upload">
        <input type="submit" value="Upload" name="submit" class="block w-full p-2 rounded-md mt-4 bg-blue-500 text-white cursor-pointer">
    </form>
</section>

<?php include './layouts/footer.php'; ?>