# JavaScript Design Patterns Tasks

This repository contains simple tasks to practice **Design Patterns in JavaScript (ES6)**.
Each task is in a separate folder and uses **import / export** between files.

---

# Day 1 – Creational Design Patterns

## Patterns Used

* Factory
* Abstract Factory
* Singleton
* Prototype
* Builder

---

## Task 1 – Factory Pattern

Create different types of students using a **factory**.
The main file asks the factory to create the student instead of using `new` directly.

Example idea:

* School Student
* University Student

---

## Task 1 – Abstract Factory

Solve the same problem using **Abstract Factory**.
Each factory creates a specific type of student.

Example:

* SchoolFactory → creates school students
* UniversityFactory → creates university students

---

## Task 2 – Singleton

Create a **Singleton class** that allows only **one instance** of the class.
Add a counter to track how many instances are created.

---

## Task 3 – Prototype

Create a **Document class** with properties like:

* header
* footer
* pages
* text

Add a `clone()` method to create a copy of the document.

---

## Task 4 – Builder

Create a **PizzaBuilder** that builds a pizza step by step.

Example steps:

* choose size
* add cheese
* add toppings
* build the final pizza

---

# Day 2 – Structural & Behavioral Design Patterns

## Patterns Used

Structural Patterns:

* Decorator
* Proxy
* Bridge
* Composite
* Facade

Behavioral Patterns:

* State

---

## Task 1 – Decorator

Create a **Teacher decorator** that adds dynamic properties to a teacher object.

Added properties:

* salary
* nationality
* street

---

## Task 2 – Proxy

Create a **Proxy** that retrieves a list of countries.
If the countries are already fetched, return them from **cache** instead of calling the service again.

---

## Task 3 – Bridge

Implement a **Bridge pattern** where **TV** and **Speaker** share the same interface:

* increaseVolume
* decreaseVolume

The bridge controller supports:

* increase
* decrease

But **Speaker** also supports:

* mute

---

## Task 4 – Composite

Create a **box of books** using the Composite pattern.

Each book contains:

* title
* number of pages

Boxes can contain:

* books
* other boxes

The program should display the **hierarchy** of the box structure.

---

## Task 5 – Facade

Simulate a small **online store system** using the Facade pattern.

The facade should simplify complex operations involving:

* order manager
* payment manager
* shipping manager

The client interacts only with the **facade** instead of calling each manager separately.

---

## Task 6 – State

Create a **ToDo task system** using the State pattern.

States:

* `STATE_IN_PROGRESS`
* `STATE_READY_FOR_REVIEW`
* `STATE_DONE`

Each state should define its own behavior.

---

## Goal

Practice how different **design patterns structure objects and behavior in JavaScript applications**.
