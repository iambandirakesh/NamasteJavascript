# Object-Oriented Programming (OOP) in Java

## 1. **Classes and Objects**

### Class: Blueprint for creating objects.

A class defines the properties (variables) and behaviors (methods) that an object can have.

### Object: Instance of a class.

An object is created from a class and represents a real-world entity.

```java
class Car {
    String brand;
    int speed;

    void display() {
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Object creation
        myCar.brand = "Tesla";
        myCar.speed = 200;
        myCar.display();
    }
}
```

## 2. **Encapsulation** (Data Hiding)

Encapsulation is the process of restricting direct access to some of an object's components and using getter and setter methods for data access.

```java
class Person {
    private String name;

    public void setName(String newName) {
        this.name = newName;
    }

    public String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Alice");
        System.out.println(p.getName());
    }
}
```

## 3. **Inheritance** (Code Reusability)

Inheritance allows one class to acquire properties and behaviors of another class using the `extends` keyword.

```java
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat(); // Inherited method
        d.bark();
    }
}
```

## 4. **Polymorphism** (Many Forms)

Polymorphism allows methods to take different forms, making code more flexible.

### Method Overloading: Same method name, different parameters.

```java
class MathOperations {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperations m = new MathOperations();
        System.out.println(m.add(5, 10));
        System.out.println(m.add(5.5, 2.2));
    }
}
```

### Method Overriding: Redefining parent class method in a child class.

```java
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Cat();
        a.makeSound(); // Calls overridden method
    }
}
```

## 5. **Abstraction** (Hiding Implementation)

Abstraction hides the implementation details and only exposes necessary functionalities.

### Abstract Class: Cannot be instantiated, can have abstract and non-abstract methods.

```java
abstract class Vehicle {
    abstract void start();
    void fuel() {
        System.out.println("Fueling the vehicle");
    }
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car is starting");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();
        myCar.fuel();
    }
}
```

### Interface: 100% abstraction, contains only abstract methods.

```java
interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
    }
}
```

## 6. **Constructors** (Special Methods for Object Initialization)

Constructors initialize objects automatically when they are created.

```java
class Student {
    String name;
    int age;

    Student(String name, int age) { // Constructor
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("John", 20);
        s.display();
    }
}
```

## 7. **Static Keyword** (Belongs to Class, Not Instance)

A static variable/method belongs to the class rather than a specific instance.

```java
class Counter {
    static int count = 0;

    Counter() {
        count++;
        System.out.println("Counter: " + count);
    }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
    }
}
```

## 8. **Final Keyword** (Prevents Modification)

Used with variables (constant values), methods (prevent overriding), and classes (prevent inheritance).

```java
class Constants {
    final int SPEED_LIMIT = 120;
    void show() {
        System.out.println("Speed Limit: " + SPEED_LIMIT);
    }
}

public class Main {
    public static void main(String[] args) {
        Constants c = new Constants();
        c.show();
    }
}
```

## 9. **Exception Handling**

Handles runtime errors using try-catch.

```java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}
```

---

This cheat sheet covers the core concepts of OOP in Java with explanations and examples. 🚀
