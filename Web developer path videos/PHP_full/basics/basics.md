# PHP Basics

## Watch the video on youtube [here](https://youtu.be/S336mLBaVpQ?si=Nv_NvKsUDEOHALTY)

## What is PHP?

PHP is an acronym for "PHP: Hypertext Preprocessor, and is a widely-used, beginners-friendly, server-side programming language. Also a powerful tool for making dynamic and interactive Web pages.

## Comments

```php
// this is a single-line comment
# this is a single-line comment too
/* 
    this is a 
    multi-line
    comment
*/
```

## Syntax

PHP script can be placed anywhere in the document, and starts with `<?php` and ends with `?>`
>All PHP statements end with a semi-colon `;`

```php
<?php
    // some code
    // PHP statements end in ;
    echo “hello“;  // this statement will output the word “hello“
?>
// The closing tag is optional unless there is HTML code after PHP
```

## Output data

- Using `echo`: Can output multiple values
- Using `print`: Takes only one value/argument
- Using `print_r()`: Takes only one value/argument or arrays
- Using `var_dump()`: Returns the data value, type and/or length

```php
    echo 'hi', 30; // hi30
    print 'hi'; // hi
    print_r([1,2,3]) // Array ( [0] => 1 [1] => 2 [2] => 3 )
    var_dump('hi') // string(2) "hi"
```

## Variables

Variables are containers for storing data. PHP variables start with the `$` sign and are followed by the name.

Naming rules:

- A variable name must start with a letter or a underscore
- A variable name cannot start with a number
- A variable name can only contain letters, numbers and underscore
- Variable names are case-sensitive (`$age` and `$AGE` are two different variables)

>NOTE: In PHP, keywords (like: `if`, `else`, `echo`,...), class names, and function names are **not** case-sensitive

```php
<?php
    $name = “Jon“;  // A variable holding the string “Jon”
    $age = 22;  // A variable holding the number 22
    echo $name;  // Outputs the $name variable
    ECHO $name;  // Outputs the $name variable (case in-sensitive)
?>
```

### Variable scope

PHP has three variable scopes:

- local: Declared inside a block
- global: Declared outside a block of code, and can be accessed with `global` keyword from withing blocks
- static: Declared local and will not deleted afterwards

## Data types

```php
    'Hello' // string - series of characters in single or double quotes
    23      // integer - whole number
    23.5    // float - decimal number
    true    // boolean - true or false
    [1,2,3] // array - A variable that can hold multiple values/types
    null // null - means nothing

    // object - created from classes (examples later)
    // resource - A variable that holds a resource (examples later)
```

## String concatenation

```php
    $name = 'Jon';
    echo 'Hello ' . $name; // Hello Jon
    echo "Hello $name"; // Hello Jon
    echo "Hello ${name}"; // Hello Jon
    // Explicitly specify the end of the variable name by enclosing the reference in braces
```

## Few string functions

[Visit PHP docs for all string functions reference](https://www.php.net/manual/en/ref.strings.php)

```php
    $str = 'Hello';
    // Return the length of a string
    strlen($str); // 5

    // Returns the position of the 1st occurrence of a substring
    strpos($str, 'l'); // 2

    // Returns the position of the last occurrence of a substring
    strrpos($str, 'l'); // 3

    // Converts all letters to lowercase
    strtolower($str); // hello

    // Converts all letters to uppercase
    strtoupper($str); // HELLO

    // Converts the 1st letter of each word to uppercase
    $str2 = 'my name is jon';
    ucwords($str2); // My Name Is Jon

    // Checks if the given string starts or ends with the given substring
    $str2 = 'my name is jon';
    str_starts_with($str2, 'my'); // true
    str_ends_with($str2, 'on'); // true
    str_starts_with($str2, 'My'); // false
    str_ends_with($str2, 'john'); // false

    // Converts special characters to HTML entities
    $bad_str = "<script>alert('hacked')</script>";
    htmlspecialchars($bad_str); // <script>alert('hacked')</script> (Not a JS script)
    htmlentities($bad_str); // &lt;script &gt;alert &lpar;'hacked'&rpar;&lt;&sol;script &gt;

    // Format string (String with placeholders)
    $raw_str = 'Hello %s, Welcome back!';
    printf($raw_str, 'Jon'); // Hello Jon, Welcome back!
```

⭐ [Format String reference](https://www.php.net/manual/en/function.sprintf.php)

## Define constants

Define constants using the `define` function or `const` keyword. The 1st argument is the name and the 2nd one is the value. The scope of a constant is global.

```php
    define('MAX_AGE', 50); // Works outside of a class definition
    const MIN_AGE = 10; // Works both inside and outside of a class definition
```

## Operators

### Arithmetic operators

```php
    echo 2 + 3; // 5
    echo '2' + '3'; // 5 (2 and 3 are still integers)
    echo 3 - 2; // 1
    echo 3 * 2; // 6
    echo 6 / 2; // 3
    echo 10 % 3; // 1 (The remainder operator)
    echo 3 ** 2; // 9 (Raise the 1st operand to the power of the 2nd)
```

### Assignment operators

```php
    $num = 4; // num is 4
    $num += 2; // num is now 6
    $num -= 3; // num is now 3
    $num *= 5; // num is now 15
    $num /= 3; // num is now 5
    $num %= 3; // num is now 2 
```

### Comparison operators

| Operator    | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `$a == $b`  | Returns true if `a` is equal to `b`                                     |
| `$a === $b` | Returns true if `a` is equal to `b`, and they are the same type         |
| `$a != $b`  | Returns true if `a` is NOT equal to `b`                                 |
| `$a <> $b`  | Returns true if `a` is NOT equal to `b`                                 |
| `$a !== $b` | Returns true if `a` is NOT equal to `b`, and they are NOT the same type |
| `$a > $b`   | Returns true if `a` is greater than `b`                                 |
| `$a < $b`   | Returns true if `a` is less than `b`                                    |
| `$a >= $b`  | Returns true if `a` is greater than or equal `b`                        |
| `$a <= $b`  | Returns true if `a` is less than or equal `b`                           |

### Increment and decrement operators

```php
    $num = 4; // num is 4
    $num++; // returns num then increments num by one
    ++$num; // increments num by one then returns num
    $num--; // returns num then decrements num by one
    --$num; // decrements num by one then returns num
```

### Logical oOperators

| Operator     | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| `$a and $b`  | Returns true if both `a` and `b` are true                     |
| `$a && $b`   | Returns true if both `a` and `b` are true (higher precedence) |
| `$a or $b`   | Returns true if either `a` or `b` is true                     |
| `$a \|\| $b` | Returns true if either `a` or `b` is true (higher precedence) |
| `$a xor $b`  | Returns true if either `a` or `b` is true, but not both       |
| `!$a`        | Returns true if `a` is not true                               |

## Arrays

Simple arrays where indexes are auto generated starting at 0

```php
    $arr = array('foo', 'bar'); // using the array()
    $arr = ['foo', 'bar']; // using the short array syntax

    print_r($arr) // Array ( [0] => foo [1] => bar )
    echo $arr[0]; // foo 
    echo $arr[1]; // bar 
```

Associative arrays where indexes are declared manually

```php
    $arr = array('foo' => 'bar', 'name' => 'Jon'); 
    print_r($arr); // Array ( [foo] => bar [name] => Jon )
    echo $arr['foo']; // bar 

    $arr2 = [1 => 'foo', 2 => 'bar'];
    print_r($arr2); // Array ( [1] => foo [2] => bar )
    echo $arr2[1]; // foo 
```

Multi-dimension arrays which arrays inside arrays

```php
    $cars = [
        [
            'brand' => 'Honda',
            'make' => 2020,
            'color' => 'black'
        ],
        [
            'brand' => 'Toyota',
            'make' => 2022,
            'color' => 'red'
        ]
    ];

    echo $cars[0]['brand']; // Honda
```

### Few array functions

[Visit PHP docs for all array functions reference](https://www.php.net/manual/en/ref.array.php)

```php
    $nums = [2,4,6,8,10];

    // Get the length of an array | syntax: count(array)
    count($nums); // 5

    // Search | syntax: in_array(search_query, array)
    in_array(2, $nums); // true
    in_array('hi', $nums); // false

    // Add to the end of an array | syntax: array_push(array, value1, value2, ...)
    array_push($nums, 12, 14); // $nums = [2,4,6,8,10,12,14];
    
    // Add to the beginning of an array | syntax: array_unshift(array, value1, value2, ...)
    array_unshift($nums, 0, 1); // $nums = [0,1,2,4,6,8,10,12,14];

    // Remove the last element of an array | syntax: array_pop(array)
    array_pop($nums); // $nums = [0,1,2,4,6,8,10,12];

    // Remove the first element of an array | syntax: array_shift(array)
    array_shift($nums); // $nums = [1,2,4,6,8,10,12];

    // Combines two arrays where the 1st array's elements are the keys in the new array and the 2nd array's elements are the values | array_combine(keys, values)
    $keys = ['first_name', 'last_name', 'membership'];
    $vals = ['Jon', 'Doe', 'Guest'];
    array_combine($keys, $vals); // NOTE: Both arrays must have equal number of elements.
    /*[
        'first_name' => 'Jon',
        'last_name' => 'Doe',
        'membership' => 'Guest'
    ]*/

    // Returns an array | syntax: array_map(callbackfunction, array1)
    $nums = [1,2,3];
    array_map(fn ($el) => $el * 2, $nums); // $nums = [2,4,6];

    // Returns an array base on a condition | syntax: array_filter(array, callbackfunction)
    $nums = [1, 2, 3, 4, 5, 6];
    array_filter($nums, fn ($el) => $el > 4); // $nums = [5,6];
```

## Conditionals

### If, else if, else statement

```php
    if (condition) {
        // This block of code will be executed if the condition is true 
    } else if (condition) {
        // This block of code will be executed if the condition in "if" block is false and the "else if" condition is true 
    } else {
        // This block of code will be executed if all the 
    }
```

### Ternary operator

```php
    $x = 10;
    // Check if x is 10 then execute the code after ? and if it's false execute the code after :
    echo $x === 10 ? 'X is ten' : 'X is not ten'; // X is ten
    echo $x === 12 ? 'X is ten' : 'X is not ten'; // X is not ten
```

### Coalescing operator

```php
    $posts = ['my blog post'];
    // Check if the $posts[0] exists then assign it to $x, otherwise $x is null
    $x = $posts[0] ?? null;
    echo $x; // my blog post
```

### Switch statement

```php
    // Switch statement can be used to check many cases.
    $age = 12;
    switch ($age) {
    case 5:
        echo "You are 5" // if $age is 5 this will run
        break;
    case 10:
        echo "You are 10"; // if $age is 10 this will run
        break;
    // ... can have as many cases as needed
    default:
        echo "You are not 5 or 10"; // Default block will be executed if all the cases fail
    }
```

## Loops

### While loop: runs as long as a condition is true

```php
    $x = 0;
    while ($x < 5) {
        echo "X is $x <br>";
        $x++;
    }
     /* Output
        X is 0
        X is 1
        X is 2
        X is 3
        X is 4
    */
```

### Do...while loop: Runs at least once and if the condition is true, it continues the code execution

```php
    $x = 1;
    do {
        echo "X is $x <br>"; // This block will run first
        $x++;
    } while ($x > 5); // Then the condition is evaluated
     /* Output
        X is 1
    */
```

### For loop: Used when we know in advance how many times the script should run

```php
    /* Syntax
        for (initializing the counter; condition; increment the counter) {
            code to be executed for each iteration;
        }
    */

    for ($x = 1; $x <= 3; $x++) {
        echo "X is $x <br>";
    }

    /* Output
        X is 1
        X is 2
        X is 3
    */
```

### For...each loop: Works only on arrays, and it is used to loop through each key/value pair in an array

```php
    /* Syntax
        foreach ($array as $value) {
            code to be executed;
        }
    */

    $fruits = ["apple", "pear", "orange"];
    foreach ($fruits as $fruit) {
        echo "I like $fruit.<br>";
    }

    /* Output
        I like apple.
        I like pear.
        I like orange.
    */

    $person = ['name' => 'Jon', 'pet' => 'dog'];
    foreach ($person as $key => $value) {
        echo "$key: $value<br>";
    }

    /* Output
        name: Jon
        pet: dog
    */
```

### Break and continue statement

```php
    // The break statement can be used to jump out of a loop.
    for ($x = 1; $x < 5; $x++) {
        if ($x == 4) {
            break; // Jumps out of the loops when x is 4
        }
        echo "X is: $x <br>";
    }

    /* Output
        X is: 1
        X is: 2
        X is: 3
    */
```

```php
    // The continue statement breaks one iteration of the loop if a specified condition occurs, then continues with the next iteration in the loop..
    for ($x = 1; $x <= 5; $x++) {
        if ($x == 4) {
            continue; // Value 4 is skipped/ignored
        }
        echo "X is: $x <br>";
    }

    /* Output
        X is: 1
        X is: 2
        X is: 3
        X is: 5
    */
```

## Functions

A function declaration starts with the keyword `function`, followed by the name, and it must start with a letter or an underscore. *Function names are NOT case-sensitive*.

### Functions scope

Functions have their own scope

```php
    $name = 'Jon'; // Global variable

    function greet() {
        $user = $name; // $name is not defined
        global $name; // To access global variables, use 'global' keyword
        echo 'Hello ' . $name; 
    }

    function sayHi() {
        $msg = 'Hello World!'; // Only accessible inside this function
    }

    echo $msg; // ERROR: $msg is not defined 
```

### Simple function

```php
    // Function declaration
    function greet() {
        echo 'Hello World!';
    }

    // Function execution
    greet(); // Hello World!
```

### Function with parameters

```php
     // Function declaration
    function greetGuest($name) {
        echo "Hello $name";
    }

    // Function execution
    greetGuest('Jon'); // Hello Jon
    greetGuest(); // ERROR : Need to pass an argument
```

### Function with default parameters

```php
    // Function declaration
    function greetUser($name = "User") {
        echo "Hello $name";
    }

    // Function execution
    greetUser(); // Hello User
    greetUser('Jon'); // Hello Jon
```

### Functions returning a value

```php
    // Function declaration
    function addNums($x, $y) {
        return $x + $y;
    }

    // Function execution
    $sum = addNums(6,4); // Function return value saved in $sum
    echo addNums(6,4); // 10
```

### Functions with unknown number of parameters

- Sometimes we don't know how many arguments will be passed into a function.
- We can use three dots `...` before the variable name to accept as many arguments as the user passes.
- The arguments will be stored in an array.
- The `...` operator must the last parameter in parameters list when declaring a function

```php
    // Function declaration
    function addNums(...$x) {
        $sum = 0;
        for($i = 0; $i < count($x); $i++) {
            $sum += $x[$i];
        }
        return $sum;
    }

    // Function execution
    $sum = addNums(2,3,5,10); // $sum = 20 
    echo addNums(6,4); // 10


    // The ... operator must be the last parameter
    function takeArgs($a, $b, ...$z) // Accepting $a and $b and the rest ...
    function takeArgs($a, ...$y, $z) // ERROR
```

### Anonymous functions

```php
    // Declared and assigned to a variable
    $greet = function($name) {
        echo "Hello $name";
    }; // Must end with a ;

    // Function execution
    $greet('Jon');
```

### Arrow Functions

```php
    // Function declaration: Using 'fn' keyword and omitting the 'return' keyword and '{}' since there is only one statement.
    $addNums = fn($x, $y) => $x + $y;

    // Function execution
    $addNums(2,2); // 4
```
