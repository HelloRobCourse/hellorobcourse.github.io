---
layout: default
title: Module 0 - HelloRob
parent: Modules
---

# Introduction to C++
{: .no_toc .has-sub }

Module 0
{: .sub-head }

### Contents
{: .no_toc }

* TOC
{:toc}

---

## Lectures
{: .line}

All Checkpoints in this section are on GitHub Classroom. A GitHub Classroom tutorial is available [here](/tutorials/github-classroom).

If your instructor has given you an assignment link for the practice code, use that to access the practice activities.

| Topic | Checkpoints |
| ------| ---------- |
| Hello World! (compiling, executing, printing) [[Lecture Video](https://www.youtube.com/watch?v=nKu9H-CeptI), [Slides](https://drive.google.com/file/d/1O3lS9L1NqYID0yMjzrJC3iJMm9TqDyDU/view?usp=sharing)] | Hello World |
| Operators and Variables       [[Lecture Video](https://youtu.be/Vvys7lZa764), [Slides](https://drive.google.com/file/d/14XykOCt7tqCxdsuvFN-0G37T0LvOR5F7/view?usp=sharing)] | Mathler <br/> *Practice (optional)* [[GitHub link](https://github.com/HelloRobCourse/m0-practice/blob/main/variables_operators.cpp)]                     |
| Functions [[Lecture Video](https://www.youtube.com/watch?v=ZarKDScV_DQ), [Slides](https://drive.google.com/file/d/1SERC4e5agAUcuUXxjRklMkYcmoGNlyRY/view?usp=sharing)] | *Practice (optional)* [[GitHub link](https://github.com/HelloRobCourse/m0-practice/blob/main/functions.cpp)]                                   |
| Branching and Iterators  [[Lecture Video](https://www.youtube.com/watch?v=W9g1TxN35Vs), [Slides](https://drive.google.com/file/d/1zwA0EzbwH-yCbDLOflduf7Ur37MDywqP/view?usp=sharing)] | Calculator Operation <br/>  *Practice (optional)* [[GitHub link](https://github.com/HelloRobCourse/m0-practice/blob/main/branching_loops.cpp)]                         |
| Vectors and Structs  [[Lecture Video](https://www.youtube.com/watch?v=4Hfr6zcVHFo), [Slides](https://drive.google.com/file/d/1e5n7GW69icHEU6NihUd4I7p7vlNpd9zk/view?usp=sharing)] | *Practice (optional)* [[GitHub link](https://github.com/HelloRobCourse/m0-practice/blob/main/vectors.cpp)]                                   |

## Programming in C++
{: .line}

The recommended workflow is to set up your computer to compile C++ code. Here is a guide to set up your machine:

* [Setting up your computer](https://docs.google.com/document/u/1/d/e/2PACX-1vSMEvlR5BLPZ2JEXA17yE8MtMweMx3MNuM5b-Cc087ggRzxk1QFB5c6LNVKUAG-QB-kvMYKirZtqCgY/pub?urp=gmail_link){:target="_blank"}

Follow the appropriate guide for your computer.

## Guides & Tutorials
{: .line}

The following guides and tutorials will be helpful for completing the checkpoints for this module and Project 0.

1. [GitHub Tutorial](/tutorials/git): We will use GitHub to manage all the code you will be submitting for this course.
2. [GitHub Classroom Tutorial](/tutorials/github-classroom): We use GitHub Classroom to manage code templates and autograder tests.

## Checkpoints
{: .line}

[[Module 0 Checkpoint Templates](https://github.com/HelloRobCourse/m0-checkpoints){:target="_blank"}]

**Note:** If you are registered in an offering of HelloRob, *do not use this template directly!* Your course staff will give you a GitHub Classroom assignment link to accept the assignment. Otherwise, you will not get credit for the checkpoints.

### Prerequisites

Before your begin, follow the instructions in the [computer setup guide](https://docs.google.com/document/u/1/d/e/2PACX-1vSMEvlR5BLPZ2JEXA17yE8MtMweMx3MNuM5b-Cc087ggRzxk1QFB5c6LNVKUAG-QB-kvMYKirZtqCgY/pub?urp=gmail_link){:target="_blank"}.

For all these checkpoints, you will need to clone your repository for the Module 0 Checkpoints that was created when you accepted your class assignment. On your computer, open VSCode in a folder that you created to store all your HelloRob code. Then do:
```bash
git clone <ADDRESS>
```
Substitute **&lt;ADDRESS&gt;** with the address for your repo, found on GitHub. The instructions for getting the address are at the end of the [GitHub Classroom tutorial on accepting assignments](/tutorials/github-classroom#accepting-an-assigment).

### Hello, World!

Our first C++ program! Watch the first lecture to learn how to do this. Your code must compile and output the phrase "Hello, World!"

<ul class="hint">
    <li class="icon solid fa-cogs"><strong>Compiling your code:</strong> To compile the Hello, World! code, first make sure you are inside the M0 Checkpoint repo you cloned. Then do:
    <pre><code class="language-bash">g++ hello_world.cpp -o hello_world</code></pre>
    To run it, do:
    <pre><code class="language-bash">./hello_world</code></pre></li>
</ul>

<ul class="todo">
    <li class="icon solid fa-laptop-code">
    Write code in the file <code>hello_world.cpp</code> so that when you run it, it prints out "Hello, World!"
    </li>
</ul>

### Mathler

Remember Wordle? [Mathler](https://www.mathler.com/){:target="_blank"} is one of its many cousins where the goal is to come up with an equation with a fixed number of charaters that is equal to a given number. Try it out!

In this checkpoint, we will practice using Variables and Operators by solving a Mathler! Your Mathler equation must be **8 characters** including integers and operators, and equal to **46**. Save the result of the equation to a variable. Print out the equation (no spaces!) an equal sign, and then the variable with the result.

For example, if the desired number was 13, a valid solution would print out:
```
1+4/2+10=13
```
Note that the string `"1+4/2+10"` is exactly 8 characters. `"12+1"` would not be a correct answer!

<ul class="todo">
    <li class="icon solid fa-laptop-code">
    Write code in the file <code>mathler.cpp</code> which prints an equation as a string with 8 charaters then the result of that equation as an integer. The result must be 46.
    </li>
</ul>

No cheating! We will check that your equation actually gives the right result. Just printing out the number 46 will not pass the tests!

### Calculator Operation

In this checkpoint, we will practice using *branching* to write a claculator that performs one single operation, and then exits.

The program should accept a number, then an operator (one of `+`, `-`, `*`, `/`), then another number. Then, it should print out the equation and the result. For example, if the user enters `100`, then `+`, then `2`, the program should print:
```
100 + 2 = 102
```

<ul class="todo">
    <li class="icon solid fa-laptop-code">
    Write code in the file <code>calc_op.cpp</code> which accepts two numbers and an operator (one of `+`, `-`, `*`, `/`) from the user, then prints out the equation and the result.
    </li>
</ul>
