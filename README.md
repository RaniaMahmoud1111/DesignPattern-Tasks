# JavaScript Design Patterns Tasks

This repository contains simple tasks to practice **Design Patterns in JavaScript (ES6)**.
Each task is in a separate folder and uses **import / export** between files.

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

## Goal

Practice how different **design patterns control object creation** in JavaScript.
