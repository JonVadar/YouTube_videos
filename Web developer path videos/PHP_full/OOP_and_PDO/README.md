# Object Oriented Programming in PHP

OOP allows us to have cleaner, more organized, more secure, and reusable code. The 2 main keywords of OOP are: `class` and `object`. Class is a blueprint for objects, and an object is an instance of a class.

## [watch the video on YouTube](https://youtu.be/VawVMUvXVjk?si=_6tT8k_MboTO_cdr)

## Define a class

A class is defined using the `class` keyword, followed by the name of the class and a pair of curly braces `{}`. By convention, class names start with a capital letter. **In a class, variables are called properties and functions are called methods.**

```php
class Person {
    // code
}
```

## Define an object

An object is defined using the `new` keyword, followed by the name of the class and a pair of parentheses `()`.

```php
$employee = new Person(); // An instance of the class Person
```

## Access modifiers

Properties and methods can have access modifiers which control where they can be accessed. There are three access modifiers:

- `public`: can be accessed from anywhere.
- `private`: can **ONLY** be accessed from within the class.
- `protected`: can be accessed from within the class and by inheriting classes.

```php
class Person {
  public $name; // Accessible from anywhere
  private $gender; // Accessible only in this class
  protected $age; // Accessible in this class and inheriting classes
}
```

## Constructors

A *constructor* can be used to initialize an object's properties upon creation. To create a constructor function use the `__construct` keyword. (NOTE the double underscore before the name). The constructor function will be called automatically when the object is created.

```php
class Person {
    function __construct() {
        // code
    }
}
```

## `$this` keyword

The `$this` keyword refers to the current object, and is only available inside methods. The `->` is used to call the properties and methods of an object.

```php
class Person {
    public $name;
    function __construct($name) {
        $this->name = $name; // set the $name variable to the passed $name upon creation of an instance of this class
    }
}

$employee = new Person('Mike');
echo $employee->name; // Mike
```

## Example

```php
// Defining a class
class Person {
    public $name; 
    public $age;
    private $status = "Senior Dev";

    function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    function get_status() {
        return $this->status;
    }
}

// Creating an instance of the class
$employee1 = new Person('Mike', 32);

// Accessing the properties
echo $employee1->name; // Mike
echo $employee1->age; // 32
echo $employee1->get_status(); // Senior Dev
```

## Inheritance

Inheritance is when a class derives from another class. The child class will inherit all the public and protected properties and methods from the parent class. It can also have its own properties and methods. An inherited class is defined by using the `extends` keyword.

```php
// Parent class
class Person {
    public $name;
    protected $age = 33;

    function __construct($name) {
        $this->name = $name;
    }
}

// Child class
class Employee extends Person {
    public $role = 'Designer';

    function get_age() {
        return $this->age; // child class has access to parent's protected properties
    }
}

// Creating an instance of the class Employee
$employee1 = new Employee('Mike');
echo $employee1->name; // Mike
echo $employee1->get_age(); // 33
echo $employee1->role; // Designer
```

## Class constants

A class constant is declared inside a class with the `const` keyword and they cannot be changed once declared.

- To access a constant from **inside** the class use the `self` keyword followed by double colon `::` followed by the constant name.
- To access a constant from **outside** the class use the class name followed by double colon `::` followed by the constant name.

```php
class Admin {
    const ADMIN_NAME = "Mike Doe";

    function get_admin_name() {
        return self::ADMIN_NAME;
    }
}

echo Admin::ADMIN_NAME; // Mike Doe
$admin1 = new Admin;
echo $admin1->get_admin_name(); // Mike Doe
```

## Static properties and methods

Static properties and methods can be called directly, without creating an instance of the class first.

- We cannot use `$this` inside a static method.
- To access static properties and methods from **inside** the class use the `self` keyword followed by double colon `::` followed by the property and method name.
- To access static properties and methods from **outside** the class use the class name followed by double colon `::` followed by the property and method name.

```php
class Person {
    public static $name = "Mike";

    public static function get_age($birth_year) {
        $age = date("Y") - $birth_year;
        return self::$name . ' is ' . $age;
    }
}

echo Person::$name; // Mike
echo Person::get_age(1987); // Mike is 36
```

## Abstract classes and methods

An abstract class is a class that cannot be instantiated, and an abstract methods is a method that does not have an implementation.
To define an abstract class or methods use the `abstract` keyword. **If a class `extends` an abstract class, it must implement all the abstract methods**

```php
abstract class Person {
    public $name;
    public function __construct($name) {
        $this->name = $name;
    }
    abstract protected function greet(); 
}

class Manager extends Person {
    public function greet() {
        return "Hello, I'm $this->name.";
    }
}

class Staff extends Person {
    public function greet() {
        return "My name is $this->name.";
    }
}

$manager = new Manager('Sarah');
$staff = new Staff('Mike');

echo $manager->greet(); // Hello, I'm Sarah.
echo $staff->greet(); // My name is Mike.
```

## Interfaces

Interface are similar to abstract classes. But:

- Interfaces **cannot** have properties.
- All interface methods must be **public**.
- All methods in an interface are **abstract**, so the abstract keyword is not necessary.
- Classes can implement an interface while inheriting from another class at the same time.

To declare an interface use the keyword `interface` followed by the name, and to implement it within a class use the keyword `implement`.

```php
interface Person {
  public function sayHi();
}

class Staff implements Person {
  public function sayHi() {
    return "Hi, I am a developer.";
  }
}

$staff1 = new Staff();
echo $staff1->sayHi(); // Hi, I am a developer.
```

## PHP strict_types

PHP Type hints allow you to declare types for function parameters and return values. To enable strict typing, use the `declare(strict_types=1);` directive at the **beginning** of the script.

- To specify the data type for variables add the type before the name.
- To specify the return type of a function add `:` after the `()` followed by the type and then `{}`.

```php
declare(strict_types=1); // this must be the 1st statement in the file

// Accept x and y as integer and return value is integer
function add(int $x, int $y) : int {
    return $x + $y;
}

echo add(1.5, 2.5); // Fatal error: Uncaught TypeError: Argument 1 passed to add() must be of the type integer, float given.
echo add(2,3); // 5
```
