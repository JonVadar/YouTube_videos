<?php
require './config.php';

$title = $body = '';

// Check the dorm data is NOT empty
if (isset($_POST['submit'])) {
    if (!empty($_POST['title'])) {
        $title = htmlspecialchars($_POST['title']);
    }

    if (!empty($_POST['body'])) {
        $body = htmlspecialchars($_POST['body']);
    }
}

if (!empty($title) && !empty($body)) {
    try {
        /*************** Insert to DB ***************/
        // MYSQL query positional params
        // $add_q = "INSERT INTO posts (title, body) VALUES (?, ?)";

        // Prepare the PDO statement
        // $stmt = $conn->prepare($add_q);

        // Execute and pass the values
        // $stmt->execute([$title, $body]);


        // MYSQL query named params
        $add_q = "INSERT INTO posts (title, body) VALUES (:title, :body)";

        // Prepare the PDO statement
        $stmt = $conn->prepare($add_q);

        // Execute and pass the values
        $stmt->execute([
            'title' => $title,
            'body' => $body
        ]);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
} ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>

<body class="bg-slate-100">
    <header class="bg-white py-4 px-6 shadow-lg mb-6">
        <nav class="flex justify-between items-center">
            <a href="" class="hover:underline">Home</a>
            <a href="" class="hover:underline">New Post</a>
        </nav>
    </header>
    <main class="bg-white m-4 px-4 py-8 rounded-md shadow-lg">
        <!-- Create post form -->
        <section>
            <h1 class="font-bold text-2xl mb-6">Create a new post</h1>
            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);  ?>" method="POST">
                <div class="mb-4">
                    <label for="title">Post Title</label>
                    <input type="text" name="title" class="w-full block mt-1 p-2 rounded-md border-0 outline-0 ring-1 ring-blue-500 focus:ring-2" />
                </div>
                <div class="mb-8">
                    <label for="body">Post Content</label>
                    <textarea name="body" class="w-full block mt-1 p-2 rounded-md border-0 outline-0 ring-1 ring-blue-500 focus:ring-2"></textarea>
                </div>
                <input type="submit" name="submit" value="Add Post" class="w-full block p-2 rounded-md bg-blue-500 active:bg-blue-700 text-white cursor-pointer" />
            </form>
        </section>

        <!-- Show all posts -->
        <section class="mt-8">
            <h1 class="font-bold text-2xl mb-6">Latest Posts</h1>

            <?php if ($posts->rowCount()) : ?>
                <?php foreach ($posts as $post) : ?>

                    <div class="mb-4 pb-4 border-b">
                        <h2 class="font-bold text-xl">
                            <?php echo htmlspecialchars($post->title) ?>
                        </h2>
                        <small>
                            posted on: <?php echo htmlspecialchars($post->created_at) ?>
                        </small>
                        <p>
                            <?php echo htmlspecialchars($post->body) ?>
                        </p>
                    </div>

                <?php endforeach; ?>
            <?php else : ?>
                <h3>There are no posts</h3>
            <?php endif; ?>

        </section>
    </main>
</body>

</html>