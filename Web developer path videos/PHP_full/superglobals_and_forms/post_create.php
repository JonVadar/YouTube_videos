<?php include './layouts/header.php';

$title = $body = '';
$titleErr = $bodyErr = '';

// Validating the form
if (isset($_POST['submit'])) {
    if (empty($_POST['title'])) {
        $titleErr = 'Title cannot be empty';
    } else {
        // $title = htmlspecialchars($_POST['title']);
        $title = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }

    if (empty($_POST['body'])) {
        $bodyErr = 'Content cannot be empty';
    } else {
        // $body = htmlspecialchars($_POST['body']);
        $body = filter_input(INPUT_POST, 'body', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
}

// Submit to db
if (!empty($title) && !empty($body)) {
    $q = "INSERT INTO posts (title, body) VALUES ('$title', '$body')";

    // Procedural
    if (mysqli_query($conn, $q)) {
        header('Location: index.php');
    } else {
        echo "ERROR: " . mysqli_error($conn);
    }

    // OOP
    // $conn->query($q);
}

?>

<!-- Create post form -->
<section>
    <h1 class="font-bold text-2xl mb-6">Create a new post</h1>

    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
        <div class="mb-4">
            <label for="title">Post Title</label>
            <input type="text" name="title" class="w-full block mt-1 p-2 rounded-md border-0 outline-0 ring-1 ring-blue-500 focus:ring-2">
            <small class="text-red-500"><?php echo $titleErr; ?></small>
        </div>
        <div class="mb-8">
            <label for="body">Post Content</label>
            <textarea name="body" class="w-full block mt-1 p-2 rounded-md border-0 outline-0 ring-1 ring-blue-500 focus:ring-2"></textarea>
            <small class="text-red-500"><?php echo $bodyErr; ?></small>
        </div>
        <input type="submit" name="submit" value="Add Post" class="w-full block p-2 rounded-md bg-blue-500 active:bg-blue-700 text-white cursor-pointer">
    </form>
</section>

<?php include './layouts/footer.php'; ?>