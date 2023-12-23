<?php include './layouts/header.php';

$q = "SELECT * FROM posts ORDER BY created_at DESC";

// Procedural
$posts = mysqli_query($conn, $q);

// OOP
// $posts = $conn->query($q);
// if($conn->num_rows > 0){}

?>

<!-- Show all posts -->
<section>
    <h1 class="font-bold text-2xl mb-6">Latest Posts</h1>

    <?php if (mysqli_num_rows($posts)) : ?>
        <?php foreach ($posts as $post) : ?>
            <div class="mb-4">
                <h2 class="font-bold text-xl">
                    <?php echo htmlspecialchars($post['title']) ?>
                </h2>
                <small>
                    posted on: <?php echo htmlspecialchars($post['created_at']) ?>
                </small>
                <p>
                    <?php echo htmlspecialchars($post['body']) ?>
                </p>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>

</section>

<?php include './layouts/footer.php'; ?>